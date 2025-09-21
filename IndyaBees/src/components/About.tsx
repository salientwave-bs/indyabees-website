import React from 'react';
import { MapPin, Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About IndyaBees
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            IndyaBees is a multi‑vertical business enablement firm based in Chennai. 
            We combine exports and order‑based trading with compliance, process design, 
            digital presence, and on‑ground activation to turn ideas into running businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
              <MapPin className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Chennai Based</h3>
            <p className="text-gray-600">Serving clients across India with local expertise and global reach</p>
          </div>

          <div className="text-center group">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
              <Users className="text-yellow-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Vertical</h3>
            <p className="text-gray-600">Comprehensive business solutions across multiple industries</p>
          </div>

          <div className="text-center group">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
              <Target className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">End-to-End</h3>
            <p className="text-gray-600">From idea validation to first sales and beyond</p>
          </div>

          <div className="text-center group">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
              <Award className="text-yellow-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Practitioner-Led</h3>
            <p className="text-gray-600">Real-world experience driving practical solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;