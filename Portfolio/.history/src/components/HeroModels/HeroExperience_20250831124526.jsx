import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
const HeroExperience = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <ambientLight intensity={0.2} color="#1a1a40" />


      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="teal" />
        <OrbitControls/>
        
      
      </mesh>

    </Canvas>

  )
}

export default HeroExperience