import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

interface CryptoRingsProps {
  position: [number, number, number];
  scrollY: number;
}

export function CryptoRings({ position, scrollY }: CryptoRingsProps) {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      
      // Rotación diferente para cada anillo
      groupRef.current.children.forEach((ring, index) => {
        const speed = 0.5 + index * 0.3;
        ring.rotation.x = time * speed;
        ring.rotation.y = time * speed * 0.7;
        ring.rotation.z = time * speed * 0.5;
      });
      
      // Movimiento de scroll
      const scrollProgress = scrollY / (window.innerHeight * 2);
      groupRef.current.position.y = position[1] + Math.sin(scrollProgress * Math.PI * 2) * 2;
      groupRef.current.position.x = position[0] + Math.cos(scrollProgress * Math.PI) * 1;
      
      // Flotación
      groupRef.current.position.y += Math.sin(time * 0.8) * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Anillo exterior dorado */}
      <mesh>
        <torusGeometry args={[3, 0.1, 16, 100]} />
        <meshStandardMaterial 
          color="#FFD700" 
          emissive="#FFD700" 
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.7}
        />
      </mesh>
      
      {/* Anillo medio azul */}
      <mesh>
        <torusGeometry args={[2.2, 0.08, 16, 100]} />
        <meshStandardMaterial 
          color="#627EEA" 
          emissive="#627EEA" 
          emissiveIntensity={0.4}
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Anillo interior verde */}
      <mesh>
        <torusGeometry args={[1.4, 0.06, 16, 100]} />
        <meshStandardMaterial 
          color="#00D4AA" 
          emissive="#00D4AA" 
          emissiveIntensity={0.5}
          metalness={0.7}
          roughness={0.3}
          transparent
          opacity={0.9}
        />
      </mesh>
    </group>
  );
}