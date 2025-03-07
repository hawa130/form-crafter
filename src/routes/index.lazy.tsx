import { FormCrafterPage } from '@/pages/form-crafter.tsx'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <FormCrafterPage />
}
