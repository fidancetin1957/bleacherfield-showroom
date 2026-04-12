'use client';

import Link from 'next/link';
import { Menu, Search, ShoppingBag, X, ChevronDown, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  name: string;
  href: string;
  isHighlight?: boolean;
  sections?: {
    title: string;
    items: { name: string; href: string }[];
  }[];
}

const productModels = [
  {
    title: 'ADULT',
    items: [
      { name: 'T-Shirts', href: '/t-shirts' },
      { name: 'Sweatshirts', href: '/sweatshirts' },
      { name: 'Hoodies', href: '/hoodies' },
    ]
  },
  {
    title: 'YOUTH',
    items: [
      { name: 'Youth T-Shirt', href: '/youth-t-shirt' },
      { name: 'Youth Sweatshirt', href: '/youth-sweatshirt' },
      { name: 'Youth Hoodie', href: '/youth-hoodie' },
    ]
  },
  {
    title: 'KIDS & BABY',
    items: [
      { name: 'Toddler T-Shirt', href: '/toddler-t-shirt' },
      { name: 'Baby Suit', href: '/baby-suit' },
    ]
  }
];

const navigation: NavItem[] = [
  { 
    name: 'NEW ARRIVALS ⚡', 
    href: '#new-arrivals', 
    isHighlight: true 
  },
  { 
    name: 'Football', 
    href: '/category/football',
    sections: [
        { title: 'NFL CONFERENCES', items: [{name: 'AFC Teams', href: '/category/football'}, {name: 'NFC Teams', href: '/category/football'}] },
        { title: 'COLLEGE (NCAA)', items: [{name: 'SEC Spirit', href: '/category/football'}, {name: 'Big Ten', href: '/category/football'}] },
        { title: 'BY PRODUCT', items: [{name: 'Hoodies', href: '/category/football'}, {name: 'T-Shirts', href: '/category/football'}] }
    ]
  },
  { 
    name: 'Basketball', 
    href: '/category/basketball',
    sections: [
        { title: 'PRO LEAGUES', items: [{name: 'Eastern Conf', href: '/category/basketball'}, {name: 'Western Conf', href: '/category/basketball'}] },
        { title: 'NBA ESSENTIALS', items: [{name: 'Atlantic Div', href: '/category/basketball'}, {name: 'Pacific Div', href: '/category/basketball'}] },
        { title: 'BY PRODUCT', items: [{name: 'Hoodies', href: '/category/basketball'}, {name: 'T-Shirts', href: '/category/basketball'}] }
    ]
  },
  { 
    name: 'Baseball', 
    href: '/category/baseball',
    sections: [
        { title: 'MLB LEAGUES', items: [{name: 'American League', href: '/category/baseball'}, {name: 'National League', href: '/category/baseball'}] },
        { title: 'BY PRODUCT', items: [{name: 'Jersey Style', href: '/category/baseball'}, {name: 'T-Shirts', href: '/category/baseball'}] }
    ]
  },
  { 
    name: 'Hockey', 
    href: '/category/hockey',
    sections: [
        { title: 'NHL DIVISIONS', items: [{name: 'Metropolitan', href: '/category/hockey'}, {name: 'Atlantic', href: '/category/hockey'}, {name: 'Pacific', href: '/category/hockey'}] },
        { title: 'BY PRODUCT', items: [{name: 'Sweatshirts', href: '/category/hockey'}, {name: 'Hoodies', href: '/category/hockey'}] }
    ]
  },
  { 
    name: 'Soccer', 
    href: '/category/soccer',
    sections: [
        { title: 'GAME DAY 2026', items: [{name: 'World Cup Spirit', href: '/category/soccer'}, {name: 'Club Shop', href: '/category/soccer'}] },
        { title: 'BY PRODUCT', items: [{name: 'T-Shirts', href: '/category/soccer'}, {name: 'Performance', href: '/category/soccer'}] }
    ]
  },
  { 
    name: 'GAME DAY 📣', 
    href: '/gameday', 
    isHighlight: true 
  },
  { 
    name: 'PICKLEBALL 🎾', 
    href: '/category/pickleball', 
    isHighlight: true 
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-2 shadow-sm' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button */}
          <div className="flex xl:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 text-primary focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl font-serif">BF</span>
              </div>
              <span className="hidden sm:block text-2xl font-bold tracking-tight text-primary uppercase">
                BleacherField
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex space-x-4 h-full items-center">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative group h-full flex items-center"
                onMouseEnter={() => item.sections && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 text-sm font-bold transition-all tracking-wide rounded-full ${
                    item.isHighlight 
                      ? 'text-white bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 scale-105 mx-2' 
                      : 'text-primary/70 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.isHighlight && <Sparkles className="h-3 w-3 mr-1" />}
                  <span>{item.name}</span>
                  {item.sections && (
                    <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Desktop Mega Dropdown (3 Columns) */}
                {item.sections && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] mt-1 p-6 bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-primary/5 z-50 grid grid-cols-3 gap-8"
                      >
                        {item.sections.map((section) => (
                          <div key={section.title} className="space-y-4">
                            <h4 className="text-xs font-black text-primary/30 uppercase tracking-[0.2em] px-2">
                                {section.title}
                            </h4>
                            <div className="flex flex-col space-y-1">
                                {section.items.map((sub) => (
                                <Link
                                    key={sub.name}
                                    href={sub.href}
                                    className="block px-3 py-2 text-sm font-semibold text-primary/70 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
                                >
                                    {sub.name}
                                </Link>
                                ))}
                            </div>
                          </div>
                        ))}
                        
                        {/* Featured Visual in Menu */}
                        <div className="col-span-3 mt-4 pt-4 border-t border-primary/5 flex items-center justify-between px-2">
                            <span className="text-xs font-medium text-primary/40 uppercase">BleacherField Exclusive Showroom</span>
                            <Link href={item.href} className="text-xs font-bold text-primary hover:underline">View All Trends &rarr;</Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-primary hover:bg-primary/5 rounded-full transition-colors hidden sm:block">
              <Search className="h-5 w-5" />
            </button>
            <Link href="https://etsy.com" className="p-2 text-primary hover:bg-primary/5 rounded-full transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-[90%] max-w-sm bg-background shadow-2xl z-50 p-6 flex flex-col overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm font-serif">BF</span>
                    </div>
                    <span className="text-xl font-bold text-primary uppercase tracking-tighter">BleacherField</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-primary/5 rounded-full transition-colors">
                  <X className="h-6 w-6 text-primary" />
                </button>
              </div>

              <div className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <MobileNavItem key={item.name} item={item} setIsOpen={setIsOpen} />
                ))}
              </div>

              <div className="mt-auto pt-10">
                <Link 
                  href="https://etsy.com"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 bg-primary text-white py-4 rounded-[1.5rem] font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>Shop on Etsy</span>
                </Link>
                <p className="text-center text-[10px] text-primary/30 mt-4 font-bold uppercase tracking-[0.3em]">Hometown Spirit • Since 2024</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

function MobileNavItem({ item, setIsOpen }: { item: NavItem; setIsOpen: any }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!item.sections) {
    return (
      <Link
        href={item.href}
        onClick={() => setIsOpen(false)}
        className={`flex items-center py-4 px-2 text-2xl font-black rounded-2xl ${
            item.isHighlight 
                ? 'text-primary bg-primary/5 mb-2' 
                : 'text-primary'
        }`}
      >
        {item.isHighlight && <Sparkles className="h-5 w-5 mr-2 text-primary" />}
        {item.name}
      </Link>
    );
  }

  return (
    <div className="bg-primary/5 rounded-[2rem] p-2 mb-2">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between py-4 px-4 text-2xl font-black text-primary"
      >
        <span>{item.name}</span>
        <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col space-y-6 pb-6 pt-2 px-4">
              {item.sections.map((section) => (
                <div key={section.title} className="space-y-3">
                    <h4 className="text-[10px] font-black text-primary/30 tracking-[0.4em] uppercase">{section.title}</h4>
                    <div className="grid grid-cols-2 gap-2">
                        {section.items.map((sub: any) => (
                        <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="bg-white/50 backdrop-blur-sm px-4 py-3 text-sm font-bold text-primary/80 rounded-xl active:bg-primary/10 transition-colors"
                        >
                            {sub.name}
                        </Link>
                        ))}
                    </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
