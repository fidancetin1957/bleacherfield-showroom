import Header from "@/components/Header";
import Link from 'next/link';
import Image from 'next/image';
import { Trophy, Users, Star, ArrowRight, Goal, Shirt, GraduationCap, IceCream, MapPin, Sparkles } from 'lucide-react';

const sportsCategories = [
    { 
        name: 'Football', 
        slug: 'football', 
        count: '32 Teams',
        icon: <Trophy className="w-24 h-24" />,
        description: 'The American Juggernaut. Tailgate club essentials.',
        image: '/images/football.webp'
    },
    { 
        name: 'Basketball', 
        slug: 'basketball', 
        count: '30 Teams',
        icon: <Goal className="w-24 h-24" />,
        description: 'Streetwear meets the court. Every city, every era.',
        image: '/images/basketball.webp'
    },
    { 
        name: 'Baseball', 
        slug: 'baseball', 
        count: '30 Teams',
        icon: <Star className="w-24 h-24" />,
        description: 'The National Pastime. From the Yankees to the Dodgers.',
        image: '/images/baseball.webp'
    },
    { 
        name: 'Hockey', 
        slug: 'hockey', 
        count: '32 Teams',
        icon: <MapPin className="w-24 h-24" />,
        description: 'Icy grit and nostalgia. NHL exclusive.',
        image: '/images/hockey.webp'
    },
    { 
        name: 'Soccer', 
        slug: 'soccer', 
        count: '20 Teams',
        icon: <Goal className="w-24 h-24" />,
        description: 'Global energy, hometown heart. Inter Miami & beyond.',
        image: '/images/soccer.webp'
    },
    { 
        name: 'Custom Orders', 
        slug: 'custom', 
        count: 'Bespoke Gear',
        icon: <Sparkles className="w-24 h-24" />,
        description: 'Dream it, we build it. Custom stadium wear tailored for your team (on Etsy).',
        image: '/images/baseball.webp' // Using baseball diamond as a 'drawing board' feel
    }
];

export default function CategoryIndexPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-48 pb-20 px-4">
        <div className="max-w-[1400px] mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/5 px-4 py-2 rounded-full text-xs font-black tracking-[0.3em] text-primary mb-6 uppercase">
            <Trophy className="h-4 w-4" />
            <span>The Discovery Engine</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-primary uppercase tracking-tighter leading-none mb-6">
            Choose Your <br />
            <span className="text-primary/30 italic">Arena.</span>
          </h1>
          <p className="text-primary/40 font-bold max-w-xl mx-auto uppercase text-[10px] tracking-[0.4em] leading-relaxed">
            Find Your Hometown Spirit • Curated Stadium Essentials
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
            {sportsCategories.map((sport) => (
                <Link 
                    key={sport.slug} 
                    href={`/category/${sport.slug}`}
                    className="group relative h-[350px] md:h-[400px] overflow-hidden rounded-[3rem] bg-primary/5 border border-primary/5"
                >
                    {/* Real Sport Image */}
                    <Image 
                        src={sport.image} 
                        alt={sport.name} 
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Abstract Sport Pattern */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-1000 text-white">
                        {sport.icon}
                    </div>

                    <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-20">
                        <div className="space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="flex items-center justify-between">
                                <span className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-white uppercase tracking-[0.2em] leading-none border border-white/5">
                                    {sport.count}
                                </span>
                                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
                                    <ArrowRight className="h-5 w-5 text-white" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-2">{sport.name}</h2>
                                <p className="text-white/40 font-bold text-xs uppercase tracking-widest leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 max-w-xs">
                                    {sport.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
      </section>

      <footer className="py-20 bg-primary text-white/40 text-center font-bold text-sm uppercase tracking-widest">
        <p>© 2026 BleacherField • Exploration Phase v1.5.0</p>
      </footer>
    </main>
  );
}
