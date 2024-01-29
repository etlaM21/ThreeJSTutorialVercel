import React , { useRef, useState, useEffect, useLayoutEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

const ScrollCamera = ({scrollPosition}) => {
    // Create a ref for the camera
    const cameraRef = useRef()
    const set = useThree(({ set }) => set)
    const size = useThree(({ size }) => size)
    
    useLayoutEffect(() => {
        if (cameraRef.current) {
          cameraRef.current.aspect = size.width / size.height
          cameraRef.current.updateProjectionMatrix()
        }
      }, [size])
    
      useLayoutEffect(() => {
        set({ camera: cameraRef.current })
      }, []);

    // Set up state to control camera position
    const [cameraPosition, setCameraPosition] = useState([0, 20, 3]);

    // Update the camera position on scroll
    useEffect(() => {
        setCameraPosition([scrollPosition - 0.5, (scrollPosition - 0.5) * - 4, 3 + scrollPosition]);
    }, [scrollPosition]);

    // Update the camera position on each frame
    useFrame(() => {
        cameraRef.current.position.set(...cameraPosition);
        cameraRef.current.lookAt(0, 0, 0);
        console.log(cameraRef)
    });

    return (
        <PerspectiveCamera
            ref={cameraRef}
            position={cameraPosition}
            fov={100}
            aspect={window.innerWidth / window.innerHeight}
            near={0.1}
            far={1000}
        />
    );
};

export default ScrollCamera

