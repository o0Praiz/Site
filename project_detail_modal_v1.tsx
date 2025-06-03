import React, { useState, useEffect } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Play, 
  Star, 
  Eye, 
  Calendar, 
  Clock, 
  Users, 
  Award,
  Code,
  Database,
  Brain,
  Zap,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
  Bookmark,
  Tag
} from 'lucide-react';

const ProjectDetailModal = ({ project, isOpen, onClose, onNavigate }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  // Sample detailed project data
  const detailedProject = {
    ...project,
    images: [
      "/api/placeholder/800/450",
      "/api/placeholder/800/450", 
      "/api/placeholder/800/450",
      "/api/placeholder/800/450"
    ],
    overview: "This advanced sentiment analysis system leverages state-of-the-art transformer architecture to analyze customer feedback across multiple channels. The system processes over 10,000 reviews per hour with 94% accuracy, providing real-time insights that help businesses understand customer sentiment at scale.",
    challenge: "Traditional sentiment analysis tools struggled with context, sarcasm, and domain-specific language. Businesses needed a solution that could understand nuanced customer feedback across different industries and communication styles.",
    solution: "Built a custom transformer model trained on industry-specific datasets, implementing attention mechanisms for context understanding and multi-task learning for improved accuracy across different sentiment dimensions.",
    results: [
      { metric: "Accuracy Improvement", value: "94%", description: "vs 78% baseline" },
      { metric: "Processing Speed", value: "10K+", description: "reviews/hour" },
      { metric: "Client Satisfaction", value: "98%", description: "retention rate" },
      { metric: "Cost Reduction", value: "60%", description: "vs manual analysis" }
    ],
    techStack: [
      { name: "Python", category: "Language", icon: Code },
      { name: "TensorFlow", category: "ML Framework", icon: Brain },
      { name: "BERT", category: "Model", icon: Brain },
      { name: "FastAPI", category: "Backend", icon: Zap },
      { name: "React", category: "Frontend", icon: Code },
      { name: "PostgreSQL", category: "Database", icon: Database },
      { name: "Docker", category: "DevOps", icon: Code },
      { name: "AWS", category: "Cloud", icon: Zap }
    ],
    features: [
      "Real-time sentiment analysis",
      "Multi-language support (12 languages)",
      "Custom model training pipeline",
      "Interactive dashboard with visualizations",
      "API integration for third-party platforms",
      "Automated reporting and alerts",
      "Batch processing capabilities",
      "Advanced analytics and insights"
    ],
    timeline: [
      { phase: "Research & Planning", duration: "2 weeks", status: "completed" },
      { phase: "Data Collection & Preprocessing", duration: "3 weeks", status: "completed" },
      { phase: "Model Development & Training", duration: "4 weeks", status: "completed" },
      { phase: "Frontend Development", duration: "3 weeks", status: "completed" },
      { phase: "Testing & Optimization", duration: "2 weeks", status: "completed" },
      { phase: "Deployment & Monitoring", duration: "1 week", status: "completed" }
    ],
    team: [
      { role: "Lead AI Engineer", name: "Jesse A. Hawkins" },
      { role: "Data Scientist", name: "Sarah Chen" },
      { role: "Frontend Developer", name: "Mike Rodriguez" },
      { role: "DevOps Engineer", name: "Alex Kim" }
    ],
    testimonial: {
      text: "Jesse's sentiment analysis solution transformed how we understand our customers. The accuracy and speed improvements were beyond our expectations.",
      author: "David Thompson",
      role: "Head of Product Analytics",
      company: "TechCorp Solutions"
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % detailedProject.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + detailedProject.images.length) % detailedProject.images.length);
  };

  const getComplexityColor = (complexity) => {
    const colors = {
      'Beginner': 'bg-green-100 text-green-800 border-green-200',
      'Intermediate': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Advanced': 'bg-orange-100 text-orange-800 border-orange-200',
      'Expert': 'bg-red-100 text-red-800 border-red-200'
    };
    return colors[complexity] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'technical', label: 'Technical Details' },
    { id: 'results', label: 'Results & Impact' },
    { id: 'team', label: 'Team & Process' }
  ];

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-full max-h-[90vh] overflow-hidden">
          
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 text-sm font-medium rounded-full border ${getComplexityColor(detailedProject.complexity)}`}>
                  {detailedProject.complexity}
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full border border-blue-200">
                  {detailedProject.category}
                </span>
                {detailedProject.featured && (
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full border border-yellow-200 flex items-center space-x-1">
                    <Star className="w-3 h-3" />
                    <span>Featured</span>
                  </span>
                )}
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Bookmark className="w-5 h-5" />
              </button>
              <button 
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex h-full overflow-hidden">
            
            {/* Left Column - Images */}
            <div className="w-1/2 p-6">
              <div className="relative h-full">
                
                {/* Main Image */}
                <div className="relative h-64 mb-4 bg-gray-100 rounded-xl overflow-hidden">
                  <img
                    src={detailedProject.images[activeImageIndex]}
                    alt={`${detailedProject.title} - Image ${activeImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  {detailedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5 text-gray-700" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                      >
                        <ChevronRight className="w-5 h-5 text-gray-700" />
                      </button>
                    </>
                  )}
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded-lg text-sm">
                    {activeImageIndex + 1} / {detailedProject.images.length}
                  </div>
                </div>

                {/* Thumbnail Strip */}
                <div className="flex space-x-2 mb-6">
                  {detailedProject.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        index === activeImageIndex ? 'border-blue-500' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors">
                    <Play className="w-4 h-4" />
                    <span>Live Demo</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 bg-gray-800 text-white px-4 py-3 rounded-xl font-medium hover:bg-gray-900 transition-colors">
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-3 rounded-xl font-medium hover:bg-green-700 transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Case Study</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 bg-purple-600 text-white px-4 py-3 rounded-xl font-medium hover:bg-purple-700 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Site</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="w-1/2 border-l border-gray-200 flex flex-col">
              
              {/* Project Title & Stats */}
              <div className="p-6 border-b border-gray-200">
                <h1 className="text-2xl font-bold text-gray-900 mb-3">{detailedProject.title}</h1>
                
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>{detailedProject.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{detailedProject.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(detailedProject.lastUpdated).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>6 months</span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">{detailedProject.description}</p>
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-200">
                <div className="flex space-x-6 px-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-3 text-sm font-medium border-b-2 transition-colors ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="flex-1 overflow-y-auto p-6">
                
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Overview</h3>
                      <p className="text-gray-600 leading-relaxed">{detailedProject.overview}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">The Challenge</h3>
                      <p className="text-gray-600 leading-relaxed">{detailedProject.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Solution</h3>
                      <p className="text-gray-600 leading-relaxed">{detailedProject.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {detailedProject.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Technical Details Tab */}
                {activeTab === 'technical' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Technology Stack</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {detailedProject.techStack.map((tech, index) => {
                          const IconComponent = tech.icon;
                          return (
                            <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                              <IconComponent className="w-5 h-5 text-blue-600" />
                              <div>
                                <div className="font-medium text-gray-900">{tech.name}</div>
                                <div className="text-sm text-gray-500">{tech.category}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Architecture Highlights</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                          <h4 className="font-medium text-blue-900">Model Architecture</h4>
                          <p className="text-sm text-blue-700 mt-1">Custom transformer-based architecture with attention mechanisms for context understanding</p>
                        </div>
                        <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                          <h4 className="font-medium text-green-900">Data Pipeline</h4>
                          <p className="text-sm text-green-700 mt-1">Automated ETL pipeline with real-time processing capabilities</p>
                        </div>
                        <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                          <h4 className="font-medium text-purple-900">Deployment</h4>
                          <p className="text-sm text-purple-700 mt-1">Containerized microservices with auto-scaling on AWS</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Results Tab */}
                {activeTab === 'results' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {detailedProject.results.map((result, index) => (
                          <div key={index} className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                            <div className="text-2xl font-bold text-blue-600 mb-1">{result.value}</div>
                            <div className="text-sm font-medium text-gray-900 mb-1">{result.metric}</div>
                            <div className="text-xs text-gray-500">{result.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Client Testimonial</h3>
                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <p className="text-gray-700 italic mb-3">"{detailedProject.testimonial.text}"</p>
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold">
                              {detailedProject.testimonial.author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{detailedProject.testimonial.author}</div>
                            <div className="text-sm text-gray-500">{detailedProject.testimonial.role}, {detailedProject.testimonial.company}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Team Tab */}
                {activeTab === 'team' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Timeline</h3>
                      <div className="space-y-3">
                        {detailedProject.timeline.map((phase, index) => (
                          <div key={index} className="flex items-center space-x-4">
                            <div className={`w-3 h-3 rounded-full ${phase.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-gray-900">{phase.phase}</span>
                                <span className="text-sm text-gray-500">{phase.duration}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Team Members</h3>
                      <div className="space-y-3">
                        {detailedProject.team.map((member, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                              <span className="text-white font-semibold text-sm">
                                {member.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{member.name}</div>
                              <div className="text-sm text-gray-500">{member.role}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;