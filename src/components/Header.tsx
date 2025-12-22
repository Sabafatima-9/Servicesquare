import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logoImage from '../logo.svg.jpeg';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <img
              src={logoImage}
              alt="Service Square Repair Service Association"
              className="h-14 w-auto object-contain"
            />
            <h1 className="text-2xl font-bold text-[#1e3f7a]">Service Square</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="nav-link text-[#333333] hover:text-[#2E5AAC] font-semibold text-lg transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#2E5AAC] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="nav-link text-[#333333] hover:text-[#2E5AAC] font-semibold text-lg transition-colors duration-200 relative group"
            >
              Services
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#2E5AAC] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="nav-link text-[#333333] hover:text-[#2E5AAC] font-semibold text-lg transition-colors duration-200 relative group"
            >
              About
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#2E5AAC] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="nav-link text-[#333333] hover:text-[#2E5AAC] font-semibold text-lg transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#2E5AAC] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:7842595947"
              className="bg-[#1e3f7a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2E5AAC] transition-transform duration-300 transform-gpu hover:scale-105 hover:shadow-lg flex items-center gap-2 will-change-transform"
            >
              <Phone size={18} />
              Book Service
            </a>
          </div>

          <button
            className="md:hidden text-[#333333]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-[#333333] hover:text-[#2E5AAC] font-semibold text-lg transition-colors py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-[#333333] hover:text-[#2E5AAC] font-semibold text-lg transition-colors py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-[#333333] hover:text-[#2E5AAC] font-semibold text-lg transition-colors py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-[#333333] hover:text-[#2E5AAC] font-semibold text-lg transition-colors py-2"
              >
                Contact
              </button>
              <a
                href="tel:7842595947"
                className="bg-[#1e3f7a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2E5AAC] transition-colors text-center"
              >
                Book Service
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
