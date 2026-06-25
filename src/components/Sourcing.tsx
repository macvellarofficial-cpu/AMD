import React from 'react';
import { ShieldCheck, Eye, Compass, HeartHandshake, CheckSquare, Sparkles, Scale } from 'lucide-react';

export default function Sourcing() {
  const frameworks = [
    {
      title: 'OECD Five-Step Due Diligence Framework',
      desc: 'We map the full supply chain, identify risk elements, design mitigation responses, audit smelter allocations, and report transaction details publicly.',
      badge: 'OECD Standards'
    },
    {
      title: 'Anti-Money Laundering (AML) Protocols',
      desc: 'Partnering exclusively with transparent companies under FATF standards. All transaction funds must clear certified institutional bank-to-bank wire paths.',
      badge: 'Financial Intelligence'
    },
    {
      title: 'Child Labour Prohibition Policy',
      desc: 'We enforce unannounced inspection site checks at partner artisanal cooperatives, verifying school enrollment metrics to block juvenile labor exploitation.',
      badge: 'Human Rights'
    },
    {
      title: 'Mercury-Free Environmental Stewardship',
      desc: 'We support local washing sites with mercury-free gravity concentration kits, preventing hazardous mineral effluents from polluting regional water basins.',
      badge: 'ESG Commitment'
    }
  ];

  return (
    <section id="sourcing" className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative luxury abstract shapes */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-teal-med/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-teal-dark font-bold bg-teal-dark/5 px-3 py-1.5 rounded-full">
            ESG & Integrity
          </span>
          <h2 className="font-display font-extrabold text-slate-900 text-3xl sm:text-4xl mt-4 tracking-tight">
            Responsible & Traceable Mineral Sourcing
          </h2>
          <p className="text-slate-500 mt-4 text-base">
            For international investors, physical gold acquisition requires flawless ethical compliance. We enforce robust environmental, social, and governance standards throughout our East African networks.
          </p>
        </div>

        {/* Highlighted Banner Statement */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 mb-16 border border-slate-800 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold/15 to-transparent rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-gold-light" />
              <span className="text-[10px] font-mono tracking-widest text-gold-light uppercase font-bold">
                Directorate Statement of Responsibility
              </span>
            </div>
            
            <h3 className="font-display font-extrabold text-white text-xl sm:text-2xl xl:text-3xl leading-snug">
              "We believe that precious metal wealth should directly uplift the mining communities who extract it. Our trace protocols ensure clean-title gold, supporting sustainable African development."
            </h3>

            <div className="flex flex-wrap gap-4 pt-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold-light" />
                <span>100% Conflict-Free Sourced</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700 self-center hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-gold-light" />
                <span>Zero Child Labor Tolerance</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700 self-center hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-gold-light" />
                <span>Eco-Gravity Wash Approved</span>
              </div>
            </div>
          </div>
        </div>

        {/* Framework cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {frameworks.map((f, idx) => (
            <div 
              key={idx}
              className="glass-panel p-8 rounded-3xl border border-slate-200/50 flex flex-col justify-between hover:shadow-md transition-all duration-300"
            >
              <div>
                <span className="text-[9px] font-mono font-bold bg-slate-900/5 text-slate-600 px-2.5 py-1 rounded-sm uppercase tracking-wider inline-block">
                  {f.badge}
                </span>
                <h4 className="font-display font-bold text-slate-900 text-lg sm:text-xl mt-4">
                  {f.title}
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm mt-3 leading-relaxed">
                  {f.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-mono text-teal-dark font-bold">
                <CheckSquare className="w-4 h-4 text-teal-med" />
                <span>Active Field Audit Enforced</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
