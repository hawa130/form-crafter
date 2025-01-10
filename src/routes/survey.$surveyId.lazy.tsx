import { createLazyFileRoute } from '@tanstack/react-router'
import { FormCrafterPage } from '@/pages/form-crafter.tsx'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getSurvey } from '@/lib/crud.ts'

export const Route = createLazyFileRoute('/survey/$surveyId')({
  component: RouteComponent,
  pendingComponent: () => <div className="text-text-2 text-center py-10">问卷加载中...</div>,
  errorComponent: () => <div className="text-text-2 text-center py-10">问卷加载失败</div>,
})

function RouteComponent() {
  const { surveyId } = Route.useParams()

  const { data } = useSuspenseQuery({
    queryKey: ['survey', surveyId],
    queryFn: async () => await getSurvey(surveyId),
  })

  return <FormCrafterPage initialData={data} />
}
