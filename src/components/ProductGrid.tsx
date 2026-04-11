'use client';

import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { products } from '@/data/products';

export default function ProductGrid() {
  return (
    <section id="showroom" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="space-y-2">
            <h2 className="text-sm font-black text-primary/40 uppercase tracking-[0.3em]">
              The Showroom
            </h2>
            <p className="text-4xl md:text-5xl font-bold text-primary uppercase tracking-tighter">
                Latest <span className="text-primary/40">Drops</span>
            </p>
          </div>
          
          <div className="flex space-x-2">
            {['All', 'Football', 'Baseball', 'Basketball'].map((cat) => (
                <button
                    key={cat}
                    className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest border border-primary/10 hover:bg-primary hover:text-white transition-all"
                >
                    {cat}
                </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-20 text-center">
            <button className="px-12 py-5 bg-primary/5 text-primary rounded-[1.5rem] font-bold uppercase tracking-widest hover:bg-primary/10 transition-all">
                Load More Archive
            </button>
        </div>
      </div>
    </section>
  );
}
