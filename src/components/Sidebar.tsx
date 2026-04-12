'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Filter, X } from 'lucide-react';

const roles = ['All', 'Mom', 'Dad', 'Youth', 'Sis', 'Bro', 'Super Fan', 'Coach'];
const cities = ['Seattle', 'Kansas', 'Dallas', 'Boston', 'Chicago'];

export default function Sidebar() {
  const [activeRole, setActiveRole] = useState('All');
  const [activeCity, setActiveCity] = useState('');

  return (
    <div className="w-full xl:w-64 flex-shrink-0">
      {/* Desktop Vertical Sidebar */}
      <aside className="hidden xl:block sticky top-32 space-y-10">
        <div>
          <h3 className="text-[10px] font-black text-primary/30 uppercase tracking-[0.4em] mb-6 flex items-center">
            <User className="h-3 w-3 mr-2" />
            Shop by Role
          </h3>
          <div className="flex flex-col space-y-1">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                className={`text-left px-4 py-2 rounded-xl text-sm font-bold transition-all ${
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

        <div>
            <h3 className="text-[10px] font-black text-primary/30 uppercase tracking-[0.4em] mb-6 flex items-center">
                <MapPin className="h-3 w-3 mr-2" />
                Featured Cities
            </h3>
            <div className="flex flex-col space-y-1">
                {cities.map((city) => (
                <button
                    key={city}
                    onClick={() => setActiveCity(activeCity === city ? '' : city)}
                    className={`text-left px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    activeCity === city 
                        ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' 
                        : 'text-primary/50 hover:text-primary hover:bg-primary/5'
                    }`}
                >
                    {city}
                </button>
                ))}
            </div>
        </div>

        <div className="pt-8 border-t border-primary/5">
            <p className="text-[10px] font-bold text-primary/20 uppercase tracking-widest leading-relaxed">
                Refine your spirit. <br />
                The Hometown boutique <br />
                experience.
            </p>
        </div>
      </aside>

      {/* Mobile Horizontal Filter Bar (iPhone Focused) */}
      <div className="xl:hidden sticky top-20 z-30 bg-white/80 backdrop-blur-md -mx-4 px-4 py-4 border-b border-primary/5 overflow-x-auto no-scrollbar">
        <div className="flex items-center space-x-3 w-max pr-10">
          <div className="bg-primary text-white p-2 rounded-xl">
            <Filter className="h-4 w-4" />
          </div>
          
          <div className="h-6 w-[1px] bg-primary/10 mx-2" />

          {/* Role Pills */}
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all border ${
                activeRole === role 
                  ? 'bg-primary text-white border-primary shadow-md' 
                  : 'bg-white text-primary/50 border-primary/10 hover:border-primary/30'
              }`}
            >
              {role}
            </button>
          ))}
          
          <div className="h-4 w-[1px] bg-primary/10 mx-2" />

          {/* City Pills (The "Peek" Effect) */}
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setActiveCity(activeCity === city ? '' : city)}
              className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all border ${
                activeCity === city 
                  ? 'bg-primary text-white border-primary shadow-md' 
                  : 'bg-white text-primary/50 border-primary/10 hover:border-primary/30'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
