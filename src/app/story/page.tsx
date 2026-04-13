import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-40 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-primary/5 px-4 py-2 rounded-full text-xs font-black tracking-widest text-primary mb-8 uppercase">
            <span>The Heritage</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-primary uppercase tracking-tighter leading-none mb-12">
            The <br />
            <span className="text-primary/30">Bleacher</span> <br />
            Story.
          </h1>

          <div className="space-y-8 text-xl text-primary/70 font-medium leading-relaxed">
            <p className="border-l-4 border-primary pl-6 py-2 italic text-primary">
              "BleacherField is more than just a brand; it's a tribute to the timeless spirit of American sports culture."
            </p>
            
            <p>
              Born from the belief that every gameday is a story worth telling, we create authentic, premium apparel that captures the roar of the crowd, the tradition of the hometown, and the heartbeat of the stadium.
            </p>
            
            <p>
              From the sidelines to the bleachers, we suit up those who live for the energy of the game. Our designs are a handshake between the vintage aesthetics of the past and the modern boutique quality of today.
            </p>

            <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-primary/5 p-8 rounded-[2.5rem] space-y-4">
                    <h3 className="text-sm font-black uppercase tracking-widest text-primary">Hometown Spirit</h3>
                    <p className="text-base">Rooted in local traditions and the pride of being part of something bigger than ourselves.</p>
                </div>
                <div className="bg-primary/5 p-8 rounded-[2.5rem] space-y-4">
                    <h3 className="text-sm font-black uppercase tracking-widest text-primary">Boutique Quality</h3>
                    <p className="text-base">Every stitch is a promise of quality, designed to last as long as the memories of the game.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
