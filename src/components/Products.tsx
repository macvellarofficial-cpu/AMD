import React, { useState } from 'react';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import { ShieldCheck, Info, X, CheckCircle, ArrowUpRight, Scale } from 'lucide-react';

interface ProductsProps {
  onInquire: (productName: string) => void;
}

export default function Products({ onInquire }: ProductsProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenSpecs = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseSpecs = () => {
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-gold-dark font-bold bg-gold/10 px-3 py-1.5 rounded-full">
            Our Offerings
          </span>
          <h2 className="font-display font-extrabold text-slate-900 text-3xl sm:text-4xl mt-4 tracking-tight">
            Certified Precious Metal Inventory
          </h2>
          <p className="text-slate-500 mt-4 text-base">
            All gold and precious metal items are verified, smelted, and certified in our Kampala laboratory prior to physical handover or secure transit.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="glass-panel rounded-3xl overflow-hidden border border-slate-200/50 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Image Banner */}
              <div className="aspect-[16/9] w-full relative overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <span className="text-[10px] font-mono font-bold text-gold-light tracking-wide uppercase">
                    {product.specs.purity.split('(')[0].trim()}
                  </span>
                </div>
              </div>

              {/* Text Area */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-display font-bold text-slate-900 text-xl sm:text-2xl tracking-tight">
                  {product.name}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed flex-1">
                  {product.description}
                </p>

                {/* Bullets preview */}
                <div className="mt-6 space-y-2">
                  {product.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-500">
                      <CheckCircle className="w-4 h-4 text-teal-med shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Elements */}
                <div className="mt-8 pt-6 border-t border-slate-200/50 flex items-center justify-between gap-4">
                  <button
                    onClick={() => handleOpenSpecs(product)}
                    className="text-xs font-bold text-slate-700 hover:text-slate-900 flex items-center gap-1.5 transition-colors group"
                  >
                    <Info className="w-4 h-4 text-teal-dark group-hover:scale-110 transition-transform" />
                    Full Specifications
                  </button>

                  <button
                    onClick={() => onInquire(product.name)}
                    className="px-4.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold tracking-wide flex items-center gap-1.5 transition-all shadow-sm"
                  >
                    Inquire Batch
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold-light" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for Full Specifications */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-xs">
            <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200/50">
              
              {/* Modal header with close */}
              <div className="sticky top-0 bg-white z-10 px-6 py-5 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-gold-dark" />
                  <h3 className="font-display font-extrabold text-slate-900 text-lg">
                    Product Technical Sheet
                  </h3>
                </div>
                <button
                  onClick={handleCloseSpecs}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal content */}
              <div className="p-6 sm:p-8 space-y-8">
                
                {/* Intro brief */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-44 aspect-video sm:aspect-square rounded-xl overflow-hidden shrink-0 bg-slate-100">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-xl">
                      {selectedProduct.name}
                    </h4>
                    <p className="text-slate-500 text-xs sm:text-sm mt-2 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>
                </div>

                {/* Technical Spec Matrix */}
                <div>
                  <h5 className="text-xs uppercase font-mono tracking-widest text-teal-dark font-bold mb-3">
                    Technical Specifications
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">Purity Level</span>
                      <span className="text-sm font-semibold text-slate-800 block mt-1">
                        {selectedProduct.specs.purity}
                      </span>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">Standard Weight Metrics</span>
                      <span className="text-sm font-semibold text-slate-800 block mt-1">
                        {selectedProduct.specs.weight}
                      </span>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">Source & Origin</span>
                      <span className="text-sm font-semibold text-slate-800 block mt-1">
                        {selectedProduct.specs.origin}
                      </span>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">Physical Form</span>
                      <span className="text-sm font-semibold text-slate-800 block mt-1">
                        {selectedProduct.specs.form}
                      </span>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 sm:col-span-2">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">Export Packaging Standard</span>
                      <span className="text-sm font-semibold text-slate-800 block mt-1">
                        {selectedProduct.specs.packaging}
                      </span>
                    </div>

                  </div>
                </div>

                {/* Key Benefits Bullets */}
                <div>
                  <h5 className="text-xs uppercase font-mono tracking-widest text-teal-dark font-bold mb-3">
                    Compliance & Logistics Features
                  </h5>
                  <div className="space-y-3">
                    {selectedProduct.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-teal-dark/5 p-3 rounded-xl border border-teal-dark/10">
                        <ShieldCheck className="w-5 h-5 text-teal-med shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal footer */}
              <div className="sticky bottom-0 bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-end gap-3.5">
                <button
                  onClick={handleCloseSpecs}
                  className="px-4.5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-800 font-bold text-xs hover:bg-slate-100 transition-colors"
                >
                  Close Specification
                </button>
                <button
                  onClick={() => {
                    onInquire(selectedProduct.name);
                    handleCloseSpecs();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-gold-light font-bold text-xs tracking-wide transition-all shadow-sm"
                >
                  Inquire Now
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
