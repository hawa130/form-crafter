import { cn } from '@/lib/utils.ts'
import { Button, Form, Tooltip } from '@douyinfe/semi-ui'
import type { BaseFormProps } from '@douyinfe/semi-ui/lib/es/form'
import { LocateIcon } from 'lucide-react'
import { type ReactNode, forwardRef } from 'react'
import type { SchemaModel } from './index'

export interface SchemaFormProps extends BaseFormProps {
  schema?: (SchemaModel | undefined)[]
  onSubmit?: (values: Record<string, unknown>) => void
  preview?: {
    highlightField?: string
    highlightClassName?: string
    onLocate?: (id: string) => void
    empty?: ReactNode
  }
  children?: ReactNode
}

export const SchemaForm = forwardRef<Form, SchemaFormProps>(
  ({ schema = [], onSubmit, preview, children, ...props }, ref) => {
    const form: ReactNode[] = schema.map((item, index) => {
      if (!item) return null

      const label = item.field ?? `字段 ${index + 1}`

      const commonProps = {
        field: item.id,
        label: label,
        extraText: item.description,
        initValue: item.prefill,
      }

      const commonRules = item.required ? [{ required: true, message: `${label}不能为空` }] : []

      const component = (() => {
        switch (item.type) {
          case 'input':
            return (
              <Form.Input
                key={item.id}
                {...commonProps}
                rules={[
                  ...commonRules,
                  {
                    max: item.maxLength || undefined,
                    message: `${label}最多 ${item.maxLength} 个字符`,
                  },
                  {
                    min: item.minLength || undefined,
                    message: `${label}最少 ${item.minLength} 个字符`,
                  },
                ]}
              />
            )
          case 'select':
            return (
              <Form.Select
                key={item.id}
                className="w-full"
                {...commonProps}
                rules={[
                  ...commonRules,
                  {
                    validator: (_, value: unknown[]) =>
                      !item.minLength || value.length > item.minLength,
                    message: `${label}最少选择 ${item.minLength} 项`,
                  },
                ]}
                multiple={item.maxLength ? item.maxLength > 1 : undefined}
                max={item.maxLength || undefined}
                optionList={
                  item?.options
                    ?.filter((option) => option)
                    .map((option) => ({ label: option?.label, value: option?.label })) ?? []
                }
                showClear={!item.required}
              />
            )
          case 'radio':
            return (
              <Form.RadioGroup
                key={item.id}
                {...commonProps}
                rules={commonRules}
                options={
                  item.options
                    ?.filter((option) => option)
                    .map((option) => ({
                      label: option?.label,
                      value: option?.label,
                      extra: option?.description,
                    })) ?? []
                }
              />
            )
          case 'checkbox':
            return (
              <Form.CheckboxGroup
                key={item.id}
                {...commonProps}
                rules={[
                  ...commonRules,
                  {
                    validator: (_, value: unknown[]) =>
                      !item.minLength || value.length > item.minLength,
                    message: `${label}最少选择 ${item.minLength} 项`,
                  },
                  {
                    validator: (_, value: unknown[]) =>
                      !item.maxLength || value.length < item.maxLength,
                    message: `${label}最多选择 ${item.maxLength} 项`,
                  },
                ]}
                options={
                  item.options
                    ?.filter((option) => option)
                    .map((option) => ({
                      label: option?.label,
                      value: option?.label,
                      extra: option?.description,
                    })) ?? []
                }
              />
            )
          case 'textarea':
            return (
              <Form.TextArea
                key={item.id}
                {...commonProps}
                rules={[
                  ...commonRules,
                  {
                    max: item.maxLength || undefined,
                    message: `${label}最多 ${item.maxLength} 个字符`,
                  },
                  {
                    min: item.minLength || undefined,
                    message: `${label}最少 ${item.minLength} 个字符`,
                  },
                ]}
                maxCount={item.maxLength || undefined}
                autosize
              />
            )
          case 'date':
            return (
              <Form.DatePicker
                key={item.id}
                className="w-full"
                {...commonProps}
                rules={commonRules}
              />
            )
          case 'time':
            return (
              <Form.TimePicker
                key={item.id}
                className="w-full"
                {...commonProps}
                rules={commonRules}
                format="HH:mm"
              />
            )
          case 'datetime':
            return (
              <Form.DatePicker
                key={item.id}
                className="w-full"
                {...commonProps}
                rules={commonRules}
                type="dateTime"
              />
            )
          default:
            return null
        }
      })()

      if (!preview) return component

      const { highlightField, highlightClassName, onLocate } = preview
      return (
        <div
          key={item.id}
          data-highlight={highlightField === item.id ? '' : undefined}
          className={cn('group relative', highlightField === item.id && highlightClassName)}
        >
          {component}
          {onLocate && (
            <div className="absolute top-2 right-0 opacity-0 group-hover:opacity-100 group-data-[highlight]:hidden">
              <Tooltip position="topRight" content="在表单设计器中定位">
                <Button
                  type="tertiary"
                  theme="outline"
                  onClick={() => onLocate(item.id)}
                  size="small"
                  icon={<LocateIcon />}
                />
              </Tooltip>
            </div>
          )}
        </div>
      )
    })

    return !preview || form.length > 0 ? (
      <Form autoScrollToError onSubmit={onSubmit} ref={ref} {...props}>
        {form}
        {children}
      </Form>
    ) : (
      <div className="py-3 text-center text-sm text-text-2">
        {preview?.empty ?? '请在表单设计器中添加字段'}
      </div>
    )
  },
)
