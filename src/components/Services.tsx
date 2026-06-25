import React from 'react';
import { SERVICES } from '../data';
import { Pickaxe, TrendingUp, FileCheck, FlaskConical, ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

const iconMap: { [key: string]: any } = {
  Pickaxe: Pickaxe,
  TrendingUp: TrendingUp,
  FileCheck: FileCheck,
  FlaskConical: FlaskConical,
  ShieldCheck: ShieldCheck,
  Lock: Lock
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      
      {/* Visual background rings */}
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-slate-50 border border-slate-100/60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-teal-dark font-bold bg-teal-dark/5 px-3 py-1.5 rounded-full">
            Our Expertise
          </span>
          <h2 className="font-display font-extrabold text-slate-900 text-3xl sm:text-4xl mt-4 tracking-tight">
            Institutional Bullion Services
          </h2>
          <p className="text-slate-500 mt-4 text-base">
            From direct community sourcing at the mine site to final secure air freight cargo loading, our services ensure absolute reliability.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.iconName] || ShieldCheck;
            return (
              <div
                key={service.id}
                className="group bg-slate-50 rounded-2xl p-8 border border-slate-200/50 hover:border-gold/40 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Area */}
                  <div className="w-12 h-12 rounded-xl bg-white shadow-xs flex items-center justify-center border border-slate-200/50 group-hover:bg-gradient-to-tr group-hover:from-teal-dark group-hover:to-teal-med transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-teal-dark group-hover:text-white transition-colors" />
                  </div>

                  {/* Text Details */}
                  <h3 className="font-display font-bold text-slate-900 text-lg sm:text-xl mt-6">
                    {service.name}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm mt-3.5 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bullets feature list */}
                <div className="mt-8 pt-6 border-t border-slate-200/40 space-y-2.5">
                  {service.features.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
