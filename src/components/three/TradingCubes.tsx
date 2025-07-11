import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { Float } from '@react-three/drei';

interface TradingCubesProps {
  scrollY: number;
}

export function TradingCubes({ scrollY }: TradingCubesProps) {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const scrollProgress = scrollY / window.innerHeight;
      groupRef.current.rotation.y = scrollProgress * Math.PI;
      groupRef.current.position.y = -scrollProgress * 3;
    }
  });

  const cubeData = [
    { position: [2, 0, -3], color: "#FFD700", scale: 0.5 },
    { position: [-2, 1, -2], color: "#627EEA", scale: 0.3 },
    { position: [0, -1, -4], color: "#F7931A", scale: 0.4 },
    { position: [3, -2, -1], color: "#26D0CE", scale: 0.6 },
    { position: [-3, 2, -5], color: "#ADFF2F", scale: 0.35 },
  ];

  return (
    <group ref={groupRef}>
      {cubeData.map((cube, index) => (
        <Float 
          key={index}
          speed={1 + index * 0.2} 
          rotationIntensity={0.5 + index * 0.1} 
          floatIntensity={1 + index * 0.2}
        >
          <mesh position={cube.position as [number, number, number]} scale={cube.scale}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial 
              color={cube.color}
              emissive={cube.color}
              emissiveIntensity={0.2}
              transparent
              opacity={0.8}
            />
            
            {/* Wireframe overlay */}
            <mesh>
              <boxGeometry args={[1.05, 1.05, 1.05]} />
              <meshBasicMaterial 
                color="#FFD700" 
                wireframe 
                transparent 
                opacity={0.3}
              />
            </mesh>
          </mesh>
        </Float>
      ))}
    </group>
  );
}