import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Stars, Float } from '@react-three/drei';
import { BitcoinCoin } from './BitcoinCoin';
import { EthereumCrystal } from './EthereumCrystal';
import { TradingCubes } from './TradingCubes';
import { FloatingParticles } from './FloatingParticles';
import { CryptoRings } from './CryptoRings';
import { HologramChart } from './HologramChart';

export function CryptoScene() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 80 }}>
        <Suspense fallback={null}>
          {/* Iluminación dramática mejorada */}
          <ambientLight intensity={0.3} />
          <pointLight position={[15, 15, 15]} intensity={2} color="#FFD700" />
          <pointLight position={[-15, -15, -15]} intensity={1.2} color="#627EEA" />
          <pointLight position={[0, -15, 10]} intensity={1} color="#00D4AA" />
          <spotLight 
            position={[0, 25, 0]} 
            intensity={1.5} 
            angle={0.4} 
            penumbra={1} 
            color="#FFD700"
            castShadow
          />
          <spotLight 
            position={[20, 0, 20]} 
            intensity={1} 
            angle={0.3} 
            penumbra={1} 
            color="#627EEA"
            castShadow
          />
          
          {/* Estrellas de fondo más dramáticas */}
          <Stars radius={500} depth={100} count={3000} factor={15} saturation={0} fade />
          
          {/* Partículas flotantes */}
          <FloatingParticles count={800} scrollY={scrollY} />
          
          {/* Moneda Bitcoin PRINCIPAL - Más grande y prominente */}
          <Float speed={1.8} rotationIntensity={3} floatIntensity={4}>
            <group scale={1.2}>
              <BitcoinCoin position={[4, 1, 3]} scrollY={scrollY} />
            </group>
          </Float>
          
          {/* Segunda moneda Bitcoin */}
          <Float speed={2.2} rotationIntensity={2} floatIntensity={3}>
            <group scale={0.7}>
              <BitcoinCoin position={[-5, -2, 1]} scrollY={scrollY} />
            </group>
          </Float>
          
          {/* Tercera moneda Bitcoin más pequeña */}
          <Float speed={1.6} rotationIntensity={1.5} floatIntensity={2}>
            <group scale={0.4}>
              <BitcoinCoin position={[6, -3, -2]} scrollY={scrollY} />
            </group>
          </Float>
          
          {/* Cristales Ethereum múltiples */}
          <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
            <EthereumCrystal position={[-4, 3, -1]} scrollY={scrollY} />
          </Float>
          
          <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.5}>
            <group scale={0.6}>
              <EthereumCrystal position={[2, -1, -3]} scrollY={scrollY} />
            </group>
          </Float>
          
          {/* Anillos criptográficos */}
          <Float speed={0.8} rotationIntensity={0.5} floatIntensity={1}>
            <CryptoRings position={[-6, 1, -2]} scrollY={scrollY} />
          </Float>
          
          <Float speed={1.2} rotationIntensity={0.7} floatIntensity={1.5}>
            <group scale={0.7}>
              <CryptoRings position={[5, 3, -4]} scrollY={scrollY} />
            </group>
          </Float>
          
          {/* Gráficos holográficos */}
          <Float speed={1} rotationIntensity={0.3} floatIntensity={1}>
            <HologramChart position={[-2, -4, 0]} scrollY={scrollY} />
          </Float>
          
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.2}>
            <group scale={0.8}>
              <HologramChart position={[7, 0, -5]} scrollY={scrollY} />
            </group>
          </Float>
          
          {/* Cubos de trading múltiples */}
          <TradingCubes scrollY={scrollY} />
          
          {/* Elementos adicionales para más densidad */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const radius = 8 + Math.sin(i) * 3;
            return (
              <Float key={i} speed={0.5 + i * 0.1} rotationIntensity={0.5} floatIntensity={1}>
                <mesh
                  position={[
                    Math.cos(angle) * radius,
                    Math.sin(angle * 2) * 4,
                    Math.sin(angle) * radius * 0.5
                  ]}
                  scale={0.1 + i * 0.02}
                >
                  <octahedronGeometry />
                  <meshStandardMaterial 
                    color={i % 3 === 0 ? "#FFD700" : i % 3 === 1 ? "#627EEA" : "#00D4AA"}
                    emissive={i % 3 === 0 ? "#FFD700" : i % 3 === 1 ? "#627EEA" : "#00D4AA"}
                    emissiveIntensity={0.4}
                    transparent
                    opacity={0.7}
                  />
                </mesh>
              </Float>
            );
          })}
          
          {/* Ambiente más dramático */}
          <Environment preset="sunset" />
          
          {/* Controles automáticos más dinámicos */}
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            enableRotate={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}