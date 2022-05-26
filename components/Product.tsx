import dynamic from 'next/dynamic'

import { Logo } from './Logo'
import { Colors, Color } from './Colors'

const Hoverboard = dynamic(() => import('./Hoverboard'), { ssr: false })

const colorStops: Record<string, [string, string, string]> = {
  replay: ['#D35DF0', '#83345F', '#F94CE8'],
  rasta: ['#F0E15D', '#83AD48', '#F94C77'],
  ocean: ['#9DB5E4', '#F0C75D', '#F9804C'],
}

function Form() {
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
        <span style={{ fontSize: '2rem', fontWeight: 500 }}>$419.00</span>
        <button>Purchase Now</button>
      </div>
    </form>
  )
}

export function Product() {
  return (
    <>
      <div style={{ padding: '2rem 4rem' }}>
        <Logo height={20} />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 0.25fr',
        }}
      >
        <Hoverboard />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4rem',
            padding: '2rem',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
            }}
          >
            <h1>BugSlayer</h1>
            <p>The fastest way to debug applications</p>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: 0,
                gap: '1rem',
                fontSize: '1.4rem',
                listStyle: 'none',
              }}
            >
              <li>⚡️ Bash 10x the bugs</li>
              <li>⚡️ Ship critical fixes faster</li>
              <li>⚡️ Stay in flow state</li>
            </ul>
          </div>

          <Form />
        </div>
      </div>
    </>
  )
}
