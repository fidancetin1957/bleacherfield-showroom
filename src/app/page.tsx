import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <Hero />
      <ProductGrid />
      
      {/* Footer Prototype */}
      <footer className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">BF</span>
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
                <li><a href="#" className="hover:text-white/80 transition-colors">Showroom</a></li>
                <li><a href="#" className="hover:text-white/80 transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white/80 transition-colors">Contact US</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-black uppercase tracking-widest text-white/40">Legal</h4>
              <ul className="space-y-4 font-medium">
                <li><a href="#" className="hover:text-white/80 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white/80 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white/80 transition-colors">Shipping Info</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm font-bold text-white/40 uppercase tracking-widest">
            <p>© 2026 BleacherField. Hometown Spirit.</p>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Pinterest</a>
              <a href="#" className="hover:text-white transition-colors">Etsy Shop</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
