'use client';

import Link from 'next/link';
import { Users, Baby, Heart, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const boutiques = [
  { 
    id: 'adults', 
    name: 'Adults', 
    sub: 'The Classic Collection', 
    icon: Users, 
    href: '/category/football?audience=adult',
    color: 'bg-[#002147]' 
  },
  { 
    id: 'youth', 
    name: 'Youth', 
    sub: 'Future Legends', 
    icon: Baby, 
    href: '/category/football?audience=youth',
    color: 'bg-[#002147]' 
  },
  { 
    id: 'mom', 
    name: 'Mom', 
    sub: 'The Spirit Boutique', 
    icon: Heart, 
    href: '/category/football?role=Mom',
    color: 'bg-[#002147]' 
  },
  { 
    id: 'dad', 
    name: 'Dad', 
    sub: 'Sideline Ready', 
    icon: Shield, 
    href: '/category/football?role=Dad',
    color: 'bg-[#002147]' 
  },
];

export default function BoutiqueGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {boutiques.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link href={item.href} className="group relative block h-full">
              <div className={`relative overflow-hidden rounded-[2rem] ${item.color} p-6 h-full shadow-lg transition-all duration-500 group-hover:scale-[1.02] group-active:scale-95`}>
                {/* Stadium Texture Overlay */}
                <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/5 group-hover:bg-white/20 transition-colors">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-white font-black text-sm uppercase tracking-widest">{item.name}</h3>
                    <p className="text-white/30 text-[9px] font-bold uppercase tracking-tight">{item.sub}</p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-4 w-4 text-white/50" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
