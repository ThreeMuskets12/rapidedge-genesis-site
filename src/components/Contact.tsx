
import React from 'react';
import { Calendar, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-teal-400">Get</span> Started
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to accelerate your project? Schedule a free consultation to discuss your engineering challenges and explore solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="p-3 bg-teal-500/20 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-gray-300">noah@rapidedge.solutions</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 bg-teal-500/20 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-gray-300">+1 (518) 313-9009</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 bg-teal-500/20 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">Location</div>
                  <div className="text-gray-300">Providence, RI</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-teal-500/10 to-green-500/10 rounded-xl border border-teal-500/20">
              <h4 className="text-lg font-semibold text-white mb-2">Free Consultation</h4>
              <p className="text-gray-300 text-sm mb-4">
                Get expert advice on your project challenges and discover how we can help accelerate your development timeline.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• 30-minute consultation call</li>
                <li>• Project feasibility assessment</li>
                <li>• Timeline and cost estimation</li>
                <li>• Technology recommendations</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-teal-500/20 rounded-lg mr-4">
                <Calendar className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Schedule Consultation</h3>
            </div>
            
            {/* Calendly Embed Placeholder */}
            <div className="bg-gray-700/50 rounded-lg p-8 text-center border-2 border-dashed border-gray-600">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Calendly Integration</h4>
              <p className="text-gray-300 mb-4">
                To complete the integration, you'll need to:
              </p>
              <div className="text-left text-sm text-gray-400 space-y-2">
                <div>1. Create a Calendly account at calendly.com</div>
                <div>2. Get your Calendly embed code</div>
                <div>3. Replace this placeholder with the actual embed</div>
              </div>
              <div className="mt-6">
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg transition-colors">
                  Book Consultation (Demo)
                </button>
              </div>
            </div>
            
            <div className="mt-6 text-sm text-gray-400">
              <p>
                <strong>Note:</strong> Replace the placeholder above with your actual Calendly embed code. 
                The embed typically looks like:
              </p>
              <code className="block mt-2 p-2 bg-gray-900 rounded text-xs">
                &lt;div className="calendly-inline-widget" data-url="https://calendly.com/your-link"&gt;&lt;/div&gt;
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
