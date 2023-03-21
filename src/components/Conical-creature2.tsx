/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 -t ./public/models/conical-creature2.glb
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ShapeType, threeToCannon } from 'three-to-cannon'
import { ConvexPolyhedron } from 'cannon-es'
import { Triplet, useConvexPolyhedron } from '@react-three/cannon'
import { BufferGeometry, Mesh } from 'three'

type GLTFResult = GLTF & {
  nodes: {
    Cone: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

export function ConicalCreature2(props: any) {
  const { nodes, materials } = useGLTF('/models/conical-creature2.glb') as GLTFResult

  const {shape, offset} = threeToCannon(nodes.Cone, {type: ShapeType.HULL})!!

  const vertices = (shape as ConvexPolyhedron).vertices
  const faces = (shape as ConvexPolyhedron).faces

  const [ref, api] = useConvexPolyhedron(() => ({
    mass: 1, 
    rotation: [-1.68, 0, 0], 
    args: [vertices.map(vertex => vertex.toArray()), faces],
    ...props
  }))

  return (
    <group {...props} dispose={null}>
      <mesh 
        ref={ref as React.RefObject<Mesh<BufferGeometry>>}
        geometry={nodes.Cone.geometry} 
        material={materials['Material.001']} 
        rotation={[-1.68, 0, 0]} 
      />
    </group>
  )
}

export default ConicalCreature2

useGLTF.preload('/models/conical-creature2.glb')
