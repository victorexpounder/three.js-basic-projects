import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Canvas, useFrame } from '@react-three/fiber'
import {OrbitControls, Sparkles} from '@react-three/drei'


const RotatingCube = ({position}) => {
  const meshRef = useRef();
  
  useFrame(() => {
    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y += 0.01
  })

  return (
    <mesh  ref={meshRef} position={position}>
      <cylinderGeometry />
      <meshLambertMaterial color="#468585" emissive="#468585" />
      <Sparkles count={100} color='orange' size={6} speed={0.002} noise={0.2}/>
    </mesh>
  )
}

function App() {

  return (
    <Canvas style={{ height: '100vh', width: '100vw', justifyContent: 'center', alignItems: 'center' }}>
     
      <OrbitControls enablePan enableRotate enableZoom />
      <directionalLight position={[1,1,1]} intensity={10} color={0x9CDBA6} />
      <color attach="background" args={['#F0F0F0']} />
      <RotatingCube />
      
    </Canvas>
  )
}

export default App


