'use client';

import Link from 'next/link';
import { Mail, MessageCircle, ExternalLink, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 border-b border-white/10 pb-20">
          
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 relative overflow-hidden rounded-2xl border border-white/10">
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
            <p className="text-white/60 font-medium leading-relaxed">
              Authentic sports apparel for those who live for the gameday energy. Capture the hometown spirit in every stitch.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-white/40">Contact Support</h4>
            <div className="space-y-6">
                <div className="flex items-center space-x-3 group">
                    <div className="p-3 bg-white/5 rounded-xl">
                        <Mail className="h-5 w-5 text-white/70" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">Email</p>
                        <p className="font-bold text-white/90">info@bleacherfield.com</p>
                    </div>
                </div>

                <Link 
                    href="https://popretroanddreams.etsy.com" 
                    target="_blank"
                    className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-[1.5rem] hover:bg-white/10 transition-all group"
                >
                    <div className="flex items-center space-x-3">
                        <MessageCircle className="h-5 w-5 text-white/70" />
                        <span className="font-black text-xs uppercase tracking-widest">Message on Etsy</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-white/30 group-hover:translate-x-1 transition-all" />
                </Link>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-white/40">The Arena</h4>
            <ul className="space-y-4 font-bold uppercase tracking-widest text-xs">
              <li><Link href="/" className="text-white/60 hover:text-white transition-colors">Showroom Home</Link></li>
              <li><Link href="/category" className="text-white/60 hover:text-white transition-colors">Discovery Hub</Link></li>
              <li><Link href="/gameday" className="text-white/60 hover:text-white transition-colors">Game Day Hub</Link></li>
              <li><Link href="/story" className="text-white/60 hover:text-white transition-colors">Our Heritage</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-white/40">Support</h4>
            <ul className="space-y-4 font-bold uppercase tracking-widest text-xs">
              <li><Link href="/legal#shipping" className="text-white/60 hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link href="/legal#returns" className="text-white/60 hover:text-white transition-colors">Returns & Refunds</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-white transition-colors underline underline-offset-4 decoration-white/20">Contact Us</Link></li>
              <li><Link href="/legal#terms" className="text-white/60 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/legal#privacy" className="text-white/60 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-16 flex flex-col items-center">
            <div className="flex items-center space-x-6 mb-12">
                {/* Manual SVGs for Social Media to avoid Lucide version errors */}
                <a href="https://www.instagram.com/bleacherfield/" target="_blank" className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition-all">
                    <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 1.764.319 2.1.444.444.172.762.378 1.096.712.334.334.54.652.712 1.096.125.336.382.734.444 2.1.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.319 1.764-.444 2.1-.172.444-.378.762-.712 1.096-.334.334-.652.54-1.096.712-.336.125-.734.382-2.1.444-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-1.764-.319-2.1-.444-.444-.172-.762-.378-1.096-.712-.334-.334-.54-.652-.712-1.096-.125-.336-.382-.734-.444-2.1-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.319-1.764.444-2.1.172-.444.378-.762.712-1.096.334-.334.652-.54 1.096-.712.336-.125.734-.382 2.1-.444 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.127.052-1.895.231-2.57.494-.698.271-1.291.633-1.882 1.224-.591.59-1.291 1.582-1.224 1.882-.494.675-.675 1.443-.494 2.57-.271.675.072 1.688.072 4.947s.014 3.667.072 4.947c.052 1.127.231 1.895.494 2.57.271.698.633 1.291 1.224 1.882.591.591 1.582 1.291 1.882 1.224.675.494 1.443.675 2.57.494.675.271 1.688.072 4.947.072s3.667-.014 4.947-.072c1.127-.052 1.895-.231 2.57-.494.698-.271 1.291-.633 1.882-1.224.591-.591 1.291-1.582 1.224-1.882.494-.675.675-1.443.494-2.57.271-.675.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.052-1.127-.231-1.895-.494-2.57-.271-.698-.633-1.291-1.224-1.882-.591-.591-1.582-1.291-1.882-1.224-.675-.494-1.443-.675-2.57-.494-.688-.271-1.688-.072-4.947-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://www.facebook.com/BleacherField/" target="_blank" className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition-all">
                    <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                </a>
                <a href="https://www.pinterest.com/BleacherField/" target="_blank" className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition-all">
                    <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.164 0 7.398 2.967 7.398 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C24.012 5.367 18.633 0 12.017 0z"/></svg>
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
