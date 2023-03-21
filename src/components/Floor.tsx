import { usePlane } from '@react-three/cannon'
import { BufferGeometry, Mesh } from 'three'

function Floor(props: any) {
  const [ref] = usePlane(() => ({type: 'Static', rotation: [-Math.PI / 2, 0, 0], ...props}))

  return (
    <mesh
      ref={ref as React.RefObject<Mesh<BufferGeometry>>}
    >

      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color={'white'} />

    </mesh>
  )
}

export default Floor