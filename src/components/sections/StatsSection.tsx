import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { TrendingUp, Users, Globe, DollarSign, Zap, Shield } from 'lucide-react';

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [counters, setCounters] = useState([0, 0, 0, 0, 0, 0]);

  const stats = [
    { 
      label: 'Daily Trading Volume', 
      value: 2400000000, 
      prefix: '$', 
      suffix: 'B+', 
      icon: DollarSign,
      color: '#FFD700'
    },
    { 
      label: 'Active Traders', 
      value: 850000, 
      prefix: '', 
      suffix: 'K+', 
      icon: Users,
      color: '#627EEA'
    },
    { 
      label: 'Countries Supported', 
      value: 195, 
      prefix: '', 
      suffix: '+', 
      icon: Globe,
      color: '#26D0CE'
    },
    { 
      label: 'Successful Trades', 
      value: 94.7, 
      prefix: '', 
      suffix: '%', 
      icon: TrendingUp,
      color: '#ADFF2F'
    },
    { 
      label: 'Transaction Speed', 
      value: 0.5, 
      prefix: '<', 
      suffix: 'ms', 
      icon: Zap,
      color: '#FF6B6B'
    },
    { 
      label: 'Security Score', 
      value: 99.9, 
      prefix: '', 
      suffix: '%', 
      icon: Shield,
      color: '#FF69B4'
    }
  ];

  // Counter animation
  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        let startValue = 0;
        const endValue = stat.value;
        const duration = 2000; // 2 seconds
        const increment = endValue / (duration / 16); // 60fps

        const timer = setInterval(() => {
          startValue += increment;
          if (startValue >= endValue) {
            startValue = endValue;
            clearInterval(timer);
          }
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = startValue;
            return newCounters;
          });
        }, 16);

        return () => clearInterval(timer);
      });
    }
  }, [isInView]);

  const formatValue = (value: number, stat: any, index: number) => {
    const currentValue = counters[index];
    
    if (stat.suffix === 'B+') {
      return (currentValue / 1000000000).toFixed(1);
    } else if (stat.suffix === 'K+') {
      return (currentValue / 1000).toFixed(0);
    } else if (stat.suffix === '%' || stat.suffix === 'ms') {
      return currentValue.toFixed(1);
    } else {
      return Math.floor(currentValue);
    }
  };

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 50, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-primary rounded-full opacity-5 blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ 
            duration: 45, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-gold rounded-full opacity-3 blur-3xl"
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
            <span className="text-foreground">Platform</span>
            <br />
            <span className="gradient-text">Statistics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Numbers that speak for themselves. Join millions of traders who trust 
            our platform for their cryptocurrency trading needs.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="card-elegant p-8 text-center group cursor-pointer relative overflow-hidden"
            >
              {/* Background Glow Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 rounded-lg"
                style={{
                  background: `radial-gradient(circle at center, ${stat.color}20, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center relative"
                  style={{ 
                    background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}40)`,
                    border: `2px solid ${stat.color}30`
                  }}
                >
                  <stat.icon 
                    size={32} 
                    style={{ color: stat.color }}
                  />
                  
                  {/* Pulsing ring */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                    className="absolute inset-0 rounded-2xl border-2"
                    style={{ borderColor: `${stat.color}50` }}
                  />
                </motion.div>

                {/* Value */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.5 }}
                  className="mb-4"
                >
                  <div className="text-4xl md:text-5xl font-bold gradient-text">
                    {stat.prefix}{formatValue(stat.value, stat, index)}{stat.suffix}
                  </div>
                </motion.div>

                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.15 + 0.7 }}
                  className="text-muted-foreground font-medium text-lg"
                >
                  {stat.label}
                </motion.div>

                {/* Floating particles */}
                {Array.from({ length: 3 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: index * 0.2 + i * 0.5
                    }}
                    className="absolute w-2 h-2 rounded-full"
                    style={{ 
                      backgroundColor: stat.color,
                      left: `${20 + i * 30}%`,
                      top: `${10 + i * 20}%`
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button className="bg-gradient-primary px-10 py-5 rounded-xl text-primary-foreground font-semibold text-xl hover:shadow-glow transition-all duration-300 group">
              <span className="flex items-center space-x-3">
                <span>Join the Revolution</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <TrendingUp className="w-6 h-6" />
                </motion.div>
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}