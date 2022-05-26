import { Children, cloneElement, isValidElement } from 'react'
import type { ReactNode } from 'react'

export function Colors({
  children,
  onChange,
}: {
  children: ReactNode
  onChange: (value: string) => void
}) {
  return (
    <div className="Colors">
      {Children.map(children, (child) =>
        isValidElement(child)
          ? cloneElement(child, {
              name: 'color', // Bug here with the name prop that submits the wrong value
              onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                // TODO: add bug here
                onChange(event.target.value)
              },
            })
          : child
      )}
    </div>
  )
}

export function Color({
  label,
  value,
  name,
  stops,
  onChange,
}: {
  label: string
  value: string
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
        onChange={onChange}
        style={{
          backgroundImage: `linear-gradient(135deg, ${stops[0]} 0%, ${stops[0]} 33.33%, ${stops[1]} 33.33%, ${stops[1]} 66.66%, ${stops[2]} 66.66%, ${stops[2]} 100%)`,
        }}
      />
    </label>
  )
}
