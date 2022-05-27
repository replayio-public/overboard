import { Children, cloneElement, isValidElement } from 'react'
import type { ReactNode } from 'react'

export function Colors({ children }: { children: ReactNode }) {
  return (
    <div className="Colors">
      {Children.map(children, (child) =>
        isValidElement(child) ? cloneElement(child, { name: 'color' }) : child
      )}
    </div>
  )
}

export function Color({
  label,
  value,
  name,
  defaultChecked,
  stops,
  onChange,
}: {
  label: string
  value: string
  defaultChecked?: boolean
  stops: [string, string, string]
  name?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <label className="Color" aria-label={label}>
      <input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        onChange={onChange}
        style={
          {
            '--stop-1': stops[0],
            '--stop-2': stops[1],
            '--stop-3': stops[2],
          } as any
        }
      />
    </label>
  )
}
