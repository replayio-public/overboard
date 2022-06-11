import dynamic from 'next/dynamic'
import { Column, Logo, PurchaseForm } from 'components'
import AnimatedGrid from 'components/AnimatedGrid'
import Stars from 'components/Stars'

const Hoverboard = dynamic(() => import('components/Hoverboard'), {
  ssr: false,
})

export default function Product() {
  return (
    <main
      style={{
        display: 'grid',
        placeItems: 'center',
        paddingTop: 'var(--space-3)',
        paddingBottom: 'var(--space-5)',
        gap: 'var(--space-3)'
      }}
    >
      <Column gap={1}>
        <h1 className="screen-reader-only">Overboard</h1>
        <h2 className="screen-reader-only">Bugslayer</h2>
        <Logo />

        <ul className="ProductFeatures">
          <li>Bash 10x the bugs</li>
          <li aria-hidden>·</li>
          <li>Ship critical fixes faster</li>
          <li aria-hidden>·</li>
          <li>Stay in flow state</li>
        </ul>
      </Column>

      <div style={{ width: '25vw' }}>
        <Hoverboard />
      </div>

      <div style={{position: 'fixed', zIndex: -1, left: 0, width: '100%', bottom: 0, isolation: 'isolate'}}>
        <div style={{position: 'fixed', top: 0, zIndex: 4, left: 0, width: '100%'}}>
          <Stars />
        </div>
        <div style={{ position: 'fixed', inset: 0, background: `linear-gradient(180deg, #1E076C 0%, #A312B5 50%, transparent 100%)`, zIndex: 3 }} />
        <AnimatedGrid />
        <div style={{ position: 'fixed', inset: 0, background: `#FB6C8F`, zIndex: 1 }} />
      </div>

      <PurchaseForm />
    </main>
  )
}
