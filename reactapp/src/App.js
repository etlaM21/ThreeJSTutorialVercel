import React, { Suspense } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Cave';
import Spotlights from './Spotlights';
import Orb from './Orb';
import { MeshStandardMaterial, Color } from 'three';

function App() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 100 }}
      style={{
        backgroundColor: '#000000',
        width: '100vw',
        height: '100vh',
      }}
  >
      <Spotlights />
      <Suspense fallback={null}>
        <Model position={[0, 0, 0]} scale={[1, -1, -1]} rotation={[Math.PI * 1, Math.PI * 0.5, 0]} />
      </Suspense>
      <Orb />
      <OrbitControls />
  </Canvas>
  );
}

export default App;
