import React, { useEffect } from 'react';
import { Calendar, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import noahHeadshot from '@/assets/noah-headshot.png';

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
      <div className="container mx-auto px-3 md:px-6">
        {/* Get Started Header - Shows first on mobile, inline on desktop */}
        <div className="mb-8 order-1 lg:hidden">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-teal-400">Get</span> Started
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl">
            Schedule a <strong className="font-bold">free 30 minute consultation</strong> to discuss your unique engineering challenges and learn more about solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr,auto] gap-8 items-stretch">
          <div className="flex flex-col h-full order-3 lg:order-1">
            {/* Get Started Header - Hidden on mobile, shows on desktop */}
            <div className="mb-8 hidden lg:block">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-teal-400">Get</span> Started
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl">
                Schedule a <strong className="font-bold">free 30 minute consultation</strong> to discuss your unique engineering challenges and learn more about solutions.
              </p>
            </div>
            
            <div className="lg:mt-auto">
            {/* Profile Section */}
            <div className="flex items-center gap-6 mb-8">
              <img 
                src={noahHeadshot} 
                alt="Noah Page" 
                className="w-[270px] h-[270px] rounded-full object-cover border-4 border-teal-500/30 shadow-lg"
              />
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">Noah Page</h3>
                <p className="text-teal-400 font-semibold text-xl">Principal Engineering Consultant</p>
              </div>
            </div>

            <div className="flex gap-8 items-start mb-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <a href="mailto:noah@rapidedge.solutions" className="flex items-center group">
                    <div className="p-3 bg-teal-500/20 rounded-lg mr-4 group-hover:bg-teal-500/30 transition-colors">
                      <Mail className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <div className="text-gray-300 group-hover:text-teal-400 transition-colors">noah@rapidedge.solutions</div>
                    </div>
                  </a>
                  
                  <a href="tel:+15183139009" className="flex items-center group">
                    <div className="p-3 bg-teal-500/20 rounded-lg mr-4 group-hover:bg-teal-500/30 transition-colors">
                      <Phone className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Phone</div>
                      <div className="text-gray-300 group-hover:text-teal-400 transition-colors">+1 (518) 313-9009</div>
                    </div>
                  </a>
                  
                  <a href="https://www.linkedin.com/in/noah-page/" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                    <div className="p-3 bg-teal-500/20 rounded-lg mr-4 group-hover:bg-teal-500/30 transition-colors">
                      <Linkedin className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">LinkedIn</div>
                      <div className="text-gray-300 group-hover:text-teal-400 transition-colors">noah-page</div>
                    </div>
                  </a>
                  
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
              </div>
            </div>
            </div>
          </div>

          <div className="bg-gray-800/80 backdrop-blur-sm pr-2 pl-0 pb-2 pt-0 md:p-6 rounded-xl border border-gray-700 max-w-[calc(100vw-24px)] md:max-w-[630px] order-2 lg:order-2 flex flex-col items-center mx-auto w-fit md:w-auto">
            <div className="relative flex items-center justify-center md:justify-start mb-4 w-full md:p-0">
              <div className="md:static absolute left-3 p-2 bg-teal-500/20 rounded-lg md:mr-3">
                <Calendar className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-white ml-2 md:ml-0">Schedule Consultation</h3>
            </div>
            
            {/* Calendly Embed */}
            <div 
              className="calendly-inline-widget w-[calc(100vw-32px)] max-w-[320px] md:w-[560px] ml-2 md:mx-auto" 
              data-url="https://calendly.com/noah-rapidedge/30min"
              style={{ height: '830px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
