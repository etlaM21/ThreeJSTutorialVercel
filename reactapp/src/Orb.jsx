import React from 'react'
import { useFrame } from '@react-three/fiber';
import { MeshStandardMaterial, Color } from 'three';

const Orb = () => {
    const lightIntensity = Math.PI * 5;

    const light = React.useRef();
    const orb = React.useRef();


    useFrame(({ clock }) => {
        const time = clock.getElapsedTime() * 1000
       
        let posY = Math.sin(time/2500) * 0.5;
        let posX = Math.sin(time/2000) * 0.15;
        let posZ = Math.cos(time/3000) * 0.15 + 0.5;
        orb.current.position.y = posY;
        light.current.position.y = posY;
        orb.current.position.x = posX;
        light.current.position.x = posX;
        orb.current.position.z = posZ;
        light.current.position.z = posZ;

        let lightAni = (Math.sin(time/750) + 1) / 2;
        let lightFactor = 2.5;
        light.current.intensity = Math.PI * (lightAni * lightFactor) + 0.25;
        orb.current.material.emissiveIntensity = Math.PI * (lightAni * lightFactor * 0.3) + 0.1;

      })
  return (
    <group>
        <pointLight ref={light} intensity={Math.PI * 2.5} color={0xFFD567} position={[0, 0, 0]} castShadow={true}/> 
        <mesh ref={orb}
        material={
            new MeshStandardMaterial({
            color: new Color(0xFFD567),
            emissive: new Color(0xFFD567),
            emissiveIntensity: 0,
            roughness: 0.5
            })
        }
        >
        <sphereGeometry />
        </mesh>
    </group>
  )
}

export default Orb