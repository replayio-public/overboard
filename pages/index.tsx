import dynamic from 'next/dynamic'
import { Column, Logo, PurchaseForm } from 'components'

const Hoverboard = dynamic(() => import('components/Hoverboard'), {
  ssr: false,
})

export default function Product() {
  return (
    <main
      style={{
        display: 'grid',
        placeItems: 'center',
        gap: 'var(--space-4)',
        backgroundColor: `linear-gradient(180deg, #1E076C 0%, #A312B5 55.73%, #FB6C8F 100%)`,
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

      <div style={{ width: '30vw', height: '20vh' }}>
        <Hoverboard width="30vw" height="20vh" />
      </div>

      <PurchaseForm />
    </main>
  )
}
