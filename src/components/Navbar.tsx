import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Globe, Clock, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Kampala',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const menuItems = [
    { label: 'About', id: 'about' },
    { label: 'Products', id: 'products' },
    { label: 'Services', id: 'services' },
    { label: 'Buying Procedure', id: 'procedure' },
    { label: 'Export Documents', id: 'documents' },
    { label: 'Ethical Sourcing', id: 'sourcing' },
    { label: 'Global Markets', id: 'markets' },
    { label: 'Knowledge Hub', id: 'blog' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full glass-panel border-b border-slate-200/50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('hero')}>
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-tr from-teal-dark via-teal-med to-gold shadow-md">
              <span className="font-display font-extrabold text-white text-lg tracking-wider">A</span>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-gold border border-white flex items-center justify-center">
                <Shield className="w-2.5 h-2.5 text-slate-900 fill-slate-900" />
              </div>
            </div>
            <div>
              <span className="font-display font-bold text-slate-900 text-lg tracking-tight block leading-none">
                AFRIMEX
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-teal-dark font-semibold mt-0.5 block">
                Mineral Dealers
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-2.5">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-teal-dark/10 text-teal-dark font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50/80'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Metrics / Action */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Live Clock Kampala */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/50 text-slate-600">
              <Clock className="w-3.5 h-3.5 text-teal-med" />
              <div className="text-[10px] font-mono leading-none">
                <span className="text-slate-400 block font-sans">KAMPALA GMT+3</span>
                <span className="font-bold text-slate-800 tracking-wider block mt-0.5">{currentTime || '15:43:00'}</span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => handleNavClick('contact')}
              className="px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold tracking-wide flex items-center gap-1.5 transition-all duration-300 shadow-sm"
            >
              Secure Portal
              <ArrowUpRight className="w-3.5 h-3.5 text-gold-light" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Live Clock Kampala Mobile */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/50 text-slate-600 text-xs font-mono">
              <Clock className="w-3 h-3 text-teal-med" />
              <span className="text-slate-800 font-bold">{currentTime.substring(0, 5) || '15:43'}</span>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-hidden"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden glass-panel border-t border-slate-200/50 absolute left-0 w-full bg-white/95 shadow-xl transition-all duration-300">
          <div className="px-4 pt-4 pb-6 space-y-1.5">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-teal-dark text-white font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <div className="flex items-center justify-between px-4 text-xs text-slate-500 font-mono">
                <span>LOCAL OFFICE TIME (EAT):</span>
                <span className="text-slate-900 font-bold">{currentTime || '15:43:00'}</span>
              </div>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-3 rounded-xl bg-slate-950 text-white text-xs font-bold tracking-wide flex items-center justify-center gap-2"
              >
                Request Quotation
                <ArrowUpRight className="w-4 h-4 text-gold-light" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
