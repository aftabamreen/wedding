import { Mail, Phone } from 'lucide-react';
import { useWeddingData } from '../hooks/useWeddingData';
import { MughalCorner } from './MughalCorner';
import { OrnamentalDivider } from './OrnamentalDivider';

export function Footer() {
  const { couple, gallery, social, content, complimentsFrom } = useWeddingData();

  return (
    <footer className="bg-maroon-800 py-16 px-4 relative overflow-hidden">
      <MughalCorner position="top-left" size="md" />
      <MughalCorner position="bottom-right" size="md" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Content */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="font-script text-gold-300 text-3xl">A&A</span>
            </div>
            <h3 className="text-gold-300 mb-2">
              {couple.groom.name.split(' ')[1]} & {couple.bride.name.split(' ')[1]}
            </h3>
            <p className="text-gold-400 font-serif italic">8 · 9 · 11 January 2026</p>
          </div>

          <OrnamentalDivider variant="floral" />

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <a
              href={`mailto:${social.email}`}
              className="w-12 h-12 border-2 border-gold-400 rounded-full flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-all duration-300 group"
            >
              <Mail className="text-gold-400 group-hover:text-ivory-50" size={20} />
            </a>
            <a
              href={`tel:${social.phone}`}
              className="w-12 h-12 border-2 border-gold-400 rounded-full flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-all duration-300 group"
            >
              <Phone className="text-gold-400 group-hover:text-ivory-50" size={20} />
            </a>
          </div>

          {/* Hashtags */}
          <div className="mb-8">
            <h6 className="text-gold-400 mb-3">Share Your Moments</h6>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {gallery.hashtags.map((hashtag, index) => (
                <>
                  <span key={hashtag} className="text-gold-400">
                    {hashtag}
                  </span>
                  {index < gallery.hashtags.length - 1 && (
                    <div className="w-1 h-1 bg-gold-400 rounded-full"></div>
                  )}
                </>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <div className="bg-maroon-700/50 border border-gold-400/30 p-4">
              <h6 className="text-gold-400 mb-2">Groom's Family</h6>
              <p className="text-sm mb-1 text-gold-300">{couple.groom.mother}</p>
              <a
                href={`tel:${couple.groom.contact.phone1.replace(/\s/g, '')}`}
                className="text-sm text-gold-400 hover:text-gold-300 block"
              >
                {couple.groom.contact.phone1}
              </a>
              <a
                href={`tel:${couple.groom.contact.phone2.replace(/\s/g, '')}`}
                className="text-sm text-gold-400 hover:text-gold-300"
              >
                {couple.groom.contact.phone2}
              </a>
            </div>
            <div className="bg-maroon-700/50 border border-gold-400/30 p-4">
              <h6 className="text-gold-400 mb-2">Bride's Family</h6>
              <p className="text-sm mb-1 text-gold-300">{couple.bride.mother}</p>
              <p className="text-sm text-gold-400">{couple.bride.location}</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mb-8"></div>

        {/* Bottom */}
        <div className="text-center text-sm">
          <p className="mb-2 text-gold-300">{content.footer.blessing}</p>
          <p className="text-gold-400">{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
