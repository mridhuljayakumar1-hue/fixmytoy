import React, { useState } from 'react';
import { faqsData } from '../data/faqs';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-20 relative bg-slate-900/60 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked <span className="text-gradient-amber">Questions</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Everything you need to know about our repair process, safety, shipping, and turnaround times.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqsData.map((faq, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl border border-slate-800 overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-white text-base hover:text-amber-400 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-amber-400 transition-transform duration-300 shrink-0 ${
                  openIdx === idx ? 'rotate-180' : ''
                }`} />
              </button>

              {openIdx === idx && (
                <div className="px-5 pb-5 pt-1 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Direct Ask CTA */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 mb-3">Still have a specific question about your toy?</p>
          <button
            onClick={() => {
              const text = encodeURIComponent("Hi Fix My Toy! I have a quick question before booking:");
              window.open(`https://wa.me/15550192834?text=${text}`, '_blank');
            }}
            className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-500/30 font-bold text-xs inline-flex items-center gap-2 transition-all"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Ask Us Directly on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
}
