import * as THREE from 'three'
import { useRef, useState } from 'react'
import { ThreeElements, ThreeEvent } from '@react-three/fiber'

function Box(props: ThreeElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)

  //useFrame((state, delta) => (ref.current.rotation.x += delta))
  
  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    ref.current.position.x = e.point.x
    ref.current.position.y = e.point.y
  }

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    if (e.buttons === 1) {
      handlePointerDown(e)
    }
  }

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerOver={(e) => hover(true)}
      onPointerOut={(e) => hover(false)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
    >

      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />

    </mesh>
  )
}

export default Box