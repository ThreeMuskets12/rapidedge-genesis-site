
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
              It doesn't always have to be a compromise. RapidEdge Solutions cheats the engineering trilemma by cutting out the overhead from cross-team collaboration.
              <br /><br />
              Maximize your budget on getting fast and effective solutions, instead of on meetings and workshops between Mechanical, Electrical, and Software teams for "Circling Back" and "Touching Base".
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <svg viewBox="0 0 400 400" className="w-full max-w-lg" style={{ filter: 'drop-shadow(0 10px 20px rgba(20, 184, 166, 0.3))' }}>
              {/* Triangle paths */}
              <defs>
                <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(20, 184, 166, 0.3)" />
                  <stop offset="50%" stopColor="rgba(20, 184, 166, 0.15)" />
                  <stop offset="100%" stopColor="rgba(20, 184, 166, 0.05)" />
                </linearGradient>
                <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(20, 184, 166)" />
                  <stop offset="50%" stopColor="rgb(45, 212, 191)" />
                  <stop offset="100%" stopColor="rgb(20, 184, 166)" />
                </linearGradient>
              </defs>
              
              {/* Shadow triangle for 3D effect */}
              <polygon 
                points="205,65 345,325 65,325" 
                fill="rgba(0, 0, 0, 0.3)" 
                stroke="none"
              />
              
              {/* Main triangle */}
              <polygon 
                points="200,60 340,320 60,320" 
                fill="url(#triangleGradient)" 
                stroke="url(#strokeGradient)" 
                strokeWidth="2"
                className="animate-pulse"
                style={{ animationDuration: '3s' }}
              />
              
              {/* Animated connection lines to center */}
              <line 
                x1="200" y1="60" x2="200" y2="233" 
                stroke="rgba(20, 184, 166, 0.5)" 
                strokeWidth="1.5" 
                strokeDasharray="8,4"
              >
                <animate 
                  attributeName="stroke-dashoffset" 
                  from="0" 
                  to="12" 
                  dur="1.5s" 
                  repeatCount="indefinite"
                />
              </line>
              <line 
                x1="340" y1="320" x2="200" y2="233" 
                stroke="rgba(20, 184, 166, 0.5)" 
                strokeWidth="1.5" 
                strokeDasharray="8,4"
              >
                <animate 
                  attributeName="stroke-dashoffset" 
                  from="0" 
                  to="12" 
                  dur="1.5s" 
                  repeatCount="indefinite"
                />
              </line>
              <line 
                x1="60" y1="320" x2="200" y2="233" 
                stroke="rgba(20, 184, 166, 0.5)" 
                strokeWidth="1.5" 
                strokeDasharray="8,4"
              >
                <animate 
                  attributeName="stroke-dashoffset" 
                  from="0" 
                  to="12" 
                  dur="1.5s" 
                  repeatCount="indefinite"
                />
              </line>
              
              {/* Corner circles and labels with 3D effect */}
              {/* Cost - Top */}
              <circle cx="203" cy="63" r="45" fill="rgba(0, 0, 0, 0.3)" stroke="none" />
              <circle cx="200" cy="60" r="45" fill="rgba(31, 41, 55, 0.95)" stroke="url(#strokeGradient)" strokeWidth="2" />
              <text x="200" y="68" textAnchor="middle" fill="rgb(20, 184, 166)" fontSize="18" fontWeight="bold">Cost</text>
              
              {/* Speed - Bottom Right */}
              <circle cx="343" cy="323" r="45" fill="rgba(0, 0, 0, 0.3)" stroke="none" />
              <circle cx="340" cy="320" r="45" fill="rgba(31, 41, 55, 0.95)" stroke="url(#strokeGradient)" strokeWidth="2" />
              <text x="340" y="328" textAnchor="middle" fill="rgb(20, 184, 166)" fontSize="18" fontWeight="bold">Speed</text>
              
              {/* Quality - Bottom Left */}
              <circle cx="63" cy="323" r="45" fill="rgba(0, 0, 0, 0.3)" stroke="none" />
              <circle cx="60" cy="320" r="45" fill="rgba(31, 41, 55, 0.95)" stroke="url(#strokeGradient)" strokeWidth="2" />
              <text x="60" y="328" textAnchor="middle" fill="rgb(20, 184, 166)" fontSize="18" fontWeight="bold">Quality</text>
              
              {/* Center - RapidEdge Solutions with 3D effect */}
              <circle cx="203" cy="236" r="60" fill="rgba(0, 0, 0, 0.3)" stroke="none" />
              <circle cx="200" cy="233" r="60" fill="rgba(20, 184, 166, 0.25)" stroke="url(#strokeGradient)" strokeWidth="3" />
              <text x="200" y="228" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">RapidEdge</text>
              <text x="200" y="248" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Solutions</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
