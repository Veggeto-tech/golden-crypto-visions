import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

interface EthereumCrystalProps {
  position: [number, number, number];
  scrollY: number;
}

export function EthereumCrystal({ position, scrollY }: EthereumCrystalProps) {
  const meshRef = useRef<Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
      
      // Movimiento de scroll
      const scrollProgress = scrollY / window.innerHeight;
      meshRef.current.position.x = position[0] + Math.sin(scrollProgress * Math.PI) * 2;
      meshRef.current.position.y = position[1] - scrollProgress * 1.5;
      
      // Efecto de levitación
      meshRef.current.position.y += Math.cos(state.clock.elapsedTime * 1.5) * 0.15;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      {/* Cristal principal */}
      <mesh>
        <octahedronGeometry args={[0.8, 2]} />
        <meshStandardMaterial 
          color="#627EEA" 
          transparent 
          opacity={0.8}
          emissive="#627EEA"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Brillo interior */}
      <mesh scale={0.7}>
        <octahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial 
          color="#FFFFFF" 
          transparent 
          opacity={0.2}
          emissive="#FFFFFF"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Partículas alrededor */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 8) * Math.PI * 2) * 1.5,
            Math.sin((i / 8) * Math.PI * 2) * 1.5,
            0
          ]}
          scale={0.1}
        >
          <sphereGeometry />
          <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.8} />
        </mesh>
      ))}
    </group>
  );
}