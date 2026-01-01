import { useState } from 'react';
import { OrnamentalDivider } from './OrnamentalDivider';
import { MughalCorner } from './MughalCorner';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { X } from 'lucide-react';
import { useWeddingData } from '../hooks/useWeddingData';

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { gallery, complimentsFrom } = useWeddingData();

  return (
    <section className="py-20 px-4 bg-ivory-50 relative overflow-hidden">
      <MughalCorner position="top-left" size="md" />
      <MughalCorner position="bottom-right" size="md" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h6 className="mb-2">Captured Moments</h6>
          <h2>Our Gallery</h2>
          <OrnamentalDivider variant="floral" />
          <p className="max-w-2xl mx-auto text-maroon-700/80">
            A glimpse into our journey together, captured in timeless frames.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="masonry-gallery">
          {[...gallery.portrait, ...gallery.landscape].map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className="masonry-item relative overflow-hidden group cursor-pointer"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-maroon-900/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-ivory-50 hover:text-gold-300 transition-colors"
            >
              <X size={32} />
            </button>
            <div className="relative max-w-4xl max-h-[90vh]">
              <ImageWithFallback
                src={[...gallery.portrait, ...gallery.landscape][selectedImage]?.url}
                alt={[...gallery.portrait, ...gallery.landscape][selectedImage]?.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}

        <OrnamentalDivider />

        <div className="text-center">
          <p className="text-maroon-700/80 mb-4">
            More photos will be added after the wedding. Share your moments with us.
          </p>
          <div className="flex items-center justify-center gap-2">
            {gallery.hashtags.map((hashtag, index) => (
              <>
                <span key={hashtag} className="text-gold-600">{hashtag}</span>
                {index < gallery.hashtags.length - 1 && <div className="w-1 h-1 bg-gold-400 rounded-full"></div>}
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
