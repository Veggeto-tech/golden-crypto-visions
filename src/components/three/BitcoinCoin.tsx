import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Mesh, MathUtils } from 'three';
import { Text3D, useMatcapTexture } from '@react-three/drei';

interface BitcoinCoinProps {
  position: [number, number, number];
  scrollY: number;
}

export function BitcoinCoin({ position, scrollY }: BitcoinCoinProps) {
  const meshRef = useRef<Mesh>(null);
  const { viewport } = useThree();
  const [matcap] = useMatcapTexture('3E2335_D36A1B_8E4A2E_2842A5');

  useFrame((state) => {
    if (meshRef.current) {
      // Rotación constante
      meshRef.current.rotation.y += 0.02;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
      
      // Movimiento basado en scroll
      const scrollProgress = scrollY / window.innerHeight;
      meshRef.current.position.y = position[1] - scrollProgress * 2;
      meshRef.current.rotation.z = scrollProgress * Math.PI * 2;
      
      // Efecto flotante
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      {/* Cuerpo principal de la moneda */}
      <cylinderGeometry args={[1, 1, 0.1, 32]} />
      <meshMatcapMaterial matcap={matcap} />
      
      {/* Símbolo Bitcoin */}
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.3}
        height={0.02}
        position={[0, 0, 0.06]}
      >
        ₿
        <meshMatcapMaterial matcap={matcap} />
      </Text3D>
      
      {/* Anillo dorado */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[1.1, 0.05, 8, 32]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.2} />
      </mesh>
    </mesh>
  );
}