'use client';

import { use } from 'react';
import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import { products } from '@/data/products';
import { motion } from 'framer-motion';

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

  // Filter products by category slug
  const categoryProducts = products.filter(
    (p) => p.category.toLowerCase() === slug.toLowerCase()
  );

  return (
    <main className="min-h-screen pt-32 pb-20 bg-background">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs />
        
        {/* Category Header */}
        <div className="mb-12">
            <h1 className="text-6xl md:text-9xl font-black text-primary uppercase tracking-tighter leading-none mb-4">
                {categoryName} <br />
                <span className="text-primary/10 italic">Collection.</span>
            </h1>
            <p className="max-w-md text-primary/40 font-bold text-sm uppercase tracking-widest leading-relaxed">
                Premium {categoryName} spirit wear curated for the hometown faithful. Experience the elite showroom.
            </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-12">
          {/* Sidebar / Mobile Filter Bar */}
          <Sidebar />

          {/* Product Feed */}
          <div className="flex-grow">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-primary/5">
                <span className="text-[10px] font-black text-primary/30 uppercase tracking-[0.5em]">
                    Displaying {categoryProducts.length} Results
                </span>
                <div className="flex items-center space-x-4">
                    <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest">Sort: Featured</span>
                </div>
            </div>

            {categoryProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryProducts.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="py-32 text-center bg-primary/5 rounded-[3rem]">
                <p className="text-primary/40 font-bold uppercase tracking-widest">No products found in this boutique yet.</p>
              </div>
            )}
            
            {/* Pagination Placeholder */}
            <div className="mt-20 pt-10 border-t border-primary/5 text-center">
                <button className="px-10 py-4 bg-primary text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform">
                    Load Archive
                </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
