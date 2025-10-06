import React from 'react';
import { ArrowRight, Building2, Globe, FileText, Rocket } from 'lucide-react';

const Hero = () => {
  const openWhatsApp = () => {
  window.open("https://wa.me/919566656276", "_blank");
};


  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-orange-50 to-yellow-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gray-900">Build a Business,</span>
              <br />
              <span className="text-orange-600">End‑to‑End</span>
              <br />
              <span className="text-gray-900">— Practically.</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              We help founders and MSMEs choose the right business, set it up compliantly, 
              and get to first sales with lean, practitioner‑led execution.
            </p>

            <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-700">
              <span className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Globe size={16} className="text-orange-600" />
                <span>Exports</span>
              </span>
              <span className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Building2 size={16} className="text-orange-600" />
                <span>Consulting</span>
              </span>
              <span className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <FileText size={16} className="text-orange-600" />
                <span>Registrations</span>
              </span>
              <span className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Rocket size={16} className="text-orange-600" />
                <span>Digital Launch</span>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={openWhatsApp}
                className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2 group"
              >
                <span>Talk to Us</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex flex-col sm:flex-row gap-2 text-sm">
                <a href="mailto:contact@indaybees.example" className="text-gray-600 hover:text-orange-600 transition-colors">
                  contact@indaybees.com
                </a>
                <span className="hidden sm:inline text-gray-400">|</span>
                <a href="tel:+919566656276" className="text-gray-600 hover:text-orange-600 transition-colors">
                  +91-9566656276
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Business professionals collaborating"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 p-4 rounded-xl shadow-lg">
              <div className="text-black font-bold text-lg">500+</div>
              <div className="text-black text-sm">Businesses Launched</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
