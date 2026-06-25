import React, { useState } from 'react';
import { FAQS } from '../data';
import { FAQItem } from '../types';
import { Search, ChevronDown, ChevronUp, HelpCircle, FileCheck } from 'lucide-react';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>(null);

  const categories = ['All', 'Licensing & Credentials', 'Buying & Export Process', 'Payments, Assay & Taxes', 'Compliance & Sourcing'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleExpand = (id: string) => {
    setExpandedFaqId(expandedFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-mono tracking-widest text-teal-dark font-bold bg-teal-dark/5 px-3 py-1.5 rounded-full">
            Help Center
          </span>
          <h2 className="font-display font-extrabold text-slate-900 text-3xl sm:text-4xl mt-4 tracking-tight">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="text-slate-500 mt-4 text-base">
            Review 40 comprehensive, audited explanations regarding legal frameworks, payment pathways, mineral assaying, and ethical trade compliance.
          </p>
        </div>

        {/* Search & Category Tabs */}
        <div className="space-y-6 mb-12">
          
          {/* Search Field */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search 40 certified trade answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-gold focus:bg-white transition-all shadow-xs"
            />
          </div>

          {/* Category Tabs list */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setExpandedFaqId(null);
                }}
                className={`px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-wide transition-all ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-gold-light shadow-xs'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Accordions Container */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isExpanded = expandedFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isExpanded 
                    ? 'bg-slate-50/60 border-gold/30 shadow-xs' 
                    : 'bg-white border-slate-200/60 hover:border-slate-300'
                }`}
              >
                {/* FAQ Header button */}
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full flex items-center justify-between text-left p-5 focus:outline-hidden gap-4"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className={`w-5 h-5 mt-0.5 shrink-0 transition-colors ${
                      isExpanded ? 'text-gold-dark' : 'text-slate-400'
                    }`} />
                    <span className="font-display font-semibold text-slate-900 text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {/* FAQ Body panel */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isExpanded ? 'max-h-[500px] border-t border-slate-100' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 sm:px-8 bg-white/70">
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
                    <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>Category: {faq.category}</span>
                      <div className="flex items-center gap-1">
                        <FileCheck className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Compliance Validated</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="py-12 text-center text-slate-400 font-mono text-xs">
              No matching answers found in the 40-FAQ database. Try another search.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
