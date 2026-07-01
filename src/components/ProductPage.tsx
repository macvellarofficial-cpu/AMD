import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, CheckCircle2, ShieldCheck, Scale, FileText, Truck, 
  HelpCircle, ChevronDown, ChevronUp, Clock, FileCheck, Send, Info, Eye, Sparkles
} from 'lucide-react';
import { Product } from '../types';

interface ProductPageProps {
  product: Product;
  onBack: () => void;
}

const PRODUCT_IMAGES: Record<string, string[]> = {
  'gold-bars': [
    'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1589758438368-0ad531db3366?auto=format&fit=crop&w=800&q=80'
  ],
  'gold-dore-bars': [
    'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80'
  ],
  'gold-nuggets': [
    'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80'
  ],
  'gold-dust': [
    'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=800&q=80'
  ],
  'silver': [
    'https://images.unsplash.com/photo-1515564895181-37fa21a0e3a5?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1605557202138-097824c3f9ff?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1589758438368-0ad531db3366?auto=format&fit=crop&w=800&q=80'
  ]
};

const PRODUCT_FAQS: Record<string, Array<{ q: string; a: string }>> = {
  'gold-bars': [
    {
      q: 'Are these bars acceptable to international bullion markets?',
      a: 'Yes. Our gold bullion bars are smelted and hand-poured in Uganda, certified by the government Directorate of Geological Survey and Mines, and verified via split-sample fire assay testing, ensuring seamless acceptance at top international refineries in Dubai, Zurich, and Singapore.'
    },
    {
      q: 'What are the available weight metrics?',
      a: 'Our standard bar weights are 1 kg and 12.5 kg (Good Delivery equivalent). For retail wealth investors or family offices, we can cast custom weights ranging from 100g, 250g, and 500g upon request.'
    },
    {
      q: 'What is the standard payment terms for bullion?',
      a: 'We operate strictly under vetted, legally binding Sales and Purchase Agreements (SPA). Payment is executed via bank-to-bank SWIFT MT103 following final assay results at the buyer’s designated refinery or via secure banking escrow arrangements.'
    }
  ],
  'gold-dore-bars': [
    {
      q: 'Why purchase doré bars instead of refined bullion?',
      a: 'Doré bars are semi-refined gold alloys (typically 92% to 95% purity) direct from smelting. They represent a highly lucrative yield-pricing structure for international refineries who wish to handle the final refining stages themselves.'
    },
    {
      q: 'Is there an origin certificate?',
      a: 'Absolutely. Every batch of doré bars is accompanied by an official Ugandan ICGLR Certificate of Origin, ensuring conflict-free provenance aligned with international OECD Responsible Sourcing standards.'
    }
  ],
  'gold-nuggets': [
    {
      q: 'Are these nuggets altered or melted in any way?',
      a: 'No. Our premium nuggets are 100% raw, unaltered geological specimens collected from natural alluvial deposits. They maintain their pristine natural structure, shape, and unique organic beauty.'
    },
    {
      q: 'Who typically buys natural nuggets?',
      a: 'Natural nuggets are highly prized by private collectors, geological museums, high-net-worth individuals, and custom jewelry designers seeking completely original raw aesthetic materials.'
    }
  ],
  'gold-dust': [
    {
      q: 'What is the average purity of your alluvial gold dust?',
      a: 'Our unrefined alluvial gold dust holds an exceptionally high natural purity average, typically testing between 92.5% to 94.8% pure gold before refinery smelting.'
    },
    {
      q: 'What is the minimum contract size for gold dust?',
      a: 'We accommodate starting trial quantities of 5 kilograms, with regular monthly supply allocations scaling up to 100 kilograms for qualified institutional partners.'
    }
  ],
  'silver': [
    {
      q: 'Where is your silver sourced?',
      a: 'Our silver is obtained as a high-purity natural co-product during our gold smelting and refining processes. It is then refined separately up to 99.9% purity.'
    },
    {
      q: 'What forms are available?',
      a: 'We supply silver in standard 1 kg investment bars, larger 15 kg industrial bars, or bulk granules optimized for jewelry manufacturing and industrial processes.'
    }
  ]
};

export default function ProductPage({ product, onBack }: ProductPageProps) {
  const images = PRODUCT_IMAGES[product.id] || [product.image];
  const [activeImage, setActiveImage] = useState(images[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [faqOpenIdx, setFaqOpenIdx] = useState<number | null>(0);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: '',
    destination: 'Dubai (DXB)',
    paymentMethod: 'Bank Escrow',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [quoteNumber, setQuoteNumber] = useState('');

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product.id]);

  const toggleFaq = (idx: number) => {
    setFaqOpenIdx(faqOpenIdx === idx ? null : idx);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate luxury API response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setQuoteNumber(`AFX-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1500);
  };

  const faqs = PRODUCT_FAQS[product.id] || PRODUCT_FAQS['gold-bars'];

  return (
    <div className="bg-slate-50 min-h-screen py-10 relative">
      
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-teal-dark/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation / Back Button */}
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-slate-900 transition-all shadow-xs text-xs font-bold font-mono tracking-wider uppercase mb-8"
        >
          <ArrowLeft className="w-4 h-4 text-teal-dark group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home Inventory</span>
        </button>

        {/* Product Briefing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Premium Gallery */}
          <div className="lg:col-span-6 space-y-4 sticky top-28">
            
            {/* Main Stage Image */}
            <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/50 shadow-md relative group">
              <img
                src={activeImage}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <button 
                onClick={() => setLightboxOpen(true)}
                className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-md p-2.5 rounded-xl border border-white/25 text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                title="Zoom Gallery"
              >
                <Eye className="w-4 h-4 text-gold-light" />
              </button>
              
              <div className="absolute top-4 left-4 bg-teal-dark/95 backdrop-blur-md px-3 py-1 rounded-full border border-teal-dark/10">
                <span className="text-[10px] font-mono font-bold text-white tracking-widest uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-gold-light" />
                  Certified Allocation
                </span>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`aspect-[4/3] rounded-xl overflow-hidden border transition-all duration-300 ${
                    activeImage === img 
                      ? 'border-gold ring-2 ring-gold/25' 
                      : 'border-slate-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Gallery ${index + 1}`} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Quick trust metrics under gallery */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/50 space-y-3.5">
              <div className="flex items-center gap-3 text-slate-700">
                <ShieldCheck className="w-5 h-5 text-teal-med shrink-0" />
                <span className="text-xs sm:text-sm font-medium">OECD Sourced & Vetted Sourcing Chains</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Scale className="w-5 h-5 text-gold-dark shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Kampala Directorate Lab Split-Assay Reports</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Truck className="w-5 h-5 text-teal-med shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Fully-Insured Armored Air Cargo (Brinks, Malca-Amit)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Specifications & Details */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Header info */}
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-gold-dark bg-gold/10 px-3 py-1 rounded-full border border-gold/15">
                Bullion Registry Item
              </span>
              <h1 className="font-display font-medium text-slate-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight mt-4">
                {product.name}
              </h1>
              <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed mt-4 font-light">
                {product.description}
              </p>
            </div>

            {/* Technical Detail Sheet */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/50 shadow-xs space-y-6">
              <h3 className="font-display font-bold text-slate-950 text-base sm:text-lg border-b border-slate-100 pb-3 flex items-center gap-2">
                <Scale className="w-5 h-5 text-gold" />
                Precious Metal Specifications
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/40">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Assayed Purity</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 block mt-1">{product.specs.purity}</span>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/40">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Weight Metrics</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 block mt-1">{product.specs.weight}</span>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/40">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Certified Origin</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 block mt-1">{product.specs.origin}</span>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/40">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Physical Form</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 block mt-1">{product.specs.form}</span>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/40 sm:col-span-2">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Packaging Protocol</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 block mt-1">{product.specs.packaging}</span>
                </div>
              </div>
            </div>

            {/* Features list */}
            <div className="space-y-3.5">
              <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-teal-dark block">
                Logistics & Verification Guarantees
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feat, index) => (
                  <div key={index} className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-200/45 shadow-3xs">
                    <CheckCircle2 className="w-4 h-4 text-teal-med shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-600 leading-normal">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Informational Blocks Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          
          {/* Block 1: The Assay Process */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/50 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-gold/10 text-gold-dark flex items-center justify-center mb-5 border border-gold/15">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-slate-950 text-lg mb-3">Government Assay Protocol</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                Prior to export sealing, all lots are melted and homogenized. Standard split-sampling is subjected to rigid fire assay cupellation and thermo-XRF spectrum testing. Official gold content certificates are signed under government seal.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 flex items-center gap-2 text-[10px] font-mono font-bold text-teal-dark">
              <Clock className="w-3.5 h-3.5" />
              <span>ASSAY COMPLETED WITHIN 24 HOURS</span>
            </div>
          </div>

          {/* Block 2: Export Documentation Checklist */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/50 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-teal-dark/10 text-teal-dark flex items-center justify-center mb-5 border border-teal-dark/15">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-slate-950 text-lg mb-3">Compliance Documentation</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                Outbound cargo is cleared for departure with 100% legal coverage. Documents include: active Mineral Dealer License MDL20260633, ICGLR Certificate of Origin, Government Assay Stamp, Customs Export Declaration (URA) and Airway Bill (AWB).
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 flex items-center gap-2 text-[10px] font-mono font-bold text-teal-dark">
              <FileText className="w-3.5 h-3.5" />
              <span>100% EXPORT PERMIT COMPLIANT</span>
            </div>
          </div>

          {/* Block 3: Secured Armored Shipping */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/50 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-5 shadow-sm">
                <Truck className="w-5 h-5 text-gold-light" />
              </div>
              <h3 className="font-display font-bold text-slate-950 text-lg mb-3">Armored Transport Logistics</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                Valuables are secured in our high-security vault system before transport. International shipping is dispatched via armored vehicle escort directly to Entebbe International Airport (EBB) with final insured cargo delivery to global ports of destination.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 flex items-center gap-2 text-[10px] font-mono font-bold text-teal-dark">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>BRINKS & MALCA-AMIT PARTNERS</span>
            </div>
          </div>

        </div>

        {/* Dynamic Split: FAQs & High-Performance Quote Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
          
          {/* Product Specific FAQs */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-widest">Knowledge Desk</span>
              <h2 className="font-display font-medium text-slate-900 text-2xl sm:text-3xl mt-2">
                Frequently Asked Inquiries
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-2 font-light">
                Specific regulatory, technical, and payment questions about {product.name}.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {faqs.map((faq, index) => {
                const isOpen = faqOpenIdx === index;
                return (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl border border-slate-200/50 overflow-hidden transition-all shadow-3xs"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4.5 text-left flex justify-between items-center hover:bg-slate-50/50 transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-gold shrink-0" />
                        {faq.q}
                      </span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                    </button>
                    
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-500 border-t border-slate-100 leading-relaxed font-light">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Secure Quote Submission Form */}
          <div id="quote-form" className="lg:col-span-6">
            <div className="glass-panel-dark bg-slate-900/95 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="mb-6">
                <span className="text-[10px] font-mono font-bold text-gold-light tracking-widest uppercase block mb-1">
                  SECURE TRADING DESK
                </span>
                <h3 className="font-display font-medium text-white text-xl sm:text-2xl">
                  Request Allocation Quote
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1.5 font-light">
                  Direct submission to Ssenyonga Hakimu (Director of International Trade). Secure, confidential onboarding.
                </p>
              </div>

              {submitSuccess ? (
                <div className="bg-emerald-900/40 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-4 animate-fade-in">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-white text-lg">Allocation Request Transmitted</h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto font-light">
                    Your trade inquiry for <strong>{product.name}</strong> has been successfully securely registered with the Afrimex Trade Desk.
                  </p>
                  <div className="bg-slate-950/80 p-3.5 rounded-xl border border-white/5 font-mono text-center">
                    <span className="text-[10px] text-slate-400 block uppercase">SECURE DESK RECEIPT</span>
                    <span className="text-sm font-bold text-gold-light tracking-wider block mt-1">{quoteNumber}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-normal">
                    The Director of Trade will follow up on your corporate email/WhatsApp within 30 minutes with the preliminary draft Sales and Purchase Agreement (SPA).
                  </p>
                  <button
                    onClick={() => {
                      setSubmitSuccess(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        quantity: '',
                        destination: 'Dubai (DXB)',
                        paymentMethod: 'Bank Escrow',
                        message: ''
                      });
                    }}
                    className="mt-2 text-xs font-mono font-bold text-gold-light hover:underline uppercase tracking-wider"
                  >
                    Submit New Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div>
                    <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
                      Full Client Name / Corporate Entity *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Geneva Bullion Partners Ltd"
                      className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-xs sm:text-sm text-white focus:outline-hidden focus:border-gold font-sans"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
                        Corporate Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="trade@partner.com"
                        className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-xs sm:text-sm text-white focus:outline-hidden focus:border-gold font-sans"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
                        WhatsApp / Secure Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+41 22 123 4567"
                        className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-xs sm:text-sm text-white focus:outline-hidden focus:border-gold font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
                        Desired Quantity *
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        required
                        value={formData.quantity}
                        onChange={handleInputChange}
                        placeholder="e.g., 10 kg / Trial"
                        className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-xs sm:text-sm text-white focus:outline-hidden focus:border-gold font-sans"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
                        Destination Port
                      </label>
                      <select
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-xs sm:text-sm text-white focus:outline-hidden focus:border-gold font-sans"
                      >
                        <option>Dubai (DXB)</option>
                        <option>Zurich (ZRH)</option>
                        <option>London (LHR)</option>
                        <option>Singapore (SIN)</option>
                        <option>Other / Customs Port</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
                        Preferred Payment
                      </label>
                      <select
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-xs sm:text-sm text-white focus:outline-hidden focus:border-gold font-sans"
                      >
                        <option>Bank Escrow</option>
                        <option>SWIFT MT103</option>
                        <option>Letter of Credit</option>
                        <option>Correspondent Account</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
                      Corporate Message & Onboarding Requirements
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please note any special assay instructions, timeline benchmarks or banking requirements..."
                      className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-xs sm:text-sm text-white focus:outline-hidden focus:border-gold font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gold hover:bg-gold-dark text-slate-950 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 mt-4 cursor-pointer disabled:opacity-50 transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                        <span>TRANSGRESSING DOCUMENT KEY...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmit Secure Inquiry</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-2 justify-center text-[10px] text-slate-500 font-mono mt-3">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-light" />
                    <span>256-bit AES end-to-end encrypted channel with Kampala Trade Desk</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div 
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
        >
          <img
            src={activeImage}
            alt="Expanded gallery view"
            referrerPolicy="no-referrer"
            className="max-w-full max-h-[85vh] object-contain rounded-xl border border-white/10 shadow-2xl"
          />
          <span className="absolute bottom-6 font-mono text-xs text-slate-400 uppercase tracking-widest">
            Click anywhere to close zoom gallery
          </span>
        </div>
      )}

    </div>
  );
}
