import React from 'react';
import { Building2, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/IndyaBees_Logo_PNG_Small (2).png" 
                alt="IndyaBees" 
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Multi‑vertical business enablement firm helping founders and MSMEs build 
              compliant businesses from idea to first sales.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-orange-400" />
                <a href="mailto:contact@indaybees.example" className="text-gray-300 hover:text-white transition-colors">
                  contact@indaybees.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-orange-400" />
                <a href="tel:+919566656276" className="text-gray-300 hover:text-white transition-colors">
                  +91-9566656276
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-orange-400 mt-1" />
                <span className="text-gray-300">
                  No. 181, B Block, F1, Kamaraj Nagar,<br />
                  4th Street, Choolaimedu,<br />
                  Chennai – 600094, India
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('solutions')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Business Validation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('solutions')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Entity Setup & Compliance
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Digital Presence
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('packages')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Marketplace Launch
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('solutions')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Exports & Trade
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('solutions')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  YouTube
                </a>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © 2025 IndyaBees. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs text-center md:text-right">
              Residential support and expo participation are subject to venue capacity and local approvals.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;