import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';
import { products } from '@/data/products';

const categories = ['All', 'Football', 'Baseball', 'Basketball'];

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return products;
    return products.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="showroom" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-8 md:space-y-0">
          <div className="space-y-2">
            <h2 className="text-sm font-black text-primary/40 uppercase tracking-[0.3em]">
              The Showroom
            </h2>
            <p className="text-4xl md:text-5xl font-bold text-primary uppercase tracking-tighter">
                Latest <span className="text-primary/40">Drops</span>
            </p>
          </div>
          
          <div className="flex space-x-2 overflow-x-auto pb-4 md:pb-0 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all whitespace-nowrap ${
                        activeCategory === cat
                        ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                        : 'bg-white text-primary/40 border-primary/5 hover:border-primary/20'
                    }`}
                >
                    {cat}
                </button>
            ))}
          </div>
        </div>

        {/* Horizontal Slider on Mobile, Grid on Desktop */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible pb-8 md:pb-0 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="min-w-[280px] sm:min-w-0 snap-center"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-20 text-center">
            <button className="px-12 py-5 bg-primary/5 text-primary rounded-[1.5rem] font-bold uppercase tracking-widest hover:bg-primary/10 transition-all active:scale-95">
                View Full Catalog
            </button>
        </div>
      </div>
    </section>
  );
}
