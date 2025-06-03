import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Cpu, Database, Brain, Code, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const roles = [
    'AI Engineer',
    'Machine Learning Specialist', 
    'Data Scientist',
    'Software Developer'
  ];

  const techStack = [
    { name: 'Python', icon: Code },
    { name: 'TensorFlow', icon: Brain },
    { name: 'PyTorch', icon: Cpu },
    { name: 'SQL', icon: Database }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const createFloatingElement = () => {
      const container = document.getElementById('floating-elements');
      if (!container) return;

      const element = document.createElement('div');
      element.className = 'absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-pulse';
      element.style.left = Math.random() * 100 + '%';
      element.style.top = Math.random() * 100 + '%';
      element.style.animationDelay = Math.random() * 2 + 's';
      element.style.animationDuration = (2 + Math.random() * 3) + 's';
      
      container.appendChild(element);
      
      setTimeout(() => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      }, 5000);
    };

    const floatingInterval = setInterval(createFloatingElement, 800);
    return () => clearInterval(floatingInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Floating Background Elements */}
      <div id="floating-elements" className="absolute inset-0 pointer-events-none"></div>
      
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-500 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-purple-500 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border border-indigo-500 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Main Greeting */}
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50 mb-6">
              <Sparkles className="w-4 h-4 text-yellow-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">Welcome to my AI portfolio</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Hi, I'm Jesse
              </span>
            </h1>
            
            <div className="h-16 sm:h-20 flex items-center justify-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700">
                <span className="inline-block">I'm an </span>
                <span className="relative inline-block">
                  <span 
                    key={currentRole}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in"
                  >
                    {roles[currentRole]}
                  </span>
                </span>
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl text-gray-600 leading-relaxed">
              Passionate about creating intelligent solutions that bridge the gap between 
              <span className="font-semibold text-blue-600"> cutting-edge AI technology</span> and 
              <span className="font-semibold text-purple-600"> real-world applications</span>. 
              Explore my journey through machine learning, data science, and innovative AI projects.
            </p>
          </div>

          {/* Tech Stack Icons */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            {techStack.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div 
                  key={tech.name}
                  className={`group transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-gray-700 group-hover:text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-600 mt-2 font-medium">{tech.name}</p>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <span>View My Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-xl shadow-lg border border-gray-200/50 hover:bg-gray-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Download Resume
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center space-y-2 text-gray-400 animate-bounce">
              <span className="text-sm font-medium">Explore More</span>
              <ChevronDown className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 -right-32 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;