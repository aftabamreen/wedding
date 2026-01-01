export function OrnamentalDivider({ variant = "default" }: { variant?: "default" | "simple" | "floral" | "smaller" }) {
  if (variant === "simple") {
    return (
      <div className="flex items-center justify-center gap-3 py-6">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400"></div>
        <div className="w-2 h-2 bg-gold-400 rotate-45"></div>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400"></div>
      </div>
    );
  }

  if (variant === "floral") {
    return (
      <div className="flex items-center justify-center gap-2 py-4">
        <div className="h-0.5 w-8 bg-gradient-to-r from-transparent to-gold-400"></div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gold-500">
          <path d="M12 2C12 2 9 7 9 10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10C15 7 12 2 12 2Z" fill="currentColor" fillOpacity="0.8"/>
          <path d="M12 22C12 22 9 17 9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14C15 17 12 22 12 22Z" fill="currentColor" fillOpacity="0.8"/>
          <path d="M2 12C2 12 7 9 10 9C11.6569 9 13 10.3431 13 12C13 13.6569 11.6569 15 10 15C7 15 2 12 2 12Z" fill="currentColor" fillOpacity="0.8"/>
          <path d="M22 12C22 12 17 9 14 9C12.3431 9 11 10.3431 11 12C11 13.6569 12.3431 15 14 15C17 15 22 12 22 12Z" fill="currentColor" fillOpacity="0.8"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
        <div className="h-0.5 w-8 bg-gradient-to-l from-transparent to-gold-400"></div>
      </div>
    );
  }

  if (variant === "smaller") {
    return (
      <div className="flex items-center justify-center gap-1 py-2">
        <div className="h-0.5 w-4 bg-gradient-to-r from-transparent to-gold-400"></div>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-gold-500">
          <path d="M12 2C12 2 9 7 9 10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10C15 7 12 2 12 2Z" fill="currentColor" fillOpacity="0.8"/>
          <path d="M12 22C12 22 9 17 9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14C15 17 12 22 12 22Z" fill="currentColor" fillOpacity="0.8"/>
          <path d="M2 12C2 12 7 9 10 9C11.6569 9 13 10.3431 13 12C13 13.6569 11.6569 15 10 15C7 15 2 12 2 12Z" fill="currentColor" fillOpacity="0.8"/>
          <path d="M22 12C22 12 17 9 14 9C12.3431 9 11 10.3431 11 12C11 13.6569 12.3431 15 14 15C17 15 22 12 22 12Z" fill="currentColor" fillOpacity="0.8"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
        <div className="h-0.5 w-4 bg-gradient-to-l from-transparent to-gold-400"></div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-8 px-4">
      <svg width="200" height="40" viewBox="0 0 200 40" fill="none" className="text-gold-500">
        {/* Left ornament */}
        <path d="M2 20 L30 20" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
        <circle cx="35" cy="20" r="2" fill="currentColor" opacity="0.7"/>
        <path d="M40 20 C 45 15, 50 15, 55 20 C 50 25, 45 25, 40 20" fill="currentColor" opacity="0.4"/>
        
        {/* Center ornament */}
        <circle cx="100" cy="20" r="3" fill="currentColor"/>
        <path d="M100 10 L100 30" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
        <path d="M90 20 L110 20" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
        <circle cx="95" cy="15" r="1.5" fill="currentColor" opacity="0.5"/>
        <circle cx="105" cy="15" r="1.5" fill="currentColor" opacity="0.5"/>
        <circle cx="95" cy="25" r="1.5" fill="currentColor" opacity="0.5"/>
        <circle cx="105" cy="25" r="1.5" fill="currentColor" opacity="0.5"/>
        
        {/* Right ornament */}
        <path d="M145 20 C 150 15, 155 15, 160 20 C 155 25, 150 25, 145 20" fill="currentColor" opacity="0.4"/>
        <circle cx="165" cy="20" r="2" fill="currentColor" opacity="0.7"/>
        <path d="M170 20 L198 20" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
      </svg>
    </div>
  );
}
