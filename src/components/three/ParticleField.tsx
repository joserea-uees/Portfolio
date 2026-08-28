import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 800

export default function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const { viewport } = useThree()

  // Generamos posiciones aleatorias una sola vez
  const positions = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [])

  useFrame((state) => {
    if (!pointsRef.current) return

    // Rotación lenta y constante
    pointsRef.current.rotation.y += 0.0006
    pointsRef.current.rotation.x += 0.0002

    // Parallax sutil siguiendo el mouse
    const { x, y } = state.pointer
    pointsRef.current.rotation.y += x * 0.0003
    pointsRef.current.rotation.x += y * 0.0003
  })

  return (
    <points ref={pointsRef} scale={viewport.width < 6 ? 0.7 : 1}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}