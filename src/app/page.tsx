'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const features = [
    {
      title: 'Elegant Design',
      description: 'Crafted with precision for a luxurious experience.',
      icon: '/icons/design.svg',
    },
    {
      title: 'Seamless Performance',
      description: 'Optimized for speed and responsiveness.',
      icon: '/icons/performance.svg',
    },
    {
      title: 'Innovative Features',
      description: 'Cutting-edge technology at your fingertips.',
      icon: '/icons/innovation.svg',
    },
  ];

  return (
    <div className="bg-black text-gold min-h-screen font-sans">
      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="relative h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black">
          <Image
            src="/hero-bg.jpg"
            alt="Hero Background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="text-center z-10 px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Welcome to Luxury
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-2xl mb-8"
          >
            Experience elegance in every detail.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.1, backgroundColor: '#d4af37' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gold text-black px-8 py-4 rounded-full font-semibold transition-colors"
          >
            <Link href="#features">Explore Now</Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="features" ref={ref} className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
          >
            Our Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 20px rgba(212, 175, 55, 0.2)',
                }}
                className="bg-black/50 p-6 rounded-lg border border-gold/30 backdrop-blur-sm"
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={50}
                  height={50}
                  className="mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gold/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/90 py-8 border-t border-gold/20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gold/60"
          >
            &copy; {new Date().getFullYear()} Luxury Brand. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
