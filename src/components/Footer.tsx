import React, { useState } from 'react';
import { ShieldCheck, Mail, ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [newsEmail, setNewsEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setNewsEmail('');
  };

  const footerLinks = {
    Products: [
      { label: 'Gold Bullion Bars', id: 'products' },
      { label: 'Natural Gold Nuggets', id: 'products' },
      { label: 'Alluvial Gold Dust', id: 'products' },
      { label: 'Refined Silver Granules', id: 'products' }
    ],
    Services: [
      { label: 'Ethical Sourcing', id: 'services' },
      { label: 'Brokerage & Trading', id: 'services' },
      { label: 'Smelting & Fire Assay', id: 'services' },
      { label: 'Export Clearances', id: 'services' }
    ],
    Compliance: [
      { label: 'OECD Sourcing Guidelines', id: 'sourcing' },
      { label: 'Anti-Money Laundering', id: 'sourcing' },
      { label: '10-Step Operational Flow', id: 'procedure' },
      { label: 'Official Export Permits', id: 'documents' }
    ],
    Resources: [
      { label: 'Knowledge Hub', id: 'blog' },
      { label: 'Frequently Asked FAQs', id: 'faq' },
      { label: 'Global Cargo Hubs', id: 'markets' },
      { label: 'Secure Onboarding Portal', id: 'contact' }
    ]
  };

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Segment: Brand logo & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-b border-slate-800 pb-12 mb-12">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-teal-dark to-gold flex items-center justify-center font-display font-extrabold text-white text-lg">
                A
              </div>
              <div>
                <span className="font-display font-bold text-white text-lg tracking-tight block">AFRIMEX</span>
                <span className="text-[9px] uppercase font-mono text-gold-light tracking-widest font-semibold block">MINERAL DEALERS LIMITED</span>
              </div>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Licensed Ugandan precious metals dealer specializing in ethical sourcing, smelting, and fully-insured international air cargo export. Plot 12-14, Kampala Road, Uganda.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-slate-850 border border-slate-800 p-6 rounded-2xl space-y-4 max-w-md lg:ml-auto">
              <div>
                <span className="text-[10px] font-mono font-bold text-gold-light uppercase tracking-widest block">
                  Market Dispatch
                </span>
                <h4 className="font-display font-bold text-white text-base block mt-0.5">
                  Subscribe to Bullion Intelligence
                </h4>
              </div>

              {subscribed ? (
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                  <span>Subscribed to trade bulletins securely.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    required
                    type="email"
                    placeholder="corporate@domain.com"
                    value={newsEmail}
                    onChange={(e) => setNewsEmail(e.target.value)}
                    className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-gold transition-all"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-gold hover:bg-gold-dark text-slate-900 font-bold text-xs tracking-wide flex items-center gap-1.5 transition-all"
                  >
                    Subscribe
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Middle Segment: Links block */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h5 className="font-mono font-bold text-[10px] sm:text-xs text-gold-light uppercase tracking-wider">
                {title}
              </h5>
              <ul className="space-y-2.5">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => onNavigate(link.id)}
                      className="text-slate-400 hover:text-white text-xs text-left transition-colors flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3 h-3 text-gold-light opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Segment: License footprint and legalities */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 text-[11px] text-slate-500 font-mono leading-relaxed">
          
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-1.5 text-gold-light font-bold">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>REGULATORY & COMPLIANCE STATEMENT:</span>
            </div>
            <p>
              Afrimex Mineral Dealers Limited operates in complete accordance with the Uganda Mining Act of 2022. Sourcing records align 100% with the OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas. Outbound air cargo is cleared through the Uganda Revenue Authority and Directorate of Geological Survey and Mines.
            </p>
          </div>

          <div className="flex flex-col gap-2 shrink-0 md:text-right text-xs">
            <span>© {new Date().getFullYear()} Afrimex Mineral Dealers Ltd.</span>
            <div className="flex gap-4 text-[10px]">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Charter</span>
              <span>•</span>
              <span className="hover:text-white cursor-pointer transition-colors">Anti-Laundering Terms</span>
              <span>•</span>
              <span className="hover:text-white cursor-pointer transition-colors">SAD Escrow Rules</span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
