import * as THREE from 'three'
import { useRef, useState } from 'react'
import { ThreeElements, ThreeEvent } from '@react-three/fiber'
import { useBox } from '@react-three/cannon'
import { BufferGeometry, Mesh } from 'three'

function Box(props: any) {

  const [ref, api] = useBox(() => ({mass: 1, ...props}))

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    api.position.set(e.point.x, e.point.y, ref.current!!.position.z)
  }

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (e.buttons === 1) {
      handlePointerDown(e)
    }
  }

  return (
    <mesh
      ref={ref as React.RefObject<Mesh<BufferGeometry>>}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
    >

      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'orange'} />

    </mesh>
  )
}

export default Box