import React, { useState } from 'react';
import { PROCEDURE_STEPS } from '../data';
import { 
  MessageSquare, FileText, ShieldAlert, PenTool, UserCheck, 
  Plane, Flame, DollarSign, FileCheck, Globe, Check, ChevronRight, Info
} from 'lucide-react';

const iconMap: { [key: string]: any } = {
  MessageSquare: MessageSquare,
  FileText: FileText,
  ShieldAlert: ShieldAlert,
  PenTool: PenTool,
  UserCheck: UserCheck,
  Plane: Plane,
  Flame: Flame,
  DollarSign: DollarSign,
  FileCheck: FileCheck,
  Globe: Globe
};

export default function Procedure() {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (stepNum: number) => {
    setActiveStep(stepNum);
  };

  const currentStepData = PROCEDURE_STEPS.find(s => s.step === activeStep) || PROCEDURE_STEPS[0];
  const CurrentIcon = iconMap[currentStepData.iconName] || Info;

  return (
    <section id="procedure" className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Abstract vector path backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-40 bg-gold/5 blur-[80px] -rotate-12 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-gold-dark font-bold bg-gold/10 px-3 py-1.5 rounded-full">
            Standard Operating Procedures
          </span>
          <h2 className="font-display font-extrabold text-slate-900 text-3xl sm:text-4xl mt-4 tracking-tight">
            Our 10-Step Gold Sourcing & Export Procedure
          </h2>
          <p className="text-slate-500 mt-4 text-base">
            We adhere strictly to international mineral trade regulations. Our transparent step-by-step pipeline guarantees security and compliance for institutional partners.
          </p>
        </div>

        {/* 10 Step Interactive Navigation Timeline */}
        <div className="mb-12">
          {/* Horizontal scroll container for mobile/tablet */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 px-1.5 scrollbar-thin scrollbar-thumb-slate-200">
            {PROCEDURE_STEPS.map((stepItem) => {
              const StepIcon = iconMap[stepItem.iconName] || Info;
              const isPassed = stepItem.step < activeStep;
              const isActive = stepItem.step === activeStep;

              return (
                <button
                  key={stepItem.step}
                  onClick={() => handleStepClick(stepItem.step)}
                  className={`flex-shrink-0 flex items-center gap-2.5 px-4.5 py-3 rounded-full text-xs font-mono font-bold border transition-all duration-300 ${
                    isActive
                      ? 'bg-slate-900 border-slate-900 text-gold-light shadow-md'
                      : isPassed
                      ? 'bg-teal-dark/5 border-teal-dark/15 text-teal-dark'
                      : 'bg-white border-slate-200/60 text-slate-500 hover:border-slate-300 hover:text-slate-700'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                    isActive 
                      ? 'bg-gold-dark text-slate-900' 
                      : isPassed 
                      ? 'bg-teal-med text-white' 
                      : 'bg-slate-100 text-slate-500'
                  }`}>
                    {isPassed ? <Check className="w-3 h-3" /> : stepItem.step}
                  </div>
                  <span>Step {stepItem.step}</span>
                  <StepIcon className="w-3.5 h-3.5 opacity-80" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Active Step Info Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Step detail card */}
          <div className="lg:col-span-8 glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200/60 shadow-lg flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold-dark">
                    <CurrentIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-teal-dark uppercase tracking-wider block">
                      Compliance Stage {currentStepData.step} of 10
                    </span>
                    <h3 className="font-display font-extrabold text-slate-900 text-xl sm:text-2xl tracking-tight block">
                      {currentStepData.title}
                    </h3>
                  </div>
                </div>

                <div className="hidden sm:block text-right">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Mandatory Prerequisite</span>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-sm uppercase tracking-wide mt-1 inline-block ${
                    currentStepData.step <= 5 ? 'bg-amber-100 text-amber-800' : 'bg-teal-100 text-teal-800'
                  }`}>
                    {currentStepData.step <= 5 ? 'Due Diligence' : 'Execution'}
                  </span>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {currentStepData.description}
              </p>

              {/* Specific procedural instructions */}
              <div className="p-4 bg-slate-50 border border-slate-200/50 rounded-xl space-y-2 text-xs text-slate-500">
                <span className="font-bold text-slate-700 block uppercase font-mono tracking-wider text-[10px]">Afrimex Trade Notes:</span>
                <p>
                  {currentStepData.step === 1 && 'No financial commitments are required to submit an inquiry. General consultations are entirely non-binding.'}
                  {currentStepData.step === 2 && 'LOI documents are registered and filtered for standard format vetting prior to sending our FCO.'}
                  {currentStepData.step === 3 && 'The FCO defines precise target discount yields linked to gold bullion parameters (LBMA Index limits).'}
                  {currentStepData.step === 4 && 'The final SPA defines jurisdiction laws in Uganda and neutral European forums (Zurich Arbitration).'}
                  {currentStepData.step === 5 && 'KYC mandates full beneficial ownership disclosure. Shell corporations are systematically rejected.'}
                  {currentStepData.step === 6 && 'We facilitate secure airport pickups at Entebbe, transport via armored cars, and state guest registry.'}
                  {currentStepData.step === 7 && 'The buyer receives random check shavings from the smelted gold bars to run local independent assays.'}
                  {currentStepData.step === 8 && 'Escrow mechanisms ensure no gold is loaded until bank confirmations are cleared by compliance.'}
                  {currentStepData.step === 9 && 'Afrimex processes custom exit SADs and settlements directly with the Ministry (MEMD) within 48 hours.'}
                  {currentStepData.step === 10 && 'Consecutive monthly shipments are triggered automatically following successful delivery of the first batch.'}
                </p>
              </div>

            </div>

            {/* Navigation Buttons inside panel */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <button
                disabled={activeStep === 1}
                onClick={() => handleStepClick(activeStep - 1)}
                className={`px-4.5 py-2.5 rounded-xl border font-bold text-xs transition-colors ${
                  activeStep === 1 
                    ? 'border-slate-100 text-slate-300 cursor-not-allowed' 
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                Previous Step
              </button>

              <button
                disabled={activeStep === 10}
                onClick={() => handleStepClick(activeStep + 1)}
                className={`px-4.5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs transition-all flex items-center gap-1.5 ${
                  activeStep === 10 
                    ? 'opacity-40 cursor-not-allowed' 
                    : 'hover:bg-slate-800'
                }`}
              >
                Next Step
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Sourcing flowchart summary panel */}
          <div className="lg:col-span-4 bg-slate-900 text-white p-8 rounded-3xl flex flex-col justify-between border border-slate-800">
            <div className="space-y-6">
              <h4 className="font-display font-bold text-gold-light text-lg">
                Pipeline Summary
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Our strict sequential workflow ensures all national royalties, local VAT zero-ratings, and OECD guidelines are observed without exceptions.
              </p>

              {/* Vertical timeline progress preview */}
              <div className="space-y-4 pt-4">
                <div className="flex gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    activeStep >= 1 ? 'bg-gold text-slate-900' : 'bg-slate-800 text-slate-400'
                  }`}>
                    1
                  </div>
                  <div>
                    <span className="text-xs font-bold block">Onboarding Phase</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Steps 1-3 (Inquiry & FCO)</span>
                  </div>
                </div>

                <div className="w-0.5 h-4 bg-slate-800 ml-2.5" />

                <div className="flex gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    activeStep >= 4 ? 'bg-gold text-slate-900' : 'bg-slate-800 text-slate-400'
                  }`}>
                    2
                  </div>
                  <div>
                    <span className="text-xs font-bold block">Compliance Validation</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Steps 4-5 (KYC & SPA Vetting)</span>
                  </div>
                </div>

                <div className="w-0.5 h-4 bg-slate-800 ml-2.5" />

                <div className="flex gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    activeStep >= 6 ? 'bg-gold text-slate-900' : 'bg-slate-800 text-slate-400'
                  }`}>
                    3
                  </div>
                  <div>
                    <span className="text-xs font-bold block">Smelting, Assay & Verification</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Steps 6-7 (Kampala Lab Witness)</span>
                  </div>
                </div>

                <div className="w-0.5 h-4 bg-slate-800 ml-2.5" />

                <div className="flex gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    activeStep >= 8 ? 'bg-gold text-slate-900' : 'bg-slate-800 text-slate-400'
                  }`}>
                    4
                  </div>
                  <div>
                    <span className="text-xs font-bold block">Escrow Settlement & Air Export</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Steps 8-10 (Brinks/Malca Shipment)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">Trade Inquiries</span>
              <span className="text-sm font-bold text-white block mt-1">compliance@afrimex.co.ug</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
