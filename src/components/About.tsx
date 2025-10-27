
import React from 'react';

const About = () => {

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

          <div className="flex justify-center items-center">
            <svg viewBox="0 0 400 400" className="w-full max-w-lg">
              {/* Triangle paths */}
              <defs>
                <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(20, 184, 166, 0.2)" />
                  <stop offset="100%" stopColor="rgba(20, 184, 166, 0.05)" />
                </linearGradient>
              </defs>
              
              {/* Main triangle */}
              <polygon 
                points="200,60 340,320 60,320" 
                fill="url(#triangleGradient)" 
                stroke="rgb(20, 184, 166)" 
                strokeWidth="2"
                className="animate-pulse"
                style={{ animationDuration: '3s' }}
              />
              
              {/* Connection lines to center */}
              <line x1="200" y1="60" x2="200" y2="200" stroke="rgba(20, 184, 166, 0.3)" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="340" y1="320" x2="200" y2="200" stroke="rgba(20, 184, 166, 0.3)" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="60" y1="320" x2="200" y2="200" stroke="rgba(20, 184, 166, 0.3)" strokeWidth="1" strokeDasharray="4,4" />
              
              {/* Corner circles and labels */}
              {/* Fast - Top */}
              <circle cx="200" cy="60" r="35" fill="rgba(31, 41, 55, 0.9)" stroke="rgb(20, 184, 166)" strokeWidth="2" />
              <text x="200" y="68" textAnchor="middle" fill="rgb(20, 184, 166)" fontSize="18" fontWeight="bold">Fast</text>
              
              {/* Cost-Effective - Bottom Right */}
              <circle cx="340" cy="320" r="50" fill="rgba(31, 41, 55, 0.9)" stroke="rgb(20, 184, 166)" strokeWidth="2" />
              <text x="340" y="315" textAnchor="middle" fill="rgb(20, 184, 166)" fontSize="16" fontWeight="bold">Cost-</text>
              <text x="340" y="333" textAnchor="middle" fill="rgb(20, 184, 166)" fontSize="16" fontWeight="bold">Effective</text>
              
              {/* Quality - Bottom Left */}
              <circle cx="60" cy="320" r="40" fill="rgba(31, 41, 55, 0.9)" stroke="rgb(20, 184, 166)" strokeWidth="2" />
              <text x="60" y="328" textAnchor="middle" fill="rgb(20, 184, 166)" fontSize="18" fontWeight="bold">Quality</text>
              
              {/* Center - RapidEdge Solutions */}
              <circle cx="200" cy="200" r="60" fill="rgba(20, 184, 166, 0.2)" stroke="rgb(20, 184, 166)" strokeWidth="3" />
              <text x="200" y="195" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">RapidEdge</text>
              <text x="200" y="215" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Solutions</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
