import React from 'react';
import { FileText, Users, Globe, MapPin, Plane } from 'lucide-react';

const ServiceLines = () => {
  const services = [
    {
      icon: FileText,
      title: "Registrations & Licenses",
      items: ["Proprietorship", "Partnership", "Pvt Ltd", "GST", "FSSAI", "IEC"],
      description: "Complete legal foundation for your business"
    },
    {
      icon: Users,
      title: "Consulting & SOPs",
      items: ["Process maps", "Compliance checklists", "Proposal & invoice templates"],
      description: "Streamlined operations and documentation"
    },
    {
      icon: Globe,
      title: "Digital Setup & Content Ops",
      items: ["Channel creation", "Creative toolkit", "Posting schedule", "Analytics basics"],
      description: "Professional digital presence and content strategy"
    },
    {
      icon: MapPin,
      title: "On‑Ground Enablement",
      items: ["Vendor/market connects", "Fulfilment playbooks", "Lead capture & scripts"],
      description: "Real-world business activation and networking"
    },
    {
      icon: Plane,
      title: "Exports Assist (Optional)",
      items: ["Product discovery", "Documentation guidance", "Logistics liaison"],
      description: "International trade facilitation and support"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Service Lines
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Specialized service areas designed to address every aspect of your business journey.
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors">
                <div className="grid lg:grid-cols-4 gap-6 items-center">
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-600 w-12 h-12 rounded-xl flex items-center justify-center">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap gap-2">
                      {service.items.map((item, itemIndex) => (
                        <span 
                          key={itemIndex}
                          className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 border border-gray-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceLines;