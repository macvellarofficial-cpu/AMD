import React, { useState } from 'react';
import { GLOBAL_HUBS, INDUSTRIES } from '../data';
import { Globe, Plane, Award, Building, Landmark, Briefcase, Info, Compass } from 'lucide-react';

const industryIconMap: { [key: string]: any } = {
  'Fine Jewellery Manufacturers': Award,
  'Sovereign Wealth & Central Banks': Landmark,
  'Commercial Refineries & Mints': Building,
  'High-Net-Worth Private Offices': Briefcase,
  'Institutional Bullion Dealers': Globe,
  'Industrial Electronics Sectors': Compass
};

export default function GlobalMarkets() {
  const [activeHub, setActiveHub] = useState<string | null>(null);

  const currentHubData = GLOBAL_HUBS.find(h => h.name === activeHub);

  return (
    <section id="markets" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-gold-dark font-bold bg-gold/10 px-3 py-1.5 rounded-full">
            Global Reach
          </span>
          <h2 className="font-display font-extrabold text-slate-900 text-3xl sm:text-4xl mt-4 tracking-tight">
            International Markets & Distribution Channels
          </h2>
          <p className="text-slate-500 mt-4 text-base">
            From our headquarters in Kampala, we coordinate secure logistics to primary bullion trading hubs, central refineries, and institutional clearing ports globally.
          </p>
        </div>

        {/* World Map Section - Premium Interactive Vector SVG */}
        <div className="relative bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl overflow-hidden mb-20">
          
          {/* Subtle starry background grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative / Active Hub explainer */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold text-gold-light tracking-widest uppercase">
                  Global Logistical Corridors
                </span>
                <h3 className="font-display font-extrabold text-white text-2xl mt-2">
                  Direct Hub Integrations
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                  We maintain active shipping corridors with Brinks and Malca-Amit. Hover or tap on any regional cargo hub to inspect its transaction parameters.
                </p>
              </div>

              {/* Dynamic Interactive Detail Display Card */}
              <div className="bg-slate-850/90 border border-slate-800 p-5 rounded-2xl space-y-4">
                {currentHubData ? (
                  <>
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
                        <Plane className="w-4 h-4 text-gold-light" />
                      </div>
                      <span className="text-sm font-bold text-white">{currentHubData.name}</span>
                    </div>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {currentHubData.description}
                    </p>
                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-emerald-400">
                      <span>Logistics Status:</span>
                      <span className="font-bold">Secured Flight Route</span>
                    </div>
                  </>
                ) : (
                  <div className="py-6 text-center">
                    <span className="text-xs text-slate-500 font-mono block">
                      Select a hub coordinate to reveal details
                    </span>
                    <div className="flex flex-wrap gap-1.5 justify-center mt-3">
                      {GLOBAL_HUBS.slice(0, 4).map((h) => (
                        <button
                          key={h.name}
                          onClick={() => setActiveHub(h.name)}
                          className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-755 text-[10px] font-mono text-slate-300 hover:text-white transition-all"
                        >
                          {h.name.split(' ')[0]}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Right Interactive Map Canvas */}
            <div className="lg:col-span-8 relative flex items-center justify-center bg-slate-950/40 rounded-2xl border border-slate-800 p-4 aspect-video">
              
              {/* Clean abstract SVG representing map */}
              <svg viewBox="0 0 100 80" className="w-full h-full text-slate-800 opacity-90 select-none">
                
                {/* SVG Outline representation of major continents */}
                {/* North America */}
                <path d="M 10,15 L 35,12 L 32,35 L 20,40 L 12,25 Z" fill="currentColor" opacity="0.12" />
                {/* South America */}
                <path d="M 22,42 L 32,45 L 28,75 L 25,75 Z" fill="currentColor" opacity="0.12" />
                {/* Europe */}
                <path d="M 40,15 L 55,15 L 52,30 L 42,28 Z" fill="currentColor" opacity="0.12" />
                {/* Africa */}
                <path d="M 42,32 L 56,32 L 60,45 L 56,70 L 46,72 L 42,50 Z" fill="currentColor" opacity="0.14" />
                {/* Asia / India / China */}
                <path d="M 58,15 L 90,20 L 88,50 L 75,55 L 60,35 Z" fill="currentColor" opacity="0.12" />
                {/* Australia */}
                <path d="M 80,55 L 95,58 L 90,75 L 78,70 Z" fill="currentColor" opacity="0.1" />

                {/* Draw shipping connector lines from Kampala (approx 50, 48 coordinates) to selected hub */}
                {GLOBAL_HUBS.map((hub) => {
                  const isHovered = activeHub === hub.name;
                  return (
                    <g key={`line-${hub.name}`}>
                      <line 
                        x1="50" 
                        y1="48" 
                        x2={hub.coordinates.x} 
                        y2={hub.coordinates.y} 
                        stroke={isHovered ? '#D4AF37' : 'rgba(212,175,55,0.15)'} 
                        strokeWidth={isHovered ? '0.4' : '0.15'}
                        strokeDasharray={isHovered ? '1 1' : ''}
                        className="transition-all duration-300"
                      />
                    </g>
                  );
                })}

                {/* Kampala Hub Point (Origin) */}
                <circle cx="50" cy="48" r="1.4" fill="#14B8A6" />
                <circle cx="50" cy="48" r="2.5" fill="none" stroke="#14B8A6" strokeWidth="0.3" className="animate-ping" />
                <text x="50" y="52" fill="#14B8A6" fontSize="2" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
                  Kampala HQ
                </text>

                {/* Hub coordinate points */}
                {GLOBAL_HUBS.map((hub) => {
                  const isActive = activeHub === hub.name;
                  return (
                    <g 
                      key={hub.name}
                      onMouseEnter={() => setActiveHub(hub.name)}
                      onClick={() => setActiveHub(hub.name)}
                      className="cursor-pointer group"
                    >
                      <circle 
                        cx={hub.coordinates.x} 
                        cy={hub.coordinates.y} 
                        r={isActive ? '1.5' : '1.1'} 
                        fill={isActive ? '#D4AF37' : '#94A3B8'} 
                        className="transition-all duration-300 hover:fill-[#D4AF37]"
                      />
                      <circle 
                        cx={hub.coordinates.x} 
                        cy={hub.coordinates.y} 
                        r="2.2" 
                        fill="none" 
                        stroke="#D4AF37" 
                        strokeWidth="0.25" 
                        className={`transition-all duration-300 opacity-0 group-hover:opacity-100 ${isActive ? 'opacity-100 scale-110' : ''}`}
                      />
                    </g>
                  );
                })}

              </svg>

              {/* Mobile instruction overlay */}
              <div className="absolute bottom-3 right-3 bg-slate-900/95 border border-slate-800 px-2.5 py-1 rounded text-[9px] font-mono text-slate-400">
                Tap coordinates to check transit metrics
              </div>

            </div>

          </div>

        </div>

        {/* Industries Served Section */}
        <div>
          <h3 className="text-center font-display font-bold text-slate-900 text-2xl mb-12">
            Institutional Industries Served
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((ind, idx) => {
              const IndIcon = industryIconMap[ind.name] || Award;
              return (
                <div 
                  key={idx}
                  className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/50 hover:border-gold/30 hover:bg-white transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-dark/5 flex items-center justify-center border border-teal-dark/10 text-teal-dark shrink-0">
                    <IndIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-base">
                      {ind.name}
                    </h4>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1.5 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
