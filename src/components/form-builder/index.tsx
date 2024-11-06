export type FormType =
  | 'input'
  | 'select'
  | 'radio'
  | 'checkbox'
  | 'textarea'
  | 'date'
  | 'time'
  | 'datetime'

export interface SchemeOptionModel {
  label: string
  description?: string
}

export interface SchemaModel {
  // id（随机生成的唯一 ID)
  id: string
  // 字段名
  field?: string
  // 字段类型
  type: FormType
  // 备注
  description?: string
  // 是否必填
  required?: boolean
  // 初始值
  prefill?: string | string[]
  // 最大长度 (input / textarea) / 最多选项 (select / checkbox)
  maxLength?: number
  // 最短长度 (input / textarea) / 最少选项 (select / checkbox)
  minLength?: number
  // 选项（仅适用于 select / radio / checkbox）
  options?: (SchemeOptionModel | undefined)[]
}

export { FormDesigner, type FormDesignerProps } from './form-designer.tsx'
export { SchemaForm, type SchemaFormProps } from './schema-form.tsx'
