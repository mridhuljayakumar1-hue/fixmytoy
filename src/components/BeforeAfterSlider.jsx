import React, { useState } from 'react';
import { MessageSquare, Sparkles, SlidersHorizontal, ArrowLeftRight, CheckCircle, Zap } from 'lucide-react';

export default function BeforeAfterSlider() {
  const cases = [
    {
      id: 'ride-on-jeep',
      title: "Kids 12V Electric Ride-On Raptor Jeep",
      category: "Electric Ride-On Repair",
      damagedDetails: "Completely non-responsive mainboard wiring, stripped motor gearbox teeth, corroded 12V battery terminal contacts & broken pedal switch.",
      restorationDone: "Complete teardown diagnostic, installed new high-torque 550 drive motors, custom wiring harness re-soldered, & brand new 12V rechargeable battery setup.",
      turnaround: "2 Days",
      priceRange: "₹850 - ₹1,400",
      imageBefore: "/images/jeep_before.jpg",
      imageAfter: "/images/jeep_after.jpg",
    },
    {
      id: 'rc-crawler',
      title: "High-Speed RC Rock Crawler 4WD Truck",
      category: "RC Micro-Soldering & Steering",
      damagedDetails: "Broken steering servo gear, burnt ESC controller chip, corroded battery connector plugs.",
      restorationDone: "Micro-soldered PCB mainboard traces, installed metal steering servo gear, re-wired with XT60 gold connectors.",
      turnaround: "1 Day",
      priceRange: "₹350 - ₹650",
      imageBefore: "/images/electronic.png",
      imageAfter: "/images/hero.png",
    },
    {
      id: 'musical-toy',
      title: "Interactive Battery-Operated Musical Organ",
      category: "Battery & Sound Repair",
      damagedDetails: "Severely corroded battery compartment, non-working speaker, short-circuited ON/OFF switch.",
      restorationDone: "Acid neutralization & spring contact replacement, new 8-ohm mini speaker, re-soldered power supply switch.",
      turnaround: "1 Day",
      priceRange: "₹200 - ₹450",
      imageBefore: "/images/hero.png",
      imageAfter: "/images/electronic.png",
    }
  ];

  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const activeCase = cases[activeCaseIndex];

  const handleWhatsAppForCase = () => {
    const text = encodeURIComponent(`Hi Fix My Toy (Peruva)! I saw the real repair showcase for "${activeCase.title}". I have a similar broken electronic toy / ride-on car!`);
    window.open(`https://wa.me/917594087405?text=${text}`, '_blank');
  };

  return (
    <section id="before-after" className="py-20 md:py-28 relative bg-slate-950 overflow-hidden">
      
      {/* Dynamic backdrop glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-4">
            <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Real Workshop Restoration Photos</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Witness The <span className="text-gradient-amber">Transformation</span>
          </h2>
          <p className="text-slate-300 text-base">
            Drag the slider below to see how our Peruva workshop took apart a dead, non-working ride-on jeep and restored it back to brand new condition!
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {cases.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                activeCaseIndex === idx
                  ? 'bg-amber-500 text-slate-950 shadow-lg scale-105'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {c.category}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800">
          
          {/* Left: Interactive Image Slider */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden select-none border border-slate-800 shadow-2xl">
              
              {/* "After" / Restored Image (Base) */}
              <img
                src={activeCase.imageAfter}
                alt="Restored Working Toy"
                className="absolute inset-0 w-full h-full object-cover filter brightness-[1.05] contrast-[1.05]"
              />
              <div className="absolute top-4 right-4 glass-panel py-1 px-3 rounded-full text-xs font-extrabold text-emerald-400 border border-emerald-500/40 shadow-lg">
                ⚡ REPAIRED & READY (AFTER)
              </div>

              {/* "Before" / Damaged Image (Clipped Overlay) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeCase.imageBefore}
                  alt="Damaged Toy Teardown"
                  className="w-full h-full object-cover filter grayscale-[20%] contrast-[1.1]"
                  style={{
                    width: '100%',
                    maxWidth: 'none'
                  }}
                />
                <div className="absolute top-4 left-4 glass-panel py-1 px-3 rounded-full text-xs font-extrabold text-rose-400 border border-rose-500/40 shadow-lg">
                  🛠️ TEARDOWN & REPAIR (BEFORE)
                </div>
              </div>

              {/* Slider Line & Drag Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-amber-400 shadow-[0_0_15px_#f59e0b] cursor-ew-resize z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-xl border-2 border-slate-900 font-bold">
                  <ArrowLeftRight className="w-5 h-5" />
                </div>
              </div>

              {/* Range Input Trigger */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Before and after slider handle"
              />
            </div>

            <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
              <span>Drag slider horizontally left or right to compare details</span>
            </p>
          </div>

          {/* Right: Restoration Details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                {activeCase.category}
              </span>

              <h3 className="font-display text-2xl font-bold text-white mt-3 mb-4">
                {activeCase.title}
              </h3>

              {/* Damaged vs Restored Breakdown */}
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-2xl bg-rose-500/5 border border-rose-500/20">
                  <span className="block text-xs font-bold text-rose-400 uppercase tracking-wider mb-1">
                    Problem Identified:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeCase.damagedDetails}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                  <span className="block text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Peruva Workshop Repair Done:</span>
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeCase.restorationDone}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
              <div>
                <span className="block text-[11px] text-slate-400">Total Repair Cost</span>
                <span className="text-sm font-bold text-amber-400">{activeCase.priceRange}</span>
              </div>

              <button
                onClick={handleWhatsAppForCase}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 text-slate-950 font-extrabold text-xs shadow-lg glow-whatsapp transition-transform hover:scale-105 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950" />
                <span>Fix My Toy on WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
