import type { SchemaModel } from '@/components/form-builder'
import type { CrafterData, CrafterSaveData } from '@/pages/form-crafter.tsx'

const BACKEND_URL = 'https://survey.115.zone'

interface BackendSurvey {
  id: number
  name: string
  deadline: string
  json_config: unknown
  created_at: string
  updated_at: string
}

export interface SurveyDto {
  name: string
  deadline: string
  json_config: unknown
}

interface SurveyReturn {
  id: number
}

export function toDto(data: CrafterSaveData) {
  return {
    name: data.title,
    deadline: data.deadline,
    json_config: data.schema,
  } as SurveyDto
}

export function toCrafterData(data: BackendSurvey): CrafterData {
  return {
    id: String(data.id),
    title: data.name,
    deadline: data.deadline,
    schema: data.json_config as SchemaModel[],
  }
}

export const getSurveys = async () => {
  const res = await fetch(`${BACKEND_URL}/survey`)
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  return ((await res.json()) as BackendSurvey[]).map(toCrafterData)
}

export const createSurvey = async (dto: SurveyDto) => {
  const res = await fetch(`${BACKEND_URL}/survey`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dto),
  })
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  return (await res.json()) as SurveyReturn
}

export const getSurvey = async (id: number | string) => {
  const res = await fetch(`${BACKEND_URL}/survey/${id}`)
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  return toCrafterData(await res.json())
}

export const updateSurvey = async (id: number | string, dto: SurveyDto) => {
  const res = await fetch(`${BACKEND_URL}/survey/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dto),
  })
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  return (await res.json()) as SurveyReturn
}

export async function submitAnswer(surveyId: number | string, data: Record<string, unknown>) {
  const res = await fetch(`${BACKEND_URL}/survey/${surveyId}/answer`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ answer_data: data }),
  })
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  return res
}

export async function getAnswers(surveyId: number | string) {
  const res = await fetch(`${BACKEND_URL}/survey/${surveyId}/answer`)
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  return (await res.json()) as Record<string, unknown>
}
