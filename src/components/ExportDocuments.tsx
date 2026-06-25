import React, { useState } from 'react';
import { EXPORT_DOCUMENTS } from '../data';
import { ExportDoc } from '../types';
import { FileText, CheckCircle2, X, Building, ShieldCheck, ArrowUpRight, HelpCircle } from 'lucide-react';

export default function ExportDocuments() {
  const [selectedDoc, setSelectedDoc] = useState<ExportDoc | null>(null);

  const handleOpenDoc = (doc: ExportDoc) => {
    setSelectedDoc(doc);
  };

  const handleCloseDoc = () => {
    setSelectedDoc(null);
  };

  return (
    <section id="documents" className="py-20 bg-white relative">
      
      {/* Decorative gradient glow background */}
      <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-gold/10 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-teal-dark font-bold bg-teal-dark/5 px-3 py-1.5 rounded-full">
            Export Clearance Suite
          </span>
          <h2 className="font-display font-extrabold text-slate-900 text-3xl sm:text-4xl mt-4 tracking-tight">
            Comprehensive Legal Export Documentation
          </h2>
          <p className="text-slate-500 mt-4 text-base">
            We prepare, clear, and compile a flawless documentation package for every outbound gold shipment. Click any document below to understand its regulatory purpose and issuing authority.
          </p>
        </div>

        {/* 10 Documents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {EXPORT_DOCUMENTS.map((doc) => (
            <div
              key={doc.id}
              onClick={() => handleOpenDoc(doc)}
              className="group bg-slate-50 rounded-2xl p-6 border border-slate-200/50 hover:border-gold/50 hover:bg-white hover:shadow-md cursor-pointer transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header with icon and hover dynamic indicator */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-teal-dark/5 flex items-center justify-center border border-teal-dark/10 group-hover:bg-teal-dark group-hover:text-white transition-all duration-355">
                    <FileText className="w-5 h-5 text-teal-dark group-hover:text-white" />
                  </div>
                  <HelpCircle className="w-4 h-4 text-slate-300 group-hover:text-gold-dark transition-colors" />
                </div>

                <h3 className="font-display font-bold text-slate-900 text-sm mt-5 group-hover:text-teal-dark transition-colors line-clamp-1">
                  {doc.title}
                </h3>
                <p className="text-slate-500 text-[11px] sm:text-xs mt-2.5 leading-relaxed line-clamp-3">
                  {doc.shortDesc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200/40 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="uppercase tracking-wider">Authority:</span>
                <span className="font-bold text-slate-600 line-clamp-1 max-w-[120px]">
                  {doc.authority.split(',')[0]}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Document Explainer Popup Modal */}
        {selectedDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-xs">
            <div className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200/50 overflow-hidden">
              
              {/* Header */}
              <div className="bg-slate-900 text-white p-6 relative flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                  <FileText className="w-5 h-5 text-gold-light" />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold tracking-widest text-gold-light uppercase block">
                    Export Document Protocol
                  </span>
                  <h3 className="font-display font-bold text-lg text-white block mt-0.5">
                    {selectedDoc.title}
                  </h3>
                </div>
                <button
                  onClick={handleCloseDoc}
                  className="absolute top-6 right-6 p-1 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 space-y-6">
                
                <div>
                  <h4 className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Legal Definition & Intent
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {selectedDoc.fullDesc}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 flex gap-2.5 items-start">
                    <Building className="w-4.5 h-4.5 text-teal-dark shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[9px] font-mono text-slate-400 block uppercase">Issuing Authority</span>
                      <span className="text-xs font-bold text-slate-800 block mt-1">
                        {selectedDoc.authority}
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 flex gap-2.5 items-start">
                    <ShieldCheck className="w-4.5 h-4.5 text-gold-dark shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[9px] font-mono text-slate-400 block uppercase">Primary Use Case</span>
                      <span className="text-xs font-bold text-slate-800 block mt-1">
                        {selectedDoc.requiredFor}
                      </span>
                    </div>
                  </div>

                </div>

                <div className="pt-2">
                  <h4 className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Standard Verification Checkpoints
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2.5 text-xs text-slate-500">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                      <span>Certified holograms, registry serial numbers, and physical sign-offs.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-500">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                      <span>Registered on local customs electronic single windows for instantaneous port confirmation.</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Footer */}
              <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-end">
                <button
                  onClick={handleCloseDoc}
                  className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs tracking-wide transition-all shadow-xs"
                >
                  Acknowledge Clearances
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
