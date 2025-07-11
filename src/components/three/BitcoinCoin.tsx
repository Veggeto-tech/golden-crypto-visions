import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Group } from 'three';
import { useMatcapTexture } from '@react-three/drei';

interface BitcoinCoinProps {
  position: [number, number, number];
  scrollY: number;
}

export function BitcoinCoin({ position, scrollY }: BitcoinCoinProps) {
  const meshRef = useRef<Group>(null);
  const { viewport } = useThree();
  const [matcap] = useMatcapTexture('3E2335_D36A1B_8E4A2E_2842A5');

  useFrame((state) => {
    if (meshRef.current) {
      // Rotación constante más dramática
      meshRef.current.rotation.y += 0.03;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      
      // Movimiento basado en scroll más fluido
      const scrollProgress = scrollY / (window.innerHeight * 2);
      meshRef.current.position.y = position[1] - scrollProgress * 4;
      meshRef.current.position.x = position[0] + Math.sin(scrollProgress * Math.PI) * 1.5;
      meshRef.current.rotation.z = scrollProgress * Math.PI * 3;
      
      // Efecto flotante más pronunciado
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 1.5) * 0.3;
      meshRef.current.position.x += Math.cos(state.clock.elapsedTime * 0.8) * 0.2;
      
      // Escala que pulsa
      const pulseFactor = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.setScalar(pulseFactor);
    }
  });

  return (
    <group ref={meshRef} position={position}>
      {/* Resplandor exterior */}
      <mesh scale={1.3}>
        <cylinderGeometry args={[1.2, 1.2, 0.05, 32]} />
        <meshStandardMaterial 
          color="#FFD700" 
          transparent 
          opacity={0.3}
          emissive="#FFD700"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Cuerpo principal de la moneda - MÁS GRANDE */}
      <mesh scale={1.5}>
        <cylinderGeometry args={[1, 1, 0.15, 32]} />
        <meshMatcapMaterial matcap={matcap} />
        
        {/* Borde brillante */}
        <mesh>
          <torusGeometry args={[1.05, 0.08, 8, 32]} />
          <meshStandardMaterial 
            color="#FFD700" 
            emissive="#FFD700" 
            emissiveIntensity={0.8}
            metalness={1}
            roughness={0.1}
          />
        </mesh>
      </mesh>
      
      {/* Símbolo Bitcoin MEJORADO - más grande y brillante */}
      <group scale={1.8}>
        {/* Línea vertical principal */}
        <mesh position={[0, 0, 0.12]}>
          <boxGeometry args={[0.08, 0.7, 0.03]} />
          <meshStandardMaterial 
            color="#FFD700" 
            emissive="#FFD700" 
            emissiveIntensity={0.6}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        
        {/* Líneas horizontales superiores */}
        <mesh position={[0.12, 0.25, 0.12]}>
          <boxGeometry args={[0.25, 0.06, 0.03]} />
          <meshStandardMaterial 
            color="#FFD700" 
            emissive="#FFD700" 
            emissiveIntensity={0.6}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        
        <mesh position={[0.12, 0.05, 0.12]}>
          <boxGeometry args={[0.25, 0.06, 0.03]} />
          <meshStandardMaterial 
            color="#FFD700" 
            emissive="#FFD700" 
            emissiveIntensity={0.6}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        
        {/* Líneas horizontales inferiores */}
        <mesh position={[0.12, -0.05, 0.12]}>
          <boxGeometry args={[0.25, 0.06, 0.03]} />
          <meshStandardMaterial 
            color="#FFD700" 
            emissive="#FFD700" 
            emissiveIntensity={0.6}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        
        <mesh position={[0.12, -0.25, 0.12]}>
          <boxGeometry args={[0.25, 0.06, 0.03]} />
          <meshStandardMaterial 
            color="#FFD700" 
            emissive="#FFD700" 
            emissiveIntensity={0.6}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        
        {/* Líneas verticales pequeñas (detalles) */}
        <mesh position={[0.25, 0.35, 0.12]}>
          <boxGeometry args={[0.04, 0.15, 0.02]} />
          <meshStandardMaterial 
            color="#FFD700" 
            emissive="#FFD700" 
            emissiveIntensity={0.5}
          />
        </mesh>
        
        <mesh position={[0.25, -0.35, 0.12]}>
          <boxGeometry args={[0.04, 0.15, 0.02]} />
          <meshStandardMaterial 
            color="#FFD700" 
            emissive="#FFD700" 
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>
      
      {/* Partículas doradas orbitando */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 2.2;
        const orbitSpeed = 0.5;
        const currentAngle = angle + (scrollY * 0.01) + (Math.sin(Date.now() * 0.001 + i) * orbitSpeed);
        
        return (
          <mesh
            key={i}
            position={[
              Math.cos(currentAngle) * radius,
              Math.sin(currentAngle) * radius,
              Math.sin(currentAngle * 2) * 0.3
            ]}
            scale={0.08 + Math.sin(Date.now() * 0.002 + i) * 0.03}
          >
            <sphereGeometry />
            <meshStandardMaterial 
              color="#FFD700" 
              emissive="#FFD700" 
              emissiveIntensity={0.8 + Math.sin(Date.now() * 0.003 + i) * 0.3}
              transparent
              opacity={0.9}
            />
          </mesh>
        );
      })}
    </group>
  );
}