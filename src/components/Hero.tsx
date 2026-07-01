import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Phone, CheckCircle2, ArrowUpRight, Scale, Award, Shield, FileSpreadsheet, KeyRound, Truck, Landmark, UserCheck } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onDownloadProfile: () => void;
}

export default function Hero({ onNavigate, onDownloadProfile }: HeroProps) {
  // Stats counter simulation
  const [stats, setStats] = useState({
    experience: 0,
    countries: 0,
    shipments: 0,
    satisfaction: 0
  });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Statistics incremental animation
  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const stepTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setStats({
        experience: Math.min(Math.floor((15 / steps) * currentStep), 15),
        countries: Math.min(Math.floor((24 / steps) * currentStep), 24),
        shipments: Math.min(Math.floor((450 / steps) * currentStep), 450),
        satisfaction: parseFloat(Math.min((99.8 / steps) * currentStep, 99.8).toFixed(1))
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  // Smooth Canvas Gold Particle System
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeSpeed: number;
    }> = [];

    const createParticle = () => {
      return {
        x: Math.random() * width,
        y: height + Math.random() * 20,
        size: Math.random() * 2.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: -(Math.random() * 0.8 + 0.3),
        opacity: Math.random() * 0.5 + 0.2,
        fadeSpeed: Math.random() * 0.002 + 0.001
      };
    };

    // Initialize particles
    for (let i = 0; i < 40; i++) {
      particles.push({
        ...createParticle(),
        y: Math.random() * height // distribute initially
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particles
      particles.forEach((p, idx) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity -= p.fadeSpeed;

        if (p.opacity <= 0 || p.y < 0) {
          particles[idx] = createParticle();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`;
          ctx.shadowBlur = p.size * 3;
          ctx.shadowColor = '#D4AF37';
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const trustCards = [
    {
      icon: ShieldCheck,
      title: 'Licensed Gold Exporter',
      desc: 'Officially authorized by the Ministry of Energy & Mineral Development under MDL20260633.'
    },
    {
      icon: Award,
      title: 'OECD Sourcing Compliant',
      desc: '100% trace-audited conflict-free precious metals adhering to international OECD rules.'
    },
    {
      icon: Landmark,
      title: 'Secure Escrow Accounts',
      desc: 'Fully structured payments handled through tier-1 correspondent bullion banks.'
    },
    {
      icon: FileSpreadsheet,
      title: 'Flawless Export Filings',
      desc: 'Certified Certificates of Origin, assay verification reports, and clearance documents.'
    },
    {
      icon: Scale,
      title: 'Government Fire Assays',
      desc: 'Double-verified chemical assay records with XRF spectra for complete purity transparency.'
    },
    {
      icon: Truck,
      title: 'International Logistics',
      desc: 'Insured high-security armored door-to-port deliveries in partnership with Brinks.'
    },
    {
      icon: Shield,
      title: 'Full Buyer Protection',
      desc: 'Title transfer, state sealing and physical inspections integrated directly into SPA guidelines.'
    },
    {
      icon: UserCheck,
      title: 'KYC & FATF Verified',
      desc: 'Anti-money laundering structures vetted to meet EU, UAE and Swiss trade standards.'
    }
  ];

  return (
    <>
      {/* 1. Cinematic Hero Section */}
      <section id="hero" className="relative min-h-[95vh] flex flex-col justify-center bg-slate-950 overflow-hidden pt-24 pb-20">
        
        {/* Background Video Layer with Fallback overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden select-none opacity-45 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 filter saturate-[0.6] brightness-[0.35] blur-[1px]"
            poster="https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1600&q=80"
          >
            <source
              src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27cf2efabaf3216df089e63e27306915354924a&profile_id=165&oauth2_token_id=57447761"
              type="video/mp4"
            />
            {/* Alt slow pour vimeo source if backup is required */}
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-molten-gold-being-poured-into-a-mold-41619-large.mp4"
              type="video/mp4"
            />
          </video>
          {/* Elegant gold mesh dark linear gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-slate-950/45 to-slate-950" />
        </div>

        {/* Floating Interactive Canvas for Gold Dust Particles */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-1 pointer-events-none opacity-80"
        />

        {/* Glowing Ambient Luxury Spotlights */}
        <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] rounded-full bg-gold/10 blur-[130px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] rounded-full bg-teal-med/5 blur-[120px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Content Column */}
            <div className="lg:col-span-8 space-y-8 text-left">
              
              {/* Compliance Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gold/10 border border-gold/25 text-gold-light animate-pulse shadow-sm">
                <ShieldCheck className="w-4 h-4 text-gold-light" />
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase">
                  Official Mineral Dealers License: MDL20260633
                </span>
              </div>

              {/* Playfair Typography Heading */}
              <h1 className="font-display font-medium text-white leading-[1.1] tracking-tight text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
                Africa's Trusted <br />
                <span className="bg-gradient-to-r from-gold-light via-gold to-yellow-500 bg-clip-text text-transparent font-semibold">
                  Gold Exporters
                </span> <br className="hidden sm:inline" />
                & Mineral Consultants
              </h1>

              {/* Subheading text */}
              <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-sans font-light">
                Supplying certified 22K–24K gold bars, dore bars, nuggets and gold dust to international buyers with secure export documentation and responsible sourcing.
              </p>

              {/* Luxury Call-To-Action Desk */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 rounded-xl bg-gold hover:bg-gold-dark text-slate-950 font-bold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-gold/20 flex items-center justify-center gap-2"
                >
                  Request a Quote
                  <ArrowUpRight className="w-4 h-4 text-slate-950" />
                </button>

                <a
                  href="https://wa.me/256793932028?text=Hello%20Afrimex%20Mineral%20Dealers%2C%20I%20am%20inquiring%20about%20gold"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-widest border border-slate-700 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Corporate Statistics Counters */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/10 max-w-3xl">
                <div>
                  <div className="flex items-baseline gap-0.5">
                    <span className="font-display font-semibold text-white text-3xl sm:text-4xl">{stats.experience}</span>
                    <span className="text-gold font-bold text-xl">+</span>
                  </div>
                  <span className="block text-[10px] text-slate-400 font-mono uppercase tracking-widest mt-1">Years Experience</span>
                </div>

                <div>
                  <div className="flex items-baseline gap-0.5">
                    <span className="font-display font-semibold text-white text-3xl sm:text-4xl">{stats.countries}</span>
                    <span className="text-gold font-bold text-xl">+</span>
                  </div>
                  <span className="block text-[10px] text-slate-400 font-mono uppercase tracking-widest mt-1">Countries Served</span>
                </div>

                <div>
                  <div className="flex items-baseline gap-0.5">
                    <span className="font-display font-semibold text-white text-3xl sm:text-4xl">{stats.shipments}</span>
                    <span className="text-gold font-bold text-xl">+</span>
                  </div>
                  <span className="block text-[10px] text-slate-400 font-mono uppercase tracking-widest mt-1">Successful Shipments</span>
                </div>

                <div>
                  <div className="flex items-baseline gap-0.5">
                    <span className="font-display font-semibold text-white text-3xl sm:text-4xl">{stats.satisfaction}</span>
                    <span className="text-gold font-mono font-bold text-xs">%</span>
                  </div>
                  <span className="block text-[10px] text-slate-400 font-mono uppercase tracking-widest mt-1">Client Satisfaction</span>
                </div>
              </div>

            </div>

            {/* Right overlapping micro-widget details panel */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="glass-panel-dark p-6 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden space-y-6 bg-slate-900/80">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
                
                <span className="text-[10px] font-mono font-bold text-gold-light uppercase tracking-widest bg-gold/10 px-2.5 py-1 rounded-full border border-gold/20">
                  Global Gold Hubs
                </span>

                <div className="space-y-4 pt-2">
                  <div className="flex justify-between items-center text-xs font-mono pb-2 border-b border-white/5">
                    <span className="text-slate-400">Zurich (ZRH) Transit</span>
                    <span className="text-emerald-400 font-bold">ACTIVE</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-mono pb-2 border-b border-white/5">
                    <span className="text-slate-400">Dubai (DXB) Transit</span>
                    <span className="text-emerald-400 font-bold">ACTIVE</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-mono pb-2 border-b border-white/5">
                    <span className="text-slate-400">London (LHR) Transit</span>
                    <span className="text-emerald-400 font-bold">ACTIVE</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-400">Singapore (SIN) Transit</span>
                    <span className="text-emerald-400 font-bold">ACTIVE</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-white/5 flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping mt-1.5" />
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-300 block">Kampala Refinery Desk</span>
                    <span className="text-[10px] text-slate-500 block leading-normal mt-0.5">Assay laboratory is operational & sealing corporate batches on 24-hr rotational cycles.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* 2. Premium Trust & Credentials Section */}
      <section className="py-16 bg-white relative z-20 border-y border-slate-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-mono tracking-widest text-teal-dark font-bold bg-teal-dark/5 px-3 py-1.5 rounded-full">
              Credentials & Vetting
            </span>
            <h2 className="font-display font-medium text-slate-900 text-2xl sm:text-3xl mt-3 tracking-tight">
              Institutional Quality Assured By Gold-Standard Compliance
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-2xl border border-slate-200/50 hover:shadow-md transition-all duration-300 flex flex-col items-start space-y-3 group hover:-translate-y-1"
                >
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-teal-dark group-hover:bg-teal-dark group-hover:text-white transition-colors duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-sm sm:text-base">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-normal">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
