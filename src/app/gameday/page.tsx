'use client';

import { motion } from 'framer-motion';
import { Trophy, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';

const sports = [
  {
    id: 'basketball',
    name: 'Basketball',
    count: '18 Items',
    image: '/images/basketball.webp',
    grid: 'md:col-start-1 md:row-start-1',
    color: 'from-orange-900/80'
  },
  {
    id: 'baseball',
    name: 'Baseball',
    count: '12 Items',
    image: '/images/baseball.webp',
    grid: 'md:col-start-1 md:row-start-2',
    color: 'from-green-900/80'
  },
  {
    id: 'football',
    name: 'Football',
    count: '24 Items',
    image: '/images/football.webp',
    grid: 'md:col-start-2 md:row-span-2 md:row-start-1 h-full',
    color: 'from-blue-900/80'
  },
  {
    id: 'hockey',
    name: 'Hockey',
    count: '10 Items',
    image: '/images/hockey.webp',
    grid: 'md:col-start-3 md:row-start-1',
    color: 'from-slate-900/80'
  },
  {
    id: 'soccer',
    name: 'Soccer',
    count: '15 Items',
    image: '/images/soccer.webp',
    grid: 'md:col-start-3 md:row-start-2',
    color: 'from-indigo-900/80'
  }
];

export default function GamedayHub() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-background">
      <Breadcrumbs />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-primary/5">
          <div>
            <div className="inline-flex items-center space-x-2 bg-primary/5 px-3 py-1 rounded-full text-[10px] font-black tracking-[0.3em] text-primary/40 uppercase mb-4">
              <Trophy className="h-3 w-3" />
              <span>The Original Site</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-primary uppercase tracking-tighter leading-none">
              Game Day <br />
              <span className="text-primary/20 italic">Unlocked.</span>
            </h1>
          </div>
          <p className="max-w-xs text-primary/40 font-bold text-sm leading-relaxed uppercase tracking-wide text-right">
            Curated local collections for the hometown faithful. Built for the roar of the crowd.
          </p>
        </div>

        {/* Mosaic Grid - SYMMETRICAL CENTERED FOOTBALL */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[850px]">
          {sports.map((sport, idx) => (
            <motion.div
              key={sport.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-[3rem] bg-primary/5 shadow-2xl ${sport.grid}`}
            >
              <Link href={`/category/${sport.id}?role=Gameday`} className="block w-full h-full relative">
                <Image 
                  src={sport.image} 
                  alt={sport.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={sport.id === 'football'}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${sport.color} to-transparent opacity-60 group-hover:opacity-80 transition-opacity`} />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="overflow-hidden">
                    <motion.span 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="text-white/60 text-[10px] font-black uppercase tracking-[0.4em] mb-2 block"
                    >
                        {sport.count}
                    </motion.span>
                  </div>
                  <h3 className={`font-black text-white uppercase tracking-tighter mb-4 group-hover:translate-x-2 transition-transform ${sport.id === 'football' ? 'text-4xl md:text-7xl' : 'text-3xl md:text-5xl'}`}>
                    {sport.name}
                  </h3>
                  <div className="flex items-center space-x-2 text-white/40 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Explore Originals</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Featured Section Below Grid */}
        <div className="mt-32 pt-20 border-t border-primary/5">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter mb-4 italic">Boutique <span className="text-primary/20">Stadium Wear</span></h2>
                <p className="text-primary/40 font-bold uppercase tracking-[0.3em] text-xs">Original collections • SEO Optimized • Local Assets</p>
            </div>
            
            {/* Grid of Products (Placeholder for now) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[1,2,3,4].map((i) => (
                    <div key={i} className="aspect-[3/4] rounded-[2.5rem] bg-primary/10 animate-pulse relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </main>
  );
}
