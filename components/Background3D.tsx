import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const Particles = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= delta * 0.05;
      groupRef.current.rotation.x -= delta * 0.02;
    }
  });

  return (
    <group ref={groupRef} rotation={[0, 0, Math.PI / 4]}>
      <Points />
    </group>
  );
};

const Points = () => {
  const count = 2000;
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Gemini colors: Blue, Purple, Cyan
      const colorType = Math.random();
      let r, g, b;
      if (colorType < 0.33) { // Blue
        r = 0.16; g = 0.38; b = 1.0;
      } else if (colorType < 0.66) { // Purple
        r = 0.83; g = 0.0; b = 0.97;
      } else { // Cyan
        r = 0.0; g = 0.89; b = 1.0;
      }

      colors[i * 3] = r;
      colors[i * 3 + 1] = g;
      colors[i * 3 + 2] = b;
    }

    return { positions, colors };
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
  );
};

const Background3D: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-gemini-dark">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 5, 15]} />
        
        <Particles />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gemini-dark/50 to-gemini-dark pointer-events-none" />
    </div>
  );
};

export default Background3D;
