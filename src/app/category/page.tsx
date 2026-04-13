import Header from "@/components/Header";
import Link from 'next/link';
import { Trophy, Users, Star, ArrowRight, Goal, Shirt, GraduationCap, IceCream, MapPin } from 'lucide-react';

const sportsCategories = [
    { 
        name: 'Football', 
        slug: 'football', 
        count: '32 Teams',
        icon: <Trophy className="w-24 h-24" />,
        description: 'The American Juggernaut. Tailgate club essentials.',
        image: '/images/football_hub.webp'
    },
    { 
        name: 'Basketball', 
        slug: 'basketball', 
        count: '30 Teams',
        icon: <Goal className="w-24 h-24" />,
        description: 'Streetwear meets the court. Every city, every era.',
        image: '/images/basketball_hub.webp'
    },
    { 
        name: 'Baseball', 
        slug: 'baseball', 
        count: '30 Teams',
        icon: <Star className="w-24 h-24" />,
        description: 'The National Pastime. From the Yankees to the Dodgers.',
        image: '/images/baseball_hub.webp'
    },
    { 
        name: 'Hockey', 
        slug: 'hockey', 
        count: '32 Teams',
        icon: <MapPin className="w-24 h-24" />,
        description: 'Icy grit and Mighty Ducks nostalgia. NHL exclusive.',
        image: '/images/hockey_hub.webp'
    },
    { 
        name: 'Soccer', 
        slug: 'soccer', 
        count: '20 Teams',
        icon: <Goal className="w-24 h-24" />,
        description: 'Global energy, hometown heart. Inter Miami & beyond.',
        image: '/images/soccer_hub.webp'
    },
    { 
        name: 'NCAA', 
        slug: 'ncaa', 
        count: '150+ Schools',
        icon: <GraduationCap className="w-24 h-24" />,
        description: 'Saturday culture. Crimson Tide to Bulldogs.',
        image: '/images/football_hub.webp'
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
          <h1 className="text-5xl md:text-8xl font-black text-primary uppercase tracking-tighter leading-none mb-6">
            Explore <br />
            <span className="text-primary/30 italic">Collections.</span>
          </h1>
          <p className="text-primary/60 font-medium max-w-xl mx-auto uppercase text-xs tracking-[0.2em]">
            From the NFL gridiron to the NHL ice, browse our curated gameday apparel.
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
            {sportsCategories.map((sport) => (
                <Link 
                    key={sport.slug} 
                    href={`/category/${sport.slug}`}
                    className="group relative h-[500px] overflow-hidden rounded-[3rem] bg-primary/5 border border-primary/5"
                >
                    {/* Background Visual Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Abstract Sport Pattern */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 group-hover:scale-110 transition-transform duration-1000 text-white">
                        {sport.icon}
                    </div>

                    <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
                        <div className="space-y-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="flex items-center justify-between">
                                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest leading-none">
                                    {sport.count}
                                </span>
                                <ArrowRight className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">{sport.name}</h2>
                            <p className="text-white/60 font-semibold text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                {sport.description}
                            </p>
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
