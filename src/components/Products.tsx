import React from 'react';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import { ShieldCheck, Info, CheckCircle, ArrowUpRight } from 'lucide-react';

interface ProductsProps {
  onInquire: (productName: string) => void;
}

export default function Products({ onInquire }: ProductsProps) {
  const handleNavigateToProduct = (id: string) => {
    window.location.hash = `#/${id}`;
  };

  return (
    <section id="products" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-gold-dark font-bold bg-gold/10 px-3 py-1.5 rounded-full">
            Our Offerings
          </span>
          <h2 className="font-display font-medium text-slate-900 text-3xl sm:text-4xl mt-4 tracking-tight">
            Certified Precious Metal Inventory
          </h2>
          <p className="text-slate-500 mt-4 text-sm sm:text-base font-light">
            All gold and precious metal items are verified, smelted, and certified in our Kampala laboratory prior to physical handover or secure transit.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              onClick={() => handleNavigateToProduct(product.id)}
              className="glass-panel rounded-3xl overflow-hidden border border-slate-200/50 hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer group hover:-translate-y-1"
            >
              {/* Image Banner */}
              <div className="aspect-[16/10] w-full relative overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <span className="text-[10px] font-mono font-bold text-gold-light tracking-wide uppercase">
                    {product.specs.purity.split('(')[0].trim()}
                  </span>
                </div>
              </div>

              {/* Text Area */}
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-display font-semibold text-slate-900 text-lg sm:text-xl tracking-tight group-hover:text-teal-dark transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-3 leading-relaxed flex-1 font-light">
                  {product.description}
                </p>

                {/* Bullets preview */}
                <div className="mt-5 space-y-2">
                  {product.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-500">
                      <CheckCircle className="w-4 h-4 text-teal-med shrink-0 mt-0.5" />
                      <span className="font-light">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Elements */}
                <div className="mt-6 pt-5 border-t border-slate-200/50 flex items-center justify-between gap-4">
                  <span className="text-xs font-bold text-teal-dark hover:underline flex items-center gap-1 transition-all">
                    <Info className="w-4 h-4" />
                    Dedicated Page & Specs
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavigateToProduct(product.id);
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold tracking-wide flex items-center gap-1.5 transition-all shadow-3xs"
                  >
                    Details
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold-light" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
