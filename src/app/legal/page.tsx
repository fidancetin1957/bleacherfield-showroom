import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
            <div id="returns" className="scroll-mt-32 space-y-6">
                <h2 className="text-2xl font-black text-primary uppercase tracking-tight">Returns & Refunds</h2>
                <div className="p-8 bg-primary/5 rounded-[2.5rem] border border-primary/5">
                    <p className="text-xl text-primary font-bold leading-relaxed mb-4">
                        "Defective products are 100% refundable. Other return conditions are reserved by BleacherField."
                    </p>
                    <p className="text-primary/60 text-sm font-medium">
                        At BleacherField, each piece is custom-made just for you using our premium partners. We stand by our quality, but if there’s a production error, we’ve got you covered with our Hometown Spirit Guarantee.
                    </p>
                </div>
            </div>

            {/* Production & Shipping */}
            <div id="shipping" className="scroll-mt-32 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 p-8 bg-primary/5 rounded-[2.5rem]">
                    <h3 className="text-xs font-black uppercase tracking-widest text-primary/40">Production Speed</h3>
                    <p className="text-primary font-bold text-lg">Standard production takes 2-5 business days (Excluding Weekends).</p>
                </div>
                <div className="space-y-4 p-8 bg-primary/5 rounded-[2.5rem]">
                    <h3 className="text-xs font-black uppercase tracking-widest text-primary/40">Shipping Info</h3>
                    <p className="text-primary font-bold text-lg">Average delivery is 3-7 business days across the USA via premium carriers.</p>
                </div>
            </div>

            {/* Terms & Privacy */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-primary/5 pt-16">
                <div id="terms" className="scroll-mt-32 space-y-6">
                    <h2 className="text-xl font-black text-primary uppercase tracking-tight">Terms of Service</h2>
                    <p className="text-primary/60 text-sm leading-relaxed">
                        By using the BleacherField Showroom, you agree to our terms of curated commerce. All designs are original property or licensed for spirit wear production. Operations are powered by the Etsy Marketplace framework.
                    </p>
                </div>
                <div id="privacy" className="scroll-mt-32 space-y-6">
                    <h2 className="text-xl font-black text-primary uppercase tracking-tight">Privacy Policy</h2>
                    <p className="text-primary/60 text-sm leading-relaxed">
                        Your privacy is our goal. We only collect data necessary for transaction processing and fulfillment through our secure Etsy partner nodes. We never sell your data to 3rd party bleacher-sitters.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
