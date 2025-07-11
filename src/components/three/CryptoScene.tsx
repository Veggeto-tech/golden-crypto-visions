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
          {/* Iluminación */}
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#FFD700" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#627EEA" />
          <spotLight 
            position={[0, 20, 0]} 
            intensity={0.8} 
            angle={0.3} 
            penumbra={1} 
            color="#FFD700"
            castShadow
          />
          
          {/* Estrellas de fondo */}
          <Stars radius={300} depth={60} count={1000} factor={7} saturation={0} fade />
          
          {/* Moneda Bitcoin flotante */}
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <BitcoinCoin position={[4, 2, 0]} scrollY={scrollY} />
          </Float>
          
          {/* Cristal Ethereum */}
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
            <EthereumCrystal position={[-4, -1, 2]} scrollY={scrollY} />
          </Float>
          
          {/* Cubos de trading */}
          <TradingCubes scrollY={scrollY} />
          
          {/* Ambiente */}
          <Environment preset="night" />
          
          {/* Controles (opcionales) */}
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