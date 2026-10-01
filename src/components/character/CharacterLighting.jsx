import React from 'react';

/**
 * CharacterLighting Component
 * Cinematic studio lighting tailored for portfolio_character_eye_symmetries.glb:
 * - Clean, flattering key light illuminating facial features and skin/hair textures
 * - Balanced soft fill keeping shadow contrast clean and natural
 * - Violet & lavender rim lights matching the website theme and accentuating silhouette
 * - Overhead catchlight and subtle warm bounce
 */
export const CharacterLighting = () => {
  return (
    <>
      {/* Balanced Soft Ambient Light */}
      <ambientLight intensity={0.65} color="#ffffff" />

      {/* Primary Key Light (Warm flattering front-right studio light) */}
      <directionalLight
        position={[2.0, 2.2, 2.8]}
        intensity={1.8}
        color="#fff7f0"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={15}
        shadow-bias={-0.001}
      />

      {/* Secondary Soft Fill Light (Neutral cool fill from front-left) */}
      <directionalLight
        position={[-2.4, 1.2, 2.0]}
        intensity={0.65}
        color="#ebe8f6"
      />

      {/* Subtle Purple Rim Light (Grazing rear-left silhouette edge) */}
      <directionalLight
        position={[-3.0, 1.8, -2.5]}
        intensity={2.2}
        color="#c4b5fd"
      />

      {/* Subtle Pink/Lavender Rim Light (Grazing rear-right silhouette edge) */}
      <directionalLight
        position={[3.0, 1.6, -2.5]}
        intensity={1.6}
        color="#e9d5ff"
      />

      {/* Overhead Soft Light (Hair crown catchlight) */}
      <directionalLight
        position={[0, 3.2, 0.4]}
        intensity={0.65}
        color="#ffffff"
      />

      {/* Subtle Bottom Bounce Glow (Atmospheric violet lift) */}
      <pointLight
        position={[0, -1.0, 1.5]}
        intensity={0.45}
        distance={4.0}
        decay={2}
        color="#c4b5fd"
      />
    </>
  );
};

export default CharacterLighting;
