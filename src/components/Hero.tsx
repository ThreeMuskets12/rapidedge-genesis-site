import React from 'react';
import { ArrowRight, Zap, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-500/10 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-[36rem] h-[36rem] rounded-full opacity-70 animate-pulse delay-1000 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, hsl(var(--primary) / 0.18) 0%, transparent 60%)' }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Animated Icons */}
          <div className="flex justify-center mb-8 space-x-8">
            <div className="p-3 bg-teal-500/20 rounded-full animate-bounce-few [animation-delay:100ms]">
              <Zap className="w-8 h-8 text-teal-400" />
            </div>
            <div className="p-3 bg-green-500/20 rounded-full animate-bounce-few [animation-delay:300ms]">
              <Cpu className="w-8 h-8 text-green-400" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-teal-400 via-green-500 to-teal-600 bg-clip-text text-transparent">
              RapidEdge
            </span>
            <br />
            <span className="text-white">Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in delay-200">
            <em>Faster</em> Engineered Solutions Done <em>Right the First Time</em>
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-[46rem] mx-auto animate-fade-in delay-300">
            Save time and money by eliminating overhead from inter-disciplinary work. Mechanical, electrical, and software, done right - <strong>all under one roof</strong>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-gradient-to-r from-teal-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 flex items-center gap-2"
            >
              Get A Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-teal-400 text-teal-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-teal-400 hover:text-gray-900 hover:scale-105"
            >
              View Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-few">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
