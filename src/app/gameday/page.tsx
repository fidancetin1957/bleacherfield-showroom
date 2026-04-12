'use client';

import { motion } from 'framer-motion';
import { Trophy, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

const sports = [
  {
    id: 'football',
    name: 'Football',
    count: '24 Items',
    image: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=1200',
    grid: 'md:col-span-2 md:row-span-2',
    color: 'from-blue-900/80'
  },
  {
    id: 'basketball',
    name: 'Basketball',
    count: '18 Items',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800',
    grid: 'md:col-span-1 md:row-span-1',
    color: 'from-orange-900/80'
  },
  {
    id: 'baseball',
    name: 'Baseball',
    count: '12 Items',
    image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&q=80&w=800',
    grid: 'md:col-span-1 md:row-span-1',
    color: 'from-green-900/80'
  },
  {
    id: 'hockey',
    name: 'Hockey',
    count: '10 Items',
    image: 'https://images.unsplash.com/photo-1515703273155-2f995356509a?auto=format&fit=crop&q=80&w=800',
    grid: 'md:col-span-1 md:row-span-1',
    color: 'from-slate-900/80'
  },
  {
    id: 'soccer',
    name: 'Soccer',
    count: '15 Items',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800',
    grid: 'md:col-span-1 md:row-span-1',
    color: 'from-indigo-900/80'
  }
];

export default function GamedayHub() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-background">
      <Breadcrumbs />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-primary/5 px-3 py-1 rounded-full text-[10px] font-black tracking-[0.3em] text-primary/40 uppercase mb-4">
              <Trophy className="h-3 w-3" />
              <span>Gameday Boutique</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-primary uppercase tracking-tighter leading-none">
              Spirit Without <br />
              <span className="text-primary/20 italic">Boundaries.</span>
            </h1>
          </div>
          <p className="max-w-xs text-primary/40 font-bold text-sm leading-relaxed uppercase tracking-wide">
            Curated collections for every stadium, arena, and home-town bleacher. Elevate your ceremony.
          </p>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[800px]">
          {sports.map((sport, idx) => (
            <motion.div
              key={sport.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-primary/5 ${sport.grid}`}
            >
              <Link href={`#${sport.id}`} className="block w-full h-full relative">
                <img 
                  src={sport.image} 
                  alt={sport.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${sport.color} to-transparent opacity-60 group-hover:opacity-80 transition-opacity`} />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-white/60 text-[10px] font-black uppercase tracking-[0.4em] mb-2">{sport.count}</span>
                  <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 group-hover:translate-x-2 transition-transform">
                    {sport.name}
                  </h3>
                  <div className="flex items-center space-x-2 text-white/40 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Explore Collection</span>
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
                <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter mb-4">Trending <span className="text-primary/20">Game Day Essentials</span></h2>
                <p className="text-primary/40 font-bold uppercase tracking-[0.3em] text-xs">Chosen by the bleacher faithful</p>
            </div>
            
            {/* Grid of Products (Placeholder for now) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[1,2,3,4].map((i) => (
                    <div key={i} className="aspect-[3/4] rounded-[2rem] bg-primary/5 animate-pulse" />
                ))}
            </div>
        </div>
      </div>
    </main>
  );
}
