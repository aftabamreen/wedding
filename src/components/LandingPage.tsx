import { useNavigate } from 'react-router-dom';
import { useWeddingData } from '../hooks/useWeddingData';
import { LoopingVideoSegment } from './BackgroundVideo';
import { LuxuryButton } from './LuxuryButton';
import { OrnamentalDivider } from './OrnamentalDivider';

export function LandingPage() {
  const navigate = useNavigate();
  const { couple, content } = useWeddingData();

  const handleMoreDetails = () => {
    navigate('/wedding');
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fixed Video Background */}
      <div className="fixed inset-0 z-0">
        <LoopingVideoSegment
          src="https://res.cloudinary.com/dv6jciyf9/video/upload/v1767282800/Blank_Template_1_iss84e.mp4"
          start={35}
          end={40}
        />

        {/* Animated Background Fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-maroon-900 via-gold-800 to-maroon-800 animate-pulse"></div>
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Scrollable Content Container */}
      <div className="relative z-20 min-h-screen overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 py-8">
          {/* Blur Background Card */}
          <div
            className="backdrop-blur-md bg-white/20 border border-white/30 rounded-xl p-4 sm:p-6 lg:p-8 text-center shadow-2xl max-w-2xl w-full"
            style={{
              color: '#ffdfc8',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            {/* Arabic Calligraphy */}
            <div className="mb-4 sm:mb-6">
              <div className="text-sm sm:text-base mb-3 font-serif" style={{ color: '#f0e68c' }}>
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
              </div>
            </div>

            {/* Pre-title */}
            <h6 className="mb-3 sm:mb-4 text-xs sm:text-sm" style={{ color: '#f0e68c' }}>
              {content.hero.preTitle}
            </h6>

            {/* Names */}
            <h1
              className="mb-2 sm:mb-3 font-display"
              style={{ fontSize: 'clamp(1.2rem, 4vw, 2.2rem)', color: '#ffeaa7' }}
            >
              {couple.groom.name}
            </h1>
            <p className="text-xs mb-2" style={{ color: '#e6d7c3' }}>
              {couple.groom.qualification}
            </p>

            <div className="my-3 sm:my-4">
              <span className="font-script text-xl sm:text-2xl" style={{ color: '#ffeaa7' }}>
                &
              </span>
            </div>

            <h1
              className="mb-2 sm:mb-3 font-display"
              style={{ fontSize: 'clamp(1.2rem, 4vw, 2.2rem)', color: '#ffeaa7' }}
            >
              {couple.bride.name}
            </h1>
            <p className="text-xs mb-4" style={{ color: '#e6d7c3' }}>
              {couple.bride.qualification}
            </p>

            {/* Parents */}
            <div className="mb-4 sm:mb-6 space-y-1">
              <p className="text-xs" style={{ color: '#e6d7c3' }}>
                Son of {couple.groom.mother}
              </p>
              <p className="text-xs" style={{ color: '#e6d7c3' }}>
                D/o. {couple.bride.mother}
              </p>
            </div>

            <OrnamentalDivider variant="floral" />

            <div className="flex flex-col gap-2">
              {/* Date */}
              <div>
                <div
                  className="backdrop-blur-sm py-3 sm:py-4 px-4 sm:px-6 mb-4 sm:mb-6 relative rounded-lg"
                  style={{ backgroundColor: 'rgba(255, 223, 200, 0.15)', color: '#ffdfc8' }}
                >
                  <div
                    className="absolute top-0 left-0 w-2 h-2 border-t border-l"
                    style={{ borderColor: '#ffdfc8', opacity: 0.6 }}
                  ></div>
                  <div
                    className="absolute top-0 right-0 w-2 h-2 border-t border-r"
                    style={{ borderColor: '#ffdfc8', opacity: 0.6 }}
                  ></div>
                  <div
                    className="absolute bottom-0 left-0 w-2 h-2 border-b border-l"
                    style={{ borderColor: '#ffdfc8', opacity: 0.6 }}
                  ></div>
                  <div
                    className="absolute bottom-0 right-0 w-2 h-2 border-b border-r"
                    style={{ borderColor: '#ffdfc8', opacity: 0.6 }}
                  ></div>

                  <div className="space-y-1">
                    <p className="tracking-widest text-xs sm:text-sm" style={{ color: '#fff2cc' }}>
                      {content.hero.eventSummary}
                    </p>
                    <h2
                      className="text-sm sm:text-lg"
                      style={{ fontWeight: 300, letterSpacing: '0.1em', color: '#fff2cc' }}
                    >
                      {content.hero.monthAndYear.toUpperCase()}
                    </h2>
                    <p className="tracking-wider text-xs" style={{ color: '#fff2cc' }}>
                      Kurnool, Andhra Pradesh
                    </p>
                  </div>
                </div>
              </div>

              {/* More Details Button */}
              <div>
                <LuxuryButton
                  onClick={handleMoreDetails}
                  className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm backdrop-blur-sm border"
                  style={{
                    backgroundColor: 'rgba(240, 230, 140, 0.2)',
                    borderColor: '#f0e68c',
                    color: '#f0e68c',
                  }}
                >
                  More Details
                </LuxuryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
