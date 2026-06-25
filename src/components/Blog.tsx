import React, { useState } from 'react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';
import { Search, Calendar, User, Clock, ArrowRight, X, ChevronRight, BookOpen } from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const categories = [
    'All',
    'Gold Market News',
    'Compliance',
    'Gold Sourcing'
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleOpenPost = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handleClosePost = () => {
    setSelectedPost(null);
  };

  return (
    <section id="blog" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-mono tracking-widest text-gold-dark font-bold bg-gold/10 px-3 py-1.5 rounded-full">
            Knowledge Hub
          </span>
          <h2 className="font-display font-extrabold text-slate-900 text-3xl sm:text-4xl mt-4 tracking-tight">
            Mineral Insights & Trade Regulatory Guides
          </h2>
          <p className="text-slate-500 mt-4 text-base">
            Expert analysis covering responsible sourcing standards, assaying methodologies, and East African precious metal market dynamics.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-12 bg-white p-4 rounded-2xl border border-slate-200/50 shadow-xs">
          
          {/* Categories Horizontal */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-teal-dark text-white'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full md:max-w-xs shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-teal-med focus:bg-white transition-all"
            />
          </div>

        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => handleOpenPost(post)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/50 hover:border-gold/30 hover:shadow-lg cursor-pointer transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Banner */}
                <div className="aspect-[16/10] w-full bg-slate-100 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-sm border border-slate-200/40 shadow-xs">
                    <span className="text-[9px] font-mono font-bold text-teal-dark uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Body details */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-[10px] font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-slate-900 text-base sm:text-lg group-hover:text-teal-dark transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-500 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer action */}
              <div className="px-6 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                <span className="group-hover:text-gold-dark transition-colors flex items-center gap-1.5">
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">
                  KW: {post.focusKeyword}
                </span>
              </div>

            </article>
          ))}
          
          {filteredPosts.length === 0 && (
            <div className="col-span-full py-16 text-center">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500 text-sm">No articles or guides match your criteria.</p>
            </div>
          )}
        </div>

        {/* Full Screen Article Reading Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-xs">
            <div className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200/50">
              
              {/* Modal sticky header */}
              <div className="sticky top-0 bg-white z-10 px-6 py-5 border-b border-slate-100 flex items-center justify-between">
                <span className="text-xs uppercase font-mono tracking-widest text-teal-dark font-bold bg-teal-dark/5 px-3 py-1 rounded-full">
                  {selectedPost.category}
                </span>
                <button
                  onClick={handleClosePost}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main content */}
              <div className="p-6 sm:p-10 space-y-8">
                
                {/* Meta details */}
                <div className="space-y-4">
                  <h3 className="font-display font-extrabold text-slate-900 text-2xl sm:text-3xl tracking-tight leading-tight">
                    {selectedPost.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 border-b border-slate-100 pb-4">
                    <span className="flex items-center gap-1.5">
                      <User className="w-4 h-4 text-slate-400" />
                      Author: {selectedPost.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      {selectedPost.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-slate-400" />
                      {selectedPost.readTime}
                    </span>
                  </div>
                </div>

                {/* Hero image for post */}
                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Rich text section */}
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line first-letter:text-4xl first-letter:font-extrabold first-letter:mr-1 first-letter:float-left first-letter:text-slate-900">
                    {selectedPost.content}
                  </p>
                </div>

                {/* SEO footprint summary */}
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex flex-wrap gap-4 items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-slate-500">Focus Keyword:</span>
                    <span className="text-slate-700 font-semibold">{selectedPost.focusKeyword}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-slate-500">Structured Schema:</span>
                    <span className="text-emerald-700 font-semibold">Article / JSON-LD Active</span>
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-end">
                <button
                  onClick={handleClosePost}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
                >
                  Done Reading
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
