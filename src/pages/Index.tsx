import { CryptoScene } from '@/components/three/CryptoScene';
import { NavHeader } from '@/components/ui/nav-header';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { TradingDashboard } from '@/components/sections/TradingDashboard';
import { StatsSection } from '@/components/sections/StatsSection';
import { Footer } from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* 3D Background Scene */}
      <CryptoScene />
      
      {/* Navigation */}
      <NavHeader />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <TradingDashboard />
        <StatsSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
