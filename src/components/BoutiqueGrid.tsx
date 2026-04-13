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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-20">
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
              <div className={`relative overflow-hidden rounded-[2.5rem] ${item.color} p-8 h-full shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-active:scale-95 border border-white/5`}>
                {/* Stadium Texture Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-all duration-500 group-hover:rotate-6">
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-white font-black text-xl uppercase tracking-widest leading-none">{item.name}</h3>
                    <p className="text-white/40 text-[11px] font-bold uppercase tracking-widest">{item.sub}</p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2">
                    <ArrowRight className="h-5 w-5 text-white/50" />
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
