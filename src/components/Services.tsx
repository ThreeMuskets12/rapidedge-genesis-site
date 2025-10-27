
import React from 'react';
import { Microscope, Cog, Cpu, Lightbulb } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Cog,
      title: "Mechanical",
      description: "Whether your new startup idea needs proof-of-concept validation from sketches on the back of a napkin, or you have an existing engineering team and want bandwidth expansion / expertise to accelerate, or anywhere in between, we are here to help!",
      features: [
        {
          title: "3D CAD Design",
          description: "From small one off parts to complex mechanical assemblies. Can be completed natively in your existing CAD software, making integration a breeze. (Solidworks, OnShape, Fusion360, Inventor, etc.)"
        },
        {
          title: "CAM Programming",
          description: "Quickly get GCode for cutting your prototype parts. Can also produce highly optimized toolpaths with custom macros for maximum manufacturing efficiency when every second counts."
        },
        {
          title: "Manufacturing and Assembly Services",
          description: "Don't let a lack of equipment slow you down. Receive fast quotes from both our in-house manufacturing for small quantity production, and from our experience with trusted manufacturers for ordering larger quantities."
        },
        {
          title: "DFM Optimizations and Design Review",
          description: "Work with us to convert your existing proof-of-concept prototype components into functional equivalents ready for medium or high volume manufacturing."
        }
      ]
    },
    {
      icon: Cpu,
      title: "Electrical",
      description: "Full-service electrical design including PCB development and embedded systems integration.",
      features: [
        {
          title: "Full Service Circuit Design",
          description: "Go from a description of your desired functionality to a BOM and full schematics at lightning speed. In-house circuit blocks maximize use of pre-validated designs and reduce time to delivery."
        },
        {
          title: "PCB Layout",
          description: "Quickly get space and cost optimized PCBs designed and in your hands. Even existing schematics from your breadboard or protoboard proof-of-concept devices can quickly be transformed into professional PCBs."
        },
        {
          title: "Embedded Upgrades",
          description: "Currently using development platforms like Arduino or Raspberry Pi? Migrate to a custom embedded system to dramatically shrink your overall footprint, simply your build procedure, and reduce your COGS by only paying for the features you need, and not for the features you don't."
        }
      ]
    },
    {
      icon: Lightbulb,
      title: "Software",
      description: "End-to-end software development for embedded systems and control applications.",
      features: [
        {
          title: "Embedded Firmware",
          description: "Whether you are prototyping on Arduinos, or using custom embedded systems, we produce clean, concise and documented C++ code. We use standard HALs on PlatformIO to make switching microcontrollers down the line a breeze. Own your code by having our development happen within your existing Git structure."
        },
        {
          title: "Internal Tooling",
          description: "Need small pieces of software for internal use in your company? Have it developed quickly and cost effectively in Python by focusing on functionality first and leveraging our existing code blocks for building simple UIs."
        },
        {
          title: "End-User Software",
          description: "Customer-facing software developed in-house. Interface with physical devices in an interface that matches your own brand guidelines. Work along side us by giving feedback along the way, ensuring that your user experience is exactly as you imagine."
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-teal-400">Our</span> Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-teal-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/10"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-teal-500/20 rounded-lg mr-4 group-hover:bg-teal-500/30 transition-colors">
                  <service.icon className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-400">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-200">
                          {typeof feature === 'string' ? feature : feature.title}
                        </div>
                        {typeof feature === 'object' && feature.description && (
                          <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                            {feature.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
