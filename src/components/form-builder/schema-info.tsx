import type { ReactNode } from 'react'
import { format } from 'date-fns'
import type { SchemaModel } from '@/components/form-builder/index.tsx'
import { Descriptions, Tag, Typography } from '@douyinfe/semi-ui'

export interface SchemaInfoProps extends Omit<Partial<SchemaModel>, 'data'> {
  model: SchemaModel[]
  data: Record<string, unknown>
}

export function SchemaInfo({ model, data, ...props }: SchemaInfoProps) {
  return <Descriptions data={extractSchemaData(model, data)} {...props} />
}

const extractSchemaData = (model: SchemaModel[], data: Record<string, unknown>) => {
  const result: { key: ReactNode; value: ReactNode }[] = []

  const list2Tags = (value: unknown) => {
    const valList = value as Array<ReactNode>
    return (
      <div className="flex flex-wrap gap-1">
        {valList.map((v) => (
          <Tag key={`${v}`}>{v}</Tag>
        ))}
      </div>
    )
  }

  Object.entries(data).map(([id, value]) => {
    const field = model.find((m) => m.id === id)
    if (!field) {
      return
    }
    const key = (
      <Typography.Text
        key={field.field}
        className="max-w-[112px]"
        type="tertiary"
        ellipsis={{ showTooltip: true }}
      >
        {field.field ?? '字段'}
      </Typography.Text>
    )

    switch (field.type) {
      case 'input':
      case 'textarea':
      case 'radio':
        result.push({ key, value: value as string })
        break
      case 'select':
        if (field.minLength && field.minLength > 1) {
          result.push({ key, value: list2Tags(value) })
        } else {
          result.push({ key, value: value as string })
        }
        break
      case 'checkbox':
        result.push({ key, value: list2Tags(value) })
        break
      case 'date':
        result.push({ key, value: format(new Date(value as string), 'yyyy-MM-dd') })
        break
      case 'time':
        result.push({ key, value: format(new Date(value as string), 'HH:mm') })
        break
      case 'datetime':
        result.push({
          key,
          value: format(new Date(value as string), 'yyyy-MM-dd HH:mm'),
        })
        break
      default:
        break
    }
  })

  return result
}
