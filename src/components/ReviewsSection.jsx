import React, { useState } from 'react';
import { reviewsData, overallStats } from '../data/reviews';
import { Star, CheckCircle2, MessageSquare, Quote, ThumbsUp, Sparkles } from 'lucide-react';

export default function ReviewsSection() {
  const [filter, setFilter] = useState('all');

  return (
    <section id="reviews" className="py-20 md:py-28 relative bg-slate-900/40">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>Verified Customer Stories</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Loved By <span className="text-gradient-amber">Parents & Collectors</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            See how our workshop brought priceless childhood smiles and family heirlooms back to life.
          </p>
        </div>

        {/* Overall Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-center">
            <div className="flex justify-center text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <div className="font-display text-3xl font-extrabold text-white">{overallStats.rating} / 5.0</div>
            <div className="text-xs text-slate-400 mt-1">Average Rating</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-center">
            <div className="font-display text-3xl font-extrabold text-emerald-400">{overallStats.toysRepaired}</div>
            <div className="text-xs text-slate-400 mt-1">Toys Restored</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-center">
            <div className="font-display text-3xl font-extrabold text-amber-400">{overallStats.totalReviews}</div>
            <div className="text-xs text-slate-400 mt-1">Verified Customer Reviews</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-center">
            <div className="font-display text-3xl font-extrabold text-sky-400">{overallStats.satisfactionRate}</div>
            <div className="text-xs text-slate-400 mt-1">Satisfaction Rate</div>
          </div>

        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between glass-card-hover border border-slate-800 relative group"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-800/40 group-hover:text-amber-500/10 transition-colors pointer-events-none" />

              <div>
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified Repair Customer</span>
                  </span>
                </div>

                {/* Toy Fixed Tag */}
                <div className="mb-4 inline-block px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-300">
                  Fixed: {review.toyFixed}
                </div>

                {/* Quote Content */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer User Footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-slate-700"
                />
                <div>
                  <div className="font-bold text-sm text-white">{review.name}</div>
                  <div className="text-xs text-slate-400">
                    {review.role} • <span className="text-slate-300">{review.location}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-sm text-slate-300 mb-4">
            Have a story of your own or want to get your toy fixed?
          </p>
          <button
            onClick={() => {
              const text = encodeURIComponent("Hi Fix My Toy! I read your customer reviews and would love to get my toy restored!");
              window.open(`https://wa.me/15550192834?text=${text}`, '_blank');
            }}
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 text-slate-950 font-extrabold text-sm shadow-xl glow-whatsapp hover:scale-105 transition-all inline-flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950" />
            <span>Join 5,800+ Happy Customers on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
}
