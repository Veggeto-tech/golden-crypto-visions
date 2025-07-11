import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { TrendingUp, TrendingDown, Activity, DollarSign, Bitcoin, Zap } from 'lucide-react';

export function TradingDashboard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCrypto, setSelectedCrypto] = useState(0);

  const cryptoData = [
    { 
      name: 'Bitcoin', 
      symbol: 'BTC', 
      price: '$67,234.45', 
      change: '+2.34%', 
      icon: Bitcoin,
      color: '#F7931A',
      isUp: true,
      volume: '$2.4B'
    },
    { 
      name: 'Ethereum', 
      symbol: 'ETH', 
      price: '$3,845.67', 
      change: '+5.67%', 
      icon: TrendingUp,
      color: '#627EEA',
      isUp: true,
      volume: '$1.8B'
    },
    { 
      name: 'Solana', 
      symbol: 'SOL', 
      price: '$156.89', 
      change: '-1.23%', 
      icon: Zap,
      color: '#26D0CE',
      isUp: false,
      volume: '$890M'
    }
  ];

  const chartData = Array.from({ length: 24 }, (_, i) => ({
    time: `${i}:00`,
    value: 50 + Math.sin(i * 0.5) * 20 + Math.random() * 10
  }));

  return (
    <section ref={ref} className="py-24 px-6 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Advanced</span>
            <br />
            <span className="gradient-text">Trading Interface</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our state-of-the-art trading dashboard with real-time data, 
            advanced charting, and AI-powered insights.
          </p>
        </motion.div>

        {/* Dashboard Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card-elegant p-8 relative overflow-hidden"
        >
          {/* Glowing border effect */}
          <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-lg blur-xl" />
          
          <div className="relative z-10">
            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {[
                { label: 'Portfolio Value', value: '$124,567.89', icon: DollarSign, change: '+12.5%' },
                { label: '24h P&L', value: '+$15,234.45', icon: TrendingUp, change: '+8.7%' },
                { label: 'Active Positions', value: '12', icon: Activity, change: '+3' },
                { label: 'Win Rate', value: '94.2%', icon: TrendingUp, change: '+2.1%' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-secondary/50 rounded-lg p-4 border border-border/50"
                >
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon size={20} className="text-primary" />
                    <span className="text-sm text-green-400">{stat.change}</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Main Chart Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Chart */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-secondary/30 rounded-lg p-6 border border-border/50">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Price Chart</h3>
                  
                  {/* Simplified Chart */}
                  <div className="h-64 relative">
                    <svg className="w-full h-full" viewBox="0 0 400 200">
                      <defs>
                        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      
                      {/* Chart Line */}
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : {}}
                        transition={{ duration: 2, delay: 1 }}
                        d={`M ${chartData.map((point, i) => 
                          `${(i / (chartData.length - 1)) * 380 + 10},${190 - (point.value / 100) * 180}`
                        ).join(' L ')}`}
                        fill="none"
                        stroke="#FFD700"
                        strokeWidth="3"
                        className="drop-shadow-lg"
                      />
                      
                      {/* Chart Area */}
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : {}}
                        transition={{ duration: 2, delay: 1.2 }}
                        d={`M 10,190 ${chartData.map((point, i) => 
                          `L ${(i / (chartData.length - 1)) * 380 + 10},${190 - (point.value / 100) * 180}`
                        ).join(' ')} L 390,190 Z`}
                        fill="url(#chartGradient)"
                      />
                      
                      {/* Data Points */}
                      {chartData.map((point, i) => (
                        <motion.circle
                          key={i}
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{ delay: 1.5 + i * 0.05 }}
                          cx={(i / (chartData.length - 1)) * 380 + 10}
                          cy={190 - (point.value / 100) * 180}
                          r="4"
                          fill="#FFD700"
                          className="cursor-pointer hover:r-6 transition-all"
                        />
                      ))}
                    </svg>
                  </div>
                </div>
              </div>

              {/* Crypto List */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Top Cryptocurrencies</h3>
                {cryptoData.map((crypto, index) => (
                  <motion.div
                    key={crypto.symbol}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    onClick={() => setSelectedCrypto(index)}
                    className={`bg-secondary/30 rounded-lg p-4 border cursor-pointer transition-all
                      ${selectedCrypto === index 
                        ? 'border-primary shadow-glow' 
                        : 'border-border/50 hover:border-primary/50'
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${crypto.color}20` }}
                        >
                          <crypto.icon size={20} style={{ color: crypto.color }} />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{crypto.name}</div>
                          <div className="text-sm text-muted-foreground">{crypto.symbol}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-foreground">{crypto.price}</div>
                        <div className={`text-sm ${crypto.isUp ? 'text-green-400' : 'text-red-400'}`}>
                          {crypto.change}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 pt-2 border-t border-border/30">
                      <div className="text-xs text-muted-foreground">
                        Volume: {crypto.volume}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}