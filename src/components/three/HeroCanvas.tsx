import { Canvas } from '@react-three/fiber'
import ParticleField from './ParticleField'

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ParticleField />
      </Canvas>
    </div>
  )
}