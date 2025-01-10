import { EditableText } from '@/components/editable-text.tsx'
import { FormDesigner, SchemaForm, type SchemaModel } from '@/components/form-builder'
import { createSurvey, getSurveys, toDto, updateSurvey } from '@/lib/crud.ts'
import { Button, DatePicker, Popover, Toast } from '@douyinfe/semi-ui'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { PlusIcon, Share2Icon } from 'lucide-react'
import { useCallback, useMemo, useState } from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import { QRCodeSVG } from 'qrcode.react'
import { cn } from '@/lib/utils.ts'

export interface CrafterData extends CrafterSaveData {
  id: string
}

export interface CrafterSaveData {
  title: string
  deadline: string
  schema: SchemaModel[]
}

export function FormCrafter({
  initialData,
  onSave,
  onCreated,
}: {
  initialData?: CrafterData
  onSave?: (data: CrafterSaveData) => Promise<{ id: string | number }>
  onCreated?: (id: string) => void
}) {
  const [title, setTitle] = useState(initialData?.title || '新表单')
  const [deadline, setDeadline] = useState(
    initialData?.deadline || new Date(new Date().setDate(new Date().getDate() + 1)).toISOString(),
  )
  const [schema, setSchema] = useState<SchemaModel[]>(initialData?.schema || [])

  const [current, setCurrent] = useState<string>()

  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: CrafterSaveData) => {
      return onSave?.(data)
    },
    onError: (error) => {
      Toast.error(`保存失败：${error.message}`)
    },
    onSuccess: async (data) => {
      if (!data) return
      if (!initialData) onCreated?.(String(data?.id))
      await queryClient.invalidateQueries({ queryKey: ['survey', String(data.id)] })
      await queryClient.invalidateQueries({ queryKey: ['surveys'] })
    },
  })

  const datePickers = useMemo(
    () => [
      {
        text: '明天',
        start: new Date(new Date().setDate(new Date().getDate() + 1)),
        end: new Date(new Date().setDate(new Date().getDate() + 1)),
      },
      {
        text: '一周后',
        start: new Date(new Date().setDate(new Date().getDate() + 7)),
        end: new Date(new Date().setDate(new Date().getDate() + 7)),
      },
      {
        text: '一个月后',
        start: new Date(new Date().setMonth(new Date().getMonth() + 1)),
        end: new Date(new Date().setMonth(new Date().getMonth() + 1)),
      },
    ],
    [],
  )

  return (
    <div className="max-w-screen-2xl w-full mx-auto px-4">
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_380px] 2xl:grid-cols-[minmax(0,1fr)_440px] gap-x-4">
        <div className="py-4">
          <div className="pr-9 py-2">
            <EditableText value={title} onChange={setTitle} />
          </div>
          <div className="pr-8 py-2 flex items-center gap-2">
            <div className="font-bold text-sm">截止时间</div>
            <DatePicker
              type="dateTime"
              value={deadline}
              onChange={(v) => setDeadline((v as Date).toISOString())}
              presets={datePickers}
            />
          </div>
          <FormDesigner
            onFormChange={setSchema}
            onSave={(data) => mutate({ title, deadline, schema: data })}
            onFormFocus={(id) => setCurrent(id)}
            isSubmitting={isPending}
            actions={
              initialData?.id ? (
                <Popover
                  trigger="click"
                  content={
                    <div className="p-3">
                      <QRCodeSVG value={`${location.origin}/answer/${initialData.id}`} size={96} />
                    </div>
                  }
                >
                  <Button icon={<Share2Icon />}>分享</Button>
                </Popover>
              ) : undefined
            }
          />
        </div>
        <div className="max-lg:border-t pt-5 lg:h-full lg:relative lg:pt-20">
          <h3 className="text-large font-bold mb-2 px-2">预览</h3>
          <div className="lg:sticky lg:top-4 border bg-bg-1 py-2 px-5 rounded-medium lg:max-h-[calc(100vh-2rem)] overflow-auto">
            <SchemaForm
              preview={{
                highlightField: current,
                highlightClassName: 'rounded ring-1 ring-primary shadow-knob px-3 -mx-3',
                onLocate: (id) => {
                  const el = document.getElementById(id)
                  if (!el) return
                  el.scrollIntoView({ behavior: 'smooth' })
                  ;(el.querySelector('input.semi-input') as HTMLInputElement | null)?.focus({
                    preventScroll: true,
                  })
                },
              }}
              schema={schema}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export function FormCrafterPage({ initialData }: { initialData?: CrafterData }) {
  const navigate = useNavigate()

  const saveForm = useCallback(
    async (data: CrafterSaveData) => {
      if (initialData) {
        return await updateSurvey(initialData.id, toDto(data))
      }
      return await createSurvey(toDto(data))
    },
    [initialData],
  )

  const handleCreated = useCallback(
    (id: string) => navigate({ to: '/survey/$surveyId', params: { surveyId: id } }),
    [navigate],
  )

  return (
    <div className="grid grid-cols-[200px_minmax(0,1fr)] 2xl:grid-cols-[240px_minmax(0,1fr)]">
      <div className="sticky top-0 h-screen border-r overflow-auto">
        <div className="p-4">
          <Button icon={<PlusIcon />} onClick={() => navigate({ to: '/survey/new' })} block>
            创建表单
          </Button>
        </div>
        <FormList currentId={initialData?.id} />
      </div>
      <FormCrafter initialData={initialData} onSave={saveForm} onCreated={handleCreated} />
    </div>
  )
}

function FormList({ currentId }: { currentId?: string }) {
  const {
    data: surveys,
    isPending,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['surveys'],
    queryFn: async () => await getSurveys(),
  })

  if (isPending) {
    return <div className="text-text-2 text-sm text-center px-2">加载中...</div>
  }

  if (isError) {
    return (
      <div className="flex flex-col gap-2 items-center">
        <div className="text-danger">加载失败</div>
        <Button onClick={() => refetch()}>重试</Button>
      </div>
    )
  }

  if (surveys?.length === 0) {
    return <div className="text-text-2 text-sm text-center px-2">暂无表单</div>
  }

  return (
    <div className="p-4 flex flex-col gap-1 items-stretch">
      {surveys.map((survey) => (
        <Link
          to="/survey/$surveyId"
          params={{ surveyId: survey.id }}
          key={survey.id}
          className={cn(
            'px-3 py-2 rounded hover:bg-fill-1 active:bg-fill-2',
            survey.id === currentId && 'text-primary bg-primary-light-default',
          )}
        >
          {survey.title}
        </Link>
      ))}
    </div>
  )
}
