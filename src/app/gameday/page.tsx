'use client';

import { motion } from 'framer-motion';
import { Trophy, Users, Star, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ProductGrid from '@/components/ProductGrid';
import Breadcrumbs from '@/components/Breadcrumbs';

const gameDayCollections = [
  {
    title: 'THE CORE',
    description: 'Mom, Dad, Son & Daughter essentials.',
    icon: <Users className="h-6 w-6" />,
    color: 'bg-blue-500/10 text-blue-600',
    href: '#core'
  },
  {
    title: 'THE SPIRIT',
    description: 'Coach, Team Mom & Super Fan gear.',
    icon: <Trophy className="h-6 w-6" />,
    color: 'bg-orange-500/10 text-orange-600',
    href: '#spirit'
  },
  {
    title: 'THE CIRCLE',
    description: 'Grandma, Grandpa & Family gifts.',
    icon: <Star className="h-6 w-6" />,
    color: 'bg-purple-500/10 text-purple-600',
    href: '#circle'
  }
];

export default function GamedayHub() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <Breadcrumbs />
      
      {/* Game Day Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[3rem] overflow-hidden bg-primary p-12 md:p-24 text-center text-white shadow-2xl"
          >
            {/* Background Texture/Video Infrastructure */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] mb-8"
            >
              <Trophy className="h-4 w-4" />
              <span>THE GAME DAY HUB</span>
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
              Spirit Without <br />
              <span className="text-white/30 italic">Boundaries.</span>
            </h1>
            
            <p className="max-w-xl mx-auto text-lg md:text-xl text-white/60 font-medium mb-10">
                From the sidelines to the bleachers, find the perfect outfit for every member of your team. Experience the ultimate game day boutique.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
                <Link href="#collections" className="bg-white text-primary px-8 py-4 rounded-3xl font-bold hover:bg-white/90 transition-all flex items-center space-x-2">
                    <span>Explore Collections</span>
                </Link>
                <Link href="/" className="bg-white/5 border border-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-3xl font-bold hover:bg-white/10 transition-all">
                    Return to Showroom
                </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collection Categories */}
      <section id="collections" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gameDayCollections.map((col, idx) => (
                <motion.div
                    key={col.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 rounded-[2.5rem] bg-white border border-primary/5 shadow-sm hover:shadow-xl transition-all group"
                >
                    <div className={`${col.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                        {col.icon}
                    </div>
                    <h3 className="text-2xl font-black text-primary mb-2 uppercase tracking-tight">{col.title}</h3>
                    <p className="text-primary/50 font-medium mb-6">{col.description}</p>
                    <Link href={col.href} className="inline-flex items-center font-bold text-primary group-hover:translate-x-1 transition-transform">
                        Shop Collection &rarr;
                    </Link>
                </motion.div>
            ))}
        </div>
      </section>

      {/* Featured Game Day Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
            <div>
                <h2 className="text-4xl font-black text-primary uppercase tracking-tighter">Featured <span className="text-primary/30">Spirit Wear</span></h2>
                <p className="text-primary/50 font-bold mt-2 uppercase tracking-widest text-xs">Curated for the faithful</p>
            </div>
        </div>
        <ProductGrid />
      </section>
      
      {/* Boutique Footer */}
      <section className="mt-32 py-24 bg-primary/5 border-t border-primary/5 rounded-[4rem_4rem_0_0]">
          <div className="max-w-4xl mx-auto text-center px-4">
              <span className="text-primary/30 font-black text-xs uppercase tracking-[0.5em] mb-4 block">Hometown Energy</span>
              <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter mb-8">Ready to suit up for the season?</h2>
              <Link href="https://etsy.com" className="bg-primary text-white px-12 py-5 rounded-3xl font-black text-lg hover:scale-105 transition-all inline-block shadow-2xl shadow-primary/20">
                  VISIT ETSY SHOP
              </Link>
          </div>
      </section>
    </main>
  );
}
