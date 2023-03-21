/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 -t ./public/models/conical-creature3.glb
*/

import * as THREE from 'three'
import React, { useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { AnimationClip } from 'three'
import { ShapeType, threeToCannon } from 'three-to-cannon'
import { ConvexPolyhedron } from 'cannon-es'
import { useConvexPolyhedron } from '@react-three/cannon'
import { ThreeElements, useThree } from '@react-three/fiber'
import { useGesture } from 'react-use-gesture'

type GLTFResult = GLTF & {
  nodes: {
    Cone: THREE.SkinnedMesh
    Bone: THREE.Bone
    Hipl: THREE.Bone
    Hipr: THREE.Bone
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

export function ConicalCreature3(props: any) {
  const { nodes, materials, animations } = useGLTF('/models/conical-creature3.glb') as GLTFResult

  const { shape } = threeToCannon(nodes.Cone, {type: ShapeType.HULL})!!

  const vertices = (shape as ConvexPolyhedron).vertices
  const faces = (shape as ConvexPolyhedron).faces

  const [ref, api] = useConvexPolyhedron(() => ({
    mass: 1, 
    args: [vertices.map(vertex => vertex.toArray()), faces],
    position: props.position
  }))

  const { actions } = useAnimations<AnimationClip>(animations, ref)
  
  useEffect(() => {
    actions.Walk1?.play()
  }, [])

  const { size, viewport } = useThree()
  const aspect = size.width / viewport.width

  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) => {
      props.setControls(false)
      api.position.set(x / aspect, -y / aspect, ref.current!!.position.z)
      api.velocity.set(0, 0, 0)
      api.mass.set(0)
    },
    onDragEnd: () => {
      props.setControls(true)
      api.mass.set(1)
    }
  })

  return (
    <group 
      ref={ref} 
      {...bind()} 
      {...props}
      dispose={null}
    >
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Bone} />
          <primitive object={nodes.Hipl} />
          <primitive object={nodes.Hipr} />
          <skinnedMesh 
            name="Cone" 
            geometry={nodes.Cone.geometry} 
            material={materials['Material.001']} 
            skeleton={nodes.Cone.skeleton} 
            castShadow
          />
        </group>
      </group>
    </group>
  )
}

export default ConicalCreature3

useGLTF.preload('/models/conical-creature3.glb')