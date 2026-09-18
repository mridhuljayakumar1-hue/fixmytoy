import React, { useState } from 'react';
import { Search, CheckCircle2, Clock, Wrench, Package, ShieldCheck, Sparkles, MessageSquare, AlertCircle } from 'lucide-react';

export default function StatusTracker() {
  const [ticketInput, setTicketInput] = useState('FMT-8821');
  const [activeTicket, setActiveTicket] = useState({
    id: 'FMT-8821',
    toyName: "Kids 12V Electric Ride-on BMW Jeep",
    customer: "Mathew Joseph",
    branch: "Peruva Workshop (Kottayam 686665)",
    receivedDate: "Sep 17, 2026",
    estimatedCompletion: "Sep 19, 2026",
    currentStep: 3, // 1 to 5
    statusText: "Motor Gearbox Replacement & Pedal Switch Wiring",
    technician: "Lead Elec-Technician",
    notes: "New 12V 550 drive motors fitted. Testing parental remote receiver circuit board.",
    steps: [
      { num: 1, label: "Received", desc: "Peruva Shop Drop-off", done: true },
      { num: 2, label: "Diagnostic", desc: "Motor & PCB testing", done: true },
      { num: 3, label: "In Repair", desc: "Motor & switch wiring", done: true, current: true },
      { num: 4, label: "Safety QA", desc: "Speed & battery test", done: false },
      { num: 5, label: "Ready", desc: "Ready for Pickup at Peruva", done: false },
    ]
  });

  const demoTickets = [
    {
      id: 'FMT-8821',
      toyName: "Kids 12V Electric Ride-on BMW Jeep",
      customer: "Mathew Joseph",
      branch: "Peruva Workshop (Kottayam 686665)",
      receivedDate: "Sep 17, 2026",
      estimatedCompletion: "Sep 19, 2026",
      currentStep: 3,
      statusText: "Motor Gearbox Replacement & Pedal Switch Wiring",
      technician: "Lead Elec-Technician",
      notes: "New 12V 550 drive motors fitted. Testing parental remote receiver circuit board.",
      steps: [
        { num: 1, label: "Received", desc: "Peruva Shop Drop-off", done: true },
        { num: 2, label: "Diagnostic", desc: "Motor & PCB testing", done: true },
        { num: 3, label: "In Repair", desc: "Motor & switch wiring", done: true, current: true },
        { num: 4, label: "Safety QA", desc: "Speed & battery test", done: false },
        { num: 5, label: "Ready", desc: "Ready for Pickup at Peruva", done: false },
      ]
    },
    {
      id: 'FMT-4412',
      toyName: "RC High-Speed Rock Crawler Truck",
      customer: "Anjali Nair",
      branch: "Peruva Workshop (Kottayam 686665)",
      receivedDate: "Sep 18, 2026",
      estimatedCompletion: "Sep 19, 2026",
      currentStep: 4,
      statusText: "Quality Inspection & Steering Servo Test",
      technician: "RC Electronics Tech",
      notes: "Micro-soldered PCB mainboard. XT60 battery connectors attached cleanly.",
      steps: [
        { num: 1, label: "Received", desc: "Received at Peruva", done: true },
        { num: 2, label: "Diagnostic", desc: "PCB circuit test passed", done: true },
        { num: 3, label: "In Repair", desc: "Servo motor replaced", done: true },
        { num: 4, label: "Safety QA", desc: "Transmitter range test", done: true, current: true },
        { num: 5, label: "Ready", desc: "Pickup ready", done: false },
      ]
    },
    {
      id: 'FMT-1092',
      toyName: "Kid's Musical Learning Keyboard",
      customer: "Arun Kumar",
      branch: "Peruva Workshop (Kottayam 686665)",
      receivedDate: "Sep 16, 2026",
      estimatedCompletion: "Sep 18, 2026",
      currentStep: 5,
      statusText: "Completed! Ready for Pickup at Peruva Shop",
      technician: "Technician",
      notes: "Battery acid corrosion cleaned. New 8-ohm mini speaker installed. Working great!",
      steps: [
        { num: 1, label: "Received", desc: "Received at Peruva", done: true },
        { num: 2, label: "Diagnostic", desc: "Sound IC check", done: true },
        { num: 3, label: "In Repair", desc: "Speaker & terminal fix", done: true },
        { num: 4, label: "Safety QA", desc: "Sound quality check", done: true },
        { num: 5, label: "Ready", desc: "Ready for Pickup!", done: true, current: true },
      ]
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const found = demoTickets.find(t => t.id.toLowerCase() === ticketInput.trim().toLowerCase());
    if (found) {
      setActiveTicket(found);
    } else {
      alert(`Ticket "${ticketInput}" not found. Displaying sample ticket FMT-8821.`);
      setActiveTicket(demoTickets[0]);
    }
  };

  const handleSelectDemo = (t) => {
    setTicketInput(t.id);
    setActiveTicket(t);
  };

  const handleWhatsAppStatusInquiry = () => {
    const text = encodeURIComponent(`Hi Fix My Toy (Peruva)! I'm checking on Ticket ID #${activeTicket.id} (${activeTicket.toyName}). Can you give me a status update?`);
    window.open(`https://wa.me/917594087405?text=${text}`, '_blank');
  };

  return (
    <section id="tracker" className="py-20 md:py-28 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-4">
            <Search className="w-3.5 h-3.5" />
            <span>Live Repair Progress Lookup</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Track Repair <span className="text-gradient-amber">Progress Status</span>
          </h2>
          <p className="text-slate-300 text-base">
            Customers receive a unique Ticket ID to follow their electronic toy repair status online.
          </p>
        </div>

        {/* Search Bar & Demo Ticket Selector */}
        <div className="max-w-2xl mx-auto mb-10">
          <form onSubmit={handleSearch} className="relative flex items-center mb-4">
            <input
              type="text"
              value={ticketInput}
              onChange={(e) => setTicketInput(e.target.value)}
              placeholder="Enter Ticket ID e.g., FMT-8821..."
              className="w-full pl-5 pr-36 py-4 rounded-2xl bg-slate-900 border-2 border-slate-700 text-white font-bold placeholder-slate-500 focus:outline-none focus:border-amber-500 shadow-xl text-base"
            />
            <button
              type="submit"
              className="absolute right-2 px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>Track Ticket</span>
            </button>
          </form>

          {/* Quick Demo Selector */}
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 flex-wrap">
            <span className="font-semibold text-slate-300">Try Sample Tickets:</span>
            {demoTickets.map(t => (
              <button
                key={t.id}
                onClick={() => handleSelectDemo(t)}
                className={`px-3 py-1 rounded-full border transition-all font-mono font-bold ${
                  activeTicket.id === t.id
                    ? 'bg-amber-500/20 border-amber-500 text-amber-400'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {t.id}
              </button>
            ))}
          </div>
        </div>

        {/* Ticket Details Panel */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
          
          {/* Header Info Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-mono font-bold">
                  TICKET #{activeTicket.id}
                </span>
                <span className="text-xs text-slate-400">
                  Location: <strong className="text-slate-200">{activeTicket.branch}</strong>
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                {activeTicket.toyName}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Customer: {activeTicket.customer} | Dropped off: {activeTicket.receivedDate}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleWhatsAppStatusInquiry}
                className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md glow-whatsapp transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950" />
                <span>WhatsApp: +91 7594087405</span>
              </button>
            </div>
          </div>

          {/* Progress Timeline Stepper */}
          <div className="mb-10 overflow-x-auto pb-4">
            <div className="min-w-[650px] grid grid-cols-5 gap-2 relative">
              
              {/* Connecting line */}
              <div className="absolute top-5 left-10 right-10 h-1 bg-slate-800 -z-0">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-500"
                  style={{ width: `${((activeTicket.currentStep - 1) / 4) * 100}%` }}
                />
              </div>

              {activeTicket.steps.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center relative z-10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-3 transition-all ${
                    step.current
                      ? 'bg-amber-400 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.6)] scale-110 ring-4 ring-amber-500/20'
                      : step.done
                      ? 'bg-emerald-500 text-slate-950'
                      : 'bg-slate-800 text-slate-500 border border-slate-700'
                  }`}>
                    {step.done ? <CheckCircle2 className="w-5 h-5 stroke-[2.5]" /> : step.num}
                  </div>
                  
                  <span className={`text-xs font-bold block mb-0.5 ${
                    step.current ? 'text-amber-400' : step.done ? 'text-white' : 'text-slate-500'
                  }`}>
                    {step.label}
                  </span>
                  <span className="text-[10px] text-slate-400 max-w-[110px] leading-tight">
                    {step.desc}
                  </span>
                </div>
              ))}

            </div>
          </div>

          {/* Current Status Box */}
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-amber-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  Current Status Update:
                </span>
                <p className="text-sm font-bold text-white mt-0.5">
                  {activeTicket.statusText}
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  Technician Note: "{activeTicket.notes}"
                </p>
              </div>
            </div>

            <div className="text-right shrink-0">
              <span className="block text-[11px] text-slate-400">Target Completion</span>
              <span className="text-sm font-bold text-emerald-400 flex items-center gap-1 justify-end">
                <Clock className="w-3.5 h-3.5" />
                <span>{activeTicket.estimatedCompletion}</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
