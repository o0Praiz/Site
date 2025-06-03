import React, { useState, useEffect, useRef } from 'react';
import { 
  Brain, 
  Code, 
  Database, 
  TrendingUp, 
  Award, 
  Users, 
  Coffee, 
  BookOpen,
  Zap,
  Target,
  Globe,
  Lightbulb,
  Download,
  ArrowRight
} from 'lucide-react';

const AboutSection = () => {
  const [activeSkill, setActiveSkill] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      name: "Machine Learning",
      icon: Brain,
      level: 95,
      description: "Deep expertise in ML algorithms, neural networks, and model optimization",
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"]
    },
    {
      name: "Data Science",
      icon: TrendingUp,
      level: 90,
      description: "Advanced analytics, statistical modeling, and data visualization",
      technologies: ["Python", "R", "Pandas", "Matplotlib"]
    },
    {
      name: "Software Development",
      icon: Code,
      level: 88,
      description: "Full-stack development with modern frameworks and best practices",
      technologies: ["React", "Node.js", "Python", "JavaScript"]
    },
    {
      name: "Database Management",
      icon: Database,
      level: 85,
      description: "Database design, optimization, and big data technologies",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Spark"]
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "AI Innovation Award",
      description: "Recognized for breakthrough work in automated sentiment analysis",
      year: "2023"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led cross-functional teams of 15+ engineers and data scientists",
      year: "2022"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "AI solutions deployed across 25+ countries, serving 1M+ users",
      year: "2023"
    },
    {
      icon: BookOpen,
      title: "Published Research",
      description: "5 peer-reviewed papers in top-tier AI and ML conferences",
      year: "2023"
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly exploring cutting-edge technologies and methodologies"
    },
    {
      icon: Target,
      title: "Impact",
      description: "Building solutions that create meaningful real-world change"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Fostering inclusive environments where diverse ideas thrive"
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "Committed to delivering high-quality, scalable solutions"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
              About Jesse
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate AI engineer with 5+ years of experience turning complex data into 
            intelligent solutions that drive business value and social impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Bio & Story */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            
            {/* Profile Image Placeholder */}
            <div className="relative mb-8">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="w-48 h-48 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">JH</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
                <Coffee className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Bio Text */}
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                My journey into AI began during my computer science studies, where I was fascinated 
                by the potential of machines to learn and adapt. What started as curiosity has evolved 
                into a career dedicated to pushing the boundaries of what's possible with artificial intelligence.
              </p>
              
              <p>
                Over the past five years, I've had the privilege of working on diverse projects ranging 
                from natural language processing systems that analyze millions of customer interactions 
                to computer vision models that enhance safety in autonomous vehicles.
              </p>
              
              <p>
                When I'm not coding or training models, you'll find me exploring the latest research papers, 
                contributing to open-source projects, or enjoying a good cup of coffee while brainstorming 
                the next big idea in AI.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-xl font-semibold border border-gray-200 hover:border-blue-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                <span>View Portfolio</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column - Skills & Expertise */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            
            {/* Skills Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Expertise</h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  const isActive = activeSkill === index;
                  
                  return (
                    <div
                      key={skill.name}
                      className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                        isActive 
                          ? 'bg-blue-50 border-blue-200 shadow-md' 
                          : 'bg-white border-gray-200 hover:border-blue-200 hover:shadow-sm'
                      }`}
                      onClick={() => setActiveSkill(index)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            isActive ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                          }`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <h4 className="font-semibold text-gray-900">{skill.name}</h4>
                        </div>
                        <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                      
                      {isActive && (
                        <div className="space-y-3 animate-fade-in">
                          <p className="text-sm text-gray-600">{skill.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {skill.technologies.map((tech) => (
                              <span 
                                key={tech}
                                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className={`mt-20 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Key Achievements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              
              return (
                <div 
                  key={achievement.title}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                  <span className="text-xs text-blue-600 font-medium">{achievement.year}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Values Section */}
        <div className={`mt-20 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Core Values</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              
              return (
                <div 
                  key={value.title}
                  className="text-center group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;