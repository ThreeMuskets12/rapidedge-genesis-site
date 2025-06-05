
import React from 'react';
import { Microscope, Cog, Cpu, Lightbulb } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Rapid Prototyping",
      description: "Fast iteration from concept to functional prototype using advanced manufacturing techniques and cutting-edge technologies.",
      features: ["3D Printing & Additive Manufacturing", "CNC Machining", "Rapid Tooling", "Proof of Concept Development"]
    },
    {
      icon: Cog,
      title: "Product Development",
      description: "Full-cycle product development from initial concept through design for manufacturing and market readiness.",
      features: ["Design for Manufacturing (DFM)", "Engineering Analysis", "Prototyping & Testing", "Production Planning"]
    },
    {
      icon: Microscope,
      title: "Life Science Instrumentation",
      description: "Specialized expertise in developing precision instruments for medical devices, diagnostics, and laboratory equipment.",
      features: ["Medical Device Design", "Laboratory Automation", "Diagnostic Equipment", "Regulatory Compliance"]
    },
    {
      icon: Cpu,
      title: "Electronic Systems",
      description: "Complete electronic system design from PCB layout to embedded programming and device integration.",
      features: ["PCB Design & Layout", "Embedded Programming", "Sensor Integration", "System Architecture"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-teal-400">Our</span> Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive engineering solutions tailored to accelerate your innovation from concept to market
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                    {feature}
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
