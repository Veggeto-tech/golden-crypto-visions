import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

interface HologramChartProps {
  position: [number, number, number];
  scrollY: number;
}

export function HologramChart({ position, scrollY }: HologramChartProps) {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      
      // Rotación suave
      groupRef.current.rotation.y = time * 0.2;
      
      // Movimiento de scroll
      const scrollProgress = scrollY / (window.innerHeight * 3);
      groupRef.current.position.y = position[1] - scrollProgress * 3;
      groupRef.current.position.z = position[2] + scrollProgress * 2;
      
      // Flotación
      groupRef.current.position.y += Math.sin(time * 1.2) * 0.3;
      
      // Animación de las barras
      groupRef.current.children.forEach((child, index) => {
        if (child.scale) {
          const baseScale = 0.5 + Math.sin(time * 2 + index * 0.5) * 0.3;
          child.scale.y = baseScale;
        }
      });
    }
  });

  // Datos para las barras del gráfico
  const chartData = [0.8, 1.2, 0.6, 1.5, 0.9, 1.3, 0.7, 1.1];

  return (
    <group ref={groupRef} position={position}>
      {/* Base del holograma */}
      <mesh position={[0, -1.5, 0]}>
        <cylinderGeometry args={[2, 2, 0.1, 32]} />
        <meshStandardMaterial 
          color="#00D4AA" 
          emissive="#00D4AA" 
          emissiveIntensity={0.2}
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Barras del gráfico */}
      {chartData.map((height, index) => (
        <mesh 
          key={index} 
          position={[(index - 3.5) * 0.4, height * 0.5 - 1.5, 0]}
        >
          <boxGeometry args={[0.2, height, 0.2]} />
          <meshStandardMaterial 
            color="#00FFFF" 
            emissive="#00FFFF" 
            emissiveIntensity={0.6}
            transparent
            opacity={0.8}
            wireframe={Math.random() > 0.5}
          />
        </mesh>
      ))}
      
      {/* Líneas de conexión */}
      {chartData.slice(0, -1).map((_, index) => (
        <mesh 
          key={`line-${index}`}
          position={[(index - 3) * 0.4, 0, 0]}
        >
          <boxGeometry args={[0.4, 0.02, 0.02]} />
          <meshStandardMaterial 
            color="#FFD700" 
            emissive="#FFD700" 
            emissiveIntensity={0.8}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
      
      {/* Marco holográfico */}
      <mesh>
        <torusGeometry args={[2.5, 0.05, 8, 32]} />
        <meshStandardMaterial 
          color="#00FFFF" 
          emissive="#00FFFF" 
          emissiveIntensity={0.4}
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  );
}