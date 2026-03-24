import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Sphere, Html } from '@react-three/drei';
import * as THREE from 'three';

// Rough coordinates for Ecuador silhouette (scaled and centered)
const scale = 0.6;
const toXY = (lng: number, lat: number) => [(lng + 78.5) * scale, (lat + 1.5) * scale, 0] as [number, number, number];

const ecuadorPoints = [
  toXY(-78.8, 1.4),   // Esmeraldas North
  toXY(-77.8, 0.8),   // Carchi/Sucumbios
  toXY(-76.4, 0.3),   // Sucumbios East
  toXY(-75.2, -0.9),  // Orellana
  toXY(-75.8, -2.0),  // Pastaza
  toXY(-76.8, -3.5),  // Morona Santiago
  toXY(-78.5, -5.0),  // Zamora/Loja (South)
  toXY(-79.5, -4.5),  // Loja West
  toXY(-80.3, -3.3),  // El Oro
  toXY(-79.8, -2.8),  // Guayaquil Gulf inner
  toXY(-81.0, -2.2),  // Santa Elena (West tip)
  toXY(-80.8, -1.0),  // Manabi
  toXY(-80.0, 0.5),   // Esmeraldas
  toXY(-78.8, 1.4),   // Close loop
];

const ambatoPos = toXY(-78.6, -1.2);

const ecuadorShape = new THREE.Shape(ecuadorPoints.map(p => new THREE.Vector2(p[0], p[1])));

const MapScene = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
    if (ringRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.2;
      ringRef.current.scale.set(scale, scale, scale);
      (ringRef.current.material as THREE.MeshBasicMaterial).opacity = 0.5 - Math.sin(state.clock.elapsedTime * 3) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Map Outline */}
      <Line
        points={ecuadorPoints}
        color="#2962ff"
        lineWidth={2}
        transparent
        opacity={0.8}
      />
      
      {/* Map Fill */}
      <mesh>
        <shapeGeometry args={[ecuadorShape]} />
        <meshBasicMaterial color="#2962ff" transparent opacity={0.05} side={THREE.DoubleSide} />
      </mesh>

      {/* Ambato Marker */}
      <group position={ambatoPos}>
        <Sphere args={[0.06, 16, 16]}>
          <meshBasicMaterial color="#d500f9" />
        </Sphere>
        <Sphere args={[0.12, 16, 16]}>
          <meshBasicMaterial color="#d500f9" transparent opacity={0.4} />
        </Sphere>
        
        {/* Pulsing ring */}
        <mesh ref={ringRef}>
          <ringGeometry args={[0.15, 0.18, 32]} />
          <meshBasicMaterial color="#d500f9" transparent opacity={0.5} side={THREE.DoubleSide} />
        </mesh>

        <Html center position={[0, -0.4, 0]}>
          <div className="text-gemini-secondary font-mono text-[10px] font-bold bg-black/80 px-2 py-1 rounded backdrop-blur-md border border-gemini-secondary/30 whitespace-nowrap shadow-[0_0_10px_rgba(213,0,249,0.3)]">
            📍 Ambato, Ecuador
          </div>
        </Html>
      </group>
    </group>
  );
};

const EcuadorMap: React.FC = () => {
  return (
    <div className="h-64 w-full relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <MapScene />
      </Canvas>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  );
};

export default EcuadorMap;
