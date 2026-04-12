'use client';

import { use, useState, useMemo } from 'react';
import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import { products } from '@/data/products';
import { franchises } from '@/data/franchises';
import { motion, AnimatePresence } from 'framer-motion';

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

  // State for filtering
  const [activeTeamId, setActiveTeamId] = useState<string | null>(null);
  const [activeRole, setActiveRole] = useState('All');
  const [activeModel, setActiveModel] = useState<string | null>(null);

  // Get active team data for color transformation
  const selectedFranchise = useMemo(() => 
    franchises.find(f => f.id === activeTeamId), 
    [activeTeamId]
  );

  // Filter products based on Sidebar choices
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchCategory = p.category.toLowerCase() === slug.toLowerCase();
      const matchTeam = !activeTeamId || p.franchiseId === activeTeamId;
      const matchRole = activeRole === 'All' || p.role?.includes(activeRole);
      const matchModel = !activeModel || p.model === activeModel;
      return matchCategory && matchTeam && matchRole && matchModel;
    }).sort((a, b) => (a.isNew ? -1 : 1)); // Corrected sort logic
  }, [slug, activeTeamId, activeRole, activeModel]);

  return (
    <main 
      className="min-h-screen pt-32 pb-20 transition-colors duration-700"
      style={{ 
        backgroundColor: selectedFranchise ? `${selectedFranchise.colors.primary}05` : 'transparent' 
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs />
        
        {/* Category Header with Transitioning Accent */}
        <div className="mb-12 relative overflow-hidden p-8 rounded-[3rem] border border-primary/5">
            {/* Visual Accent Background */}
            <AnimatePresence mode="wait">
                {selectedFranchise && (
                    <motion.div 
                        key={selectedFranchise.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-0"
                        style={{ backgroundColor: selectedFranchise.colors.primary }}
                    />
                )}
            </AnimatePresence>

            <div className="relative z-10">
                <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-4 transition-colors duration-500"
                    style={{ color: selectedFranchise ? selectedFranchise.colors.primary : 'var(--primary)' }}>
                    {activeTeamId ? selectedFranchise?.name : categoryName} <br />
                    <span className="text-primary/10 italic">Collection.</span>
                </h1>
                <p className="max-w-md text-primary/40 font-bold text-sm uppercase tracking-widest leading-relaxed">
                    Premium {activeTeamId ? selectedFranchise?.name : categoryName} spirit wear curated for the hometown faithful.
                </p>
            </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-12">
          {/* Sidebar with state pass-down logic */}
          <Sidebar 
                activeSport={categoryName} 
                activeTeamId={activeTeamId}
                setActiveTeamId={setActiveTeamId}
                activeRole={activeRole}
                setActiveRole={setActiveRole}
            />

          {/* Product Feed */}
          <div className="flex-grow">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-primary/5">
                <span className="text-[10px] font-black text-primary/30 uppercase tracking-[0.5em]">
                    Displaying {filteredProducts.length} Results
                </span>
                <div className="flex items-center space-x-2">
                    {['t-shirt', 'sweatshirt', 'hoodie'].map(model => (
                        <button 
                            key={model}
                            onClick={() => setActiveModel(activeModel === model ? null : model)}
                            className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                                activeModel === model 
                                ? 'bg-primary text-white' 
                                : 'bg-primary/5 text-primary/40 hover:bg-primary/10'
                            }`}
                            style={{ 
                                backgroundColor: activeModel === model && selectedFranchise ? selectedFranchise.colors.primary : '' 
                            }}
                        >
                            {model}s
                        </button>
                    ))}
                </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, idx) => (
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
          </div>
        </div>
      </div>
    </main>
  );
}
