import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Youtube, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      business: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Let's Build Your Business Together
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to turn your business idea into reality? Get in touch with our team for a consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8">
                We're here to help you navigate your business journey. Reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Mail className="text-orange-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:contact@indaybees.com" className="text-gray-600 hover:text-orange-600 transition-colors">
                    contact@indaybees.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Phone className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone / WhatsApp</h4>
                  <a href="tel:+919566656276" className="text-gray-600 hover:text-orange-600 transition-colors">
                    +91-9566656276
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center">
                  <MapPin className="text-orange-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600 leading-relaxed">
                    No. 181, B Block, F1, Kamaraj Nagar,<br />
                    4th Street, Choolaimedu,<br />
                    Chennai – 600094, India
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors">
                  <Youtube size={20} />
                </a>
                <a href="#" className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>
                
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type
                  </label>
                  <select
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
                  >
                    <option value="">Select business type</option>
                    <option value="student">Student / Recent Graduate</option>
                    <option value="new-founder">New Founder</option>
                    <option value="career-switcher">Career Switcher</option>
                    <option value="msme">Existing MSME</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors resize-none"
                  placeholder="Tell us about your business idea or what services you're interested in..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;