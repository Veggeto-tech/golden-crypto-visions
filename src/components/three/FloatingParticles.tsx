import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points } from 'three';
import * as THREE from 'three';

interface FloatingParticlesProps {
  count?: number;
  scrollY: number;
}

export function FloatingParticles({ count = 500, scrollY }: FloatingParticlesProps) {
  const pointsRef = useRef<Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 40;
      positions[i3 + 1] = (Math.random() - 0.5) * 40;
      positions[i3 + 2] = (Math.random() - 0.5) * 40;
      
      // Gold and blue particles
      const isGold = Math.random() > 0.5;
      if (isGold) {
        colors[i3] = 1; // R
        colors[i3 + 1] = 0.84; // G
        colors[i3 + 2] = 0; // B
      } else {
        colors[i3] = 0.38; // R
        colors[i3 + 1] = 0.49; // G
        colors[i3 + 2] = 0.92; // B
      }
    }
    
    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.elapsedTime;
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const y = positions[i3 + 1];
        const z = positions[i3 + 2];
        
        positions[i3] = x + Math.sin(time * 0.5 + i * 0.1) * 0.01;
        positions[i3 + 1] = y + Math.cos(time * 0.3 + i * 0.1) * 0.01;
        positions[i3 + 2] = z + Math.sin(time * 0.4 + i * 0.1) * 0.01;
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      pointsRef.current.rotation.y = time * 0.1;
      pointsRef.current.position.y = -scrollY * 0.001;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        transparent
        opacity={0.8}
        vertexColors
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}