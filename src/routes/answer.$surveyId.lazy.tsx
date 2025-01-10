import { createLazyFileRoute } from '@tanstack/react-router'
import { useMutation, useSuspenseQuery } from '@tanstack/react-query'
import { getSurvey, submitAnswer } from '@/lib/crud.ts'
import { SchemaForm } from '@/components/form-builder'
import { Button, Toast } from '@douyinfe/semi-ui'

export const Route = createLazyFileRoute('/answer/$surveyId')({
  component: RouteComponent,
  pendingComponent: () => <div className="text-text-2 text-center py-10">问卷加载中...</div>,
  errorComponent: () => <div className="text-text-2 text-center py-10">问卷加载失败</div>,
})

function RouteComponent() {
  const { surveyId } = Route.useParams()

  const {
    data: { schema, title },
  } = useSuspenseQuery({
    queryKey: ['survey', surveyId],
    queryFn: async () => await getSurvey(surveyId),
  })

  const { mutate, isPending } = useMutation({
    mutationFn: (data: Record<string, unknown>) => submitAnswer(surveyId, data),
    onError: (error) => {
      Toast.error(`提交失败：${error.message}`)
    }
  })

  return (
    <div className="p-4 max-w-screen-md mx-auto">
      <h1 className="text-xl font-bold py-2">{title}</h1>
      <SchemaForm schema={schema} onSubmit={mutate}>
        <div>
          <Button className="max-md:block" loading={isPending} htmlType="submit">提交</Button>
        </div>
      </SchemaForm>
    </div>
  )
}
