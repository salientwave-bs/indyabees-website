import React from 'react';
import { Search, Building, Calculator, Rocket, Globe2, Ship } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Search,
      title: "Business Selection & Validation",
      description: "Market signals, competitor scan, budget & skills mapping, USP definition, offer design.",
      color: "orange"
    },
    {
      icon: Building,
      title: "Entity Setup & Compliance",
      description: "Proprietorship/Partnership/Pvt Ltd, GST, FSSAI, IEC, bank a/c, invoicing basics, SOPs.",
      color: "yellow"
    },
    {
      icon: Calculator,
      title: "ROI & Break‑Even Model",
      description: "Unit economics, contribution margin, break‑even, payback period, pricing & bundles.",
      color: "orange"
    },
    {
      icon: Rocket,
      title: "Go‑to‑Market (GTM) Launch",
      description: "Order‑based operations, vendor onboarding, simple CRM/WhatsApp flows, marketplace or direct.",
      color: "yellow"
    },
    {
      icon: Globe2,
      title: "Digital Presence & Media",
      description: "Brand kit, landing page, Google Business Profile, YouTube/Instagram/Facebook setup, content calendar.",
      color: "orange"
    },
    {
      icon: Ship,
      title: "Exports & Trade Enablement",
      description: "Sourcing, QC/inspection, logistics coordination, documentation and after‑sales support.",
      color: "yellow"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What We Deliver
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to transform your business ideas into reality with practical, 
            results-driven approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const bgColor = solution.color === 'orange' ? 'bg-orange-100' : 'bg-yellow-100';
            const iconColor = solution.color === 'orange' ? 'text-orange-600' : 'text-yellow-600';
            
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                <div className={`${bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`${iconColor}`} size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;