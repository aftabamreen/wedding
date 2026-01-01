import { OrnamentalDivider } from './OrnamentalDivider';
import { MughalCorner } from './MughalCorner';
import { FloralPattern } from './FloralPattern';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { LuxuryButton } from './LuxuryButton';
import { useWeddingData } from '../hooks/useWeddingData';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const { couple, events, content } = useWeddingData();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-ivory-50 via-ivory-100 to-gold-50">
      <FloralPattern />
      <MughalCorner position="top-left" size="md" />
      <MughalCorner position="bottom-right" size="md" />
      
      <div className="relative z-10 text-center px-4 py-20 max-w-4xl mx-auto">
        {/* Ornamental top */}
        <div className="mb-6">
          <svg width="80" height="80" viewBox="0 0 80 80" className="mx-auto text-gold-500">
            <circle cx="40" cy="40" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            <circle cx="40" cy="40" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
            <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
            <circle cx="40" cy="40" r="8" fill="currentColor" opacity="0.6"/>
            <circle cx="40" cy="15" r="3" fill="currentColor" opacity="0.8"/>
            <circle cx="40" cy="65" r="3" fill="currentColor" opacity="0.8"/>
            <circle cx="15" cy="40" r="3" fill="currentColor" opacity="0.8"/>
            <circle cx="65" cy="40" r="3" fill="currentColor" opacity="0.8"/>
          </svg>
        </div>

        {/* Pre-title */}
        <h6 className="mb-4">{content.hero.preTitle}</h6>
        
        {/* Names */}
        <h1 className="mb-2" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
          {couple.groom.name}
        </h1>
        <p className="font-serif text-maroon-600 text-sm mb-1">{couple.groom.qualification}</p>
        
        <div className="my-4">
          <span className="font-script text-gold-500 text-4xl">&</span>
        </div>
        
        <h1 className="mb-2" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
          {couple.bride.name}
        </h1>
        <p className="font-serif text-maroon-600 text-sm mb-3">{couple.bride.qualification}</p>
        
        {/* Parents */}
        <p className="font-serif text-maroon-700/80 text-sm mb-2" style={{ fontStyle: 'italic' }}>
          D/o. {couple.bride.mother} & {couple.bride.father} ({couple.bride.location})
        </p>
        
        <OrnamentalDivider variant="floral" />
        
        {/* Date */}
        <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-ivory-50 py-6 px-8 inline-block mb-6 relative">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-ivory-50"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-ivory-50"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-ivory-50"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-ivory-50"></div>
          
          <div className="space-y-1">
            <p className="tracking-widest">{content.hero.eventSummary}</p>
            <h2 className="text-ivory-50" style={{ fontWeight: 300, letterSpacing: '0.1em' }}>
              JANUARY 2026
            </h2>
            <p className="tracking-wider">Kurnool, Andhra Pradesh</p>
          </div>
        </div>

        <p className="max-w-2xl mx-auto mb-8 text-maroon-700/80">
          {content.hero.blessing}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <LuxuryButton onClick={() => onNavigate('couple')}>
            Our Story
          </LuxuryButton>
          <LuxuryButton variant="outline" onClick={() => onNavigate('venue')}>
            Venue Details
          </LuxuryButton>
        </div>

        <OrnamentalDivider />

        {/* Event Details */}
        <div className="space-y-3">
          {events.map((event, index) => (
            <div key={index} className="flex items-center justify-center gap-2 text-sm">
              <span className="text-gold-600">{event.displayName || event.name}</span>
              <div className="w-1 h-1 bg-gold-400 rounded-full"></div>
              <span className="text-maroon-700">{event.date.split(',')[0]}, {event.date.split(' ')[1]} {event.date.split(' ')[2]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
