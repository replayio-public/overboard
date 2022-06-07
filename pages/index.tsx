import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useRouter } from 'next/router'

import {
  Column,
  Row,
  PurchaseForm,
  BugIcon,
  RabbitIcon,
  WavesIcon,
} from 'components'

const Hoverboard = dynamic(() => import('components/Hoverboard'), {
  ssr: false,
})

export default function Product() {
  const router = useRouter()
  return (
    <main className="Product">
      <div className="ProductImage">
        {router.query.three ? (
          <Hoverboard />
        ) : (
          <Image src="/hoverboard.png" width={1268} height={1418} />
        )}
      </div>

      <Column gap={4} className="ProductDetails">
        <Column gap={4}>
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
    </main>
  )
}
