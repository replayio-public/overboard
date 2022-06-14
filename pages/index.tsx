import dynamic from 'next/dynamic'
import { Column, Logo, PurchaseForm } from 'components'
import { PlaceHolderWrapper } from 'components/Hoverboard'
import Background from 'components/Background'

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
        paddingBottom: 'var(--space-3)',
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

      <div className="ProductAnimation">
        <PlaceHolderWrapper>
          <Hoverboard />
        </PlaceHolderWrapper>
      </div>

      <Background />

      <PurchaseForm />
    </main>
  )
}
