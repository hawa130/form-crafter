import { Input } from '@douyinfe/semi-ui'
import { PencilIcon } from 'lucide-react'
import { useState } from 'react'

export function EditableText({
  value,
  onChange,
}: { value: string; onChange: (value: string) => void }) {
  const [editing, setEditing] = useState(false)

  return (
    <div className="-mx-1">
      {editing ? (
        <Input
          className="font-bold"
          size="large"
          value={value}
          onChange={(v) => onChange(v)}
          onBlur={() => setEditing(false)}
          autoFocus
        />
      ) : (
        <button
          type="button"
          className="flex items-center justify-start gap-2 rounded w-full font-bold cursor-pointer text-left text-xl px-1 py-1.5 hover:bg-fill-0 active:bg-fill-2"
          onClick={() => setEditing(true)}
        >
          {value}
          <PencilIcon className="opacity-50 size-3.5" />
        </button>
      )}
    </div>
  )
}
