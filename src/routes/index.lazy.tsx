import { useState } from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { FormDesigner, SchemaForm, type SchemaModel } from '@/components/form-builder'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [schema, setSchema] = useState<SchemaModel[]>([])
  const [current, setCurrent] = useState<string>()

  return (
    <div className="max-w-screen-2xl w-full mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] xl:grid-cols-[minmax(0,1fr)_480px] gap-x-4">
        <div className="py-4">
          <FormDesigner
            onFormChange={setSchema}
            onSave={(data) => console.log(data)}
            onFormFocus={(id) => setCurrent(id)}
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
