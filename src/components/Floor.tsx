import * as THREE from 'three'
import { useRef } from 'react'
import { ThreeElements} from '@react-three/fiber'

function Floor(props: ThreeElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)

  return (
    <mesh
      {...props}
      ref={ref}
      rotation={[-Math.PI / 2, 0, 0]}
    >

      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color={'black'} />

    </mesh>
  )
}

export default Floor