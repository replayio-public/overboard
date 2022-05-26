import dynamic from 'next/dynamic'

import { Form } from './Form'
import { Logo } from './Logo'

const Hoverboard = dynamic(() => import('./Hoverboard'), { ssr: false })

export const colorStops: Record<string, [string, string, string]> = {
  replay: ['#D35DF0', '#83345F', '#F94CE8'],
  rasta: ['#F0E15D', '#83AD48', '#F94C77'],
  ocean: ['#9DB5E4', '#F0C75D', '#F9804C'],
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
        <div>
          <Hoverboard />
        </div>

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
