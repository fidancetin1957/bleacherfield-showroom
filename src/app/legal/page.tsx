import Header from "@/components/Header";

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-40 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-primary/5 px-4 py-2 rounded-full text-xs font-black tracking-widest text-primary mb-8 uppercase">
            <span>Showroom Policies</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-primary uppercase tracking-tighter leading-none mb-16">
            Legal & <br />
            <span className="text-primary/30">Returns.</span>
          </h1>

          <div className="space-y-16">
            {/* Returns */}
            <div className="space-y-6">
                <h2 className="text-2xl font-black text-primary uppercase tracking-tight">Returns & Refunds</h2>
                <div className="p-8 bg-primary/5 rounded-[2.5rem] border border-primary/5">
                    <p className="text-xl text-primary font-bold leading-relaxed mb-4">
                        "Defective products are 100% refundable. Other return conditions are reserved by BleacherField."
                    </p>
                    <p className="text-primary/60 text-sm font-medium">
                        At BleacherField, each piece is custom-made just for you using our premium partners. We stand by our quality, but if there’s a production error, we’ve got you covered with our Hometown Spirit Guarantee.
                    </p>
                    <p className="mt-4 text-primary font-black uppercase text-[10px] tracking-widest">
                        Standard production: 1-3 Business Days (Excluding Weekends).
                    </p>
                </div>
            </div>

            {/* Production & Shipping */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <h3 className="text-sm font-black uppercase tracking-widest text-primary/40">Production</h3>
                    <p className="text-primary font-semibold">Standard production takes 2-5 business days.</p>
                </div>
                <div className="space-y-4">
                    <h3 className="text-sm font-black uppercase tracking-widest text-primary/40">Shipping</h3>
                    <p className="text-primary font-semibold">Average delivery is 3-7 business days across the USA.</p>
                </div>
            </div>

            {/* Privacy Placeholder */}
            <div className="pt-10 border-t border-primary/5">
                <p className="text-xs text-primary/30 font-bold uppercase tracking-[0.2em]">Privacy & Terms apply to all showroom transactions. BleacherField is an independent boutique partner of Etsy Marketplace.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 bg-primary text-white/40 text-center font-bold text-sm uppercase tracking-widest">
        <p>© 2026 BleacherField • Hometown Spirit.</p>
      </footer>
    </main>
  );
}
