'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, MapPin, Filter, ChevronDown, Trophy } from 'lucide-react';
import { franchises } from '@/data/franchises';

const roles = ['All', 'Mom', 'Dad', 'Youth', 'Sis', 'Bro', 'Super Fan', 'Coach'];

export default function Sidebar({ 
  activeSport = 'Football', 
  activeTeamId, 
  setActiveTeamId, 
  activeRole, 
  setActiveRole 
}: { 
  activeSport?: string;
  activeTeamId: string | null;
  setActiveTeamId: (id: string | null) => void;
  activeRole: string;
  setActiveRole: (role: string) => void;
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
      <aside className="hidden xl:block sticky top-32 space-y-10">
        {/* Roles Section */}
        <div>
          <h3 className="text-[10px] font-black text-primary/30 uppercase tracking-[0.4em] mb-6 flex items-center">
            <User className="h-3 w-3 mr-2" />
            Shop by Role
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                className={`text-left px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeRole === role 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' 
                    : 'text-primary/50 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Divisions Section */}
        <div>
          <h3 className="text-[10px] font-black text-primary/30 uppercase tracking-[0.4em] mb-6 flex items-center">
            <Trophy className="h-3 w-3 mr-2" />
            Divisions & Teams
          </h3>
          <div className="space-y-4">
            {Object.keys(grouped).map((leagueConf) => (
              <div key={leagueConf} className="space-y-2">
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

      {/* Mobile Horizontal Filter Bar (Simplified for Deep Nesting) */}
      <div className="xl:hidden sticky top-20 z-30 bg-white/80 backdrop-blur-md -mx-4 px-4 py-4 border-b border-primary/5 overflow-x-auto no-scrollbar">
        <div className="flex items-center space-x-3 w-max pr-10">
          <button className="bg-primary text-white p-2 rounded-xl flex items-center space-x-2 px-4 shadow-lg shadow-primary/20">
            <Filter className="h-4 w-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">Filter</span>
          </button>
          
          <div className="h-6 w-[1px] bg-primary/10 mx-2" />

          {/* Quick Role Selection */}
          {roles.slice(0, 4).map((role) => (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all border ${
                activeRole === role 
                  ? 'bg-primary text-white border-primary shadow-md' 
                  : 'bg-white text-primary/50 border-primary/10'
              }`}
            >
              {role}
            </button>
          ))}
          
          <div className="h-4 w-[1px] bg-primary/10 mx-2" />

          {/* Direct Team Peek (Popular ones) */}
          {activeFranchises.slice(0, 5).map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveTeamId(activeTeamId === f.id ? null : f.id)}
              className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all border ${
                activeTeamId === f.id 
                  ? 'bg-primary text-white border-primary shadow-md' 
                  : 'bg-white text-primary/50 border-primary/10'
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
