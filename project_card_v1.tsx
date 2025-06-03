import React, { useState } from 'react';
import { Github, ExternalLink, Play, Star, Eye, GitBranch, Calendar, Tag } from 'lucide-react';

const ProjectCard = ({ 
  project = {
    id: 1,
    title: "AI-Powered Customer Sentiment Analysis",
    description: "Advanced NLP model that analyzes customer feedback and social media mentions to provide real-time sentiment insights for businesses.",
    image: "/api/placeholder/400/240",
    tags: ["NLP", "Python", "TensorFlow", "React", "MongoDB"],
    category: "Machine Learning",
    status: "Completed",
    demoUrl: "#",
    githubUrl: "#",
    stars: 42,
    views: 1200,
    lastUpdated: "2024-01-15",
    complexity: "Advanced",
    featured: true
  }
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getStatusColor = (status) => {
    const colors = {
      'Completed': 'bg-green-100 text-green-800 border-green-200',
      'In Progress': 'bg-blue-100 text-blue-800 border-blue-200',
      'Planning': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Archived': 'bg-gray-100 text-gray-800 border-gray-200'
    };
    return colors[status] || colors['Completed'];
  };

  const getComplexityColor = (complexity) => {
    const colors = {
      'Beginner': 'bg-green-500',
      'Intermediate': 'bg-yellow-500',
      'Advanced': 'bg-red-500',
      'Expert': 'bg-purple-500'
    };
    return colors[complexity] || colors['Intermediate'];
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div 
      className={`group relative bg-white rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-blue-200 ${
        isHovered ? 'transform -translate-y-2' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-20">
          <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            <Star className="w-3 h-3" />
            <span>Featured</span>
          </div>
        </div>
      )}

      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-20">
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
          {project.status}
        </span>
      </div>

      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Image Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* Action Buttons */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            <div className="flex space-x-2">
              {project.demoUrl && (
                <button className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-2 rounded-lg font-medium hover:bg-white transition-all duration-200 transform hover:scale-105">
                  <Play className="w-4 h-4" />
                  <span className="text-sm">Demo</span>
                </button>
              )}
              {project.githubUrl && (
                <button className="flex items-center space-x-1 bg-gray-800/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 transform hover:scale-105">
                  <Github className="w-4 h-4" />
                  <span className="text-sm">Code</span>
                </button>
              )}
            </div>
            
            <button className="bg-blue-600/90 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-blue-600 transition-all duration-200 transform hover:scale-105">
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Category & Complexity */}
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg border border-blue-200">
            <Tag className="w-3 h-3 mr-1" />
            {project.category}
          </span>
          <div className="flex items-center space-x-1">
            <div className={`w-2 h-2 rounded-full ${getComplexityColor(project.complexity)}`}></div>
            <span className="text-xs text-gray-500">{project.complexity}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md hover:bg-gray-200 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-md">
              +{project.tags.length - 4} more
            </span>
          )}
        </div>

        {/* Project Stats */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3" />
              <span>{project.stars}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="w-3 h-3" />
              <span>{project.views}</span>
            </div>
            <div className="flex items-center space-x-1">
              <GitBranch className="w-3 h-3" />
              <span>Main</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 text-xs text-gray-500">
            <Calendar className="w-3 h-3" />
            <span>{formatDate(project.lastUpdated)}</span>
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
    </div>
  );
};

// Demo component showing multiple project cards
const ProjectShowcase = () => {
  const sampleProjects = [
    {
      id: 1,
      title: "AI-Powered Customer Sentiment Analysis",
      description: "Advanced NLP model that analyzes customer feedback and social media mentions to provide real-time sentiment insights for businesses.",
      image: "/api/placeholder/400/240",
      tags: ["NLP", "Python", "TensorFlow", "React", "MongoDB"],
      category: "Machine Learning",
      status: "Completed",
      demoUrl: "#",
      githubUrl: "#",
      stars: 42,
      views: 1200,
      lastUpdated: "2024-01-15",
      complexity: "Advanced",
      featured: true
    },
    {
      id: 2,
      title: "Computer Vision Object Detection",
      description: "Real-time object detection system using YOLO algorithm for autonomous vehicle navigation and safety applications.",
      image: "/api/placeholder/400/240",
      tags: ["Computer Vision", "PyTorch", "OpenCV", "YOLO", "Python"],
      category: "Computer Vision",
      status: "In Progress",
      demoUrl: "#",
      githubUrl: "#",
      stars: 28,
      views: 890,
      lastUpdated: "2024-01-20",
      complexity: "Expert",
      featured: false
    },
    {
      id: 3,
      title: "Predictive Analytics Dashboard",
      description: "Interactive dashboard for predicting market trends using ensemble machine learning models and real-time data streams.",
      image: "/api/placeholder/400/240",
      tags: ["Data Science", "React", "D3.js", "Python", "Flask"],
      category: "Data Analytics",
      status: "Completed",
      demoUrl: "#",
      githubUrl: "#",
      stars: 35,
      views: 1580,
      lastUpdated: "2024-01-10",
      complexity: "Intermediate",
      featured: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;