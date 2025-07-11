import { motion } from 'framer-motion';
import { Bitcoin, Twitter, Github, Linkedin, Mail, Globe, Shield, Zap } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    'Platform': ['Trading', 'Wallet', 'Analytics', 'API', 'Mobile App'],
    'Resources': ['Documentation', 'Help Center', 'Blog', 'Community', 'Status'],
    'Company': ['About', 'Careers', 'Press', 'Partners', 'Contact'],
    'Legal': ['Privacy Policy', 'Terms of Service', 'Security', 'Compliance']
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  const features = [
    { icon: Shield, text: 'Bank-level Security' },
    { icon: Zap, text: 'Lightning Fast' },
    { icon: Globe, text: 'Global Access' }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-primary rounded-full opacity-5 blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-gold rounded-full opacity-3 blur-3xl"
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="border-t border-border/30 pt-16 pb-8">
          <div className="container mx-auto px-6">
            {/* Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
              {/* Brand Column */}
              <div className="lg:col-span-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Bitcoin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-2xl font-bold gradient-text">CryptoLux</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    The future of cryptocurrency trading. Experience institutional-grade 
                    technology with retail accessibility. Trade with confidence on the 
                    most advanced platform in the industry.
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {features.map((feature, index) => (
                      <motion.div
                        key={feature.text}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-5 h-5 bg-primary/20 rounded flex items-center justify-center">
                          <feature.icon size={12} className="text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Links Columns */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="font-semibold text-foreground mb-4">{category}</h3>
                      <ul className="space-y-3">
                        {links.map((link, linkIndex) => (
                          <motion.li
                            key={link}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                              delay: categoryIndex * 0.1 + linkIndex * 0.05, 
                              duration: 0.4 
                            }}
                            viewport={{ once: true }}
                          >
                            <a 
                              href="#" 
                              className="text-muted-foreground hover:text-primary transition-colors 
                                       text-sm hover:underline decoration-primary underline-offset-4"
                            >
                              {link}
                            </a>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card-elegant p-8 mb-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold gradient-text mb-2">
                    Stay Ahead of the Market
                  </h3>
                  <p className="text-muted-foreground">
                    Get exclusive insights, market analysis, and early access to new features.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-secondary border border-border rounded-lg 
                             text-foreground placeholder-muted-foreground focus:outline-none 
                             focus:border-primary transition-colors"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-primary px-6 py-3 rounded-lg text-primary-foreground 
                             font-semibold hover:shadow-glow transition-all duration-300"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/30">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-muted-foreground text-sm mb-4 md:mb-0"
              >
                © 2024 CryptoLux. All rights reserved. | Built with passion for the future of finance.
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex space-x-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 bg-secondary/50 hover:bg-primary/20 rounded-lg 
                             flex items-center justify-center text-muted-foreground 
                             hover:text-primary transition-all duration-300 border border-border/50
                             hover:border-primary/50"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}