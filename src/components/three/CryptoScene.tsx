import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Stars, Float } from '@react-three/drei';
import { BitcoinCoin } from './BitcoinCoin';
import { EthereumCrystal } from './EthereumCrystal';
import { TradingCubes } from './TradingCubes';

export function CryptoScene() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <Suspense fallback={null}>
          {/* Iluminación mejorada */}
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#FFD700" />
          <pointLight position={[-10, -10, -10]} intensity={0.8} color="#627EEA" />
          <spotLight 
            position={[0, 20, 0]} 
            intensity={1.2} 
            angle={0.3} 
            penumbra={1} 
            color="#FFD700"
            castShadow
          />
          
          {/* Estrellas de fondo */}
          <Stars radius={300} depth={60} count={2000} factor={10} saturation={0} fade />
          
          {/* Moneda Bitcoin PRINCIPAL - Grande y prominente */}
          <Float speed={1.5} rotationIntensity={2} floatIntensity={3}>
            <BitcoinCoin position={[3, 1, 2]} scrollY={scrollY} />
          </Float>
          
          {/* Segunda moneda Bitcoin más pequeña */}
          <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <group scale={0.6}>
              <BitcoinCoin position={[-4, -2, 1]} scrollY={scrollY} />
            </group>
          </Float>
          
          {/* Cristal Ethereum */}
          <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.5}>
            <EthereumCrystal position={[-3, 2, -1]} scrollY={scrollY} />
          </Float>
          
          {/* Cubos de trading */}
          <TradingCubes scrollY={scrollY} />
          
          {/* Ambiente */}
          <Environment preset="night" />
          
          {/* Controles automáticos */}
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            enableRotate={false}
            autoRotate
            autoRotateSpeed={0.3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}