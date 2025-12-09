import React, { useEffect, useState } from 'react';
import { Calendar, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import noahHeadshot from '@/assets/noah-headshot.png';

const Contact = () => {
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [isLoadingPhone, setIsLoadingPhone] = useState(false);

  const revealPhone = async () => {
    if (phoneNumber) return;
    setIsLoadingPhone(true);
    try {
      const response = await fetch('https://pastebin.com/raw/P7StTSKw');
      const data = await response.json();
      const encoded = data.fown;
      const decoded = encoded.split('').map((digit: string) => (9 - parseInt(digit)).toString()).join('');
      const formatted = `+1 (${decoded.slice(0, 3)}) ${decoded.slice(3, 6)}-${decoded.slice(6)}`;
      setPhoneNumber(formatted);
    } catch (error) {
      console.error('Failed to load phone number:', error);
    } finally {
      setIsLoadingPhone(false);
    }
  };

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
            <div className="flex flex-col md:flex-row items-center md:items-center gap-6 mb-8">
              <img 
                src={noahHeadshot} 
                alt="Noah Page" 
                className="w-[270px] h-[270px] rounded-full object-cover border-4 border-teal-500/30 shadow-lg"
              />
              <div className="text-center md:text-left">
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
                  
                  <div className="flex items-center group">
                    <div className="p-3 bg-teal-500/20 rounded-lg mr-4">
                      <Phone className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Phone</div>
                      {phoneNumber ? (
                        <a href={`tel:${phoneNumber.replace(/\D/g, '')}`} className="text-gray-300 hover:text-teal-400 transition-colors">
                          {phoneNumber}
                        </a>
                      ) : (
                        <Button
                          variant="link"
                          className="p-0 h-auto text-teal-400 hover:text-teal-300"
                          onClick={revealPhone}
                          disabled={isLoadingPhone}
                        >
                          {isLoadingPhone ? 'Loading...' : 'Click to reveal'}
                        </Button>
                      )}
                    </div>
                  </div>
                  
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

          <div className="bg-gray-800/80 backdrop-blur-sm pr-2 pl-0 pb-2 pt-2 md:p-6 rounded-xl border border-gray-700 max-w-[calc(100vw-24px)] md:max-w-[630px] order-2 lg:order-2 flex flex-col items-center mx-auto w-fit md:w-auto">
            <div className="relative flex items-center justify-center md:justify-start mb-4 w-full md:p-0">
              <div className="md:static absolute left-3 p-2 bg-teal-500/20 rounded-lg md:mr-3">
                <Calendar className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-white ml-2 md:ml-0">Schedule Consultation</h3>
            </div>
            
            {/* Calendly Embed */}
            <div 
              className="calendly-inline-widget w-[calc(100vw-32px)] max-w-[320px] md:max-w-none md:w-[560px] ml-2 md:mx-auto" 
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
