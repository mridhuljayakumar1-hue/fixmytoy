import React, { useState } from 'react';
import { X, MessageSquare, Camera, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ConsultationModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [toyCategory, setToyCategory] = useState('Electric Ride-on Car / Bike');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleSubmitToWhatsApp = (e) => {
    e.preventDefault();

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });

    const msg = encodeURIComponent(
      `Hi Fix My Toy (Peruva)! I want to inquiry about a repair:\n\n` +
      `👤 Owner Name: ${name || 'Customer'}\n` +
      `🏎️ Electronic Toy Type: ${toyCategory}\n` +
      `📍 Location: Peruva Workshop (Kottayam 686665)\n` +
      `🩹 Problem Details: ${description || 'Needs general inspection'}\n\n` +
      `I will send photos/videos next:`
    );

    window.open(`https://wa.me/917594087405?text=${msg}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 p-0.5 shadow-lg shadow-amber-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-2xl">
              ⚡
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-white">Request Repair Estimate</h3>
            <p className="text-xs text-slate-300">Free photo analysis on WhatsApp (+91 7594087405)</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmitToWhatsApp} className="space-y-4">
          
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Mathew Joseph"
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Electronic Toy Type</label>
            <select
              value={toyCategory}
              onChange={(e) => setToyCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-500"
            >
              <option value="Electric Ride-on Car / Jeep / Bike">Kids Electric Ride-on Car / Jeep / Superbike</option>
              <option value="RC Car / Truck / Drone">RC Car / Truck / Helicopter / Drone</option>
              <option value="Musical & Battery Toy">Electronic Musical Organ / Light Toy</option>
              <option value="12V / 6V Battery & Charger Setup">12V / 6V Battery Replacement or Charger Setup</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Describe Problem</label>
            <textarea
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g., Car not moving forward, pedal switch broken, remote not connecting..."
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            ></textarea>
          </div>

          {/* Simulated Photo Upload Notice */}
          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
            <Camera className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-xs text-slate-300">
              Send photos or a short video clip directly in WhatsApp after clicking submit!
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 text-slate-950 font-extrabold text-sm shadow-xl glow-whatsapp hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-5 h-5 fill-slate-950" />
            <span>Send to WhatsApp (+91 7594087405)</span>
          </button>
        </form>

      </div>
    </div>
  );
}
