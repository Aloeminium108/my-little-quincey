import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import './styles/index.css'
import { Canvas } from '@react-three/fiber'
import Box from './components/Box'

createRoot(document.getElementById('root') as HTMLElement).render(
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
  </Canvas>
)