import React from 'react';
import { Lightbulb, TrendingUp, BarChart3, ArrowRight } from 'lucide-react';

const EngagementModels = () => {
  const models = [
    {
      icon: Lightbulb,
      title: "Starter",
      subtitle: "Validation & Setup",
      description: "Business choice, USP, entity + GST, digital basics, ROI/BEP model.",
      features: [
        "Business discovery & validation",
        "Entity registration (Proprietorship/Partnership/Pvt Ltd)",
        "GST registration & basic compliance",
        "Digital presence setup",
        "ROI & Break-even modeling"
      ],
      color: "yellow",
      recommended: false
    },
    {
      icon: TrendingUp,
      title: "Growth",
      subtitle: "Launch & First Sales",
      description: "GTM plan, vendor connects, channel setup, initial campaigns, lead tracking.",
      features: [
        "Go-to-Market strategy development",
        "Vendor network establishment",
        "Marketplace/channel onboarding",
        "Initial marketing campaigns",
        "Lead tracking & CRM setup",
        "First sales execution"
      ],
      color: "orange",
      recommended: true
    },
    {
      icon: BarChart3,
      title: "Scale",
      subtitle: "Multi‑Channel",
      description: "Marketplace + direct, export option, process controls, simple dashboards.",
      features: [
        "Multi-channel expansion",
        "Export market entry (optional)",
        "Advanced process controls",
        "Performance dashboards",
        "Scaling operations",
        "International trade facilitation"
      ],
      color: "yellow",
      recommended: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Engagement Models
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the engagement model that best fits your business stage and goals. 
            Each engagement is customized with add‑ons available on request.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {models.map((model, index) => {
            const Icon = model.icon;
            const bgColor = model.color === 'orange' ? 'bg-orange-50' : 'bg-yellow-50';
            const borderColor = model.color === 'orange' ? 'border-orange-200' : 'border-yellow-200';
            const iconBg = model.color === 'orange' ? 'bg-orange-100' : 'bg-yellow-100';
            const iconColor = model.color === 'orange' ? 'text-orange-600' : 'text-yellow-600';
            
            return (
              <div key={index} className={`bg-white ${borderColor} border-2 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 relative ${model.recommended ? 'ring-2 ring-orange-500 ring-offset-2' : ''}`}>
                {model.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`${iconBg} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <Icon className={`${iconColor}`} size={32} />
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{model.title}</h3>
                  <p className="text-orange-600 font-semibold mb-4">{model.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed">{model.description}</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  {model.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={scrollToContact}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 group ${
                    model.recommended 
                      ? 'bg-orange-600 text-white hover:bg-orange-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  <span>Get Started</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-sm p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Who We Serve</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-bold text-lg">S</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Students</h4>
                <p className="text-sm text-gray-600">College & recent graduates</p>
              </div>
              <div>
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-600 font-bold text-lg">F</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">New Founders</h4>
                <p className="text-sm text-gray-600">First-time entrepreneurs</p>
              </div>
              <div>
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-bold text-lg">C</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Career Switchers</h4>
                <p className="text-sm text-gray-600">Professional transitions</p>
              </div>
              <div>
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-600 font-bold text-lg">M</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">MSMEs</h4>
                <p className="text-sm text-gray-600">Existing small businesses</p>
              </div>
            </div>
            <p className="text-gray-600 mt-6">
              From Chennai and across India—who want practical, compliant, and measurable business launch support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;