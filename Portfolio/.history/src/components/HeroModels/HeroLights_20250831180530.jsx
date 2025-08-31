import { SpotLight } from '@react-three/drei'
import React from 'react'

const HeroLights = () => {
  return (
    <>
    {/* Lights */}
    <SpotLight position={[2,5,6]}
    angle={0.15}
    penubra={0.2}
    color="white"
    intensity={100}
    /> 

    <SpotLight position={[4,5,4]}
    angle={0.3}
    penubra={0.5}
    color="4cc9f0"
    intensity={40}
    />    
         
   <SpotLight position={[-3,5,5]}
    angle={0.4}
    penubra={1}
    color="9d4edd"
    intensity={60}
    />        

    <primitive
    object={new THREE.RectAreaLight()}
         
   </>
  )
}

export default HeroLights