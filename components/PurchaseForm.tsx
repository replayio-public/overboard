import { useCallback, useState } from 'react'

import { Colors, Color } from './Colors'
import { Column } from './Column'
import { PurchaseButton } from './PurchaseButton'

export const colorStops: Record<string, [string, string]> = {
  Replay: ['#D35DF0', '#83345F'],
  Rasta: ['#F0E15D', '#F94C77'],
  Ocean: ['#9DB5E4', '#6277a1'],
}

export function PurchaseForm() {
  const [hasError, setHasError] = useState(false)
  const handleSubmit = useCallback(async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)
    const formData = Object.fromEntries(data.entries())
    const body = JSON.stringify(formData)
    const response = await fetch(form.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body,
    })

    if (!response.ok) {
      const errorMessage = await response.text()
      setHasError(true)
      throw new Error(errorMessage)
    }
  }, [])

  return (
    <Column
      as="form"
      action="/api/purchase"
      method="post"
      onSubmit={handleSubmit}
      gap={5}
    >
      <Column gap={3}>
        <h2>Color</h2>

        <Colors>
          {Object.entries(colorStops).map(([name, [start, end]]) => (
            <Color
              key={name}
              label={name}
              value={name.toLowerCase()}
              startColor={start}
              endColor={end}
            />
          ))}
        </Colors>
      </Column>

      <PurchaseButton hasError={hasError} />
    </Column>
  )
}
