import React, { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight, Download, FileText, Globe, Award, Sparkles, TrendingUp } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onDownloadProfile: () => void;
}

export default function Hero({ onNavigate, onDownloadProfile }: HeroProps) {
  // Real-time gold price simulation
  const [goldPriceOz, setGoldPriceOz] = useState(2348.50);
  const [goldPriceChange, setGoldPriceChange] = useState(12.45);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    // Generate a beautiful, realistic ticking update
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.48) * 0.85; // micro-adjustments
      setGoldPriceOz((prev) => {
        const next = prev + delta;
        return parseFloat(next.toFixed(2));
      });
      setGoldPriceChange((prev) => {
        const next = prev + delta;
        return parseFloat(next.toFixed(2));
      });
      setLastUpdated(new Date().toLocaleTimeString());
    }, 4000);

    setLastUpdated(new Date().toLocaleTimeString());
    return () => clearInterval(interval);
  }, []);

  const goldPriceKg = parseFloat((goldPriceOz * 32.1507).toFixed(2));

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center bg-slate-50 overflow-hidden py-12 lg:py-20">
      
      {/* Decorative luxury abstract glowing backdrops */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-teal-med/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-gold/15 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Headline and Narrative Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Government License Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-dark/5 border border-teal-dark/15 text-teal-dark">
              <ShieldCheck className="w-4 h-4 text-teal-med" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase">
                Ugandan Government Licensed Precious Metal Exporter
              </span>
            </div>

            {/* Premium Typography Heading */}
            <h1 className="font-display font-extrabold text-slate-900 leading-[1.1] tracking-tight text-4xl sm:text-5xl xl:text-6xl">
              Ethically Sourced{' '}
              <span className="bg-gradient-to-r from-gold via-gold-dark to-teal-dark bg-clip-text text-transparent">
                East African Gold
              </span>{' '}
              Delivered Worldwide.
            </h1>

            {/* Supportive descriptive prose */}
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
              Afrimex Mineral Dealers Limited bridges the gap between rich East African alluvial mining fields and global bullion investors. We handle state-certified refining, fully cleared customs documentation, and fully-insured global door-to-port logistics.
            </p>

            {/* Dynamic Gold Price Ticker Board */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-200/60 shadow-xs max-w-xl">
              <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  <TrendingUp className="w-3.5 h-3.5 text-teal-med" />
                  Live Precious Metals Ticker
                </div>
                <span className="text-[10px] text-slate-400 font-mono font-medium">
                  Last update: {lastUpdated} (EAT)
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider">Gold Spot (oz)</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-lg font-mono font-bold text-slate-800">${goldPriceOz.toLocaleString()}</span>
                    <span className="text-[10px] font-mono text-emerald-600 font-semibold">USD</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider">Gold Bulk (kg)</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-lg font-mono font-bold text-slate-800">${(goldPriceKg / 1000).toFixed(1)}k</span>
                    <span className="text-[10px] font-mono text-emerald-600 font-semibold">USD</span>
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1 border-t sm:border-t-0 sm:border-l border-slate-100 pt-2 sm:pt-0 sm:pl-4">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider">Assay Status</span>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">Lab Active</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Action Buttons Hub */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => onNavigate('contact')}
                className="px-7 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 glow-hover"
              >
                Inquire & Submit KYC
                <ArrowRight className="w-4 h-4 text-gold" />
              </button>

              <button
                onClick={onDownloadProfile}
                className="px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm tracking-wide border border-slate-200 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-teal-dark" />
                Company Profile (PDF)
              </button>
            </div>

            {/* Trust highlights */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/50 max-w-xl">
              <div>
                <span className="block font-display font-extrabold text-slate-900 text-xl">24K</span>
                <span className="block text-[10px] text-slate-500 font-mono uppercase tracking-wider">Pure Bullion</span>
              </div>
              <div>
                <span className="block font-display font-extrabold text-slate-900 text-xl">100%</span>
                <span className="block text-[10px] text-slate-500 font-mono uppercase tracking-wider">OECD Audited</span>
              </div>
              <div>
                <span className="block font-display font-extrabold text-slate-900 text-xl">Secure</span>
                <span className="block text-[10px] text-slate-500 font-mono uppercase tracking-wider">Armored Transit</span>
              </div>
            </div>

          </div>

          {/* Premium Visual Asset Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Stacked overlapping glassmorphism card presentation */}
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-3xl bg-gradient-to-br from-slate-200/40 to-slate-300/20 p-4 border border-white/40 shadow-xl overflow-hidden flex items-center justify-center">
              
              <img
                src="https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80"
                alt="Afrimex pure gold bullion bars in highly secured treasury environment"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-2xl shadow-inner brightness-95 filter transition-all duration-700 hover:scale-105"
              />

              {/* Floating Indicator Card 1 */}
              <div className="absolute top-8 -left-6 glass-panel p-3.5 rounded-xl border border-white/60 shadow-lg max-w-[200px] animate-bounce-slow">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Award className="w-4 h-4 text-gold-dark" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono block">LBMA COMPLIANCE</span>
                    <span className="text-xs font-bold text-slate-900 block leading-tight">Accredited Fire Assay</span>
                  </div>
                </div>
              </div>

              {/* Floating Indicator Card 2 */}
              <div className="absolute bottom-8 -right-6 glass-panel p-3.5 rounded-xl border border-white/60 shadow-lg max-w-[210px]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-med/10 flex items-center justify-center">
                    <Globe className="w-4 h-4 text-teal-dark" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono block">GLOBAL MARKETS</span>
                    <span className="text-xs font-bold text-slate-900 block leading-tight">Dubai, Zurich, London</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
