import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Cave';
import Spotlights from './Spotlights';
import Orb from './Orb';

function App() {
  return (
    <>
      <div className="someTextWrapper">
       <div className="someText">
        <h1>Embarking on the Spiritual Journey</h1>
        <p>In the journey of life, many seek solace and meaning through the exploration of spirituality. It is a quest that transcends the material aspects of existence, inviting individuals to delve into the depths of their being in search of a profound connection with something greater than themselves.</p>

        <p>At the core of spirituality lies the concept of finding one's inner sanctum, a sacred space within the soul where tranquility and wisdom reside. This inner sanctum is a haven of self-discovery, a place where the noise of the external world fades away, allowing the whispers of the spirit to be heard.</p>

        <p>The path to discovering this sacred inner space is unique for each person, as spirituality is a deeply personal journey. It often involves practices such as meditation, contemplation, and mindfulness, guiding individuals to turn their gaze inward. By quieting the mind and tuning into the rhythm of their breath, many find access to a profound realm where the essence of their true selves unfolds.</p>
        </div>
      </div>
      <Canvas
        id="threeCanv"
        camera={{ position: [0, 0, 3], fov: 100 }}
        style={{
          backgroundColor: '#000000',
          width: '100%',
          height: '75vh',
        }}
    >
        <Spotlights />
        <Suspense fallback={null}>
          <Model position={[0, 0, 0]} scale={[1, -1, -1]} rotation={[Math.PI * 1, Math.PI * 0.5, 0]} />
        </Suspense>
        <Orb />
    </Canvas>
    <div className="someTextWrapper">
      <div className="someText">
        <h1>Navigating the Spiritual Landscape</h1>
        <p>In the pursuit of spirituality, individuals may explore various traditions, philosophies, and teachings. Some find resonance in ancient wisdom, drawing inspiration from practices rooted in Eastern traditions like yoga or Buddhism. Others may seek guidance from the mystical teachings of different faiths or engage in nature-based spirituality, connecting with the sacred through the beauty of the natural world.</p>

        <p>Ultimately, the journey toward one's inner sanctum is a transformative process, leading to a deeper understanding of the self and the interconnectedness of all things. It is a journey of awakening, where the seeker uncovers the layers of conditioning and societal expectations to reveal the authentic core within.</p>

        <p>As one walks the path of spirituality, they may encounter challenges and moments of doubt. Yet, it is through these challenges that the spirit strengthens and the inner sanctum becomes a resilient sanctuary. The quest for spiritual enlightenment is not about escaping the world but rather embracing it with newfound awareness and compassion.</p>

        <p>In the quietude of the inner sanctum, individuals may discover a profound sense of peace, purpose, and a connection to a universal source of love and wisdom. It is a sanctuary where the eternal and the temporal converge, where the individual soul dances with the cosmic rhythm of existence</p>
      </div>
    </div>
  </>
  );
}

export default App;
