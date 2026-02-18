import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, ContactShadows } from '@react-three/drei';
import { Suspense, useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import modelUrl from '../assets/9f138a96-7b7d-43d4-b017-c4128fdc8364.glb?url';

function Model() {
  const { scene } = useGLTF(modelUrl);
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const targetRotation = useRef(0);
  const currentRotation = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Map mouse X from [0, window.innerWidth] to [-1, 1]
      const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
      // Map to rotation: center = 0, left = positive rotation, right = negative
      // Max rotation ~45 degrees (PI/4)
      targetRotation.current = -normalizedX * (Math.PI / 4);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      // Smooth interpolation
      currentRotation.current += (targetRotation.current - currentRotation.current) * 0.08;
      groupRef.current.rotation.y = currentRotation.current;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.1, 0]} scale={2.2}>
      <primitive object={scene} />
    </group>
  );
}

export function ModelViewer() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full h-full relative">
      {/* Loading placeholder */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-12 h-12 border-2 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin" />
        </div>
      )}
      <Canvas
        camera={{ position: [0, 0.3, 2.8], fov: 45 }}
        style={{ width: '100%', height: '100%' }}
        onCreated={() => setLoaded(true)}
      >
        <ambientLight intensity={0.05} />
        <directionalLight position={[5, 5, 5]} intensity={0.12} />
        <directionalLight position={[-3, 3, 2]} intensity={0.05} color="#06b6d4" />
        <pointLight position={[0, 2, 3]} intensity={0.04} color="#3b82f6" />
        <Suspense fallback={null}>
          <Model />
          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.4}
            scale={5}
            blur={2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
