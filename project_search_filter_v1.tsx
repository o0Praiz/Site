import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  X, 
  ChevronDown, 
  Grid, 
  List, 
  SortAsc, 
  SortDesc,
  Calendar,
  Star,
  Eye,
  Code,
  Brain,
  Database,
  Cpu,
  Zap
} from 'lucide-react';

const ProjectSearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedComplexity, setSelectedComplexity] = useState('All');
  const [selectedTechnology, setSelectedTechnology] = useState('All');
  const [sortBy, setSortBy] = useState('lastUpdated');
  const [sortOrder, setSortOrder] = useState('desc');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Sample project data
  const allProjects = [
    {
      id: 1,
      title: "AI-Powered Customer Sentiment Analysis",
      description: "Advanced NLP model that analyzes customer feedback and social media mentions to provide real-time sentiment insights for businesses. Uses transformer architecture for superior accuracy.",
      image: "/api/placeholder/400/240",
      tags: ["NLP", "Python", "TensorFlow", "React", "MongoDB", "Docker"],
      category: "Machine Learning",
      complexity: "Advanced",
      status: "Completed",
      stars: 42,
      views: 1200,
      lastUpdated: "2024-01-15",
      featured: true,
      technologies: ["Python", "TensorFlow", "React"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Computer Vision Object Detection",
      description: "Real-time object detection system using YOLO algorithm for autonomous vehicle navigation and safety applications. Processes 30+ FPS with 95% accuracy.",
      image: "/api/placeholder/400/240",
      tags: ["Computer Vision", "PyTorch", "OpenCV", "YOLO", "Python", "CUDA"],
      category: "Computer Vision",
      complexity: "Expert",
      status: "In Progress",
      stars: 28,
      views: 890,
      lastUpdated: "2024-01-20",
      featured: false,
      technologies: ["Python", "PyTorch", "OpenCV"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Predictive Analytics Dashboard",
      description: "Interactive dashboard for predicting market trends using ensemble machine learning models and real-time data streams. Features automated model retraining.",
      image: "/api/placeholder/400/240",
      tags: ["Data Science", "React", "D3.js", "Python", "Flask", "PostgreSQL"],
      category: "Data Analytics",
      complexity: "Intermediate",
      status: "Completed",
      stars: 35,
      views: 1580,
      lastUpdated: "2024-01-10",
      featured: false,
      technologies: ["Python", "React", "PostgreSQL"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Neural Network Chat Assistant",
      description: "Conversational AI assistant built with transformer models, capable of context-aware responses and multi-turn conversations.",
      image: "/api/placeholder/400/240",
      tags: ["NLP", "Transformers", "Python", "FastAPI", "Vector DB"],
      category: "Machine Learning",
      complexity: "Advanced",
      status: "Completed",
      stars: 67,
      views: 2100,
      lastUpdated: "2024-01-25",
      featured: true,
      technologies: ["Python", "TensorFlow"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Time Series Forecasting Model",
      description: "LSTM-based model for predicting stock prices and cryptocurrency trends with 85% accuracy over 30-day periods.",
      image: "/api/placeholder/400/240",
      tags: ["Time Series", "LSTM", "Python", "Pandas", "Scikit-learn"],
      category: "Data Analytics",
      complexity: "Intermediate",
      status: "Completed",
      stars: 23,
      views: 750,
      lastUpdated: "2024-01-05",
      featured: false,
      technologies: ["Python", "TensorFlow"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Recommendation Engine",
      description: "Collaborative filtering recommendation system for e-commerce platforms, improving user engagement by 40%.",
      image: "/api/placeholder/400/240",
      tags: ["Recommendation", "Python", "Spark", "Redis", "Flask"],
      category: "Machine Learning",
      complexity: "Beginner",
      status: "Completed",
      stars: 19,
      views: 540,
      lastUpdated: "2023-12-28",
      featured: false,
      technologies: ["Python", "Apache Spark"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  // Filter options
  const categories = ['All', 'Machine Learning', 'Computer Vision', 'Data Analytics', 'NLP'];
  const complexityLevels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];
  const technologies = ['All', 'Python', 'TensorFlow', 'React', 'PyTorch', 'PostgreSQL', 'Apache Spark', 'OpenCV'];
  const sortOptions = [
    { value: 'lastUpdated', label: 'Last Updated' },
    { value: 'stars', label: 'Stars' },
    { value: 'views', label: 'Views' },
    { value: 'title', label: 'Name' }
  ];

  // Filter and search logic
  const filteredProjects = useMemo(() => {
    let filtered = allProjects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesComplexity = selectedComplexity === 'All' || project.complexity === selectedComplexity;
      const matchesTechnology = selectedTechnology === 'All' || 
                               project.technologies.includes(selectedTechnology) ||
                               project.tags.includes(selectedTechnology);

      return matchesSearch && matchesCategory && matchesComplexity && matchesTechnology;
    });

    // Sort projects
    filtered.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];

      if (sortBy === 'lastUpdated') {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedComplexity, selectedTechnology, sortBy, sortOrder]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedComplexity('All');
    setSelectedTechnology('All');
    setSortBy('lastUpdated');
    setSortOrder('desc');
  };

  const getComplexityColor = (complexity) => {
    const colors = {
      'Beginner': 'bg-green-100 text-green-800',
      'Intermediate': 'bg-yellow-100 text-yellow-800',
      'Advanced': 'bg-orange-100 text-orange-800',
      'Expert': 'bg-red-100 text-red-800'
    };
    return colors[complexity] || 'bg-gray-100 text-gray-800';
  };

  const getTechnologyIcon = (tech) => {
    const icons = {
      'Python': Code,
      'TensorFlow': Brain,
      'React': Code,
      'PyTorch': Brain,
      'PostgreSQL': Database,
      'Apache Spark': Zap,
      'OpenCV': Eye
    };
    return icons[tech] || Code;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Search and Filter Header */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6 mb-8">
        
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search projects by name, description, or technology..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          
          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} />
          </button>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          {/* Sort Controls */}
          <div className="flex items-center space-x-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  Sort by {option.label}
                </option>
              ))}
            </select>
            
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
            >
              {sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
            </button>
          </div>

          {/* Results Count */}
          <div className="text-sm text-gray-600">
            {filteredProjects.length} of {allProjects.length} projects
          </div>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Complexity Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Complexity</label>
                <select
                  value={selectedComplexity}
                  onChange={(e) => setSelectedComplexity(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {complexityLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              {/* Technology Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Technology</label>
                <select
                  value={selectedTechnology}
                  onChange={(e) => setSelectedTechnology(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {technologies.map(tech => (
                    <option key={tech} value={tech}>{tech}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Clear Filters */}
            <button
              onClick={clearFilters}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Active Filters Display */}
      {(searchTerm || selectedCategory !== 'All' || selectedComplexity !== 'All' || selectedTechnology !== 'All') && (
        <div className="flex flex-wrap gap-2 mb-6">
          {searchTerm && (
            <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
              Search: "{searchTerm}"
              <button onClick={() => setSearchTerm('')} className="ml-2">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {selectedCategory !== 'All' && (
            <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
              Category: {selectedCategory}
              <button onClick={() => setSelectedCategory('All')} className="ml-2">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {selectedComplexity !== 'All' && (
            <span className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">
              Complexity: {selectedComplexity}
              <button onClick={() => setSelectedComplexity('All')} className="ml-2">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {selectedTechnology !== 'All' && (
            <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
              Tech: {selectedTechnology}
              <button onClick={() => setSelectedTechnology('All')} className="ml-2">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
        </div>
      )}

      {/* Projects Display */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search terms or filters</p>
          <button
            onClick={clearFilters}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} viewMode={viewMode} />
          ))}
        </div>
      )}
    </div>
  );
};

// Project Card Component for the filtered results
const ProjectCard = ({ project, viewMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getComplexityColor = (complexity) => {
    const colors = {
      'Beginner': 'bg-green-100 text-green-800',
      'Intermediate': 'bg-yellow-100 text-yellow-800',
      'Advanced': 'bg-orange-100 text-orange-800',
      'Expert': 'bg-red-100 text-red-800'
    };
    return colors[complexity] || 'bg-gray-100 text-gray-800';
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-200/50 p-6 hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-48 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden flex-shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200">
                {project.title}
              </h3>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getComplexityColor(project.complexity)}`}>
                {project.complexity}
              </span>
            </div>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 5).map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3" />
                  <span>{project.stars}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-3 h-3" />
                  <span>{project.views}</span>
                </div>
                <span>{new Date(project.lastUpdated).toLocaleDateString()}</span>
              </div>
              
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-md hover:bg-blue-200 transition-colors">
                  View Details
                </button>
                <button className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-md hover:bg-gray-200 transition-colors">
                  Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`group relative bg-white rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-blue-200 ${
        isHovered ? 'transform -translate-y-2' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {project.featured && (
        <div className="absolute top-4 left-4 z-20">
          <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            <Star className="w-3 h-3" />
            <span>Featured</span>
          </div>
        </div>
      )}

      <div className="absolute top-4 right-4 z-20">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getComplexityColor(project.complexity)}`}>
          {project.complexity}
        </span>
      </div>

      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md hover:bg-gray-200 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>

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
          </div>
          
          <div className="flex items-center space-x-1 text-xs text-gray-500">
            <Calendar className="w-3 h-3" />
            <span>{new Date(project.lastUpdated).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSearchFilter;