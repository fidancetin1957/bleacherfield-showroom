'use client';

import Link from 'next/link';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Football', href: '#football' },
  { name: 'Baseball', href: '#baseball' },
  { name: 'Basketball', href: '#basketball' },
  { name: 'Soccer', href: '#soccer' },
  { name: 'Hockey', href: '#hockey' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-primary/80 hover:text-primary transition-colors tracking-wide"
              >
                {item.name}
              </Link>
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
              className="fixed inset-y-0 left-0 w-[80%] max-w-sm bg-background shadow-2xl z-50 p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-bold text-primary">MENU</span>
                <button onClick={() => setIsOpen(false)} className="p-2">
                  <X className="h-6 w-6 text-primary" />
                </button>
              </div>
              <div className="flex flex-col space-y-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-bold text-primary border-b border-primary/5 pb-2"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="mt-auto pt-10">
                <Link 
                  href="https://etsy.com"
                  className="w-full flex items-center justify-center space-x-2 bg-primary text-white py-4 rounded-[1.5rem] font-bold"
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
