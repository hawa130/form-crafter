import type { SchemaModel } from './index'
import { z } from 'zod'

export const schemeModelSchema = z.array(
  z.object({
    id: z.string().default(''),
    field: z.string().optional(),
    type: z
      .enum(['input', 'select', 'radio', 'checkbox', 'textarea', 'date', 'time', 'datetime'])
      .default('input'),
    description: z.string().optional(),
    required: z.boolean().optional(),
    prefill: z.string().array().optional(),
    maxLength: z.number().optional(),
    minLength: z.number().optional(),
    options: z
      .array(z.object({ label: z.string(), description: z.string().optional() }))
      .optional(),
  }),
)

export function parseSchemaModel(
  content: string,
): { data: SchemaModel[]; ok: true } | { data: undefined; ok: false } {
  try {
    const data = JSON.parse(content)
    return { data: schemeModelSchema.parse(data), ok: true }
  } catch (e) {
    console.log(e)
    return { data: undefined, ok: false }
  }
}
