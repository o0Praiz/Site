import React, { useState, useEffect } from 'react';
import { 
  Star, 
  StarHalf, 
  Quote, 
  Filter, 
  Search, 
  ChevronLeft, 
  ChevronRight,
  Calendar,
  Building2,
  MapPin,
  TrendingUp,
  Award,
  CheckCircle,
  ExternalLink,
  Play,
  Pause,
  RotateCw,
  Eye,
  Heart,
  Share2,
  ThumbsUp,
  MessageSquare,
  Users,
  Globe,
  ShieldCheck,
  Video,
  FileText,
  BarChart3
} from 'lucide-react';

const AdvancedTestimonialsSystem = () => {
  const [activeView, setActiveView] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [sortBy, setSortBy] = useState('rating');

  // Comprehensive testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      company: "DataFlow Analytics",
      industry: "FinTech",
      location: "San Francisco, CA",
      projectType: "Fraud Detection System",
      rating: 5,
      date: "2024-01-15",
      verified: true,
      featured: true,
      projectValue: "$2.4M",
      roi: "340%",
      avatar: "/api/placeholder/80/80",
      companyLogo: "/api/placeholder/120/60",
      testimonial: "Jesse's fraud detection system transformed our security posture completely. The AI model he developed processes over 100,000 transactions per minute with 99.1% accuracy, preventing $2.4M in potential fraud annually. What impressed us most was his ability to understand our business requirements and translate them into technical solutions that actually work in production.",
      shortQuote: "Transformed our security posture with 99.1% accuracy fraud detection.",
      metrics: [
        { label: "Fraud Prevented", value: "$2.4M", change: "+340%" },
        { label: "Accuracy Rate", value: "99.1%", change: "+12%" },
        { label: "Processing Speed", value: "100K/min", change: "+250%" }
      ],
      tags: ["Machine Learning", "Real-time Processing", "Financial Services"],
      videoUrl: "https://example.com/testimonial-video-1",
      caseStudyUrl: "https://example.com/case-study-1",
      linkedInUrl: "https://linkedin.com/in/sarahchen"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Head of Product",
      company: "TechFlow Solutions",
      industry: "Enterprise Software",
      location: "New York, NY",
      projectType: "Document Processing AI",
      rating: 5,
      date: "2023-12-20",
      verified: true,
      featured: true,
      projectValue: "$180K",
      roi: "285%",
      avatar: "/api/placeholder/80/80",
      companyLogo: "/api/placeholder/120/60",
      testimonial: "Working with Jesse on our document processing system was exceptional. He built an AI solution that handles 50,000+ documents monthly with 94% accuracy, reducing our processing time from 8 minutes to 45 seconds per document. The ROI was immediate - we saved $180K in the first year alone.",
      shortQuote: "94% accuracy document processing, $180K saved in first year.",
      metrics: [
        { label: "Time Reduction", value: "85%", change: "-85%" },
        { label: "Accuracy Rate", value: "94%", change: "+30%" },
        { label: "Cost Savings", value: "$180K", change: "-60%" }
      ],
      tags: ["Computer Vision", "NLP", "Document Processing"],
      videoUrl: null,
      caseStudyUrl: "https://example.com/case-study-2",
      linkedInUrl: "https://linkedin.com/in/michaelrodriguez"
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      role: "VP of Innovation",
      company: "MedTech Innovations",
      industry: "Healthcare",
      location: "Boston, MA",
      projectType: "Predictive Analytics Platform",
      rating: 5,
      date: "2023-11-10",
      verified: true,
      featured: false,
      projectValue: "$450K",
      roi: "220%",
      avatar: "/api/placeholder/80/80",
      companyLogo: "/api/placeholder/120/60",
      testimonial: "Jesse's predictive analytics platform revolutionized our patient care approach. The AI system accurately predicts patient outcomes 87% of the time, enabling proactive interventions that have improved patient satisfaction by 34% and reduced readmission rates by 28%.",
      shortQuote: "87% accurate predictions, 34% improvement in patient satisfaction.",
      metrics: [
        { label: "Prediction Accuracy", value: "87%", change: "+87%" },
        { label: "Patient Satisfaction", value: "+34%", change: "+34%" },
        { label: "Readmission Reduction", value: "28%", change: "-28%" }
      ],
      tags: ["Healthcare AI", "Predictive Analytics", "Patient Care"],
      videoUrl: "https://example.com/testimonial-video-3",
      caseStudyUrl: "https://example.com/case-study-3",
      linkedInUrl: "https://linkedin.com/in/emilywatson"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Operations Director",
      company: "Manufacturing Plus",
      industry: "Manufacturing",
      location: "Detroit, MI",
      projectType: "Quality Control Vision System",
      rating: 4.5,
      date: "2023-09-15",
      verified: true,
      featured: false,
      projectValue: "$320K",
      roi: "240%",
      avatar: "/api/placeholder/80/80",
      companyLogo: "/api/placeholder/120/60",
      testimonial: "The computer vision quality control system Jesse developed has been a game-changer for our manufacturing line. We now catch 99.2% of defects in real-time, processing 500+ items per minute. Quality costs dropped by 55% while customer satisfaction soared.",
      shortQuote: "99.2% defect detection, 55% quality cost reduction.",
      metrics: [
        { label: "Defect Detection", value: "99.2%", change: "+15%" },
        { label: "Processing Speed", value: "500/min", change: "+250%" },
        { label: "Cost Reduction", value: "55%", change: "-55%" }
      ],
      tags: ["Computer Vision", "Quality Control", "Manufacturing"],
      videoUrl: null,
      caseStudyUrl: "https://example.com/case-study-4",
      linkedInUrl: "https://linkedin.com/in/davidkim"
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Chief Marketing Officer",
      company: "Global Media Corp",
      industry: "Media & Entertainment",
      location: "Los Angeles, CA",
      projectType: "Content Recommendation Engine",
      rating: 4.5,
      date: "2023-08-20",
      verified: true,
      featured: false,
      projectValue: "$280K",
      roi: "165%",
      avatar: "/api/placeholder/80/80",
      companyLogo: "/api/placeholder/120/60",
      testimonial: "Jesse's multi-language recommendation engine transformed our global reach. User engagement increased by 78% across 12 languages, and our international user retention improved by 34%. The system understands cultural preferences remarkably well.",
      shortQuote: "78% engagement increase across 12 languages.",
      metrics: [
        { label: "User Engagement", value: "+78%", change: "+78%" },
        { label: "Content Discovery", value: "+120%", change: "+120%" },
        { label: "User Retention", value: "+34%", change: "+34%" }
      ],
      tags: ["Recommendation Systems", "Multi-language", "Global Scale"],
      videoUrl: "https://example.com/testimonial-video-5",
      caseStudyUrl: "https://example.com/case-study-5",
      linkedInUrl: "https://linkedin.com/in/lisapark"
    },
    {
      id: 6,
      name: "Robert Thompson",
      role: "Founder & CEO",
      company: "AI Startup Hub",
      industry: "Technology",
      location: "Austin, TX",
      projectType: "AI Strategy Consultation",
      rating: 5,
      date: "2023-07-05",
      verified: true,
      featured: false,
      projectValue: "$50K",
      roi: "400%",
      avatar: "/api/placeholder/80/80",
      companyLogo: "/api/placeholder/120/60",
      testimonial: "Jesse's strategic guidance was invaluable in shaping our AI roadmap. His consultation helped us avoid costly mistakes and focus on solutions with real business impact. Our AI initiatives now generate 400% ROI thanks to his strategic insights.",
      shortQuote: "Strategic guidance leading to 400% ROI on AI initiatives.",
      metrics: [
        { label: "ROI Generated", value: "400%", change: "+400%" },
        { label: "Implementation Time", value: "-60%", change: "-60%" },
        { label: "Success Rate", value: "95%", change: "+95%" }
      ],
      tags: ["AI Strategy", "Business Consulting", "ROI Optimization"],
      videoUrl: null,
      caseStudyUrl: "https://example.com/case-study-6",
      linkedInUrl: "https://linkedin.com/in/robertthompson"
    }
  ];

  const categories = ['all', 'FinTech', 'Enterprise Software', 'Healthcare', 'Manufacturing', 'Media & Entertainment', 'Technology'];
  const industries = [...new Set(testimonials.map(t => t.industry))];

  // Filter testimonials
  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesCategory = selectedCategory === 'all' || testimonial.industry === selectedCategory;
    const matchesSearch = testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.testimonial.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Sort testimonials
  const sortedTestimonials = [...filteredTestimonials].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'date':
        return new Date(b.date) - new Date(a.date);
      case 'company':
        return a.company.localeCompare(b.company);
      case 'roi':
        return parseInt(b.roi) - parseInt(a.roi);
      default:
        return 0;
    }
  });

  const featuredTestimonials = testimonials.filter(t => t.featured);

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlay && featuredTestimonials.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredTestimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, featuredTestimonials.length]);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  const calculateStats = () => {
    const totalTestimonials = testimonials.length;
    const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / totalTestimonials;
    const totalValue = testimonials.reduce((sum, t) => sum + parseInt(t.projectValue.replace(/[$K,M]/g, '')) * (t.projectValue.includes('M') ? 1000 : 1), 0);
    const averageROI = testimonials.reduce((sum, t) => sum + parseInt(t.roi), 0) / totalTestimonials;

    return {
      totalTestimonials,
      averageRating: averageRating.toFixed(1),
      totalValue: `$${totalValue}K+`,
      averageROI: `${averageROI.toFixed(0)}%`
    };
  };

  const stats = calculateStats();

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Client Success Stories
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how AI solutions have transformed businesses across industries, 
          delivering measurable results and driving innovation.
        </p>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-blue-900 mb-1">{stats.totalTestimonials}+</div>
          <div className="text-sm text-blue-700">Happy Clients</div>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl border border-yellow-200">
          <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Star className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-yellow-900 mb-1">{stats.averageRating}</div>
          <div className="text-sm text-yellow-700">Average Rating</div>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-green-900 mb-1">{stats.averageROI}</div>
          <div className="text-sm text-green-700">Average ROI</div>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
          <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Award className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-purple-900 mb-1">{stats.totalValue}</div>
          <div className="text-sm text-purple-700">Project Value</div>
        </div>
      </div>

      {/* Featured Testimonials Carousel */}
      <div className="bg-gradient-to-br from-gray-900 to-slate-900 rounded-2xl shadow-2xl overflow-hidden">
        <div className="relative">
          {featuredTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* Left Side - Content */}
                <div className="p-8 lg:p-12 text-white">
                  <div className="flex items-center space-x-2 mb-6">
                    <Quote className="w-8 h-8 text-blue-400" />
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured Success
                    </span>
                  </div>
                  
                  <blockquote className="text-lg lg:text-xl font-medium leading-relaxed mb-6">
                    "{testimonial.testimonial}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-2 border-blue-400"
                    />
                    <div>
                      <div className="font-semibold text-lg">{testimonial.name}</div>
                      <div className="text-blue-300">{testimonial.role}</div>
                      <div className="text-gray-400">{testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-1">
                      {renderStars(testimonial.rating)}
                      <span className="ml-2 text-yellow-400 font-semibold">
                        {testimonial.rating}/5
                      </span>
                    </div>
                    {testimonial.verified && (
                      <div className="flex items-center space-x-1 text-green-400">
                        <ShieldCheck className="w-4 h-4" />
                        <span className="text-sm">Verified</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Side - Metrics */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 lg:p-12">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">Project Impact</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{testimonial.projectValue}</div>
                      <div className="text-blue-200 text-sm">Project Value</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    {testimonial.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-medium">{metric.label}</span>
                          <span className={`font-bold ${
                            metric.change.startsWith('+') ? 'text-green-300' : 
                            metric.change.startsWith('-') ? 'text-red-300' : 'text-white'
                          }`}>
                            {metric.change}
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-white">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    {testimonial.videoUrl && (
                      <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors">
                        <Video className="w-4 h-4" />
                        <span className="text-sm">Watch Video</span>
                      </button>
                    )}
                    <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors">
                      <FileText className="w-4 h-4" />
                      <span className="text-sm">Case Study</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Carousel Controls */}
          <div className="absolute bottom-6 left-6 flex items-center space-x-4">
            <button
              onClick={() => setCurrentSlide((prev) => 
                prev === 0 ? featuredTestimonials.length - 1 : prev - 1
              )}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex space-x-2">
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={() => setCurrentSlide((prev) => 
                prev === featuredTestimonials.length - 1 ? 0 : prev + 1
              )}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search testimonials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Industries' : category}
                  </option>
                ))}
              </select>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="rating">Sort by Rating</option>
              <option value="date">Sort by Date</option>
              <option value="company">Sort by Company</option>
              <option value="roi">Sort by ROI</option>
            </select>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setActiveView('grid')}
                className={`p-2 rounded-lg ${
                  activeView === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveView('list')}
                className={`p-2 rounded-lg ${
                  activeView === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FileText className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Active Filters */}
        {(selectedCategory !== 'all' || searchTerm) && (
          <div className="mt-4 flex items-center space-x-2">
            <span className="text-sm text-gray-600">Active filters:</span>
            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                {selectedCategory}
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="ml-1 hover:text-blue-600"
                >
                  ×
                </button>
              </span>
            )}
            {searchTerm && (
              <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                Search: "{searchTerm}"
                <button
                  onClick={() => setSearchTerm('')}
                  className="ml-1 hover:text-green-600"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Testimonials Grid/List */}
      <div className={`${
        activeView === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
          : 'space-y-6'
      }`}>
        {sortedTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 ${
              activeView === 'list' ? 'flex' : ''
            }`}
          >
            {activeView === 'grid' ? (
              // Grid View
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center space-x-1 text-green-600">
                      <ShieldCheck className="w-4 h-4" />
                      <span className="text-xs">Verified</span>
                    </div>
                  )}
                </div>

                <blockquote className="text-gray-700 mb-4 line-clamp-4">
                  "{testimonial.shortQuote}"
                </blockquote>

                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{testimonial.industry}</span>
                  <span>{new Date(testimonial.date).toLocaleDateString()}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <div className="font-bold text-blue-600">{testimonial.projectValue}</div>
                    <div className="text-xs text-blue-500">Project Value</div>
                  </div>
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <div className="font-bold text-green-600">{testimonial.roi}</div>
                    <div className="text-xs text-green-500">ROI</div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedTestimonial(testimonial)}
                    className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                  >
                    Read Full Story
                  </button>
                  {testimonial.caseStudyUrl && (
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <ExternalLink className="w-4 h-4 text-gray-600" />
                    </button>
                  )}
                </div>
              </div>
            ) : (
              // List View
              <>
                <div className="w-24 h-24 flex-shrink-0 bg-gray-100 flex items-center justify-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 mb-3 line-clamp-2">
                    "{testimonial.shortQuote}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{testimonial.industry}</span>
                      <span>{testimonial.projectValue} value</span>
                      <span>{testimonial.roi} ROI</span>
                    </div>
                    <button
                      onClick={() => setSelectedTestimonial(testimonial)}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Detailed Testimonial Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Client Success Story</h2>
                <button
                  onClick={() => setSelectedTestimonial(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Detailed content would go here */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={selectedTestimonial.avatar}
                    alt={selectedTestimonial.name}
                    className="w-20 h-20 rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{selectedTestimonial.name}</h3>
                    <p className="text-gray-600">{selectedTestimonial.role}</p>
                    <p className="text-gray-500">{selectedTestimonial.company}</p>
                  </div>
                </div>
                
                <blockquote className="text-lg text-gray-700 leading-relaxed">
                  "{selectedTestimonial.testimonial}"
                </blockquote>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedTestimonial.metrics.map((metric, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                      <div className={`text-sm font-medium ${
                        metric.change.startsWith('+') ? 'text-green-600' : 
                        metric.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'
                      }`}>
                        {metric.change}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* No Results */}
      {sortedTestimonials.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No testimonials found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search terms or filters</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default AdvancedTestimonialsSystem;