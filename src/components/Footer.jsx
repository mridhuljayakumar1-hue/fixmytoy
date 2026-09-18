import React from 'react';
import { MessageSquare, MapPin, Phone, Heart, ShieldCheck, Zap, Instagram, ExternalLink } from 'lucide-react';

export default function Footer() {
  const handleWhatsAppClick = () => {
    const defaultMsg = encodeURIComponent("Hi Fix My Toy (Peruva)! I'd like to inquire about a repair.");
    window.open(`https://wa.me/917594087405?text=${defaultMsg}`, '_blank');
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1 border border-amber-500/30 overflow-hidden">
                <img
                  src="/images/logo.png"
                  alt="Fix My Toy Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-extrabold text-xl text-white">
                Fix My <span className="text-gradient-amber">Toy</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Specialized clinic for Kids Electric Ride-on Cars, RC Toys, Drones, & Battery-operated Electronic Toys in Peruva, Kottayam, Kerala.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <button
                onClick={handleWhatsAppClick}
                className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-md glow-whatsapp transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950" />
                <span>WhatsApp: +91 7594087405</span>
              </button>

              <a
                href="https://instagram.com/fixmy_toy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-rose-400 border border-slate-800 font-bold text-xs flex items-center gap-1.5 transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span>@fixmy_toy</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="block font-bold text-white uppercase tracking-wider text-xs">
              Quick Navigation
            </span>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Electronic Repair Services</a></li>
              <li><a href="#before-after" className="hover:text-amber-400 transition-colors">Before & After Repair Cases</a></li>
              <li><a href="#estimator" className="hover:text-amber-400 transition-colors">Price Estimator (INR ₹)</a></li>
              <li><a href="#tracker" className="hover:text-amber-400 transition-colors">Track Repair Order Status</a></li>
              <li><a href="#reviews" className="hover:text-amber-400 transition-colors">Customer Reviews</a></li>
              <li><a href="#locations" className="hover:text-amber-400 transition-colors">Peruva Workshop Location</a></li>
            </ul>
          </div>

          {/* Location */}
          <div className="md:col-span-3 space-y-3">
            <span className="block font-bold text-white uppercase tracking-wider text-xs">
              Official Workshop Address
            </span>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="block text-white">Fix My Toy Workshop</strong>
                  <span>Peruva, Kottayam, Kerala - 686665</span>
                  <span className="block text-[11px] font-mono text-amber-400 mt-0.5">Plus Code: RGJ6+4W Peruva, Keralam</span>
                  <a
                    href="https://maps.app.goo.gl/47XYr88RwjE1C4jW8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-amber-400 hover:underline mt-1 font-semibold"
                  >
                    <span>Google Maps Link</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 text-emerald-400 font-bold">
                <Phone className="w-3.5 h-3.5" />
                <a href="tel:+917594087405" className="hover:underline">+91 7594087405</a>
              </div>
            </div>
          </div>

          {/* Safety */}
          <div className="md:col-span-2 space-y-3">
            <span className="block font-bold text-white uppercase tracking-wider text-xs">
              Child Safety Standard
            </span>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>Child Safety Certified</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                All electrical wiring, fuse protections, and batteries tested for maximum safety.
              </p>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <p>© {new Date().getFullYear()} Fix My Toy Peruva. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Peruva, Kottayam, Kerala - 686665</span>
            <span>•</span>
            <a href="https://instagram.com/fixmy_toy" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:underline font-semibold">@fixmy_toy</a>
          </p>
        </div>

      </div>
    </footer>
  );
}
