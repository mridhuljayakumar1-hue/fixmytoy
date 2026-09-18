import React, { useState } from 'react';
import { servicesData } from '../data/services';
import { MessageSquare, Clock, Tag, Check, ArrowRight, Sparkles } from 'lucide-react';

export default function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleBookServiceOnWhatsApp = (serviceTitle) => {
    const text = encodeURIComponent(`Hi Fix My Toy! I'm interested in your "${serviceTitle}" service. Can I send photos of my toy for an estimate?`);
    window.open(`https://wa.me/15550192834?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-20 md:py-28 relative bg-slate-900/50">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Craftsmen & Electrical Technicians</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Expert Repairs For Every <span className="text-gradient-amber">Type of Toy</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We handle everything from delicate baby security blankets to complex RC electronics and antique wooden rocking horses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between glass-card-hover group border border-slate-800"
            >
              <div>
                {/* Top Badge & Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {service.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{service.timeframe}</span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="font-display text-2xl font-bold text-white group-hover:text-amber-400 transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Service Image */}
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 border border-slate-800">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 glass-panel py-1 px-3 rounded-full text-xs font-bold text-emerald-400 border border-emerald-500/30">
                    Est. {service.priceRange}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {service.fullDesc}
                </p>

                {/* Features list */}
                <div className="space-y-2.5 mb-8">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 mt-0.5 shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Action Button */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
                <div>
                  <span className="block text-[11px] text-slate-400">Estimated Pricing</span>
                  <span className="text-base font-extrabold text-white">{service.priceRange}</span>
                </div>

                <button
                  onClick={() => handleBookServiceOnWhatsApp(service.title)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 font-bold text-xs shadow-md glow-whatsapp hover:scale-105 transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-slate-950" />
                  <span>Inquire on WhatsApp</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Repair Banner Callout */}
        <div className="mt-16 glass-panel-amber rounded-3xl p-8 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center text-3xl shrink-0">
              🛠️
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-white">Have a unique or rare toy not listed above?</h4>
              <p className="text-xs text-slate-300">We love special custom restorations! Send us a photo and our master artisan will evaluate it.</p>
            </div>
          </div>

          <button
            onClick={() => {
              const text = encodeURIComponent("Hi Fix My Toy! I have a custom unique toy repair inquiry. Here is my situation:");
              window.open(`https://wa.me/15550192834?text=${text}`, '_blank');
            }}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shrink-0 shadow-lg transition-transform active:scale-95 flex items-center gap-2"
          >
            <span>Ask Craftsmanship Specialist</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
