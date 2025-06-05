
import React from 'react';
import { Award, Target, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Target, value: "200+", label: "Projects Completed" },
    { icon: Users, value: "50+", label: "Satisfied Clients" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-teal-400">About</span> RapidEdge
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              RapidEdge Solutions is a cutting-edge engineering consulting firm specializing in rapid prototyping 
              and product development with a particular focus on life science instrumentation. We bridge the gap 
              between innovative concepts and market-ready products.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our multidisciplinary approach combines mechanical design, electronics, software development, 
              and manufacturing expertise to deliver comprehensive solutions that accelerate time-to-market 
              while maintaining the highest quality standards.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-teal-400 rounded-full mr-4"></div>
                <span className="text-gray-300">FDA-compliant medical device experience</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-teal-400 rounded-full mr-4"></div>
                <span className="text-gray-300">Rapid iteration and agile development methods</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-teal-400 rounded-full mr-4"></div>
                <span className="text-gray-300">End-to-end product development lifecycle</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-teal-400 rounded-full mr-4"></div>
                <span className="text-gray-300">Industry 4.0 and IoT integration expertise</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-teal-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-teal-500/20 rounded-lg">
                    <stat.icon className="w-8 h-8 text-teal-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
