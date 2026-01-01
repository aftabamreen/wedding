import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavigationBar } from './NavigationBar';
import { HeroSection } from './HeroSection';
import { CoupleSection } from './CoupleSection';
import { GallerySection } from './GallerySection';
import { VenueSection } from './VenueSection';
import { Footer } from './Footer';
import { ArrowLeft } from 'lucide-react';

export function WeddingDetails() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');
  
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    couple: useRef<HTMLDivElement>(null),
    gallery: useRef<HTMLDivElement>(null),
    venue: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs[sectionId as keyof typeof sectionRefs]?.current;
    if (element) {
      setActiveSection(sectionId);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBackToLanding = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-ivory-50">
      {/* Back to Landing Button */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={handleBackToLanding}
          className="flex items-center gap-2 bg-gold-500/90 hover:bg-gold-600/90 text-ivory-50 px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300"
        >
          <ArrowLeft size={18} />
          <span className="text-sm">Back</span>
        </button>
      </div>

      <NavigationBar activeSection={activeSection} onNavigate={scrollToSection} />
      
      <div id="home" ref={sectionRefs.home}>
        <HeroSection onNavigate={scrollToSection} />
      </div>
      
      <div id="couple" ref={sectionRefs.couple}>
        <CoupleSection />
      </div>
      
      <div id="gallery" ref={sectionRefs.gallery}>
        <GallerySection />
      </div>
      
      <div id="venue" ref={sectionRefs.venue}>
        <VenueSection />
      </div>
      
      <Footer />
    </div>
  );
}