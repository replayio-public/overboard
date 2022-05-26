import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRouter } from 'next/router'

import Scene from './Scene'

export default function Hoverboard() {
  const router = useRouter()

  return router.query.three ? (
    <Canvas shadows flat linear>
      <Scene />
      <OrbitControls />
    </Canvas>
  ) : (
    <img src="/board.png" />
  )
}
