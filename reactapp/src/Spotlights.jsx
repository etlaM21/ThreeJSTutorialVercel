import React from 'react'
import { useFrame } from '@react-three/fiber';

const Spotlights = () => {
    const lightIntensity = Math.PI * 5;

    const light1 = React.useRef()
    const light2 = React.useRef()
    const light3 = React.useRef()


    useFrame(({ clock }) => {
        const time = clock.getElapsedTime() * 1000
       
        let light1Ani = (Math.sin(time/251 + 0.2) + 1) / 2;
        let light2Ani = (Math.sin(time/153 + 0.62) + 1) / 2;
        let light3Ani = (Math.sin(time/441 + 0.4) + 1) / 2;
        light1.current.intensity = lightIntensity * (1 - (light1Ani * 0.25));
        light2.current.intensity = lightIntensity * (1 - (light2Ani * 0.25));
        light3.current.intensity = lightIntensity * (1 - (light3Ani * 0.25));

      })
  return (
    <group>
        <spotLight ref={light1} intensity={lightIntensity} color={0xD6E7FF} angle={Math.PI/13.5} position={[-8, 2.5, -3]} castShadow={true}/>
        <spotLight ref={light2} intensity={lightIntensity} color={0xD6E7FF} angle={Math.PI/13.5} position={[8, 0, 0]} castShadow={true}/> 
        <spotLight ref={light3} intensity={lightIntensity} color={0xD6E7FF} angle={Math.PI/13.5} position={[0, 3, -8]} castShadow={true}/> 
    </group>
  )
}

export default Spotlights