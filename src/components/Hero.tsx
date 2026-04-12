'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Play } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Infrastructure */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-background">
        {/* Ambient Video Background (Infrastructure) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20 pointer-events-none transition-opacity duration-1000"
          poster="/images/hero-fallback.jpg" // User can provide this later
        >
          {/* User will add sources later */}
          {/* <source src="/videos/hero-ambient.mp4" type="video/mp4" /> */}
        </video>

        {/* Decorative Gradients for depth */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left md:flex md:items-center space-y-10 md:space-y-0 md:space-x-12">
          {/* Hero Text */}
          <div className="md:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold tracking-wide"
            >
              <Trophy className="h-4 w-4" />
              <span className="uppercase">Hometown Spirit Captured</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-primary leading-[1.1] uppercase tracking-tighter"
            >
              Wear the <br />
              <span className="text-primary/40">Stadium</span> <br />
              Energy.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-primary/70 max-w-lg leading-relaxed font-medium"
            >
              Premium quality sports apparel designed for the true enthusiast. From the bleachers to the streets, carry the spirit of the game wherever you go.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link
                href="#showroom"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-[1.5rem] font-bold text-lg hover:shadow-lg hover:shadow-primary/20 transition-all group lg:w-max"
              >
                <span>Browse Showroom</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#style-guide"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary/20 text-primary rounded-[1.5rem] font-bold text-lg hover:bg-primary/5 transition-all lg:w-max group"
              >
                <Play className="mr-2 h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                <span>Style Guide</span>
              </Link>
            </motion.div>
          </div>

          {/* Hero Visual Prototype (Stadium Curved Container) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto bg-primary/5 rounded-[3rem] border-2 border-primary/10 flex items-center justify-center overflow-hidden shadow-inner group">
                {/* Visual Placeholder for Video Preview */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                <div className="z-10 text-primary/10 font-black text-8xl rotate-[-15deg] uppercase selection:bg-transparent transition-all duration-700 group-hover:scale-110 group-hover:rotate-0 group-hover:text-primary/20">
                    Field
                </div>
                
                {/* Subtle Micro-Animations */}
                <div className="absolute top-10 left-10 w-20 h-20 border border-primary/10 rounded-full animate-ping opacity-20" />
                <div className="absolute bottom-20 right-20 w-32 h-32 border border-primary/10 rounded-[2rem] animate-pulse opacity-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
