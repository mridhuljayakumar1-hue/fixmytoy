import React from 'react';
import { MessageSquare, ShieldCheck, Zap, Sparkles, MapPin, ArrowRight, Star, Clock, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenConsultation }) {
  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent("Hi Fix My Toy (Peruva)! I want to get an estimate for repairing an electronic toy / ride-on car. Here are the details:");
    window.open(`https://wa.me/917594087405?text=${text}`, '_blank');
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-amber-400 text-xs font-semibold mb-6 shadow-inner">
              <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Kids Ride-On & RC Electronic Repair Specialist</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="text-slate-300 font-medium">Peruva, Kottayam</span>
            </div>

            {/* Main Title */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Kids Ride-On Cars, <br />
              <span className="text-gradient-amber">RC Cars & Electronic</span> <br />
              Toy Repair Clinic!
            </h1>

            {/* Subheading */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
              Is your child's electric jeep, superbike, RC car or battery-operated toy not working? Send us photos or videos on <strong className="text-emerald-400 font-semibold">WhatsApp (+91 7594087405)</strong> for a quick, free repair estimate!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={handleWhatsAppDirect}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 text-slate-950 font-extrabold text-base shadow-xl glow-whatsapp hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
              >
                <MessageSquare className="w-5 h-5 fill-slate-950 group-hover:rotate-6 transition-transform" />
                <span>WhatsApp Photo Estimate (+91 7594087405)</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="px-6 py-4 rounded-2xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 font-semibold text-base border border-slate-700 hover:border-amber-500/50 transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Estimate Price (INR ₹)</span>
              </button>
            </div>

            {/* Trust Micro Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80 w-full">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">4.96 / 5.0</div>
                  <div className="text-[11px] text-slate-400">480+ Reviews</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">1,850+</div>
                  <div className="text-[11px] text-slate-400">Toys Fixed</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Peruva Hub</div>
                  <div className="text-[11px] text-slate-400">Kottayam 686665</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Fast Reply</div>
                  <div className="text-[11px] text-slate-400">WhatsApp Team</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-3 bg-gradient-to-b from-slate-700/50 to-slate-900/90 border border-slate-700/60 shadow-2xl overflow-hidden group">
              
              {/* Image */}
              <div className="relative aspect-[4/4] rounded-2xl overflow-hidden">
                <img
                  src="/images/jeep_after.jpg"
                  alt="Restored Kids Electric Ride-on Raptor Jeep"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>

                {/* Floating WhatsApp Quick Consultation Badge */}
                <div className="absolute top-4 left-4 glass-panel p-3 rounded-2xl flex items-center gap-3 border border-emerald-500/30">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
                  <div>
                    <span className="block text-xs font-bold text-emerald-400">WhatsApp Active</span>
                    <span className="block text-[10px] text-slate-300">+91 7594087405</span>
                  </div>
                </div>

                {/* Bottom Overlay Info Box */}
                <div className="absolute bottom-4 inset-x-4 glass-panel p-4 rounded-2xl border border-amber-500/30 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 mb-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs font-bold text-white">Ride-On Jeep Full Teardown & Repair</p>
                    <p className="text-[10px] text-slate-300">Motor gearboxes, 12V battery & pedal wiring</p>
                  </div>

                  <button
                    onClick={handleWhatsAppDirect}
                    className="p-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-lg transition-transform active:scale-95"
                    title="Send WhatsApp Message"
                  >
                    <MessageSquare className="w-5 h-5 fill-slate-950" />
                  </button>
                </div>
              </div>

            </div>

            {/* Decorative Accent Pill */}
            <div className="absolute -bottom-6 -left-6 glass-panel py-2.5 px-4 rounded-2xl border border-amber-500/30 hidden sm:flex items-center gap-2 shadow-xl animate-float">
              <span className="text-xl">⚡</span>
              <div>
                <div className="text-xs font-bold text-amber-400">Free Diagnosis</div>
                <div className="text-[10px] text-slate-300">Peruva, Kottayam Shop</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
