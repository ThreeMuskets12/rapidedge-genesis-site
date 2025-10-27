import React, { useEffect } from 'react';
import { Calendar, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);
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
                  <a href="mailto:noah@rapidedge.solutions" className="text-gray-300 hover:text-teal-400 transition-colors">noah@rapidedge.solutions</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 bg-teal-500/20 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">Phone</div>
                  <a href="tel:+15183139009" className="text-gray-300 hover:text-teal-400 transition-colors">+1 (518) 313-9009</a>
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

          <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 max-w-md ml-auto">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-teal-500/20 rounded-lg mr-3">
                <Calendar className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Schedule Consultation</h3>
            </div>
            
            {/* Calendly Embed */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/noah-rapidedge/30min"
              data-resize="true"
              style={{ width: '384px', height: '448px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
