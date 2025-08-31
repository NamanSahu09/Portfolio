import { SpotLight } from '@react-three/drei'
import React from 'react'

const HeroLights = () => {
  return (
    <>
    {/* Lights */}
    <SpotLight position={[2,5,6]}
    angle={0.15}
    penubra={0.2}
    color=
    intensity={100}
    />     
         
         
         
   </>
  )
}

export default HeroLights