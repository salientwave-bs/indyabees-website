import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="/IndyaBees_Logo_PNG_Small (2).png" 
              alt="IndyaBees" 
              className="h-10 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('solutions')} className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Solutions
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('packages')} className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Packages
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors">
              Contact Us
            </button>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <nav className="flex flex-col p-4 space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 font-medium text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 font-medium text-left">
                About
              </button>
              <button onClick={() => scrollToSection('solutions')} className="text-gray-700 hover:text-orange-600 font-medium text-left">
                Solutions
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-600 font-medium text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('packages')} className="text-gray-700 hover:text-orange-600 font-medium text-left">
                Packages
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors text-center">
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;