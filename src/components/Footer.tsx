'use client';

import Link from 'next/link';
import { Mail, MessageCircle, Instagram, Facebook, LayoutPanelLeft as Pinterest, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Visual Texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 border-b border-white/10 pb-20">
          
          {/* Brand Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img 
                  src="/images/logo.webp" 
                  alt="BleacherField Logo" 
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-3xl font-black tracking-tighter uppercase italic">
                Bleacher<span className="text-white/30">Field</span>
              </span>
            </div>
            <p className="text-white/60 font-medium leading-relaxed text-lg">
              Authentic sports apparel for those who live for the gameday energy. Capture the hometown spirit in every stitch.
            </p>
          </div>

          {/* Contact Column */}
          <div className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-white/40">Contact Us</h4>
            <div className="space-y-6">
                <div className="flex items-center space-x-3 group">
                    <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                        <Mail className="h-5 w-5 text-white/70" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">Email Support</p>
                        <p className="font-bold text-white/90 group-hover:text-white transition-colors">info@bleacherfield.com</p>
                    </div>
                </div>

                <Link 
                    href="https://popretroanddreams.etsy.com" 
                    target="_blank"
                    className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-[1.5rem] hover:bg-white/10 transition-all group"
                >
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-white/10 rounded-lg">
                            <MessageCircle className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-black text-xs uppercase tracking-widest">Message on Etsy</span>
                    </div>
                    <ExternalLink className="h-4 w-4 text-white/30 group-hover:text-white transition-all" />
                </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-white/40">The Arena</h4>
            <ul className="space-y-4 font-bold uppercase tracking-widest text-xs">
              <li><Link href="/" className="text-white/60 hover:text-white transition-colors">Showroom Home</Link></li>
              <li><Link href="/category" className="text-white/60 hover:text-white transition-colors">Discovery Hub</Link></li>
              <li><Link href="/gameday" className="text-white/60 hover:text-white transition-colors">Game Day Hub</Link></li>
              <li><Link href="/story" className="text-white/60 hover:text-white transition-colors">Our Heritage</Link></li>
            </ul>
          </div>

          {/* Legal Anchors */}
          <div className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-white/40">Support & Policies</h4>
            <ul className="space-y-4 font-bold uppercase tracking-widest text-xs">
              <li><Link href="/legal#shipping" className="text-white/60 hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link href="/legal#returns" className="text-white/60 hover:text-white transition-colors">Returns & Refunds</Link></li>
              <li><Link href="/legal#terms" className="text-white/60 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/legal#privacy" className="text-white/60 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Prominent Footer Bottom */}
        <div className="pt-16 flex flex-col items-center">
            <div className="flex items-center space-x-6 mb-12">
                <a href="https://www.instagram.com/bleacherfield/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition-all">
                    <Instagram className="h-8 w-8 text-white" />
                </a>
                <a href="https://www.facebook.com/BleacherField/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition-all">
                    <Facebook className="h-8 w-8 text-white" />
                </a>
                <a href="https://www.pinterest.com/BleacherField/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition-all">
                    <Pinterest className="h-8 w-8 text-white" />
                </a>
            </div>
            
            <div className="text-center space-y-4">
                <p className="text-white/30 font-black text-[10px] uppercase tracking-[0.5em]">
                    © 2026 BleacherField • Authorized Showroom • Hometown Spirit Only.
                </p>
                <div className="flex items-center justify-center space-x-2 text-white/10 font-bold text-[8px] uppercase tracking-widest">
                    <span>Next.js 16</span>
                    <span>•</span>
                    <span>Vercel Optimized</span>
                    <span>•</span>
                    <span>SECURE SHOPPING VIA ETSY</span>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
