'use client';

import Link from 'next/link';
import { Users, Baby, Heart, Shield, Trophy, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const quickLinks = [
  { name: 'Adults', icon: Users, href: '/category/football?audience=adult' },
  { name: 'Youth & Kids', icon: Baby, href: '/category/football?audience=youth' },
  { name: 'Mom Collection', icon: Heart, href: '/category/football?role=Mom' },
  { name: 'Dad Squad', icon: Shield, href: '/category/football?role=Dad' },
  { name: 'Gameday Ready', icon: Trophy, href: '/category/football?gameday=true' },
  { name: 'Latest Drops', icon: Sparkles, href: '#new-arrivals' },
];

export default function BoutiqueQuickBar() {
  return (
    <div className="w-full bg-white/40 backdrop-blur-xl border-y border-primary/5 py-4 sticky top-[72px] z-40 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start md:justify-center space-x-4 md:space-x-8 overflow-x-auto no-scrollbar pb-1 md:pb-0">
          {quickLinks.map((link, idx) => (
            <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
            >
                <Link
                href={link.href}
                className="group flex items-center space-x-2 whitespace-nowrap px-4 py-2 rounded-2xl bg-primary/5 hover:bg-primary transition-all duration-300 border border-primary/5"
                >
                <link.icon className="h-4 w-4 text-primary group-hover:text-white transition-colors" />
                <span className="text-[11px] font-black uppercase tracking-widest text-primary/70 group-hover:text-white transition-colors">
                    {link.name}
                </span>
                </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
