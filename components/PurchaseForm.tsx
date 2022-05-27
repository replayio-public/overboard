import { useCallback } from 'react'

import { Colors, Color } from './Colors'
import { Column } from './Column'
import { colorStops } from './Product'
import { PurchaseButton } from './PurchaseButton'

export function PurchaseForm() {
  const handleSubmit = useCallback(async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)
    const response = await fetch(form.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(data.entries())),
    })

    if (!response.ok) {
      const errorMessage = await response.text()
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
          <Color
            label="Replay"
            value="replay"
            defaultChecked
            stops={colorStops.replay}
          />
          <Color label="Rasta" value="rasta" stops={colorStops.rasta} />
          <Color label="Ocean" value="ocean" stops={colorStops.ocean} />
        </Colors>
      </Column>

      <PurchaseButton />
    </Column>
  )
}
