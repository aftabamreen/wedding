export function FloralPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="absolute w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="floral-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            {/* Center flower */}
            <circle cx="60" cy="60" r="4" fill="currentColor" className="text-gold-600"/>
            
            {/* Petals */}
            <ellipse cx="60" cy="45" rx="6" ry="12" fill="currentColor" className="text-maroon-500" opacity="0.6"/>
            <ellipse cx="75" cy="60" rx="12" ry="6" fill="currentColor" className="text-maroon-500" opacity="0.6"/>
            <ellipse cx="60" cy="75" rx="6" ry="12" fill="currentColor" className="text-maroon-500" opacity="0.6"/>
            <ellipse cx="45" cy="60" rx="12" ry="6" fill="currentColor" className="text-maroon-500" opacity="0.6"/>
            
            {/* Diagonal petals */}
            <ellipse cx="70" cy="50" rx="8" ry="10" fill="currentColor" className="text-gold-500" opacity="0.4" transform="rotate(45 70 50)"/>
            <ellipse cx="70" cy="70" rx="8" ry="10" fill="currentColor" className="text-gold-500" opacity="0.4" transform="rotate(-45 70 70)"/>
            <ellipse cx="50" cy="70" rx="8" ry="10" fill="currentColor" className="text-gold-500" opacity="0.4" transform="rotate(45 50 70)"/>
            <ellipse cx="50" cy="50" rx="8" ry="10" fill="currentColor" className="text-gold-500" opacity="0.4" transform="rotate(-45 50 50)"/>
            
            {/* Small dots */}
            <circle cx="30" cy="30" r="2" fill="currentColor" className="text-gold-400" opacity="0.5"/>
            <circle cx="90" cy="30" r="2" fill="currentColor" className="text-gold-400" opacity="0.5"/>
            <circle cx="30" cy="90" r="2" fill="currentColor" className="text-gold-400" opacity="0.5"/>
            <circle cx="90" cy="90" r="2" fill="currentColor" className="text-gold-400" opacity="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#floral-pattern)" />
      </svg>
    </div>
  );
}
