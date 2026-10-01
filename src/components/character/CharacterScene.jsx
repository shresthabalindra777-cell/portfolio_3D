import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Character } from './Character';
import { CharacterLighting } from './CharacterLighting';

/**
 * CharacterScene Component
 * Frameless, borderless 3D portrait presentation:
 * - Prominently sized as the center visual centerpiece of the Hero section
 * - Floating directly on hero dark canvas with soft violet atmospheric backdrop
 * - Optimal camera framing displaying complete head, voluminous hair, face, jaw, and neck
 * - Cinematic studio lighting with vibrant rim separation
 * - High performance with responsive pixel ratio clamping
 */
export const CharacterScene = ({
  headRotationLimit = { x: 0.14, y: 0.22 },
  trackingSmoothness = 4.2,
  idleAnimationSpeed = 1.3,
  characterScale = 1.55,
  characterPosition = [0, -0.015, 0],
  className = ''
}) => {
  return (
    <div className={`character-borderless-scene ${className}`}>
      {/* 
        NO rectangular frame, NO card, NO border, NO decorative brackets.
        WebGL Canvas rendered directly with transparent background.
      */}
      <Canvas
        shadows
        dpr={[1, Math.min(window.devicePixelRatio, 2)]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        camera={{
          position: [0, -0.01, 2.42], // Calibrated for prominent center framing without any edge clipping
          fov: 28,
          near: 0.1,
          far: 50
        }}
        style={{
          width: '100%',
          height: '100%',
          background: 'transparent'
        }}
      >
        {/* Balanced Studio Key, Fill & Subtle Violet Rim Lighting */}
        <CharacterLighting />

        {/* Soft physically grounded contact shadow plane */}
        <mesh position={[0, -0.55, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[2.2, 2.2]} />
          <shadowMaterial transparent opacity={0.25} />
        </mesh>

        {/* 3D Character Model: portfolio_character_eye_symmetries.glb */}
        <Suspense fallback={null}>
          <Character
            headRotationLimit={headRotationLimit}
            trackingSmoothness={trackingSmoothness}
            idleAnimationSpeed={idleAnimationSpeed}
            characterScale={characterScale}
            characterPosition={characterPosition}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CharacterScene;
