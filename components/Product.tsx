import dynamic from 'next/dynamic'
import { Column } from './Column'

import { BugIcon, RabbitIcon, WavesIcon } from './icons'
import { Logo } from './Logo'
import { PurchaseForm } from './PurchaseForm'
import { Row } from './Row'

const Hoverboard = dynamic(() => import('./Hoverboard'), { ssr: false })

export const colorStops: Record<string, [string, string]> = {
  replay: ['#D35DF0', '#83345F'],
  rasta: ['#F0E15D', '#F94C77'],
  ocean: ['#9DB5E4', '#6277a1'],
}

export function Product() {
  return (
    <>
      <div style={{ padding: 'var(--space-3) var(--space-4)' }}>
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

        <Column
          gap={4}
          style={{
            padding: 'var(--space-3)',
            justifyContent: 'center',
          }}
        >
          <Column gap={3}>
            <h1>BugSlayer</h1>
            <Column
              as="ul"
              gap={3}
              style={{
                padding: 0,
                fontSize: 'var(--font-size-secondary)',
                listStyle: 'none',
              }}
            >
              <Row as="li" gap={2} style={{ alignItems: 'center' }}>
                <BugIcon /> Bash 10x the bugs
              </Row>
              <Row as="li" gap={2} style={{ alignItems: 'center' }}>
                <RabbitIcon /> Ship critical fixes faster
              </Row>
              <Row as="li" gap={2} style={{ alignItems: 'center' }}>
                <WavesIcon /> Stay in flow state
              </Row>
            </Column>
          </Column>

          <PurchaseForm />
        </Column>
      </div>
    </>
  )
}
