'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from '@/components/Breadcrumbs';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real scenario, this would post to Formspree or a backend
    // Since we are creating the UI first, we simulate success
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-12">
            {/* Left: Branding & Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-primary/5 px-4 py-2 rounded-full text-xs font-black tracking-widest text-primary uppercase">
                    <Mail className="h-4 w-4" />
                    <span>The Design Arena</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-primary uppercase tracking-tighter leading-none">
                    Get in <br />
                    <span className="text-primary/30 italic">Touch.</span>
                </h1>
                <p className="max-w-md text-xl text-primary/60 font-medium leading-relaxed">
                    Have a vision for a custom gameday design? Or just want to talk stadium spirit? Our arena is always open.
                </p>
              </div>

              <div className="space-y-8">
                <div className="p-8 bg-primary/5 rounded-[3rem] border border-primary/5 group hover:border-primary/20 transition-all">
                    <h3 className="text-sm font-black uppercase tracking-widest text-primary/40 mb-4">Official Shop Support</h3>
                    <p className="text-primary font-bold text-lg mb-6">
                        For order tracking and immediate support, please use our Etsy portal.
                    </p>
                    <a 
                        href="https://popretroanddreams.etsy.com" 
                        target="_blank"
                        className="flex items-center space-x-3 text-primary font-black uppercase tracking-widest text-[10px] hover:translate-x-2 transition-transform"
                    >
                        <MessageCircle className="h-5 w-5" />
                        <span>Message on Etsy Marketplace</span>
                    </a>
                </div>
              </div>
            </div>

            {/* Right: The Secure Form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-[4rem] blur-3xl -z-10" />
              
              <div className="bg-white border border-primary/5 p-8 md:p-12 rounded-[3.5rem] shadow-2xl">
                {!submitted ? (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em] ml-2">Subject</label>
                        <input 
                            required
                            type="text" 
                            placeholder="e.g. Custom Design Request"
                            className="w-full bg-primary/5 border-none rounded-2xl p-5 font-bold text-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-primary/20"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em] ml-2">Your Message</label>
                        <textarea 
                            required
                            rows={5}
                            placeholder="Tell us about your gameday vision..."
                            className="w-full bg-primary/5 border-none rounded-[2rem] p-6 font-bold text-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-primary/20"
                        ></textarea>
                    </div>

                    <button 
                        type="submit"
                        className="w-full h-20 bg-primary text-white rounded-[2rem] font-black uppercase tracking-[0.3em] flex items-center justify-center space-x-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20"
                    >
                        <span>Send Message</span>
                        <Send className="h-5 w-5" />
                    </button>

                    <p className="text-center text-[8px] font-bold text-primary/20 uppercase tracking-widest">
                        Email hidden for security • Response within 24-48h
                    </p>
                  </motion.form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 text-center space-y-6"
                  >
                    <div className="inline-flex p-6 bg-green-500/10 rounded-full text-green-600 mb-4">
                        <CheckCircle2 className="h-12 w-12" />
                    </div>
                    <h2 className="text-3xl font-black text-primary uppercase tracking-tighter">Message Sent!</h2>
                    <p className="text-primary/60 font-medium max-w-xs mx-auto">
                        Your gameday vision has been received. Our team will reach out at your provided contact shortly.
                    </p>
                    <button 
                        onClick={() => setSubmitted(false)}
                        className="text-primary/40 font-black uppercase text-[10px] tracking-widest hover:text-primary transition-colors"
                    >
                        Send another message
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
