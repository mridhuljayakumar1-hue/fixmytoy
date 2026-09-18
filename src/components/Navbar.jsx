import React, { useState, useEffect } from 'react';
import { MessageSquare, Wrench, Menu, X, MapPin } from 'lucide-react';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Before & After', href: '#before-after' },
    { name: 'Price Estimator', href: '#estimator' },
    { name: 'Track Order', href: '#tracker' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Peruva Workshop', href: '#locations' },
  ];

  const handleWhatsAppDirect = () => {
    const defaultMsg = encodeURIComponent("Hi Fix My Toy! I need help repairing an electronic toy / ride-on car. Can I share photos with you?");
    window.open(`https://wa.me/917594087405?text=${defaultMsg}`, '_blank');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-panel shadow-2xl py-2.5 border-b border-slate-800' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-white p-1 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform border border-amber-500/30 overflow-hidden">
              <img
                src="/images/logo.png"
                alt="Fix My Toy Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-white">
                  Fix My <span className="text-gradient-amber">Toy</span>
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  RC & Electronics
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium tracking-wide flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-400" />
                <span>Peruva, Kottayam - 686665</span>
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-800/60 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-4 py-2.5 rounded-full text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700/80 transition-all flex items-center gap-2"
            >
              <Wrench className="w-3.5 h-3.5 text-amber-400" />
              <span>Request Quote</span>
            </button>

            <button
              onClick={handleWhatsAppDirect}
              className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 shadow-lg glow-whatsapp hover:scale-105 transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>WhatsApp: +91 7594087405</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950"></span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={handleWhatsAppDirect}
              className="p-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold"
              aria-label="WhatsApp Direct"
            >
              <MessageSquare className="w-5 h-5 fill-slate-950" />
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 p-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-semibold text-slate-200 hover:bg-slate-800 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3.5 rounded-xl font-bold text-slate-200 bg-slate-800 border border-slate-700 flex items-center justify-center gap-2"
              >
                <Wrench className="w-4 h-4 text-amber-400" />
                <span>Request Diagnostic Quote</span>
              </button>
              
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppDirect();
                }}
                className="w-full py-3.5 rounded-xl font-bold text-slate-950 bg-emerald-500 flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-5 h-5 fill-slate-950" />
                <span>WhatsApp: +91 7594087405</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
