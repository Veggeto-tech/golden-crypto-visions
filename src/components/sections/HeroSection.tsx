import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, TrendingUp, Shield, Zap } from 'lucide-react';

export function HeroSection() {
  const stats = [
    { label: 'Trading Volume', value: '$2.4B+', icon: TrendingUp },
    { label: 'Security Level', value: '99.9%', icon: Shield },
    { label: 'Speed', value: '<1ms', icon: Zap },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Animated Background Elements - Más elaborados */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Elementos de fondo múltiples y más grandes */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.5, 1],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-10 right-10 w-96 h-96 bg-gradient-primary rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.5, 1, 1.5],
            x: [0, -150, 0],
            y: [0, 100, 0]
          }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-gradient-gold rounded-full opacity-15 blur-3xl"
        />
        
        {/* Elementos adicionales flotantes */}
        <motion.div
          animate={{ 
            rotate: 180,
            scale: [0.8, 1.3, 0.8],
            x: [0, -100, 0],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"
        />
        
        <motion.div
          animate={{ 
            rotate: -180,
            scale: [1.2, 0.7, 1.2],
            y: [0, -200, 0],
          }}
          transition={{ 
            duration: 28, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-l from-green-400/15 to-teal-500/15 rounded-full blur-2xl"
        />
        
        {/* Partículas flotantes CSS */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              scale: [0.5, 1, 0.5],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
            className={`absolute w-2 h-2 rounded-full ${
              i % 3 === 0 ? 'bg-yellow-400' : 
              i % 3 === 1 ? 'bg-blue-400' : 'bg-green-400'
            } opacity-60 blur-sm`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto text-center">
        {/* Main Heading - Más grande y dramático */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mb-12"
        >
          <motion.h1 
            className="text-7xl md:text-9xl lg:text-[12rem] font-black mb-8 leading-none tracking-tight"
            initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <motion.span 
              className="gradient-text block"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Future of
            </motion.span>
            <motion.span 
              className="text-foreground block mt-4"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Crypto Trading
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: [1, 1.02, 1]
            }}
            transition={{ 
              delay: 0.8, 
              duration: 1,
              scale: {
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground max-w-5xl mx-auto mb-16 leading-relaxed"
          >
            Experience the most <motion.span 
              className="gradient-text font-semibold"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              advanced cryptocurrency
            </motion.span> trading platform with 
            cutting-edge 3D analytics, AI-powered insights, and institutional-grade security.
          </motion.p>
        </motion.div>

        {/* CTA Buttons - Más grandes y espectaculares */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-500 text-xl px-12 py-6 group relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative z-10">Start Trading Now</span>
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, rotateY: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 text-xl px-12 py-6 backdrop-blur-md bg-background/20"
            >
              <Play className="mr-3" />
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats - Más grandes y animadas */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ 
                delay: 1.5 + index * 0.3, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1, 
                rotateY: 10,
                z: 50
              }}
              className="card-elegant p-8 text-center group cursor-pointer relative overflow-hidden"
            >
              {/* Efecto de brillo animado */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: index * 0.5
                }}
              />
              
              <div className="flex justify-center mb-6 relative z-10">
                <motion.div 
                  className="p-4 bg-gradient-primary rounded-full group-hover:shadow-glow transition-all duration-500"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.8
                  }}
                >
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
              </div>
              
              <motion.div 
                className="text-4xl md:text-5xl font-black gradient-text mb-3 relative z-10"
                animate={{ 
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
              >
                {stat.value}
              </motion.div>
              
              <div className="text-lg text-muted-foreground font-medium relative z-10">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}