/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\public\cave.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { Color, MeshStandardMaterial, NoColorSpace } from 'three'
import { TextureLoader } from 'three/src/loaders/TextureLoader'


export default function Model(props) {
  const normalTexture = useLoader(TextureLoader, 'CavenNormal-min.png')
  normalTexture.flipY = false
  normalTexture.colorSpace = NoColorSpace
  const { nodes, materials } = useGLTF('/cave.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
      geometry={nodes.CAVE.geometry}
      material={
        new MeshStandardMaterial({
          color: new Color(0x000000),
          roughness: 0.4,
          normalMap: normalTexture
        })
      }
      />
    </group>
  )
}

useGLTF.preload('/cave.glb')
