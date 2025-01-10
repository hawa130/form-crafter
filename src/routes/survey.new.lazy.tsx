import { createLazyFileRoute } from '@tanstack/react-router'
import { FormCrafterPage } from '@/pages/form-crafter.tsx'

export const Route = createLazyFileRoute('/survey/new')({
  component: RouteComponent,
})

function RouteComponent() {
  return <FormCrafterPage />
}
