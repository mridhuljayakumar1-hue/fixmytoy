import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleWhatsAppClick = () => {
    const defaultMsg = encodeURIComponent("Hi Fix My Toy (Peruva)! I need help repairing an electronic toy / ride-on car.");
    window.open(`https://wa.me/917594087405?text=${defaultMsg}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      
      {/* Mini Callout Tooltip */}
      {showTooltip && (
        <div className="relative glass-panel py-3 px-4 rounded-2xl border border-emerald-500/40 shadow-2xl max-w-xs animate-bounce">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center text-[10px] hover:text-white"
          >
            <X className="w-3 h-3" />
          </button>
          
          <div className="flex items-center gap-2.5">
            <span className="text-xl">⚡</span>
            <div>
              <div className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                <span>Peruva WhatsApp Support</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              </div>
              <p className="text-[11px] text-slate-200 leading-tight mt-0.5">
                Send photos for instant repair estimate! +91 7594087405
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="relative group p-4 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 text-slate-950 font-extrabold shadow-2xl glow-whatsapp hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
        aria-label="Direct WhatsApp Message"
      >
        <MessageSquare className="w-7 h-7 fill-slate-950 group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300 border-2 border-slate-950"></span>
        </span>
      </button>

    </div>
  );
}
