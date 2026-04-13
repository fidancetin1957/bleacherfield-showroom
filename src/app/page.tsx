import Header from "@/components/Header";
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
      
      {/* Footer Prototype */}
      <footer className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 relative overflow-hidden rounded-2xl">
                  <img 
                    src="/images/logo.webp" 
                    alt="BleacherField Logo" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="text-2xl font-bold tracking-tight uppercase">
                  BleacherField
                </span>
              </div>
              <p className="text-white/60 max-w-sm leading-relaxed">
                Authentic sports apparel for those who live for the gameday energy. Capture the hometown spirit in every stitch.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-black uppercase tracking-widest text-white/40">Quick Links</h4>
              <ul className="space-y-4 font-medium">
                <li><a href="#showroom" className="hover:text-white/80 transition-colors">Showroom</a></li>
                <li><Link href="/story" className="hover:text-white/80 transition-colors">Our Story</Link></li>
                <li><Link href="/legal" className="hover:text-white/80 transition-colors">Returns & Policies</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-black uppercase tracking-widest text-white/40">Legal</h4>
              <ul className="space-y-4 font-medium">
                <li><Link href="/legal" className="hover:text-white/80 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/legal" className="hover:text-white/80 transition-colors">Terms of Service</Link></li>
                <li><Link href="/legal" className="hover:text-white/80 transition-colors">Shipping Info</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm font-bold text-white/40 uppercase tracking-widest">
            <p>© 2026 BleacherField • v1.3.0_Connectivity_Video_Phase • Hometown Spirit.</p>
            <div className="flex space-x-8">
              <a href="https://www.instagram.com/bleacherfield/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href="https://www.facebook.com/BleacherField/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
              <a href="https://www.pinterest.com/BleacherField/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Pinterest</a>
              <a href="https://popretroanddreams.etsy.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Etsy Shop</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
