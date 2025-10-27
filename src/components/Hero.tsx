import React from 'react';
import { ArrowRight, Zap, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* PCB Background with Traces and Vias */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Pattern 1: Top-left - horizontal → diagonal → via */}
        <div className="absolute top-20 left-10">
          <div className="w-24 h-1 bg-teal-500/20 blur-sm animate-brightness-pulse"></div>
          <div className="absolute top-0 left-24 w-16 h-1 bg-teal-400/20 blur-sm rotate-45 origin-left animate-brightness-pulse [animation-delay:200ms]"></div>
          <div className="absolute top-[-4px] left-[135px] w-2 h-2 bg-teal-400/30 rounded-full blur-sm animate-brightness-pulse [animation-delay:400ms]"></div>
        </div>

        {/* Pattern 2: Bottom-right - vertical → diagonal → horizontal */}
        <div className="absolute bottom-32 right-20">
          <div className="w-1 h-32 bg-green-500/20 blur-sm animate-brightness-pulse [animation-delay:300ms]"></div>
          <div className="absolute bottom-0 left-0 w-20 h-1 bg-green-400/20 blur-sm -rotate-45 origin-left animate-brightness-pulse [animation-delay:500ms]"></div>
          <div className="absolute bottom-[-4px] left-[56px] w-28 h-1 bg-green-500/20 blur-sm animate-brightness-pulse [animation-delay:700ms]"></div>
        </div>

        {/* Pattern 3: Top-right - diagonal → horizontal → via */}
        <div className="absolute top-40 right-32">
          <div className="w-20 h-1 bg-teal-600/20 blur-sm rotate-45 animate-brightness-pulse [animation-delay:100ms]"></div>
          <div className="absolute top-[-4px] left-[56px] w-24 h-1 bg-teal-500/20 blur-sm animate-brightness-pulse [animation-delay:300ms]"></div>
          <div className="absolute top-[-6px] left-[150px] w-3 h-3 bg-teal-400/30 rounded-full blur-sm animate-brightness-pulse [animation-delay:500ms]"></div>
        </div>

        {/* Pattern 4: Center-left - horizontal → diagonal → vertical */}
        <div className="absolute top-1/2 left-32 -translate-y-1/2">
          <div className="w-20 h-1 bg-green-600/20 blur-sm animate-brightness-pulse [animation-delay:400ms]"></div>
          <div className="absolute top-0 left-20 w-16 h-1 bg-green-500/20 blur-sm rotate-45 origin-left animate-brightness-pulse [animation-delay:600ms]"></div>
          <div className="absolute top-[11px] left-[31px] w-1 h-24 bg-green-400/20 blur-sm animate-brightness-pulse [animation-delay:800ms]"></div>
        </div>

        {/* Pattern 5: Bottom-left - via → diagonal → horizontal */}
        <div className="absolute bottom-40 left-[20%]">
          <div className="w-2 h-2 bg-teal-500/30 rounded-full blur-sm animate-brightness-pulse [animation-delay:200ms]"></div>
          <div className="absolute top-0 left-2 w-20 h-1 bg-teal-400/20 blur-sm -rotate-45 origin-left animate-brightness-pulse [animation-delay:400ms]"></div>
          <div className="absolute top-[14px] left-[16px] w-32 h-1 bg-teal-500/20 blur-sm animate-brightness-pulse [animation-delay:600ms]"></div>
        </div>

        {/* Pattern 6: Center-right - vertical → diagonal → via */}
        <div className="absolute top-[40%] right-[15%]">
          <div className="w-1 h-28 bg-green-500/20 blur-sm animate-brightness-pulse [animation-delay:500ms]"></div>
          <div className="absolute bottom-0 left-0 w-16 h-1 bg-green-400/20 blur-sm rotate-45 origin-left animate-brightness-pulse [animation-delay:700ms]"></div>
          <div className="absolute bottom-[-5px] left-[46px] w-2.5 h-2.5 bg-green-400/30 rounded-full blur-sm animate-brightness-pulse [animation-delay:900ms]"></div>
        </div>
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
