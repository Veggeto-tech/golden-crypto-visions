import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bot, Shield, TrendingUp, Zap, Globe, Cpu } from 'lucide-react';

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Trading',
      description: 'Advanced machine learning algorithms analyze market patterns and execute trades with precision.',
      color: '#FFD700',
      gradient: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Shield,
      title: 'Military-Grade Security',
      description: 'End-to-end encryption and cold storage protection for your digital assets.',
      color: '#627EEA',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Analytics',
      description: '3D visualization of market data with instant insights and predictive analytics.',
      color: '#26D0CE',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Execute trades in milliseconds with our high-frequency trading infrastructure.',
      color: '#ADFF2F',
      gradient: 'from-green-400 to-green-500'
    },
    {
      icon: Globe,
      title: 'Global Markets',
      description: 'Access to 200+ cryptocurrencies across multiple exchanges worldwide.',
      color: '#FF6B6B',
      gradient: 'from-red-400 to-red-500'
    },
    {
      icon: Cpu,
      title: 'Quantum Computing',
      description: 'Next-generation processing power for complex algorithmic trading strategies.',
      color: '#FF69B4',
      gradient: 'from-pink-400 to-pink-500'
    }
  ];

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-primary rounded-full opacity-5 blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Revolutionary</span>
            <br />
            <span className="text-foreground">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of cryptocurrency trading with our cutting-edge technology 
            and innovative features designed for both beginners and professionals.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.2 }
              }}
              className="card-elegant p-8 group cursor-pointer perspective-1000"
            >
              {/* Icon Container */}
              <motion.div
                whileHover={{ scale: 1.1, rotateZ: 5 }}
                className="relative mb-6"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 glow-effect"
                  style={{ 
                    background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}40)`,
                    border: `1px solid ${feature.color}30`
                  }}
                >
                  <feature.icon 
                    size={28} 
                    style={{ color: feature.color }}
                  />
                </div>
                
                {/* Floating particles */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  className="absolute -top-2 -right-2 w-3 h-3 rounded-full"
                  style={{ backgroundColor: feature.color }}
                />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 rounded-lg pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${feature.color}10, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-primary px-8 py-4 rounded-lg text-primary-foreground font-semibold 
                     hover:shadow-glow transition-all duration-300 text-lg"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}