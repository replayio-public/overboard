import { Colors, Color } from './Colors'
import { colorStops } from './Product'

export function Form() {
  return (
    <form
      action="/api/purchase"
      method="post"
      onSubmit={async (event) => {
        event.preventDefault()
        const response = await fetch('api/purchase', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: new FormData(event.currentTarget),
        })
        const data = await response.json()
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        <h2>Color</h2>

        <Colors onChange={(value) => console.log(value)}>
          <Color label="Replay" value="replay" stops={colorStops.replay} />
          <Color label="Rasta" value="rasta" stops={colorStops.rasta} />
          <Color label="Ocean" value="ocean" stops={colorStops.ocean} />
        </Colors>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Price />
        <PurchaseButton />
      </div>
    </form>
  )
}

function Price() {
  return <span style={{ fontSize: '2rem', fontWeight: 500 }}>$419.00</span>
}

function PurchaseButton() {
  return <button>Purchase Now</button>
}
