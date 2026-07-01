import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Services from './components/Services';
import Procedure from './components/Procedure';
import ExportDocuments from './components/ExportDocuments';
import Sourcing from './components/Sourcing';
import GlobalMarkets from './components/GlobalMarkets';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';
import GoldPriceWidget from './components/GoldPriceWidget';
import { PRODUCTS } from './data';
import { ArrowUp, Download, CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [currentProductId, setCurrentProductId] = useState<string | null>(null);
  const [selectedProductInquiry, setSelectedProductInquiry] = useState('');
  const [notification, setNotification] = useState<string | null>(null);

  // Hash Routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#/')) {
        const id = hash.replace('#/', '');
        const matched = PRODUCTS.find(p => p.id === id);
        if (matched) {
          setCurrentProductId(id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      setCurrentProductId(null);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Smooth scroll logic
  const handleNavigate = (sectionId: string) => {
    if (currentProductId) {
      window.location.hash = ''; // clear hash, goes back to home
      setTimeout(() => {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveSection(sectionId);
        }
      }, 100);
    } else {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveSection(sectionId);
      }
    }
  };

  // Tracking which section is active based on scroll (only if on home page)
  useEffect(() => {
    if (currentProductId) return;

    const handleScroll = () => {
      const sections = ['hero', 'about', 'products', 'services', 'procedure', 'documents', 'sourcing', 'markets', 'blog', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 120; // offset for nav height

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentProductId]);

  const handleInquireBatch = (productName: string) => {
    setSelectedProductInquiry(productName);
    handleNavigate('contact');
    
    // Show premium visual alert
    setNotification(`Prefilled secure onboarding portal with: ${productName}`);
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const handleDownloadProfile = () => {
    setNotification('Downloading secure Afrimex Corporate Profile PDF package...');
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  return (
    <div id="app-root" className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-gold/30 selection:text-slate-950">
      
      {/* Visual top notification banner if active */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 p-4.5 rounded-2xl glass-panel-dark text-white border border-white/10 shadow-2xl max-w-sm flex items-start gap-3 animate-slide-up">
          <CheckCircle2 className="w-5 h-5 text-gold-light shrink-0 mt-0.5" />
          <div className="flex-1">
            <span className="text-[10px] font-mono text-gold-light uppercase tracking-wider block">Security Console</span>
            <p className="text-xs text-slate-200 leading-normal mt-0.5">{notification}</p>
          </div>
          <button onClick={() => setNotification(null)} className="text-slate-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Floating back-to-top anchor */}
      <button
        onClick={() => handleNavigate('hero')}
        className={`fixed bottom-22 left-6 z-40 w-11 h-11 rounded-full bg-slate-900/90 text-gold-light flex items-center justify-center border border-white/10 shadow-lg hover:bg-slate-850 transition-all duration-300 ${
          activeSection === 'hero' ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        title="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Floating WhatsApp chat button */}
      <a
        href="https://wa.me/256793932028?text=Hello%20Afrimex%20Mineral%20Dealers%2C%20I%20am%20inquiring%20about%20gold"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group"
        title="Chat on WhatsApp"
      >
        <span className="absolute left-14 bg-slate-900 text-white text-[10px] font-mono font-bold py-1.5 px-3 rounded-lg border border-slate-800 shadow-md opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
          Chat with Trade Desk
        </span>
        <div className="relative flex items-center justify-center">
          {/* Pulsing ring indicator */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75"></span>
          <svg
            className="w-6 h-6 relative z-10 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981 1.008-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.027 6.989 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456 6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
      </a>

      {/* Primary Navigation */}
      <Navbar onNavigate={handleNavigate} activeSection={currentProductId ? 'products' : activeSection} />

      {/* Segmented Modules Grid */}
      <main>
        {currentProductId ? (
          /* Module: Dedicated Precious Metal Subpage */
          <ProductPage 
            product={PRODUCTS.find(p => p.id === currentProductId)!} 
            onBack={() => { window.location.hash = ''; }} 
          />
        ) : (
          /* Standard Multi-Section Landing Page Layout */
          <>
            {/* Module: Hero Area */}
            <Hero onNavigate={handleNavigate} onDownloadProfile={handleDownloadProfile} />

            {/* Module: Real-Time Live Trading Ticker (Super Luxury Float) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-30 mb-20">
              <GoldPriceWidget />
            </div>

            {/* Module: Corporate Story & Timeline */}
            <AboutUs />

            {/* Module: Precious Metal Products Catalog */}
            <Products onInquire={handleInquireBatch} />

            {/* Module: Commercial Services Suite */}
            <Services />

            {/* Module: 10-Step Buying Procedures */}
            <Procedure />

            {/* Module: Export Compliance Suite */}
            <ExportDocuments />

            {/* Module: ESG, Audit & Ethical Sourcing */}
            <Sourcing />

            {/* Module: Interactive Regional Transit Map */}
            <GlobalMarkets />

            {/* Module: Knowledge Hub & Guides */}
            <Blog />

            {/* Module: Searchable help database (40 FAQs) */}
            <FAQ />

            {/* Module: KYC Onboarding & Sourcing Calculator */}
            <Contact initialProductName={selectedProductInquiry} />
          </>
        )}
      </main>

      {/* Corporate Institutional Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
