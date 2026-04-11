'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, ExternalLink } from 'lucide-react';
import { Product } from '@/data/products';
import Link from 'next/link';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col bg-card rounded-[2rem] overflow-hidden border border-primary/5 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
    >
      {/* Image Area */}
      <div className="aspect-[4/5] bg-accent relative overflow-hidden">
        {/* Placeholder for real images */}
        <div className="absolute inset-0 flex items-center justify-center text-primary/10 font-black text-4xl uppercase select-none group-hover:scale-110 transition-transform duration-700">
          {product.category}
        </div>
        
        {/* Badge */}
        <div className="absolute top-4 left-4 bg-primary/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest z-10">
          {product.category}
        </div>

        {/* Action Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10">
           <Link 
            href={product.etsyUrl}
            target="_blank"
            className="w-full h-14 bg-primary text-white flex items-center justify-center space-x-2 rounded-[1.25rem] font-bold text-sm shadow-xl"
           >
             <ShoppingCart className="w-4 h-4" />
             <span>Buy on Etsy</span>
             <ExternalLink className="w-3 h-3 opacity-50" />
           </Link>
        </div>
      </div>

      {/* Info Area */}
      <div className="p-6 space-y-2">
        <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold text-primary uppercase leading-tight group-hover:text-primary/80 transition-colors">
                {product.name}
            </h3>
            <span className="text-lg font-black text-primary/40">${product.price}</span>
        </div>
        <p className="text-xs font-semibold text-primary/50 tracking-wider uppercase">
            {product.color}
        </p>
      </div>
    </motion.div>
  );
}
