import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight, 
  Search, 
  Filter,
  BookOpen,
  TrendingUp,
  Brain,
  Code,
  Database,
  Eye,
  Heart,
  Share2,
  Bookmark,
  ChevronRight,
  Star
} from 'lucide-react';

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [featuredPost, setFeaturedPost] = useState(null);

  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Transformer Models in 2024: What's Next for AI?",
      slug: "future-of-transformer-models-2024",
      excerpt: "Exploring the latest developments in transformer architecture and their implications for the future of artificial intelligence applications.",
      content: "In this comprehensive analysis, we delve into the cutting-edge developments in transformer models that are shaping the AI landscape...",
      author: "Jesse A. Hawkins",
      publishDate: "2024-01-20",
      readTime: 8,
      category: "AI Research",
      tags: ["Transformers", "AI", "Machine Learning", "Deep Learning", "NLP"],
      image: "/api/placeholder/600/300",
      views: 2840,
      likes: 156,
      featured: true,
      difficulty: "Advanced",
      type: "Technical Deep Dive"
    },
    {
      id: 2,
      title: "Building Production-Ready ML Pipelines: Lessons from the Trenches",
      slug: "production-ml-pipelines-lessons",
      excerpt: "Real-world insights and best practices for deploying machine learning models in production environments at scale.",
      content: "After deploying dozens of ML models to production, here are the key lessons I've learned about building robust, scalable ML pipelines...",
      author: "Jesse A. Hawkins",
      publishDate: "2024-01-15",
      readTime: 12,
      category: "MLOps",
      tags: ["MLOps", "Production", "DevOps", "Kubernetes", "Python"],
      image: "/api/placeholder/600/300",
      views: 1920,
      likes: 89,
      featured: false,
      difficulty: "Intermediate",
      type: "Best Practices"
    },
    {
      id: 3,
      title: "Demystifying Computer Vision: From Pixels to Insights",
      slug: "demystifying-computer-vision",
      excerpt: "A beginner-friendly guide to understanding computer vision fundamentals and practical applications in modern AI systems.",
      content: "Computer vision might seem like magic, but understanding the core concepts can help you leverage this powerful technology...",
      author: "Jesse A. Hawkins",
      publishDate: "2024-01-10",
      readTime: 6,
      category: "Computer Vision",
      tags: ["Computer Vision", "CNN", "Image Processing", "OpenCV"],
      image: "/api/placeholder/600/300",
      views: 1560,
      likes: 78,
      featured: false,
      difficulty: "Beginner",
      type: "Tutorial"
    },
    {
      id: 4,
      title: "The Economics of AI: ROI Metrics That Actually Matter",
      slug: "economics-of-ai-roi-metrics",
      excerpt: "Understanding how to measure and communicate the business value of AI initiatives to stakeholders and leadership teams.",
      content: "Measuring AI ROI goes beyond technical metrics. Here's how to demonstrate real business value from your AI investments...",
      author: "Jesse A. Hawkins",
      publishDate: "2024-01-05",
      readTime: 10,
      category: "AI Strategy",
      tags: ["Business", "ROI", "Strategy", "Leadership", "AI Adoption"],
      image: "/api/placeholder/600/300",
      views: 1340,
      likes: 92,
      featured: false,
      difficulty: "Beginner",
      type: "Business Insights"
    },
    {
      id: 5,
      title: "Fine-tuning Large Language Models: A Practical Guide",
      slug: "fine-tuning-llms-practical-guide",
      excerpt: "Step-by-step instructions for fine-tuning large language models for domain-specific applications with real-world examples.",
      content: "Fine-tuning LLMs can dramatically improve performance for specific use cases. Here's a practical guide with code examples...",
      author: "Jesse A. Hawkins",
      publishDate: "2023-12-28",
      readTime: 15,
      category: "NLP",
      tags: ["LLM", "Fine-tuning", "NLP", "Transformers", "PyTorch"],
      image: "/api/placeholder/600/300",
      views: 3200,
      likes: 187,
      featured: true,
      difficulty: "Advanced",
      type: "Technical Tutorial"
    },
    {
      id: 6,
      title: "Data Quality in ML: Why Garbage In Still Means Garbage Out",
      slug: "data-quality-in-ml",
      excerpt: "Exploring the critical importance of data quality in machine learning projects and practical strategies for improvement.",
      content: "No amount of sophisticated algorithms can overcome poor data quality. Here's how to ensure your ML projects start with solid foundations...",
      author: "Jesse A. Hawkins",
      publishDate: "2023-12-20",
      readTime: 7,
      category: "Data Science",
      tags: ["Data Quality", "Data Science", "ML", "Data Engineering"],
      image: "/api/placeholder/600/300",
      views: 1180,
      likes: 64,
      featured: false,
      difficulty: "Intermediate",
      type: "Best Practices"
    }
  ];

  const categories = ['All', 'AI Research', 'MLOps', 'Computer Vision', 'AI Strategy', 'NLP', 'Data Science'];
  
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  useEffect(() => {
    // Set the most recent featured post as the main featured post
    const featured = blogPosts.filter(post => post.featured).sort((a, b) => 
      new Date(b.publishDate) - new Date(a.publishDate)
    )[0];
    setFeaturedPost(featured);
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Beginner': 'bg-green-100 text-green-800',
      'Intermediate': 'bg-yellow-100 text-yellow-800',
      'Advanced': 'bg-red-100 text-red-800'
    };
    return colors[difficulty] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'AI Research': Brain,
      'MLOps': Code,
      'Computer Vision': Eye,
      'AI Strategy': TrendingUp,
      'NLP': BookOpen,
      'Data Science': Database
    };
    return icons[category] || BookOpen;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
              AI Insights & Research
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Deep dives into artificial intelligence, machine learning best practices, and the future of technology. 
            Sharing knowledge from real-world AI implementations.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles by title, content, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured Article */}
        {featuredPost && (
          <div className="mb-16">
            <div className="flex items-center space-x-2 mb-6">
              <Star className="w-5 h-5 text-yellow-500" />
              <h3 className="text-xl font-bold text-gray-900">Featured Article</h3>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* Featured Image */}
                <div className="relative h-64 lg:h-full">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(featuredPost.difficulty)}`}>
                      {featuredPost.difficulty}
                    </span>
                  </div>
                </div>

                {/* Featured Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-gray-500">{featuredPost.type}</span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(featuredPost.publishDate)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime} min read</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{featuredPost.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="group flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-fit">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => post.id !== featuredPost?.id).map((post) => {
            const CategoryIcon = getCategoryIcon(post.category);
            
            return (
              <article 
                key={post.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                {/* Article Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(post.difficulty)}`}>
                      {post.difficulty}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <CategoryIcon className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-600">{post.category}</span>
                    </div>
                    <span className="text-xs text-gray-500">{post.type}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">
                        +{post.tags.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(post.publishDate)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}m</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <Eye className="w-3 h-3" />
                        <span>{post.views}</span>
                      </div>
                      <button className="text-gray-400 hover:text-blue-600 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Load More / Pagination */}
        {filteredPosts.length > 6 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-white text-gray-700 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200">
              Load More Articles
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search terms or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Subscribe CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with AI Insights</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get the latest articles on AI, machine learning, and technology trends delivered to your inbox. 
            Join 5,000+ professionals staying ahead of the curve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200 whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;