'use client'
import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Line } from '@react-three/drei'
import * as THREE from 'three'

function DNAHelix() {
  const groupRef = useRef<THREE.Group>(null)
  const t = useRef(0)

  const sphereData = useMemo(() => {
    const points: { position: [number, number, number]; strand: number; index: number }[] = []
    const numPoints = 20
    const height = 4
    const radius = 0.8
    const turns = 2

    for (let i = 0; i < numPoints; i++) {
      const progress = i / (numPoints - 1)
      const angle = progress * Math.PI * 2 * turns
      const y = (progress - 0.5) * height

      // Strand 1
      points.push({
        position: [Math.cos(angle) * radius, y, Math.sin(angle) * radius],
        strand: 0,
        index: i,
      })

      // Strand 2 (offset by PI)
      points.push({
        position: [Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * radius],
        strand: 1,
        index: i,
      })
    }

    return points
  }, [])

  const rungs = useMemo(() => {
    const r: { start: [number, number, number]; end: [number, number, number] }[] = []
    const numRungs = 10
    const height = 4
    const radius = 0.8
    const turns = 2

    for (let i = 0; i < numRungs; i++) {
      const progress = i / (numRungs - 1)
      const angle = progress * Math.PI * 2 * turns
      const y = (progress - 0.5) * height

      r.push({
        start: [Math.cos(angle) * radius, y, Math.sin(angle) * radius],
        end: [Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * radius],
      })
    }

    return r
  }, [])

  useFrame((_, delta) => {
    t.current += delta * 0.5
    if (groupRef.current) {
      groupRef.current.rotation.y = t.current * 0.3
    }
  })

  const colors = ['#ec4899', '#be185d']

  return (
    <group ref={groupRef}>
      {sphereData.map((sphere, i) => (
        <mesh key={i} position={sphere.position}>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshBasicMaterial color={colors[sphere.strand]} transparent opacity={0.9} />
        </mesh>
      ))}

      {/* Connecting rungs */}
      {rungs.map((rung, i) => {
        const start = new THREE.Vector3(...rung.start)
        const end = new THREE.Vector3(...rung.end)
        const points = [start, end]
        return (
          <Line key={`rung-${i}`} points={points} color="#ec4899" transparent opacity={0.3} lineWidth={1} />
        )
      })}

      {/* Strand 1 line */}
      {(() => {
        const strand1Points = sphereData
          .filter(s => s.strand === 0)
          .sort((a, b) => a.index - b.index)
          .map(s => new THREE.Vector3(...s.position))
        return (
          <Line points={strand1Points} color="#ec4899" transparent opacity={0.6} lineWidth={2} />
        )
      })()}

      {/* Strand 2 line */}
      {(() => {
        const strand2Points = sphereData
          .filter(s => s.strand === 1)
          .sort((a, b) => a.index - b.index)
          .map(s => new THREE.Vector3(...s.position))
        return (
          <Line points={strand2Points} color="#be185d" transparent opacity={0.6} lineWidth={2} />
        )
      })()}
    </group>
  )
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} style={{ background: 'transparent' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} color="#ec4899" intensity={2} />
      <pointLight position={[-5, -5, 5]} color="#be185d" intensity={1} />
      <DNAHelix />
      <OrbitControls autoRotate autoRotateSpeed={1} enableZoom={false} enablePan={false} />
    </Canvas>
  )
}
