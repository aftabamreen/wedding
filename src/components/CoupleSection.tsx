import { useWeddingData } from '../hooks/useWeddingData';
import { MughalCorner } from './MughalCorner';
import { OrnamentalDivider } from './OrnamentalDivider';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CoupleSection() {
  const { couple, content, complimentsFrom } = useWeddingData();

  return (
    <section className="py-20 px-4 bg-ivory-50 relative overflow-hidden">
      <MughalCorner position="top-left" size="md" />
      <MughalCorner position="bottom-right" size="md" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h6 className="mb-2">Blessed By Allah</h6>
          <h2>Our Journey Together</h2>
          <OrnamentalDivider variant="floral" />
          <p className="max-w-2xl mx-auto text-maroon-700/80 mt-4">
            Under the guardianship of our beloved families, we embark on this sacred journey of
            marriage.
          </p>
        </div>

        {/* Family Blessings */}
        <div className="space-y-8">
          {/* Groom's Family */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] bg-gradient-to-br from-gold-200 to-gold-300 overflow-hidden order-2 md:order-1">
              <MughalCorner position="top-left" size="sm" />
              <MughalCorner position="bottom-right" size="sm" />
              <ImageWithFallback
                src={couple.groom.image}
                alt={`Groom - ${couple.groom.name}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-ivory-50" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                </div>
                <h3>The Groom</h3>
              </div>
              <h4 className="mb-2">{couple.groom.name}</h4>
              <p className="text-gold-600 mb-4">{couple.groom.qualification}</p>
              <p className="mb-4">
                Son of {couple.groom.mother} & {couple.groom.father}, blessed with the guidance of
                our esteemed grandparents and great-grandparents. With gratitude to Allah and our
                family's support, we begin this sacred journey.
              </p>
              <div className="border-t border-gold-200 pt-4">
                <p className="text-sm text-maroon-700/80 mb-3">
                  <strong>With blessings from:</strong>
                  <br />
                  Grandparents: {couple.groom.grandparents.paternal}
                  <br />
                  {couple.groom.grandparents.maternal}
                </p>
                <p className="text-sm text-maroon-700/80 mb-3">
                  <strong>Invitation from:</strong><br />
                  {complimentsFrom?.groom?.name}<br />
                  <span className="text-gold-600">{couple.groom.business}</span>
                </p>
                {complimentsFrom?.groomAdditional && (
                  <p className="text-sm text-maroon-700/80">
                    <strong>{complimentsFrom.groomAdditional.text}:</strong><br />
                    {complimentsFrom.groomAdditional.name} ({complimentsFrom.groomAdditional.qualification})<br />
                    <span className="text-gold-600">{complimentsFrom.groomAdditional.relation}</span>
                  </p>
                )}
              </div>
            </div>
          </div>

          <OrnamentalDivider variant="floral" />

          {/* Bride's Family */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-maroon-500 to-maroon-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-ivory-50" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                </div>
                <h3>The Bride</h3>
              </div>
              <h4 className="mb-2">{couple.bride.name}</h4>
              <p className="text-gold-600 mb-4">{couple.bride.qualification}</p>
              <p className="mb-4">
                Daughter of {couple.bride.mother} & {couple.bride.father} from{' '}
                {couple.bride.location}. With the love and prayers of our family, we embark on this
                blessed union, trusting in Allah's divine plan for our future together. May this sacred
                bond bring joy, prosperity, and countless blessings to both families.
              </p>
              <div className="border-t border-gold-200 pt-4">
                <p className="text-sm text-maroon-700/80 italic mb-3">"{content.hero.quote}"</p>
                {complimentsFrom?.bride && (
                  <p className="text-sm text-maroon-700/80 mb-2">
                    <strong>Invitation from:</strong><br />
                    {complimentsFrom.bride.name}
                  </p>
                )}
                {complimentsFrom?.brideAdditional && (
                  <p className="text-sm text-maroon-700/80">
                    <strong>{complimentsFrom.brideAdditional.text}:</strong><br />
                    {complimentsFrom.brideAdditional.names}<br />
                    <span className="text-gold-600">{complimentsFrom.brideAdditional.relation}</span>
                  </p>
                )}
              </div>
            </div>
            <div className="relative aspect-[4/3] bg-gradient-to-br from-maroon-200 to-maroon-300 overflow-hidden">
              <MughalCorner position="top-right" size="sm" />
              <MughalCorner position="bottom-left" size="sm" />
              <ImageWithFallback
                src={couple.bride.image}
                alt={`Bride - ${couple.bride.name}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
