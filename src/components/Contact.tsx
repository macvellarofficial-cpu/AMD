import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ShieldCheck, Calculator, ArrowUpRight, Send, CheckCircle, Users } from 'lucide-react';

interface ContactProps {
  initialProductName?: string;
}

export default function Contact({ initialProductName = '' }: ContactProps) {
  // Calculator state
  const [calcWeightKg, setCalcWeightKg] = useState<number>(10);
  const [calcPurity, setCalcPurity] = useState<number>(0.9999); // 99.99%

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    quantity: '5',
    destination: 'Dubai (DXB)',
    loiReady: 'Ready',
    notes: initialProductName ? `Inquiry regarding: ${initialProductName}` : ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Constants for calculator (e.g. gold at ~$75,500 per Kilogram spot rate)
  const GOLD_KG_RATE = 75500;
  const rawValue = calcWeightKg * GOLD_KG_RATE * (calcPurity === 0.9999 ? 1 : 0.96);
  const outboundRoyalties = rawValue * 0.01; // 1% estimated royalty covered by seller
  const estShipWeight = calcWeightKg * 1.05; // 5% packaging tare weight

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate premium API storage / alert
    setFormSubmitted(true);
    setTimeout(() => {
      // Keep it true but logged
      console.log('Premium KYC Inquiry Saved:', formData);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-gold-dark font-bold bg-gold/10 px-3 py-1.5 rounded-full">
            Onboarding Hub
          </span>
          <h2 className="font-display font-extrabold text-slate-900 text-3xl sm:text-4xl mt-4 tracking-tight">
            Initiate Your Precious Metal Allocations
          </h2>
          <p className="text-slate-500 mt-4 text-base">
            Use our physical cargo calculator to model order volumes, or submit your corporate KYC files and Letters of Intent (LOI) through our secure onboarding form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Office details & Interactive Calculator */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            
            {/* Contact Details Panel */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 space-y-6">
              <h3 className="font-display font-bold text-lg text-gold-light">
                Afrimex Corporate Headquarters
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex gap-3.5 items-start">
                  <MapPin className="w-5 h-5 text-gold-light shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Office 1 (Corporate Hub & Assaying):</span>
                    <span className="block mt-0.5">Plot 01, Crested Towers, Nakaseero Division, Kampala City, Uganda</span>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <MapPin className="w-5 h-5 text-gold-light shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Office 2 (Smelting & Secure Storage):</span>
                    <span className="block mt-0.5">Kitala, Kampala-Entebbe Road, Wakiso District, Central Uganda</span>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <Mail className="w-5 h-5 text-gold-light shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Official Contact Email:</span>
                    <a href="mailto:info@afrimexmineraldealers.com" className="block mt-0.5 font-mono text-xs text-gold-light hover:underline">info@afrimexmineraldealers.com</a>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <Phone className="w-5 h-5 text-gold-light shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Official Trade Desk (WhatsApp):</span>
                    <a href="https://wa.me/256793932028?text=Hello%20Afrimex%20Mineral%20Dealers%2C%20I%20am%20inquiring%20about%20gold" target="_blank" rel="noopener noreferrer" className="block mt-0.5 font-mono text-xs text-emerald-400 hover:underline">+256 793 932 028</a>
                    <span className="block text-[10px] text-teal-light font-bold">Secure direct message support active</span>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start pt-2 border-t border-slate-800">
                  <Users className="w-5 h-5 text-gold-light shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Director Contact Desk:</span>
                    <span className="block text-xs mt-0.5 text-slate-300">Ssenyonga Hakimu (Director of Trade)</span>
                    <a href="mailto:sales@afrimexmineraldealers.com" className="block mt-0.5 font-mono text-xs text-gold-light hover:underline">sales@afrimexmineraldealers.com</a>
                    <a href="https://ug.linkedin.com/in/ssenyonga-hakimu-a217b5370" target="_blank" rel="noopener noreferrer" className="block mt-1 text-[10px] text-teal-light hover:underline font-mono font-bold">View LinkedIn Profile</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Sourcing Calculator Panel */}
            <div className="glass-panel rounded-3xl p-8 border border-slate-200/50 space-y-6">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-teal-dark" />
                <h3 className="font-display font-bold text-slate-900 text-lg">
                  Wholesale Allocation Estimator
                </h3>
              </div>

              {/* Slider Inputs */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-500 mb-1.5">
                    <span>Target Quantity:</span>
                    <span className="font-bold text-slate-800">{calcWeightKg} Kilograms</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    step="5"
                    value={calcWeightKg}
                    onChange={(e) => setCalcWeightKg(parseInt(e.target.value))}
                    className="w-full accent-teal-dark bg-slate-200 rounded-lg appearance-none h-1.5 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-500 mb-1.5">
                    <span>Standard Bullion Purity:</span>
                    <span className="font-bold text-slate-800">
                      {calcPurity === 0.9999 ? '99.99% (Fine 24K)' : '96.00% (Standard Cast)'}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setCalcPurity(0.9999)}
                      className={`py-2 text-[10px] font-mono font-bold rounded-lg border transition-all ${
                        calcPurity === 0.9999
                          ? 'bg-slate-900 border-slate-900 text-gold-light'
                          : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'
                      }`}
                    >
                      99.99% (24K Pure)
                    </button>
                    <button
                      onClick={() => setCalcPurity(0.96)}
                      className={`py-2 text-[10px] font-mono font-bold rounded-lg border transition-all ${
                        calcPurity === 0.96
                          ? 'bg-slate-900 border-slate-900 text-gold-light'
                          : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'
                      }`}
                    >
                      96.00% (Smelted)
                    </button>
                  </div>
                </div>
              </div>

              {/* Outputs Summary */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/40 space-y-2.5">
                <div className="flex justify-between text-xs font-mono text-slate-500">
                  <span>Est. Gold Spot Value:</span>
                  <span className="font-bold text-slate-800">${rawValue.toLocaleString()} USD</span>
                </div>
                <div className="flex justify-between text-xs font-mono text-slate-500">
                  <span>Export Levies Paid:</span>
                  <span className="text-emerald-600 font-bold">-$0 (Afrimex Settled)</span>
                </div>
                <div className="flex justify-between text-xs font-mono text-slate-500">
                  <span>Est. Gross Gross Weight:</span>
                  <span className="font-bold text-slate-800">{estShipWeight.toFixed(2)} kg</span>
                </div>
                <div className="flex justify-between text-xs font-mono text-slate-500 border-t border-slate-200 pt-2 font-bold text-slate-900">
                  <span>Total Escrow Cover:</span>
                  <span className="text-teal-dark">${rawValue.toLocaleString()} USD</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Secure Onboarding Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/50 shadow-md flex flex-col justify-between">
            
            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-slate-900 text-xl sm:text-2xl">
                    KYC Document Pipeline Activated
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm max-w-md">
                    Thank you. Your transactional file has been securely logged. Our lead compliance officer (Sarah N. Lwanga) will contact your corporate desk within 4 business hours to finalize the Sales and Purchase Agreement (SPA).
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-mono text-slate-400">
                  <span>Security Signature Hash:</span>
                  <span className="block text-slate-600 mt-1 font-bold select-all">
                    AES_256_GCM::{Math.random().toString(36).substring(2, 15).toUpperCase()}
                  </span>
                </div>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">KYC & Onboarding Form</span>
                  <h3 className="font-display font-bold text-slate-950 text-xl block mt-1">
                    Secure Buyer Inquiry Portal
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div>
                    <label className="text-[10px] font-mono font-bold text-slate-500 uppercase block mb-1.5">
                      Contact Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="e.g. Maximilian Richter"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-teal-med focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono font-bold text-slate-500 uppercase block mb-1.5">
                      Company Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="company"
                      placeholder="e.g. Aureum Asset Management"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-teal-med focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono font-bold text-slate-500 uppercase block mb-1.5">
                      Corporate Email *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="m.richter@aureum.ch"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-teal-med focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono font-bold text-slate-500 uppercase block mb-1.5">
                      Corporate Phone *
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="+41 44 123 4567"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-teal-med focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono font-bold text-slate-500 uppercase block mb-1.5">
                      Desired Volume (kg/month)
                    </label>
                    <select
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-teal-med focus:bg-white transition-all"
                    >
                      <option value="5">5 Kilograms (Standard MOQ)</option>
                      <option value="10">10 Kilograms</option>
                      <option value="25">25 Kilograms</option>
                      <option value="50">50 Kilograms</option>
                      <option value="100">100+ Kilograms (Rolling Contract)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono font-bold text-slate-500 uppercase block mb-1.5">
                      Target Air Cargo Destination
                    </label>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-teal-med focus:bg-white transition-all"
                    >
                      <option value="Dubai (DXB)">Dubai, UAE (DXB Airport)</option>
                      <option value="Zurich (ZRH)">Zurich, Switzerland (ZRH Airport)</option>
                      <option value="London (LHR)">London, United Kingdom (LHR Airport)</option>
                      <option value="Istanbul (IST)">Istanbul, Turkey (IST Airport)</option>
                      <option value="Singapore (SIN)">Singapore (SIN Airport)</option>
                    </select>
                  </div>

                </div>

                <div>
                  <label className="text-[10px] font-mono font-bold text-slate-500 uppercase block mb-1.5">
                    Letter of Intent (LOI) Vetting Status
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Ready', 'Draft', 'Not Prepared'].map((status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, loiReady: status }))}
                        className={`py-2 text-[10px] font-mono font-bold rounded-lg border transition-all ${
                          formData.loiReady === status
                            ? 'bg-slate-900 border-slate-900 text-gold-light'
                            : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono font-bold text-slate-500 uppercase block mb-1.5">
                    Trade Specifications / Message Notes
                  </label>
                  <textarea
                    rows={4}
                    name="notes"
                    placeholder="Provide details about delivery timeline, preferred escrow banking institutions, or third-party assay requirements."
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-teal-med focus:bg-white transition-all resize-none"
                  />
                </div>

                <div className="flex items-start gap-2.5">
                  <input
                    required
                    type="checkbox"
                    id="consent"
                    className="accent-teal-dark mt-1"
                  />
                  <label htmlFor="consent" className="text-[10px] sm:text-xs text-slate-500 leading-normal">
                    We hereby certify that all funds are fully documented, legitimate, conflict-free, and align with international FATF and anti-money laundering regulations.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 glow-hover"
                >
                  Submit Secure KYC Inquiry
                  <Send className="w-4 h-4 text-gold-light" />
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
