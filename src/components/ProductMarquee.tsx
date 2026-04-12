'use client';

import { products } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProductMarquee() {
  // Triple the products to ensure a seamless loop
  const marqueeProducts = [...products, ...products, ...products];

  return (
    <section className="py-20 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 mb-10 flex items-end justify-between">
        <div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary uppercase tracking-tighter">
                Latest <span className="text-primary/40">Drops</span>
            </h2>
            <p className="text-primary/60 mt-2 font-medium">Fresh from the stadium, designed for you.</p>
        </div>
        <Link href="#showroom" className="hidden sm:block text-primary font-bold border-b-2 border-primary/10 hover:border-primary transition-all pb-1">
            View All Showroom
        </Link>
      </div>

      <div className="relative flex">
        {/* Gradients for a smooth "fade-in/out" effect on the edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap pt-4 pb-8">
          {marqueeProducts.map((product, idx) => (
            <div 
              key={`${product.id}-${idx}`} 
              className="inline-block mx-4 w-[280px] md:w-[350px] group"
            >
              <Link href={product.etsyUrl} target="_blank">
                <div className="relative aspect-[4/5] bg-primary/5 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-primary/5 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:-translate-y-2">
                  {/* Image Placeholder - using background color since we don't have real images yet */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent flex items-center justify-center">
                    <span className="text-primary/10 font-bold text-4xl uppercase rotate-[-15deg]">
                        {product.category}
                    </span>
                  </div>
                  
                  {/* Real Image once available */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-primary/10" />
                  
                  {/* Product Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/20 to-transparent">
                    <h3 className="text-white font-bold text-xl drop-shadow-md">{product.name}</h3>
                    <p className="text-white/80 font-medium">${product.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      {/* CSS for Infrastructure (Will be added to globals.css in next step if not present) */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
