'use client';

import { use, useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import { products } from '@/data/products';
import { franchises } from '@/data/franchises';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter } from 'lucide-react';
import Footer from "@/components/Footer";

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const searchParams = useSearchParams();
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

  // State for filtering
  const [activeTeamId, setActiveTeamId] = useState<string | null>(searchParams.get('team'));
  const [activeRole, setActiveRole] = useState(searchParams.get('role') || 'All');
  const [activeModel, setActiveModel] = useState<string | null>(searchParams.get('model'));
  const [activeAudience, setActiveAudience] = useState<string | null>(searchParams.get('audience'));

  // Sync state with URL when params change (for browser back/forward and direct links)
  useEffect(() => {
    setActiveTeamId(searchParams.get('team'));
    setActiveRole(searchParams.get('role') || 'All');
    setActiveModel(searchParams.get('model'));
    setActiveAudience(searchParams.get('audience'));
  }, [searchParams]);

  // Get active team data for color transformation
  const selectedFranchise = useMemo(() => 
    franchises.find(f => f.id === activeTeamId), 
    [activeTeamId]
  );

  // Filter products based on Sidebar choices
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // 1. Sport Category Match
      const matchCategory = p.category.toLowerCase() === slug.toLowerCase();
      
      // 2. Audience Match (Adult, Youth)
      const matchAudience = !activeAudience || p.audience === activeAudience;
      
      // 3. Team Match
      const matchTeam = !activeTeamId || p.franchiseId === activeTeamId;
      
      // 4. Role Match (Mom, Dad, etc.)
      const matchRole = activeRole === 'All' || p.role?.includes(activeRole);
      
      // 5. Model Match
      const matchModel = !activeModel || p.model === activeModel;
      
      return matchCategory && matchAudience && matchTeam && matchRole && matchModel;
    }).sort((a, b) => (a.isNew ? -1 : 1));
  }, [slug, activeTeamId, activeRole, activeModel, activeAudience]);

  return (
    <main 
      className="min-h-screen pt-32 pb-20 transition-colors duration-700"
      style={{ 
        backgroundColor: selectedFranchise ? `${selectedFranchise.colors.primary}05` : 'transparent' 
      }}
    >
      {/* Mobile Floating Filter Button */}
      <div className="xl:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <button 
            onClick={() => {
                const sidebar = document.querySelector('aside');
                sidebar?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full shadow-2xl font-black text-[10px] uppercase tracking-[0.2em] border border-white/10 active:scale-95 transition-transform"
        >
            <Filter className="h-4 w-4" />
            <span>Apply Filters</span>
        </button>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-12">
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
                
                {/* Active Category Indicators */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {activeAudience && (
                        <span className="px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                            AUDIENCE: {activeAudience}
                        </span>
                    )}
                    {activeModel && (
                        <span className="px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                            MODEL: {activeModel}
                        </span>
                    )}
                </div>
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
                activeAudience={activeAudience}
                setActiveAudience={setActiveAudience}
                activeModel={activeModel}
                setActiveModel={setActiveModel}
            />

          {/* Product Feed */}
          <div className="flex-grow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-primary/5 gap-4">
                <span className="text-[10px] font-black text-primary/30 uppercase tracking-[0.5em] whitespace-nowrap">
                    Displaying {filteredProducts.length} Results
                </span>
                <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 pb-1 sm:pb-0">
                    {['t-shirt', 'sweatshirt', 'hoodie', 'toddler-tee', 'baby-suit']
                      .filter(m => activeAudience !== 'adult' || !['toddler-tee', 'baby-suit'].includes(m))
                      .map(model => (
                        <button 
                            key={model}
                            onClick={() => setActiveModel(activeModel === model ? null : model)}
                            className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                                activeModel === model 
                                ? 'bg-primary text-white' 
                                : 'bg-primary/5 text-primary/40 hover:bg-primary/10'
                            }`}
                            style={{ 
                                backgroundColor: activeModel === model && selectedFranchise ? selectedFranchise.colors.primary : '' 
                            }}
                        >
                            {model.replace('-', ' ')}s
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
                <p className="text-primary/40 font-bold uppercase tracking-widest">No products found for this selection yet.</p>
                <button 
                    onClick={() => {
                        setActiveAudience(null);
                        setActiveModel(null);
                        setActiveTeamId(null);
                        setActiveRole('All');
                    }}
                    className="mt-4 text-[10px] font-black underline uppercase tracking-widest text-primary hover:text-primary/60"
                >
                    Clear All Filters
                </button>
              </div>
            )}

            {/* SEO Editorial Section - Fashion & Spirit Guide */}
            <div className="mt-40 pt-20 border-t border-primary/10">
                <article className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-4">
                        <span className="text-[10px] font-black text-primary/30 uppercase tracking-[0.5em]">Showroom Editorial</span>
                        <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter leading-none">
                            The Ultimate <br />
                            <span className="text-primary/20 italic">Gameday Style Guide.</span>
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm leading-relaxed text-primary/60 font-medium">
                        <div className="space-y-6">
                            <p>
                                Elevating your stadium ritual starts with more than just a logo. At BleacherField, our <span className="text-primary font-bold italic underline decoration-primary/20 transition-all hover:decoration-primary cursor-default">Stadium Collection</span> is designed for the fans who carry the coordinates of their home field in their soul. Whether you’re layering a heavyweight hoodie for a late-season freeze or styling a minimalist tee for a spring opener, our collection bridges the gap between high-fashion and street-level spirit.
                            </p>
                            <p>
                                The <span className="text-primary font-bold italic underline decoration-primary/20 transition-all hover:decoration-primary cursor-default">Tailgate Club</span> aesthetic isn't just about the parking lot; it's about the heritage of the hunt. Every design in this collection is a nod to the shared ceremonies of the bleacher faithful.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <p>
                                Our <span className="text-primary font-bold italic underline decoration-primary/20 transition-all hover:decoration-primary cursor-default">City Crossover</span> series defines the new era of hometown pride. We believe "Chicago is for Bears" and "Seattle lives for the Diamond" — it's a deep-rooted location identity that transcends simple merchandising. 
                            </p>
                            <p>
                                Pairing our <span className="text-primary font-bold underline decoration-primary/10">{categoryName}</span> range with coordinate-stamped accessories or vintage denim creates a look that is both timeless and tailored to the local pulse. Explore the collection and wear your coordinates with pride.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-8">
                        {['Stadium Coordinates', 'Tailgate Legend', 'Hometown Pride', 'Bleacher Faithful', 'Coordinates Gear'].map(tag => (
                            <span key={tag} className="text-[9px] font-black text-primary/20 uppercase tracking-widest border border-primary/5 px-4 py-2 rounded-full italic hover:bg-primary/5 transition-colors cursor-default">
                                #{tag.replace(' ', '')}
                            </span>
                        ))}
                    </div>
                </article>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
