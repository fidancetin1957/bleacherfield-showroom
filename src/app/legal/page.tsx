import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

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
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-black text-primary uppercase tracking-tight">Returns & Refunds</h2>
                    <CheckCircle2 className="h-6 w-6 text-primary/20" />
                </div>
                <div className="p-10 bg-primary/5 rounded-[3rem] border border-primary/5 shadow-inner">
                    <p className="text-2xl text-primary font-bold leading-tight mb-6 italic">
                        "Your Spirit is our Priority. If it's broken, we fix it. Period."
                    </p>
                    <div className="space-y-4 text-primary/70 font-medium leading-relaxed">
                        <p>
                            At BleacherField, each item is a unique boutique creation, tailored for you. Because of the custom nature of our spirit wear, we only accept returns for products that are defective or damaged upon arrival.
                        </p>
                        <p>
                            <strong>Hometown Spirit Guarantee:</strong> If your gameday gear arrived with a print error or a stitch out of place, we will issue a full refund or a zero-cost replacement within 30 days. No gatekeeping, just gameday spirit.
                        </p>
                    </div>
                </div>
            </div>

            {/* Production & Shipping */}
            <div id="shipping" className="scroll-mt-32 space-y-8">
                <h2 className="text-3xl font-black text-primary uppercase tracking-tight">Shipping & Logistics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4 p-8 bg-primary/5 rounded-[3rem] border border-primary/5">
                        <h3 className="text-sm font-black uppercase tracking-widest text-primary/40">The Crafting Phase</h3>
                        <p className="text-primary font-bold text-lg leading-snug">
                            Premium printing takes time. Standard production windows range from <span className="text-primary">2-5 business days</span>. We don't rush the energy.
                        </p>
                    </div>
                    <div className="space-y-4 p-8 bg-primary/5 rounded-[3rem] border border-primary/5">
                        <h3 className="text-sm font-black uppercase tracking-widest text-primary/40">The Home Stretch</h3>
                        <p className="text-primary font-bold text-lg leading-snug">
                            USA-Wide Delivery: <span className="text-primary">3-7 business days</span> post-production. Tracked via USPS, UPS, or FedEx from our boutique nodes.
                        </p>
                    </div>
                </div>
            </div>

            {/* Terms & Privacy */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-primary/5 pt-20 pb-20">
                <div id="terms" className="scroll-mt-32 space-y-6">
                    <h2 className="text-2xl font-black text-primary uppercase tracking-tight">Terms of Service</h2>
                    <div className="space-y-4 text-primary/60 text-sm leading-relaxed font-medium">
                        <p>
                            Welcome to the BleacherField Showroom. By scouting our arena, you agree to our terms of curated commerce. All designs showcased are the original property of BleacherField or licensed for production.
                        </p>
                        <p>
                            We reserve the right to modify stadium collections and showroom pricing at any time to reflect the dynamic energy of the marketplace. Transactions are securely processed through the Etsy framework.
                        </p>
                    </div>
                </div>
                <div id="privacy" className="scroll-mt-32 space-y-6">
                    <h2 className="text-2xl font-black text-primary uppercase tracking-tight">Privacy Policy</h2>
                    <div className="space-y-4 text-primary/60 text-sm leading-relaxed font-medium">
                        <p>
                            Your gameday data is yours. We only collect what is essential to get your gear from the press to your porch. We utilize industry-standard encryption for all session data.
                        </p>
                        <p>
                            BleacherField does not sell, trade, or distribute your information to outside bleacher-sitters. We purely monitor showroom performance to improve your discovery experience.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
