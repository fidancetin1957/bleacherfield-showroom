import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from '@/components/Hero';
import BoutiqueGrid from '@/components/BoutiqueGrid';
import ProductGrid from '@/components/ProductGrid';
import ProductMarquee from '@/components/ProductMarquee';
import Link from 'next/link';
import { Trophy, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <BoutiqueGrid />
      
      {/* Game Day Hub Spotlight - NARROWED & SEALED */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 relative z-10 pb-20">
        <Link href="/gameday" className="group block">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#002147] p-6 md:p-10 shadow-xl transition-transform duration-500 group-hover:scale-[1.01]">
            {/* Stadium Texture Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-transparent to-primary/50" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-[9px] font-black tracking-[0.3em] text-white/70 mb-4 uppercase">
                  <Trophy className="h-3 w-3 text-white" />
                  <span>The Spirit Boutique</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-4">
                  Game Day <br />
                  <span className="text-white/30 italic">Unleashed.</span>
                </h2>
                <p className="text-white/40 font-bold max-w-md text-sm leading-relaxed">
                  Experience our curated stadium collections. From the sidelines to the bleachers, suiting up the entire family.
                </p>
              </div>
              
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-white/30 transition-colors">
                    <div className="absolute inset-2 border border-white/5 rounded-full animate-spin-slow" />
                    <ArrowRight className="h-8 w-8 text-white group-hover:translate-x-2 transition-transform duration-500" />
                </div>
                <span className="text-white font-black text-[10px] uppercase tracking-widest">Enter the Hub</span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      <ProductGrid />

      <section className="bg-primary/5 py-32 rounded-[4rem] mx-4 mb-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 uppercase tracking-tighter">The Bleacher Story</h2>
          <p className="text-xl text-primary/60 font-medium leading-relaxed mb-10">
            It's not just apparel; it's the roar of the crowd, the tradition of the town, and the spirit of the game passed down through generations. Welcome to the home of American sports culture.
          </p>
          <button className="bg-primary text-white px-10 py-4 rounded-3xl font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
            Our Heritage
          </button>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
