'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, MapPin, Filter, ChevronDown, Trophy, Shirt, Users, Sparkles } from 'lucide-react';
import { franchises } from '@/data/franchises';

const models = [
    { id: 't-shirt', name: 'T-Shirts' },
    { id: 'sweatshirt', name: 'Sweatshirts' },
    { id: 'hoodie', name: 'Hoodies' },
    { id: 'toddler-tee', name: 'Toddler Tee' },
    { id: 'baby-suit', name: 'Baby Suit' },
];

const boutiqueRoles = ['Mom', 'Dad', 'Gameday'];

export default function Sidebar({ 
  activeSport = 'Football', 
  activeTeamId, 
  setActiveTeamId, 
  activeRole, 
  setActiveRole,
  activeAudience,
  setActiveAudience,
  activeModel,
  setActiveModel
}: { 
  activeSport?: string;
  activeTeamId: string | null;
  setActiveTeamId: (id: string | null) => void;
  activeRole: string;
  setActiveRole: (role: string) => void;
  activeAudience: string | null;
  setActiveAudience: (val: string | null) => void;
  activeModel: string | null;
  setActiveModel: (val: string | null) => void;
}) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Filter franchises by the active sport page
  const activeFranchises = franchises.filter(f => f.sport === activeSport);

  // Group by League -> Conference -> Division
  const grouped = activeFranchises.reduce((acc, f) => {
    const key = `${f.league} - ${f.conference}`;
    if (!acc[key]) acc[key] = {};
    if (!acc[key][f.division]) acc[key][f.division] = [];
    acc[key][f.division].push(f);
    return acc;
  }, {} as any);

  return (
    <div className="w-full xl:w-72 flex-shrink-0">
      {/* Desktop Vertical Sidebar */}
      <aside className="hidden xl:block sticky top-48 space-y-12 pb-20">
        
        {/* 1. Audience Section */}
        <div>
          <h3 className="text-[10px] font-black text-primary/30 uppercase tracking-[0.4em] mb-6 flex items-center">
            <Users className="h-3 w-3 mr-2" />
            Audience
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {['Adult', 'Youth'].map((aud) => (
              <button
                key={aud}
                onClick={() => setActiveAudience(activeAudience === aud.toLowerCase() ? null : aud.toLowerCase())}
                className={`text-left px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeAudience === aud.toLowerCase() 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' 
                    : 'text-primary/50 hover:text-primary hover:bg-primary/5 border border-primary/5'
                }`}
              >
                {aud}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Model Section */}
        <div>
          <h3 className="text-[10px] font-black text-primary/30 uppercase tracking-[0.4em] mb-6 flex items-center">
            <Shirt className="h-3 w-3 mr-2" />
            Models
          </h3>
          <div className="flex flex-col space-y-1">
            {models.map((model) => (
              <button
                key={model.id}
                onClick={() => setActiveModel(activeModel === model.id ? null : model.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all ${
                  activeModel === model.id 
                    ? 'bg-primary/5 text-primary border-l-4 border-primary pl-5' 
                    : 'text-primary/50 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {model.name}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Boutique Roles & Special Collections */}
        <div>
          <h3 className="text-[10px] font-black text-primary/30 uppercase tracking-[0.4em] mb-6 flex items-center">
            <Sparkles className="h-3 w-3 mr-2" />
            Special Collection
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {boutiqueRoles.map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(activeRole === role ? 'All' : role)}
                className={`text-left px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  activeRole === role 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'bg-primary/5 text-primary/40 hover:text-primary border border-primary/5'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Divisions & Teams */}
        <div className="pt-4 border-t border-primary/5">
          <h3 className="text-[10px] font-black text-primary/30 uppercase tracking-[0.4em] mb-6 flex items-center">
            <Trophy className="h-3 w-3 mr-2" />
            Divisions & Teams
          </h3>
          <div className="space-y-4">
            {Object.keys(grouped).map((leagueConf) => (
              <div key={leagueConf} className="space-y-2 text-primary/60">
                <button
                  onClick={() => setExpandedSection(expandedSection === leagueConf ? null : leagueConf)}
                  className="w-full flex items-center justify-between px-2 py-1 text-sm font-black text-primary uppercase tracking-tight"
                >
                  <span>{leagueConf}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${expandedSection === leagueConf ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {expandedSection === leagueConf && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden space-y-3 pl-2"
                    >
                      {Object.keys(grouped[leagueConf]).map((division) => (
                        <div key={division} className="space-y-1">
                          <h4 className="text-[9px] font-black text-primary/20 uppercase tracking-widest pl-2 mb-1">{division} Division</h4>
                          <div className="flex flex-col space-y-1 border-l border-primary/5 ml-2">
                            {grouped[leagueConf][division].map((f: any) => (
                              <button
                                key={f.id}
                                onClick={() => setActiveTeamId(activeTeamId === f.id ? null : f.id)}
                                className={`text-left px-4 py-2 rounded-lg text-[13px] font-bold transition-all ${
                                  activeTeamId === f.id
                                    ? 'text-primary bg-primary/5 translate-x-1'
                                    : 'text-primary/50 hover:text-primary'
                                }`}
                              >
                                {f.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Mobile Bar - Simplified */}
      <div className="xl:hidden sticky top-36 z-30 bg-white/80 backdrop-blur-md -mx-4 px-4 py-4 border-b border-primary/5 overflow-x-auto no-scrollbar">
        <div className="flex items-center space-x-3 w-max pr-10">
          <div className="flex space-x-2">
            {['Adult', 'Youth', 'Mom', 'Dad', 'Gameday'].map((filter) => (
              <button
                key={filter}
                onClick={() => {
                   if (['Adult', 'Youth'].includes(filter)) setActiveAudience(activeAudience === filter.toLowerCase() ? null : filter.toLowerCase());
                   else setActiveRole(activeRole === filter ? 'All' : filter);
                }}
                className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all border ${
                  (activeAudience === filter.toLowerCase() || activeRole === filter)
                    ? 'bg-primary text-white border-primary shadow-md' 
                    : 'bg-white text-primary/50 border-primary/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
