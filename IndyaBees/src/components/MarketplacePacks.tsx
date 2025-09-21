import React from 'react';
import { ShoppingBag, UtensilsCrossed, Package, CheckCircle ,Globe,Rocket} from 'lucide-react';

const MarketplacePacks = () => {
  return (
    <section id="packages" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Marketplace Launch Packs
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get all prerequisites done and go live quickly. We package setup + filings + storefront/menu build + first‑orders playbook.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* E-Commerce Pack */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center">
                <ShoppingBag className="text-orange-600" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">E-Commerce Pack</h3>
                <p className="text-gray-600">Amazon / Flipkart</p>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Prerequisites we help secure:</h4>
              <div className="space-y-3">
                {[
                  "Legal entity (Proprietorship/Partnership/Pvt Ltd) & PAN",
                  "GST registration & bank current account", 
                  "KYC docs, store name, pickup address",
                  "Optional: Brand Registry / TM (for private label)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 mt-0.5" size={16} />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">What we do:</h4>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <span>• Seller account creation</span>
                <span>• Category & brand approvals</span>
                <span>• Catalog setup</span>
                <span>• Pricing & tax mapping</span>
                <span>• Shipping setup</span>
                <span>• Return/refund policies</span>
                <span>• Basic ad campaigns</span>
                <span>• Reporting basics</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <img src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=60" alt="Amazon" className="w-12 h-12 rounded object-cover" />
              <img src="https://images.pexels.com/photos/6214471/pexels-photo-6214471.jpeg?auto=compress&cs=tinysrgb&w=60" alt="Flipkart" className="w-12 h-12 rounded object-cover" />
            </div>
          </div>

          {/* Food Delivery Pack */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-yellow-100 w-16 h-16 rounded-xl flex items-center justify-center">
                <UtensilsCrossed className="text-yellow-600" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Food Delivery Pack</h3>
                <p className="text-gray-600">Swiggy / Zomato</p>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Prerequisites we help secure:</h4>
              <div className="space-y-3">
                {[
                  "Legal entity & PAN",
                  "GST (if applicable) & FSSAI license", 
                  "Kitchen address proof & photos",
                  "Menu, packaging SOPs"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 mt-0.5" size={16} />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">What we do:</h4>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <span>• Partner onboarding</span>
                <span>• Outlet profile setup</span>
                <span>• Menu engineering</span>
                <span>• Photoshoot guidance</span>
                <span>• Go‑live checks</span>
                <span>• Promotions/intro offers</span>
                <span>• Hygiene SOPs</span>
                <span>• Order‑ops SOPs</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=60" alt="Swiggy" className="w-12 h-12 rounded object-cover" />
              <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=60" alt="Zomato" className="w-12 h-12 rounded object-cover" />
            </div>
          </div>
        </div>

        {/* Pack Inclusions */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Pack Inclusions (Common)</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="text-orange-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Filings & Approvals</h4>
              <p className="text-sm text-gray-600">Company/firm registration, GST, FSSAI, IEC, bank a/c support</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-yellow-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Storefront/Menu Setup</h4>
              <p className="text-sm text-gray-600">Catalog, creatives, descriptions, policy pages</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-orange-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Ops Playbook</h4>
              <p className="text-sm text-gray-600">Order flow, packaging/returns, SLAs, reviews & ratings</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-yellow-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Kickstart</h4>
              <p className="text-sm text-gray-600">First campaigns, coupons, and simple analytics dashboard</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplacePacks;