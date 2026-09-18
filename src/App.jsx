import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import CostEstimator from './components/CostEstimator';
import StatusTracker from './components/StatusTracker';
import ReviewsSection from './components/ReviewsSection';
import LocationsSection from './components/LocationsSection';
import FAQSection from './components/FAQSection';
import ConsultationModal from './components/ConsultationModal';
import WhatsAppFloat from './components/WhatsAppFloat';
import Footer from './components/Footer';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative selection:bg-amber-500 selection:text-slate-950">
      {/* Top Navbar */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenConsultation={() => setIsConsultationOpen(true)} />
        <ServicesSection />
        <BeforeAfterSlider />
        <CostEstimator />
        <StatusTracker />
        <ReviewsSection />
        <LocationsSection />
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Floating WhatsApp Button */}
      <WhatsAppFloat />

      {/* Repair Diagnostic Request Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
