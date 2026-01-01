import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWeddingData } from '../hooks/useWeddingData';
import { OrnamentalDivider } from './OrnamentalDivider';

interface NavigationBarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function NavigationBar({ activeSection, onNavigate }: NavigationBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverlappingFooter, setIsOverlappingFooter] = useState(false);
  const [activeButtonPosition, setActiveButtonPosition] = useState({ left: 0, width: 0 });
  const [isNavigating, setIsNavigating] = useState(false);
  const { navigation, couple } = useWeddingData();
  const navigate = useNavigate();
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    let lastActiveSection = activeSection;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Check footer overlap
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        setIsOverlappingFooter(footerRect.top < 80);
      }
      
      // Simple scroll detection - skip during navigation
      if (!isNavigating) {
        const scrollY = window.scrollY + 200;
        let currentSection = 'home';
        
        navigation.forEach(item => {
          const element = document.getElementById(item.id);
          if (element && scrollY >= element.offsetTop) {
            currentSection = item.id;
          }
        });
        
        if (currentSection !== lastActiveSection) {
          lastActiveSection = currentSection;
          onNavigate(currentSection);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isNavigating]);

  useEffect(() => {
    const activeIndex = navigation.findIndex((item) => item.id === activeSection);
    if (activeIndex !== -1 && buttonRefs.current[activeIndex]) {
      const button = buttonRefs.current[activeIndex];
      const menuContainer = button?.parentElement;
      if (button && menuContainer) {
        const buttonRect = button.getBoundingClientRect();
        const containerRect = menuContainer.getBoundingClientRect();
        setActiveButtonPosition({
          left: buttonRect.left - containerRect.left,
          width: buttonRect.width,
        });
      }
    }
  }, [activeSection, navigation]);

  const handleNavigation = (id: string) => {
    setIsNavigating(true);
    onNavigate(id);
    setIsOpen(false);
    
    // Re-enable scroll detection after smooth scroll completes
    setTimeout(() => {
      setIsNavigating(false);
    }, 800);
  };

  return (
    <nav className={`floating-nav ${isScrolled ? 'scrolled' : ''} ${isOverlappingFooter ? 'footer-overlap' : ''}`}>
      <div className="floating-nav-content">
        {/* Logo/Monogram */}
        <button onClick={() => navigate('/')} className="floating-nav-logo">
          <div className="floating-nav-logo-circle">
            <span className="font-script text-ivory-50 text-sm">A&A</span>
          </div>
          <span className="floating-nav-logo-text">Aftab & Amreen</span>
        </button>

        {/* Desktop Menu */}
        <div className="floating-nav-menu relative">
          {navigation.map((item, index) => (
            <button
              key={item.id}
              ref={(el) => (buttonRefs.current[index] = el as any)}
              onClick={() => handleNavigation(item.id)}
              className={`floating-nav-item ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
          {/* Active indicator */}
          <div className="absolute top-full left-0 w-full h-6 pointer-events-none">
            <div
              className="absolute top-4 transition-all duration-300 ease-in-out"
              style={{
                left: `${activeButtonPosition.left}px`,
                width: `${activeButtonPosition.width}px`,
              }}
            >
              <div className="flex justify-center items-end">
                <OrnamentalDivider variant="smaller" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="floating-nav-mobile-btn md:hidden">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="floating-nav-mobile-menu">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`floating-nav-mobile-item ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
