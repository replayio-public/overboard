import dynamic from 'next/dynamic'

import { Form } from './Form'
import { BugIcon, RabbitIcon, WavesIcon } from './icons'
import { Logo } from './Logo'

const Hoverboard = dynamic(() => import('./Hoverboard'), { ssr: false })

export const colorStops: Record<string, [string, string]> = {
  replay: ['#D35DF0', '#83345F'],
  rasta: ['#F0E15D', '#F94C77'],
  ocean: ['#9DB5E4', '#6277a1'],
}

export function Product() {
  return (
    <>
      <div style={{ padding: '2rem 4rem' }}>
        <Logo height={32} />
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
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: 0,
                gap: '2rem',
                fontSize: '1.8rem',
                listStyle: 'none',
              }}
            >
              <li
                style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
              >
                <BugIcon /> Bash 10x the bugs
              </li>
              <li
                style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
              >
                <RabbitIcon /> Ship critical fixes faster
              </li>
              <li
                style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
              >
                <WavesIcon /> Stay in flow state
              </li>
            </ul>
          </div>

          <Form />
        </div>
      </div>
    </>
  )
}
