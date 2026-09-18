import React, { useState } from 'react';
import { Calculator, MessageSquare, Sparkles, Check, HelpCircle, ArrowRight, Zap } from 'lucide-react';

export default function CostEstimator() {
  const [toyType, setToyType] = useState('ride-on');
  const [damageType, setDamageType] = useState('moderate');
  const [speed, setSpeed] = useState('standard');
  const [customNotes, setCustomNotes] = useState('');

  const toyOptions = [
    { id: 'ride-on', name: 'Electric Ride-on Car / Bike', basePrice: 450, icon: '🏎️' },
    { id: 'rc', name: 'RC Car / Helicopter / Boat', basePrice: 250, icon: '🎮' },
    { id: 'battery-toy', name: 'Musical / Light Battery Toy', basePrice: 150, icon: '🤖' },
    { id: 'battery-pack', name: 'Battery & Charger Setup', basePrice: 400, icon: '🔋' },
  ];

  const damageOptions = [
    { id: 'minor', name: 'Minor (Switch / Wire Solder / Battery Rust)', multiplier: 1.0, desc: 'Single wire solder, battery contact cleaning, on/off switch fix' },
    { id: 'moderate', name: 'Moderate (Motor Gearbox / Remote Receiver)', multiplier: 1.5, desc: 'Gearbox motor repair, steering servo, remote pairing, pedal switch' },
    { id: 'severe', name: 'Major Repair (Full Wiring / Board Micro-Solder)', multiplier: 2.2, desc: 'Burnt mainboard, complete re-wiring, dual motor replacement' },
  ];

  const selectedToy = toyOptions.find(t => t.id === toyType) || toyOptions[0];
  const selectedDamage = damageOptions.find(d => d.id === damageType) || damageOptions[1];

  const calculatedMin = Math.round(selectedToy.basePrice * selectedDamage.multiplier);
  const calculatedMax = Math.round(calculatedMin * 1.3 + (speed === 'express' ? 150 : 0));

  const handleSendToWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Fix My Toy (Peruva)! I checked your online price estimator:\n` +
      `- Item Category: ${selectedToy.name} (${selectedToy.icon})\n` +
      `- Issue Level: ${selectedDamage.name}\n` +
      `- Turnaround: ${speed === 'express' ? 'Priority Express (Same Day / 24h)' : 'Standard (1-2 Days)'}\n` +
      `- Estimated Range: ₹${calculatedMin} - ₹${calculatedMax}\n` +
      (customNotes ? `- Problem Note: ${customNotes}\n` : '') +
      `Can I send photos to confirm the quote?`
    );
    window.open(`https://wa.me/917594087405?text=${text}`, '_blank');
  };

  return (
    <section id="estimator" className="py-20 md:py-28 relative bg-slate-900/60 border-y border-slate-800">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Instant Price Estimator (INR ₹)</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Calculate Repair <span className="text-gradient-amber">Cost Estimate</span>
          </h2>
          <p className="text-slate-300 text-base">
            Select your electronic toy details below for a transparent instant quote in Rupees before messaging us on WhatsApp (+91 7594087405).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Inputs */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-8">
            
            {/* Step 1: Toy Type */}
            <div>
              <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
                1. Select Item Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {toyOptions.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setToyType(item.id)}
                    className={`p-3.5 rounded-2xl flex flex-col items-center gap-2 text-center transition-all ${
                      toyType === item.id
                        ? 'bg-amber-500 text-slate-950 font-bold shadow-lg scale-[1.02]'
                        : 'bg-slate-800/80 border border-slate-700 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-xs font-semibold leading-tight">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Damage Severity */}
            <div>
              <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
                2. Select Issue Severity
              </label>
              <div className="space-y-3">
                {damageOptions.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setDamageType(item.id)}
                    className={`w-full p-4 rounded-2xl text-left transition-all flex items-start justify-between gap-4 ${
                      damageType === item.id
                        ? 'bg-amber-500/10 border-2 border-amber-500 text-white'
                        : 'bg-slate-800/50 border border-slate-700/80 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-bold text-white mb-0.5">{item.name}</div>
                      <div className="text-xs text-slate-400">{item.desc}</div>
                    </div>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      damageType === item.id ? 'bg-amber-400 text-slate-950' : 'bg-slate-700'
                    }`}>
                      {damageType === item.id && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Turnaround speed */}
            <div>
              <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
                3. Turnaround Speed
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSpeed('standard')}
                  className={`p-3.5 rounded-2xl text-xs font-bold transition-all text-center ${
                    speed === 'standard'
                      ? 'bg-slate-200 text-slate-950'
                      : 'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}
                >
                  Standard (1 - 2 Days)
                </button>
                
                <button
                  onClick={() => setSpeed('express')}
                  className={`p-3.5 rounded-2xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 ${
                    speed === 'express'
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md'
                      : 'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Priority Express (Same Day)</span>
                </button>
              </div>
            </div>

            {/* Optional Notes */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                Optional: Describe problem (e.g., "Right motor not spinning, charger port loose")
              </label>
              <input
                type="text"
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                placeholder="Type details..."
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
            </div>

          </div>

          {/* Right Summary Card */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/30 sticky top-28">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Estimate Summary</span>
              </h3>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
                Free Estimate
              </span>
            </div>

            {/* Selected Breakdown */}
            <div className="space-y-3 text-xs mb-6">
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">Category:</span>
                <span className="font-bold text-white">{selectedToy.name} ({selectedToy.icon})</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">Issue Level:</span>
                <span className="font-bold text-white">{selectedDamage.name.split(' ')[0]}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">Timeline:</span>
                <span className="font-bold text-amber-400">{speed === 'express' ? 'Priority Same Day' : 'Standard 1-2 Days'}</span>
              </div>
            </div>

            {/* Big Price Display */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 text-center mb-6">
              <span className="block text-[11px] text-slate-400 font-medium uppercase tracking-wider mb-1">
                Estimated Price Range (INR)
              </span>
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-gradient-amber">
                ₹{calculatedMin} - ₹{calculatedMax}
              </div>
              <span className="block text-[10px] text-slate-400 mt-2">
                *Final price confirmed after photo/video check on WhatsApp (+91 7594087405)
              </span>
            </div>

            {/* WhatsApp Direct Submission CTA */}
            <button
              onClick={handleSendToWhatsApp}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 text-slate-950 font-extrabold text-sm shadow-xl glow-whatsapp hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
            >
              <MessageSquare className="w-5 h-5 fill-slate-950" />
              <span>Send Estimate to WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-slate-400 text-center mt-4">
              Direct chat with our Peruva workshop technician. No payment required upfront!
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
