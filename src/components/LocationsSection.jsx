import React from 'react';
import { locationsData } from '../data/locations';
import { MapPin, Phone, Clock, MessageSquare, ExternalLink, Navigation, CheckCircle2, Instagram, Globe } from 'lucide-react';

export default function LocationsSection() {
  const activeLocation = locationsData[0];

  const handleWhatsAppBranch = () => {
    const text = encodeURIComponent(`Hi Fix My Toy (Peruva)! I would like to inquire about dropping off my broken toy at your workshop in Peruva (Plus Code: RGJ6+4W).`);
    window.open(`https://wa.me/917594087405?text=${text}`, '_blank');
  };

  return (
    <section id="locations" className="py-20 md:py-28 relative bg-slate-950">
      
      {/* Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Official Workshop & Google Maps Location</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Visit Our <span className="text-gradient-amber">Peruva Workshop</span>
          </h2>
          <p className="text-slate-300 text-base">
            Drop off your electric ride-on car or electronic toy directly at our Peruva shop, or connect with us on WhatsApp & Instagram.
          </p>
        </div>

        {/* Location Card Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800">
          
          {/* Left Details */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                {activeLocation.badge}
              </span>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-3 mb-6">
                {activeLocation.name}
              </h3>

              {/* Info Items */}
              <div className="space-y-4 mb-8">
                
                {/* Address & Plus Code */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-400 font-bold uppercase">Shop Address & Plus Code</span>
                    <span className="text-sm font-semibold text-white">{activeLocation.address}, Kottayam - 686665</span>
                    <span className="block text-xs font-mono font-bold text-amber-400 mt-0.5">Plus Code: {activeLocation.plusCode}</span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-400 font-bold uppercase">Working Hours</span>
                    <span className="text-sm font-semibold text-white">{activeLocation.hours}</span>
                  </div>
                </div>

                {/* Phone & Instagram */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
                    <div className="w-8 h-8 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 font-bold uppercase">Call / WhatsApp</span>
                      <a href="tel:+917594087405" className="text-xs font-bold text-amber-400 hover:underline">
                        +91 7594087405
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
                    <div className="w-8 h-8 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 shrink-0">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 font-bold uppercase">Instagram Page</span>
                      <a href={activeLocation.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-rose-400 hover:underline">
                        {activeLocation.instagram}
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* Services offered at this outlet */}
              <div className="mb-6">
                <span className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Workshop Services:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeLocation.servicesOffered.map((s, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>{s}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleWhatsAppBranch}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 text-slate-950 font-extrabold text-xs shadow-lg glow-whatsapp transition-transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950" />
                <span>WhatsApp: +91 7594087405</span>
              </button>

              <a
                href={activeLocation.gmapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Navigation className="w-4 h-4" />
                <span>Open Google Maps Location</span>
              </a>

              <a
                href={activeLocation.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-rose-400 text-xs font-bold border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram @fixmy_toy</span>
              </a>
            </div>

          </div>

          {/* Right Simulated Interactive Map Box */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden min-h-[300px] border border-slate-800 bg-slate-900 flex flex-col justify-between">
            
            {/* Map visual background simulation */}
            <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
            
            <div className="relative z-10 p-6 text-center flex flex-col items-center justify-center my-auto">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-amber-400 text-2xl shadow-[0_0_30px_rgba(245,158,11,0.5)] animate-bounce mb-3">
                ⚡
              </div>
              <h4 className="font-display text-lg font-bold text-white mb-1">Fix My Toy - Peruva Workshop</h4>
              <p className="text-xs text-slate-400 max-w-sm mb-2">Plus Code: <strong className="text-amber-400">RGJ6+4W Peruva, Keralam</strong></p>
              <p className="text-xs text-slate-400 max-w-sm mb-4">Peruva, Kottayam, Kerala - 686665</p>

              <a
                href={activeLocation.gmapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-xl hover:scale-105 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Google Maps Pin (47XYr88RwjE1C4jW8)</span>
              </a>
            </div>

            {/* Bottom bar pill */}
            <div className="relative z-10 glass-panel p-3 border-t border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
              <span>Instagram: <a href={activeLocation.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-rose-400 font-bold hover:underline">@fixmy_toy</a></span>
              <span className="text-emerald-400 font-bold">Open Mon-Sat 9AM-7:30PM</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
