import { type ReactNode, createContext, forwardRef, useContext } from 'react'
import {
  ArrayField,
  Button,
  ButtonGroup,
  Form,
  Popconfirm,
  Toast,
  Tooltip,
} from '@douyinfe/semi-ui'
import type { BaseFormProps } from '@douyinfe/semi-ui/lib/es/form'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CircleMinusIcon,
  DownloadIcon,
  HelpCircleIcon,
  PlusIcon,
  Trash2Icon,
  UploadIcon,
} from 'lucide-react'
import { nanoid } from 'nanoid'
import { cn } from '@/lib/utils.ts'
import type { FormType, SchemaModel } from './index'
import { parseSchemaModel } from './utils.ts'

export interface FormDesignerProps extends Omit<BaseFormProps, 'onSubmit'> {
  onSave?: (schema: SchemaModel[]) => void
  onFormChange?: (schema: SchemaModel[]) => void
  onFormFocus?: (id?: string) => void
  // 前端存储 localStorage 的 key
  formKey?: string
  back?: string
}

const DesignerFieldContext = createContext<{
  field: string
  type?: FormType
  value?: SchemaModel
} | null>(null)

const useDesignerField = () => {
  const context = useContext(DesignerFieldContext)
  if (!context) {
    throw new Error('useDesignerField must be used within a DesignerFieldProvider')
  }
  return context
}

export const FormDesigner = forwardRef<Form, FormDesignerProps>(
  ({ onSave, onFormChange, onFormFocus, formKey = 'schema-form', back, ...props }, ref) => {
    const [parent] = useAutoAnimate({ duration: 150 })

    return (
      <Form
        ref={ref}
        autoScrollToError
        {...props}
        onSubmit={(values) => onSave?.(values?.form || [])}
        onChange={(state) => onFormChange?.(state.values?.form ? [...state.values.form] : [])}
      >
        {({ formState, formApi }) => (
          <ArrayField field="form">
            {({ arrayFields, addWithInitValue }) => (
              <>
                <div className="py-3">
                  <div className="flex justify-between items-center gap-2 pr-8">
                    <div className="flex gap-2">
                      <ButtonGroup>
                        <Button
                          icon={<DownloadIcon />}
                          onClick={async () => {
                            const { data, ok } = parseSchemaModel(
                              await navigator.clipboard.readText(),
                            )
                            if (ok) {
                              formApi.setValue('form', data)
                            } else {
                              Toast.error('剪贴板内容无效')
                            }
                          }}
                        >
                          导入
                        </Button>
                        <Button
                          icon={<UploadIcon />}
                          onClick={async () => {
                            const data = formApi.getValues()
                            await navigator.clipboard.writeText(JSON.stringify(data.form))
                            Toast.success('已复制到剪贴板')
                          }}
                        >
                          导出
                        </Button>
                      </ButtonGroup>
                      <Popconfirm
                        title="确定要清空表单设计器内容吗？"
                        okType="danger"
                        onConfirm={() => {
                          formApi.reset()
                          localStorage.removeItem(formKey)
                        }}
                      >
                        <Button icon={<Trash2Icon />} type="danger">
                          清空
                        </Button>
                      </Popconfirm>
                    </div>
                    <Button
                      type="primary"
                      theme="solid"
                      icon={<CheckIcon />}
                      onClick={async () => {
                        const data = await formApi.validate()
                        localStorage.setItem(formKey, JSON.stringify(data.form))
                        formApi.submitForm()
                      }}
                    >
                      保存
                    </Button>
                  </div>
                </div>
                <div ref={parent} onBlur={() => onFormFocus?.(undefined)}>
                  {arrayFields.map(({ field, key, remove }, index) => {
                    const row = formState.values?.form?.[index] as SchemaModel | undefined
                    const label = row?.field ?? `字段 ${index + 1}`
                    return (
                      <DesignerFieldContext.Provider
                        key={row?.id || key}
                        value={{ field, value: row, type: row?.type }}
                      >
                        <div
                          id={row?.id}
                          className="py-3 flex items-stretch [&>:first-child]:focus-within:border-focus [&>:first-child]:focus-within:shadow-elevated"
                          onFocus={() => onFormFocus?.(row?.id)}
                        >
                          <section className="px-5 pt-5 pb-2 border rounded-medium bg-bg-1 flex-grow transition">
                            <div className="sticky z-10 top-0 flex gap-2 items-center -mt-2 pt-2 pb-3 bg-gradient-to-b from-bg-1 via-35% via-bg-1 pointer-events-none *:pointer-events-auto">
                              <div className="flex items-center justify-center h-6 min-w-6 text-large/none text-text-3 border rounded-full bg-bg-2">
                                {index + 1}
                              </div>
                              <h5
                                className={cn(
                                  'text-h5 font-bold',
                                  row?.required &&
                                    "after:content-['*'] after:text-danger after:ml-1",
                                )}
                              >
                                {label}
                              </h5>
                            </div>
                            <div className="sm:grid sm:grid-cols-12 sm:gap-x-4">
                              <Form.Select
                                fieldClassName="col-span-4"
                                className="w-full"
                                field={`${field}.type`}
                                label="类型"
                                defaultActiveFirstOption
                                optionList={[
                                  { label: '单行文本', value: 'input' },
                                  { label: '下拉选择', value: 'select' },
                                  { label: '单选', value: 'radio' },
                                  { label: '多选', value: 'checkbox' },
                                  { label: '多行文本', value: 'textarea' },
                                  { label: '日期', value: 'date' },
                                  { label: '时间', value: 'time' },
                                  { label: '日期时间', value: 'datetime' },
                                ]}
                                rules={[{ required: true, message: '字段类型不能为空' }]}
                                placeholder="请选择字段类型"
                              />
                              <Form.Input
                                fieldClassName="col-span-6"
                                className="w-full"
                                field={`${field}.field`}
                                label={{
                                  text: '字段名',
                                  extra: (
                                    <HelpIcon>
                                      表单显示的标签。
                                      <br />
                                      简明描述该项应该填写的内容。
                                      <br />
                                      建议<b>不超过 8 个字</b>，更详细的信息请写到提示中。
                                    </HelpIcon>
                                  ),
                                }}
                                rules={[
                                  { required: true, message: '字段名不能为空' },
                                  { max: 20, message: '字段名长为 20 个字符' },
                                ]}
                                placeholder={`字段 ${index + 1}`}
                              />
                              <Form.Switch
                                fieldClassName="col-span-2"
                                field={`${field}.required`}
                                label="必填项"
                              />
                              <Form.Input
                                fieldClassName="col-span-12"
                                field={`${field}.description`}
                                label={{
                                  text: '提示',
                                  extra: (
                                    <HelpIcon>
                                      表单项目的描述，用于提示用户该表单项目的用途，以及如何填写。
                                    </HelpIcon>
                                  ),
                                }}
                                placeholder="无提示"
                              />
                              <FormPropsInput />
                            </div>
                          </section>
                          <div className="py-2">
                            <div className="sticky top-4 flex flex-col gap-2 [&_button]:rounded-l-none">
                              <Tooltip content="删除" position="right">
                                <Button
                                  className="rounded-l-none"
                                  type="danger"
                                  onClick={() => {
                                    const prevData = formApi.getValues()
                                    remove()
                                    const id = Toast.success({
                                      content: (
                                        <span>
                                          已删除<span>「{label}」</span>
                                          <button
                                            type="button"
                                            className="ml-3 font-semibold text-link hover:text-link-hover active:text-link-active"
                                            onClick={() => {
                                              formApi.setValue('form', prevData.form)
                                              Toast.close(id)
                                            }}
                                          >
                                            撤销
                                          </button>
                                        </span>
                                      ),
                                    })
                                  }}
                                  icon={<CircleMinusIcon />}
                                />
                              </Tooltip>
                              <div className="flex flex-col [&_:not(:last-child)_button]:border-border [&_:not(:last-child)_button]:border-b [&_:not(:last-child)_button]:rounded-b-none [&_:last-child_button]:rounded-t-none">
                                <Tooltip content="上移" position="right">
                                  <Button
                                    icon={<ChevronUpIcon />}
                                    // disabled={index === 0}
                                    onClick={() => {
                                      if (index === 0) return
                                      const values = formState.values?.form ?? ([] as SchemaModel[])
                                      ;[values[index], values[index - 1]] = [
                                        values[index - 1],
                                        values[index],
                                      ]
                                      formApi.setValue('form', values)
                                    }}
                                  />
                                </Tooltip>
                                <Tooltip content="下移" position="right">
                                  <Button
                                    icon={<ChevronDownIcon />}
                                    // disabled={index === arrayFields.length - 1}
                                    onClick={() => {
                                      if (index === arrayFields.length - 1) return
                                      const values = formState.values?.form ?? ([] as SchemaModel[])
                                      ;[values[index], values[index + 1]] = [
                                        values[index + 1],
                                        values[index],
                                      ]
                                      formApi.setValue('form', values)
                                    }}
                                  />
                                </Tooltip>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DesignerFieldContext.Provider>
                    )
                  })}
                </div>
                <div className="pr-8">
                  <Button
                    className="my-3 !rounded-medium"
                    block
                    theme="outline"
                    size="large"
                    onClick={() => addWithInitValue({ id: nanoid(8), type: 'input' })}
                    icon={<PlusIcon />}
                  >
                    添加字段
                  </Button>
                </div>
              </>
            )}
          </ArrayField>
        )}
      </Form>
    )
  },
)

const HelpIcon = ({ children }: { children: ReactNode }) => (
  <Tooltip content={children}>
    <HelpCircleIcon className="size-4 text-text-2" />
  </Tooltip>
)

function FormPropsInput() {
  const { field, type } = useDesignerField()
  if (!type) return null

  switch (type) {
    case 'input':
    case 'textarea':
      return (
        <>
          <CountLimit className="col-span-4" isText />
          <Form.Input
            fieldClassName="col-span-8"
            field={`${field}.prefill`}
            label="默认值"
            placeholder="无默认值"
          />
        </>
      )
    case 'select':
    case 'checkbox':
      return (
        <>
          <CountLimit className="col-span-4" />
          <SelectDefault className="col-span-8" />
          <SelectOption className="col-span-12" />
        </>
      )
    case 'radio':
      return (
        <>
          <SelectDefault className="col-span-12" />
          <SelectOption className="col-span-12" />
        </>
      )
    default:
      return null
  }
}

const CountLimit = ({ isText, className }: { isText?: boolean; className?: string }) => {
  const { field, type } = useDesignerField()
  return (
    <div className={cn('grid grid-cols-2 gap-2', className)}>
      <Form.InputNumber
        className="w-full"
        field={`${field}.minLength`}
        label={isText ? '最少字数' : '选择下限'}
        min={0}
        showClear
        innerButtons
        placeholder={type === 'select' ? '单选' : '无限制'}
      />
      <Form.InputNumber
        className="w-full"
        field={`${field}.maxLength`}
        label={isText ? '最多字数' : '选择上限'}
        min={0}
        showClear
        innerButtons
        placeholder={type === 'select' ? '单选' : '无限制'}
      />
    </div>
  )
}

const SelectDefault = ({ className }: { className?: string }) => {
  const { field, value, type } = useDesignerField()
  return (
    <Form.Select
      fieldClassName={className}
      className="w-full"
      field={`${field}.prefill`}
      key={`${field}.prefill`}
      label="默认选择"
      multiple={
        type !== 'radio' &&
        type === 'select' &&
        ((!!value?.maxLength && value.maxLength > 1) || (!!value?.minLength && value.minLength > 1))
      }
      max={type !== 'radio' && value?.maxLength ? value.maxLength : undefined}
      optionList={
        value?.options
          ?.filter((option) => option)
          .map((option) => ({ label: option?.label, value: option?.label })) ?? []
      }
      placeholder="无默认选择"
      showClear
    />
  )
}

const SelectOption = ({ className }: { className?: string }) => {
  const { field, type } = useDesignerField()
  const [parent] = useAutoAnimate({ duration: 100 })

  return (
    <div className={cn('-mx-5 px-5 pt-2 mt-2 border-t', className)}>
      <ArrayField field={`${field}.options`}>
        {({ add, arrayFields }) => (
          <>
            <div ref={parent}>
              {arrayFields.map(({ field, key, remove }, index) => (
                <div key={key} className="grid grid-cols-[1fr_auto] gap-2">
                  <div className="flex gap-3">
                    <Form.Input
                      fieldClassName={cn('flex-grow', type === 'select' && 'basis-1/2')}
                      field={`${field}.label`}
                      placeholder={`选项 ${index + 1}`}
                      rules={[
                        { required: true, message: '选项不能为空' },
                        {
                          max: type === 'select' ? 80 : 20,
                          message: type === 'select' ? '选项最长 80 个字符' : '选项最长 20 个字符',
                        },
                      ]}
                      noLabel
                    />
                    {type !== 'select' && (
                      <Form.Input
                        fieldClassName="basis-1/2"
                        field={`${field}.description`}
                        placeholder="无提示"
                        noLabel
                      />
                    )}
                  </div>
                  <div className="py-3">
                    <Button
                      type="danger"
                      theme="borderless"
                      icon={<CircleMinusIcon />}
                      onClick={remove}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="py-3 pr-10">
              <Button block icon={<PlusIcon />} onClick={add}>
                添加选项
              </Button>
            </div>
          </>
        )}
      </ArrayField>
    </div>
  )
}
