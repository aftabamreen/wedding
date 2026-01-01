export function MughalCorner({ position = "top-left", size = "md" }: { position?: "top-left" | "top-right" | "bottom-left" | "bottom-right", size?: "sm" | "md" | "lg" }) {
  const sizeMap = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32"
  };

  const positionMap = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0 rotate-90",
    "bottom-left": "bottom-0 left-0 -rotate-90",
    "bottom-right": "bottom-0 right-0 rotate-180"
  };

  return (
    <div className={`absolute ${positionMap[position]} ${sizeMap[size]} pointer-events-none`}>
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-gold-400 opacity-40">
        <path d="M0 0 L40 0 C 35 5, 30 10, 25 15 C 20 20, 15 25, 10 30 C 5 35, 2 38, 0 40 Z" fill="currentColor"/>
        <path d="M0 0 L30 0 C 25 8, 15 15, 8 25 C 4 30, 2 35, 0 30 Z" fill="currentColor" opacity="0.6"/>
        <circle cx="15" cy="15" r="3" fill="currentColor"/>
        <circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.8"/>
        <path d="M20 5 C 22 7, 24 9, 26 11" stroke="currentColor" strokeWidth="0.5" opacity="0.7"/>
        <path d="M5 20 C 7 22, 9 24, 11 26" stroke="currentColor" strokeWidth="0.5" opacity="0.7"/>
      </svg>
    </div>
  );
}
