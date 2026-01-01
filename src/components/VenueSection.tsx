import { Clock, MapPin, Navigation, Phone } from 'lucide-react';
import { useWeddingData } from '../hooks/useWeddingData';
import { FloralPattern } from './FloralPattern';
import { LuxuryButton } from './LuxuryButton';
import { MughalCorner } from './MughalCorner';
import { OrnamentalDivider } from './OrnamentalDivider';

export function VenueSection() {
  const { venue, events, couple } = useWeddingData();

  const handleGetDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${venue.main.coordinates.lat},${venue.main.coordinates.lng}`,
      '_blank'
    );
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-ivory-50 to-ivory-100 relative overflow-hidden">
      <FloralPattern className="opacity-10" />
      <MughalCorner position="top-left" size="md" />
      <MughalCorner position="bottom-right" size="md" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h6 className="mb-2">Join Us At</h6>
          <h2>Venue & Location</h2>
          <OrnamentalDivider variant="floral" />
          <p className="max-w-2xl mx-auto text-maroon-700/80">
            Three days of blessed celebration at Grand Convention and other premier venues in
            Kurnool.
          </p>
        </div>

        {/* Venue Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* King's Palace Grand Convention */}
          <div className="bg-ivory-50 border-2 border-gold-300 p-8 relative">
            <MughalCorner position="top-left" size="sm" />
            <MughalCorner position="top-right" size="sm" />
            <MughalCorner position="bottom-left" size="sm" />
            <MughalCorner position="bottom-right" size="sm" />

            <div className="relative z-10 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-ivory-50" size={36} />
              </div>
              <h3 className="mb-3">{venue.main.name}</h3>
              <p className="text-maroon-700 mb-6">{venue.main.address}</p>

              <div className="aspect-[16/9] mb-6">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.345!2d${venue.main.coordinates.lng}!3d${venue.main.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5df27d589a1d1%3A0xc0032cc2630a635e!2sKING'S%20PALACE%20GRAND%20CONVENTION!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-md"
                  title="King's Palace Grand Convention Map"
                ></iframe>
              </div>

              <LuxuryButton onClick={handleGetDirections}>
                <Navigation size={18} className="inline mr-2" />
                Get Directions
              </LuxuryButton>
            </div>
          </div>

          {/* Pushpa Raju Function Hall */}
          <div className="bg-ivory-50 border-2 border-maroon-300 p-8 relative">
            <MughalCorner position="top-left" size="sm" />
            <MughalCorner position="top-right" size="sm" />
            <MughalCorner position="bottom-left" size="sm" />
            <MughalCorner position="bottom-right" size="sm" />

            <div className="relative z-10 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-maroon-500 to-maroon-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-ivory-50" size={36} />
              </div>
              <h3 className="mb-3">{venue.valima.name}</h3>
              <p className="text-maroon-700 mb-6">{venue.valima.address}</p>

              <div className="aspect-[16/9] mb-6">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.345!2d${venue.valima.coordinates.lng}!3d${venue.valima.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5df9db4e4e915%3A0x8e22eba768f7d19c!2sPushpa%20Raju%20Function%20Hall%2C%20Near%20Rajiv%20Gruhakalpa!5e0!3m2!1sen!2sin!4v1234567890124!5m2!1sen!2sin`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-md"
                  title="Pushpa Raju Function Hall Map"
                ></iframe>
              </div>

              <LuxuryButton
                onClick={() =>
                  window.open(
                    `https://www.google.com/maps/dir/?api=1&destination=${venue.valima.coordinates.lat},${venue.valima.coordinates.lng}`,
                    '_blank'
                  )
                }
                variant="secondary"
              >
                <Navigation size={18} className="inline mr-2" />
                Get Directions
              </LuxuryButton>
            </div>
          </div>
        </div>

        <OrnamentalDivider variant="simple" />

        {/* Event Venues */}
        <div className="mb-8">
          <h3 className="text-center mb-6">Event Schedule & Venues</h3>
          <div className="space-y-4">
            {events.map((event, index) => (
              <div
                key={index}
                className={`bg-ivory-50 border-2 ${
                  index === 1 ? 'border-maroon-300' : 'border-gold-300'
                } p-6 relative`}
              >
                <MughalCorner position={index % 2 === 0 ? 'top-left' : 'top-right'} size="sm" />
                <MughalCorner
                  position={index % 2 === 0 ? 'bottom-right' : 'bottom-left'}
                  size="sm"
                />
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      {event.preTitle && (
                        <p className="text-gold-600 text-sm mb-1">{event.preTitle}</p>
                      )}
                      <h4 className="mb-2">{event.displayName || event.name}</h4>
                      <p className="text-gold-600 mb-2">{event.date}</p>
                      {event.hijriDate && (
                        <p className="text-sm text-maroon-700">{event.hijriDate}</p>
                      )}
                      <p className="text-sm text-maroon-700">
                        {event.timeDetails || event.time}
                        {event.type && ` | ${event.type}`}
                      </p>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="text-maroon-700 mb-1">{event.venue}</p>
                      <p className="text-sm text-maroon-700/70">{event.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <OrnamentalDivider variant="simple" />

        {/* Nearby Landmarks */}
        <div className="mb-8">
          <h3 className="text-center mb-6">Distance from Venue</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {venue.landmarks.map((landmark, index) => (
              <div
                key={index}
                className="bg-ivory-50 border-2 border-gold-300 p-5 text-center relative group hover:border-gold-400 transition-colors"
              >
                <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                  <span className="text-ivory-50 text-xs">{index + 1}</span>
                </div>
                <MapPin className="text-gold-500 mx-auto mb-3" size={24} />
                <h5 className="mb-2 text-sm">{landmark.name}</h5>
                <p className="text-gold-600 mb-1 text-sm">{landmark.distance}</p>
                <p className="text-xs text-maroon-700/70">{landmark.time}</p>
              </div>
            ))}
          </div>
        </div>

        <OrnamentalDivider variant="simple" />

        {/* Contact for Assistance */}
        <div className="bg-ivory-50 border-2 border-gold-300 p-8 text-center relative">
          <MughalCorner position="top-left" size="sm" />
          <MughalCorner position="bottom-right" size="sm" />

          <div className="relative z-10">
            <h4 className="mb-4">Need Assistance?</h4>
            <p className="mb-6 text-maroon-700/80 max-w-2xl mx-auto">
              For any queries regarding venue access, directions, or accommodations, please reach
              out to the family.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${couple.groom.contact.phone1.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-gold-600 hover:text-maroon-600 transition-colors"
              >
                <Phone size={18} />
                <span>{couple.groom.contact.phone1}</span>
              </a>
              <div className="hidden sm:block w-1 h-1 bg-gold-400 rounded-full"></div>
              <a
                href={`tel:${couple.groom.contact.phone2.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-gold-600 hover:text-maroon-600 transition-colors"
              >
                <Phone size={18} />
                <span>{couple.groom.contact.phone2}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
