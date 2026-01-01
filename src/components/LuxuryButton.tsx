import { ButtonHTMLAttributes } from 'react';

interface LuxuryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export function LuxuryButton({ variant = 'primary', children, className = '', ...props }: LuxuryButtonProps) {
  const baseStyles = "px-8 py-3.5 transition-all duration-300 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-gold-500 to-gold-600 text-ivory-50 hover:from-gold-600 hover:to-gold-700 shadow-lg hover:shadow-xl",
    secondary: "bg-maroon-500 text-ivory-50 hover:bg-maroon-600 shadow-lg hover:shadow-xl",
    outline: "border-2 border-gold-500 text-gold-700 hover:bg-gold-500 hover:text-ivory-50 hover:border-gold-600"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
    </button>
  );
}
