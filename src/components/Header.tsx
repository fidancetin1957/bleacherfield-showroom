'use client';

import Link from 'next/link';
import { Menu, Search, ShoppingBag, X, ChevronDown, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { 
    name: 'New Arrivals', 
    href: '#new-arrivals', 
    isHighlight: true 
  },
  { 
    name: 'Football', 
    href: '#football',
    subItems: [
      { name: 'T-Shirts', href: '#football-tshirts' },
      { name: 'Sweatshirts', href: '#football-sweats' },
      { name: 'Hoodies', href: '#football-hoodies' },
      { name: 'View All', href: '#football' },
    ]
  },
  { 
    name: 'Baseball', 
    href: '#baseball',
    subItems: [
      { name: 'T-Shirts', href: '#baseball-tshirts' },
      { name: 'Sweatshirts', href: '#baseball-sweats' },
      { name: 'View All', href: '#baseball' },
    ]
  },
  { 
    name: 'Basketball', 
    href: '#basketball',
    subItems: [
      { name: 'T-Shirts', href: '#basketball-tshirts' },
      { name: 'Hoodies', href: '#basketball-hoodies' },
      { name: 'View All', href: '#basketball' },
    ]
  },
  { 
    name: 'Soccer', 
    href: '#soccer',
    subItems: [
      { name: 'T-Shirts', href: '#soccer-tshirts' },
      { name: 'Accessories', href: '#soccer-acc' },
      { name: 'View All', href: '#soccer' },
    ]
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
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
                <span className="text-white font-bold text-xl">BF</span>
              </div>
              <span className="hidden sm:block text-2xl font-bold tracking-tight text-primary uppercase">
                BleacherField
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-4 h-full items-center">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative group h-full flex items-center"
                onMouseEnter={() => item.subItems && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 text-sm font-semibold transition-colors tracking-wide rounded-full ${
                    item.isHighlight 
                      ? 'text-primary bg-primary/5 hover:bg-primary/10' 
                      : 'text-primary/80 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.isHighlight && <Sparkles className="h-3 w-3 mr-1" />}
                  <span>{item.name}</span>
                  {item.subItems && (
                    <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Desktop Dropdown */}
                {item.subItems && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-48 mt-1 p-2 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-primary/5 z-50"
                      >
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2 text-sm font-medium text-primary/70 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-primary hover:bg-primary/5 rounded-full transition-colors">
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
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-background shadow-2xl z-50 p-6 flex flex-col overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">BF</span>
                    </div>
                    <span className="text-xl font-bold text-primary">MENU</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-primary/5 rounded-full">
                  <X className="h-6 w-6 text-primary" />
                </button>
              </div>

              <div className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <MobileNavItem key={item.name} item={item} setIsOpen={setIsOpen} />
                ))}
              </div>

              <div className="mt-auto pt-10">
                <Link 
                  href="https://etsy.com"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 bg-primary text-white py-4 rounded-[1.5rem] font-bold shadow-lg shadow-primary/20"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>Shop on Etsy</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

function MobileNavItem({ item, setIsOpen }: { item: any; setIsOpen: any }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!item.subItems) {
    return (
      <Link
        href={item.href}
        onClick={() => setIsOpen(false)}
        className={`flex items-center py-4 px-2 text-2xl font-bold text-primary border-b border-primary/5 ${item.isHighlight ? 'text-primary' : ''}`}
      >
        {item.isHighlight && <Sparkles className="h-5 w-5 mr-2 text-primary" />}
        {item.name}
      </Link>
    );
  }

  return (
    <div className="border-b border-primary/5">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between py-4 px-2 text-2xl font-bold text-primary"
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
            className="overflow-hidden bg-primary/5 rounded-2xl mb-4"
          >
            <div className="flex flex-col py-2">
              {item.subItems.map((sub: any) => (
                <Link
                  key={sub.name}
                  href={sub.href}
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-3 text-lg font-semibold text-primary/70 hover:text-primary transition-colors"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
