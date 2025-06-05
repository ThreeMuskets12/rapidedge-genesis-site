
import React from 'react';
import { Code, Wrench, Cpu, Zap, Settings, FileText } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Wrench,
      title: "Design & Manufacturing",
      skills: ["CAD (SolidWorks, Fusion 360)", "CAM Programming", "3D Printing", "CNC Machining", "DFM Analysis", "Rapid Tooling"]
    },
    {
      icon: Cpu,
      title: "Electronics & PCB",
      skills: ["PCB Design (Altium, KiCad)", "Circuit Analysis", "Component Selection", "Signal Integrity", "Power Management", "EMI/EMC Design"]
    },
    {
      icon: Code,
      title: "Programming & Embedded",
      skills: ["Embedded C/C++", "Python", "MATLAB", "Microcontroller Programming", "FPGA Development", "Real-time Systems"]
    },
    {
      icon: Settings,
      title: "Engineering Analysis",
      skills: ["FEA (ANSYS, COMSOL)", "CFD Analysis", "Thermal Modeling", "Stress Analysis", "Material Selection", "Testing & Validation"]
    },
    {
      icon: Zap,
      title: "Automation & Control",
      skills: ["PLC Programming", "Motion Control", "Sensor Integration", "Data Acquisition", "Industrial Automation", "Process Control"]
    },
    {
      icon: FileText,
      title: "Documentation & Compliance",
      skills: ["Technical Documentation", "FDA Regulations", "ISO Standards", "Design Controls", "Risk Management", "Quality Systems"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-blue-400">Technical</span> Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive skill set spanning mechanical, electrical, and software engineering disciplines
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-800 to-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg mr-3 group-hover:bg-blue-500/30 transition-colors">
                  <category.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-60"></div>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
