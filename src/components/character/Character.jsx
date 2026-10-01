import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * Character Component
 * Renders the finalized 3D character model: portfolio_character_eye_symmetries.glb
 * 
 * Character Preservation:
 * - Model geometry, facial structure, features, hair, and proportions are strictly preserved as finalized.
 * - Presentation controls: Scale, positioning, smooth lighting, gentle idle breathing, and organic cursor tracking.
 */
export const Character = ({
  headRotationLimit = { x: 0.14, y: 0.22 }, // ~±8° vertical, ±12.5° horizontal
  trackingSmoothness = 4.2,                // Smooth spring damping factor
  idleAnimationSpeed = 1.3,               // Gentle breathing cycle frequency
  characterScale = 1.42,                  // Optimized scale framing full bust comfortably
  characterPosition = [0, -0.02, 0]       // Centered vertically & horizontally
}) => {
  const characterGroupRef = useRef();

  // Load the finalized GLB model from public/models
  const gltf = useLoader(GLTFLoader, '/models/portfolio_character_eye_symmetries.glb');

  // Clone scene to avoid shared mutation and configure shadows/materials
  const scene = useMemo(() => {
    if (!gltf || !gltf.scene) return null;
    const cloned = gltf.scene.clone(true);

    cloned.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        if (child.material) {
          // Preserve all original material properties, ensure correct color space
          if (child.material.map) {
            child.material.map.colorSpace = THREE.SRGBColorSpace;
          }
          child.material.needsUpdate = true;
        }
      }
    });

    return cloned;
  }, [gltf]);

  // Mouse tracking references
  const rawMouse = useRef({ x: 0, y: 0 });
  const currentRot = useRef({ x: 0, y: 0, z: 0 });
  const isMouseActive = useRef(false);
  const idleTimer = useRef(null);

  // Setup passive mouse move listener for cursor tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate normalized viewport coordinates: X [-1, 1], Y [-1, 1]
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;

      rawMouse.current.x = nx;
      rawMouse.current.y = ny;
      isMouseActive.current = true;

      // Reset idle timer (returns smoothly toward center after inactivity)
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => {
        isMouseActive.current = false;
      }, 3000);
    };

    const handleMouseLeave = () => {
      isMouseActive.current = false;
      rawMouse.current.x = 0;
      rawMouse.current.y = 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  // Per-frame animation loop: gentle breathing + subtle head micro-movement + cursor tracking
  useFrame((state, delta) => {
    if (!characterGroupRef.current) return;

    const time = state.clock.getElapsedTime();
    // Clamp delta to prevent erratic jumps on frame drops or tab switching
    const safeDelta = Math.min(delta, 0.05);

    // 1. ORGANIC IDLE HEAD MICRO-MOVEMENT (Subtle natural life sway)
    const idleRotY = Math.sin(time * 0.75) * 0.014 + Math.cos(time * 0.35) * 0.007;
    const idleRotX = Math.cos(time * 0.60) * 0.010 + Math.sin(time * 0.22) * 0.005;

    // 2. CURSOR TRACKING TARGET
    // Facing camera (+Z): looking right is positive Y rotation, looking left is negative Y rotation
    // Tilting up (cursor near top) is negative X rotation, tilting down is positive X rotation
    let targetRotY = idleRotY;
    let targetRotX = idleRotX;

    if (isMouseActive.current) {
      targetRotY += rawMouse.current.x * headRotationLimit.y;
      targetRotX += -rawMouse.current.y * headRotationLimit.x;
    }

    // Clamp within safety limits so face always maintains clear portrait view
    targetRotY = THREE.MathUtils.clamp(targetRotY, -headRotationLimit.y * 1.3, headRotationLimit.y * 1.3);
    targetRotX = THREE.MathUtils.clamp(targetRotX, -headRotationLimit.x * 1.3, headRotationLimit.x * 1.3);

    // Subtle natural head roll when turning sideways (~1-2 degrees)
    const targetRotZ = -targetRotY * 0.08;

    // 3. SMOOTH DAMPING (Independent of refresh rate)
    currentRot.current.x = THREE.MathUtils.damp(currentRot.current.x, targetRotX, trackingSmoothness, safeDelta);
    currentRot.current.y = THREE.MathUtils.damp(currentRot.current.y, targetRotY, trackingSmoothness, safeDelta);
    currentRot.current.z = THREE.MathUtils.damp(currentRot.current.z, targetRotZ, trackingSmoothness, safeDelta);

    // 4. GENTLE BREATHING ANIMATION
    // Natural human respiration cycle (~13-14 breaths per minute)
    const breathPhase = time * idleAnimationSpeed * 1.4;
    const breathY = Math.sin(breathPhase) * 0.012;            // ~1.2cm subtle vertical float
    const breathScale = 1 + Math.sin(breathPhase) * 0.003;     // 0.3% subtle breath expansion
    const breathTiltX = Math.sin(breathPhase) * 0.005;        // Tiny chest/head breathing tilt

    // Apply combined rotations
    characterGroupRef.current.rotation.x = currentRot.current.x + breathTiltX;
    characterGroupRef.current.rotation.y = currentRot.current.y;
    characterGroupRef.current.rotation.z = currentRot.current.z;

    // Apply breathing position float
    characterGroupRef.current.position.x = characterPosition[0];
    characterGroupRef.current.position.y = characterPosition[1] + breathY;
    characterGroupRef.current.position.z = characterPosition[2];

    // Apply breathing scale modulation
    const finalScale = characterScale * breathScale;
    characterGroupRef.current.scale.set(finalScale, finalScale, finalScale);
  });

  if (!scene) return null;

  return (
    <group ref={characterGroupRef} name="HeroCharacter3D">
      <primitive object={scene} />
    </group>
  );
};

export default Character;
