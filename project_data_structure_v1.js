// projects.js - Comprehensive AI Project Data Structure

export const projectsData = [
  {
    id: 1,
    title: "AI-Powered Customer Sentiment Analysis Platform",
    slug: "ai-sentiment-analysis-platform",
    description: "Advanced NLP platform that analyzes customer feedback across multiple channels using transformer architecture. Processes over 10,000 reviews per hour with 94% accuracy, providing real-time insights for business decision-making.",
    shortDescription: "Real-time sentiment analysis for customer feedback using advanced NLP models.",
    
    // Visual Assets
    image: "/api/placeholder/800/450",
    thumbnail: "/api/placeholder/400/240",
    gallery: [
      "/api/placeholder/800/450",
      "/api/placeholder/800/450",
      "/api/placeholder/800/450",
      "/api/placeholder/800/450"
    ],
    video: "https://example.com/demo-video.mp4",
    
    // Categorization
    category: "Machine Learning",
    subcategory: "Natural Language Processing",
    tags: ["NLP", "Python", "TensorFlow", "React", "MongoDB", "Docker", "AWS", "Transformers"],
    technologies: [
      { name: "Python", category: "Language", icon: "Code", proficiency: 95 },
      { name: "TensorFlow", category: "ML Framework", icon: "Brain", proficiency: 90 },
      { name: "BERT", category: "Model Architecture", icon: "Brain", proficiency: 88 },
      { name: "FastAPI", category: "Backend", icon: "Zap", proficiency: 85 },
      { name: "React", category: "Frontend", icon: "Code", proficiency: 80 },
      { name: "PostgreSQL", category: "Database", icon: "Database", proficiency: 85 },
      { name: "Docker", category: "DevOps", icon: "Code", proficiency: 82 },
      { name: "AWS", category: "Cloud", icon: "Zap", proficiency: 78 }
    ],
    
    // Project Details
    complexity: "Advanced",
    status: "Completed",
    timeline: {
      startDate: "2023-08-01",
      endDate: "2024-01-15",
      duration: "6 months",
      phases: [
        { name: "Research & Planning", duration: "2 weeks", status: "completed" },
        { name: "Data Collection & Preprocessing", duration: "3 weeks", status: "completed" },
        { name: "Model Development & Training", duration: "4 weeks", status: "completed" },
        { name: "Frontend Development", duration: "3 weeks", status: "completed" },
        { name: "Testing & Optimization", duration: "2 weeks", status: "completed" },
        { name: "Deployment & Monitoring", duration: "1 week", status: "completed" }
      ]
    },
    
    // Metrics & Results
    metrics: {
      stars: 42,
      views: 1200,
      forks: 18,
      downloads: 340
    },
    results: [
      { metric: "Accuracy Improvement", value: "94%", description: "vs 78% baseline", change: "+16%" },
      { metric: "Processing Speed", value: "10K+", description: "reviews/hour", change: "+300%" },
      { metric: "Client Satisfaction", value: "98%", description: "retention rate", change: "+25%" },
      { metric: "Cost Reduction", value: "60%", description: "vs manual analysis", change: "-60%" }
    ],
    
    // Business Impact
    impact: {
      revenue: "$2.4M additional revenue generated",
      efficiency: "300% faster processing vs manual methods",
      scalability: "Handles 10x more data than previous solution",
      satisfaction: "98% client retention rate"
    },
    
    // Technical Details
    architecture: {
      overview: "Microservices architecture with containerized deployment on AWS",
      components: [
        "Data ingestion pipeline with real-time streaming",
        "Transformer-based NLP model with attention mechanisms", 
        "REST API with FastAPI and async processing",
        "React frontend with real-time updates",
        "PostgreSQL for structured data, MongoDB for unstructured",
        "Redis for caching and session management"
      ],
      highlights: [
        "Custom transformer architecture with 94% accuracy",
        "Real-time processing with sub-second response times",
        "Auto-scaling infrastructure handling traffic spikes",
        "Multi-language support for global deployment"
      ]
    },
    
    // Project Story
    challenge: "Traditional sentiment analysis tools struggled with context, sarcasm, and domain-specific language. Our client needed a solution that could understand nuanced customer feedback across different industries and communication styles while processing large volumes in real-time.",
    
    solution: "We developed a custom transformer-based model using BERT architecture, fine-tuned on industry-specific datasets. The system implements attention mechanisms for better context understanding and multi-task learning for improved accuracy across different sentiment dimensions.",
    
    outcome: "The platform now processes over 10,000 customer reviews per hour with 94% accuracy, providing real-time insights that have led to a 40% improvement in customer satisfaction metrics and $2.4M in additional revenue through better product development decisions.",
    
    // Features
    features: [
      "Real-time sentiment analysis with sub-second processing",
      "Multi-language support for 12 languages",
      "Custom model training pipeline with transfer learning",
      "Interactive dashboard with advanced visualizations",
      "API integration for seamless third-party connectivity",
      "Automated reporting and alert system",
      "Batch processing for historical data analysis",
      "Advanced analytics with trend identification"
    ],
    
    // Team & Collaboration
    team: [
      { name: "Jesse A. Hawkins", role: "Lead AI Engineer", contribution: "Model architecture and training" },
      { name: "Sarah Chen", role: "Data Scientist", contribution: "Data preprocessing and analysis" },
      { name: "Mike Rodriguez", role: "Frontend Developer", contribution: "React dashboard development" },
      { name: "Alex Kim", role: "DevOps Engineer", contribution: "Infrastructure and deployment" }
    ],
    
    client: {
      name: "TechFlow Solutions",
      industry: "SaaS",
      size: "500+ employees",
      location: "San Francisco, CA"
    },
    
    // Testimonial
    testimonial: {
      text: "Jesse's sentiment analysis solution transformed how we understand our customers. The accuracy and speed improvements were beyond our expectations.",
      author: "Sarah Chen",
      role: "Head of Product Analytics", 
      company: "TechFlow Solutions",
      rating: 5
    },
    
    // Links & Resources
    links: {
      demo: "https://sentiment-demo.jesseahawkins.com",
      github: "https://github.com/jesseahawkins/sentiment-analysis",
      caseStudy: "/case-studies/sentiment-analysis.pdf",
      liveProject: "https://app.techflow.com/sentiment"
    },
    
    // SEO & Marketing
    seo: {
      metaTitle: "AI Sentiment Analysis Platform - Jesse A. Hawkins",
      metaDescription: "Advanced NLP platform achieving 94% accuracy in real-time customer sentiment analysis. Built with transformer architecture and modern web technologies.",
      keywords: ["sentiment analysis", "NLP", "AI", "customer feedback", "machine learning", "transformers"]
    },
    
    featured: true,
    published: true,
    lastUpdated: "2024-01-15"
  },
  
  {
    id: 2,
    title: "Real-Time Computer Vision Object Detection System",
    slug: "computer-vision-object-detection",
    description: "High-performance object detection system using YOLO architecture for autonomous vehicle navigation. Achieves 30+ FPS processing with 95% accuracy for real-time safety applications.",
    shortDescription: "YOLO-based object detection for autonomous vehicles with real-time processing.",
    
    image: "/api/placeholder/800/450",
    thumbnail: "/api/placeholder/400/240", 
    gallery: [
      "/api/placeholder/800/450",
      "/api/placeholder/800/450",
      "/api/placeholder/800/450"
    ],
    
    category: "Computer Vision",
    subcategory: "Object Detection",
    tags: ["Computer Vision", "PyTorch", "OpenCV", "YOLO", "Python", "CUDA", "Edge Computing"],
    technologies: [
      { name: "Python", category: "Language", icon: "Code", proficiency: 95 },
      { name: "PyTorch", category: "ML Framework", icon: "Brain", proficiency: 92 },
      { name: "YOLO v5", category: "Model Architecture", icon: "Eye", proficiency: 90 },
      { name: "OpenCV", category: "Computer Vision", icon: "Eye", proficiency: 88 },
      { name: "CUDA", category: "GPU Computing", icon: "Zap", proficiency: 85 },
      { name: "TensorRT", category: "Optimization", icon: "Zap", proficiency: 80 }
    ],
    
    complexity: "Expert",
    status: "In Progress",
    timeline: {
      startDate: "2023-09-15",
      endDate: "2024-03-20",
      duration: "6 months",
      phases: [
        { name: "Research & Dataset Preparation", duration: "3 weeks", status: "completed" },
        { name: "Model Architecture Design", duration: "2 weeks", status: "completed" },
        { name: "Training & Optimization", duration: "4 weeks", status: "completed" },
        { name: "Edge Deployment", duration: "3 weeks", status: "in-progress" },
        { name: "Testing & Validation", duration: "2 weeks", status: "pending" },
        { name: "Production Integration", duration: "2 weeks", status: "pending" }
      ]
    },
    
    metrics: {
      stars: 28,
      views: 890,
      forks: 12,
      downloads: 156
    },
    
    results: [
      { metric: "Detection Accuracy", value: "95.2%", description: "mAP@0.5", change: "+8%" },
      { metric: "Processing Speed", value: "35 FPS", description: "on RTX 3080", change: "+40%" },
      { metric: "Latency", value: "12ms", description: "inference time", change: "-60%" },
      { metric: "Model Size", value: "45MB", description: "optimized", change: "-70%" }
    ],
    
    challenge: "Autonomous vehicles require real-time object detection with extremely low latency and high accuracy. The system needed to work reliably in various weather conditions and lighting scenarios while running on edge computing hardware with limited resources.",
    
    solution: "Implemented a custom YOLO v5 architecture optimized for automotive scenarios. Used transfer learning from a large-scale dataset, then fine-tuned on automotive-specific data. Applied model quantization and TensorRT optimization for edge deployment.",
    
    features: [
      "Real-time object detection at 30+ FPS",
      "Multi-class detection (vehicles, pedestrians, cyclists, traffic signs)",
      "Weather-adaptive processing algorithms",
      "Edge computing optimization for in-vehicle deployment",
      "Integration with vehicle control systems",
      "Continuous learning pipeline for model improvement"
    ],
    
    team: [
      { name: "Jesse A. Hawkins", role: "Lead Computer Vision Engineer", contribution: "Model development and optimization" },
      { name: "David Rodriguez", role: "Automotive Systems Engineer", contribution: "Vehicle integration" },
      { name: "Lisa Wang", role: "Data Engineer", contribution: "Dataset curation and pipeline" }
    ],
    
    client: {
      name: "AutoVision AI",
      industry: "Automotive AI",
      size: "200+ employees",
      location: "Detroit, MI"
    },
    
    testimonial: {
      text: "Working with Jesse on our computer vision project was exceptional. He delivered a robust object detection system that exceeded our performance requirements.",
      author: "David Rodriguez",
      role: "CTO",
      company: "AutoVision AI",
      rating: 5
    },
    
    links: {
      demo: "https://cv-demo.jesseahawkins.com",
      github: "https://github.com/jesseahawkins/yolo-automotive",
      paper: "https://arxiv.org/example",
      dataset: "https://datasets.automotive-ai.com"
    },
    
    featured: true,
    published: true,
    lastUpdated: "2024-01-20"
  },
  
  {
    id: 3,
    title: "Predictive Analytics Dashboard for Market Trends",
    slug: "predictive-analytics-dashboard",
    description: "Interactive analytics platform using ensemble machine learning models to predict market trends. Features real-time data processing and automated model retraining for continuous accuracy improvement.",
    shortDescription: "ML-powered dashboard for market trend prediction with ensemble models.",
    
    image: "/api/placeholder/800/450",
    thumbnail: "/api/placeholder/400/240",
    gallery: [
      "/api/placeholder/800/450",
      "/api/placeholder/800/450"
    ],
    
    category: "Data Analytics",
    subcategory: "Predictive Modeling",
    tags: ["Data Science", "React", "D3.js", "Python", "Flask", "PostgreSQL", "Time Series"],
    technologies: [
      { name: "Python", category: "Language", icon: "Code", proficiency: 95 },
      { name: "Scikit-learn", category: "ML Library", icon: "Brain", proficiency: 90 },
      { name: "React", category: "Frontend", icon: "Code", proficiency: 88 },
      { name: "D3.js", category: "Visualization", icon: "TrendingUp", proficiency: 85 },
      { name: "Flask", category: "Backend", icon: "Zap", proficiency: 82 },
      { name: "PostgreSQL", category: "Database", icon: "Database", proficiency: 88 }
    ],
    
    complexity: "Intermediate",
    status: "Completed",
    timeline: {
      startDate: "2023-07-01",
      endDate: "2023-12-10",
      duration: "5 months"
    },
    
    metrics: {
      stars: 35,
      views: 1580,
      forks: 22,
      downloads: 420
    },
    
    results: [
      { metric: "Prediction Accuracy", value: "87%", description: "30-day forecast", change: "+25%" },
      { metric: "Data Processing", value: "1M+", description: "records/hour", change: "+200%" },
      { metric: "User Engagement", value: "4.2x", description: "session duration", change: "+320%" },
      { metric: "Decision Speed", value: "75%", description: "faster insights", change: "+75%" }
    ],
    
    challenge: "Financial analysts needed a tool to predict market trends using multiple data sources and machine learning models. The system required real-time updates, intuitive visualizations, and the ability to explain predictions for regulatory compliance.",
    
    solution: "Built an ensemble model combining LSTM networks for time series prediction, Random Forest for feature importance, and gradient boosting for final predictions. Created an interactive React dashboard with D3.js visualizations and real-time data streaming.",
    
    features: [
      "Ensemble ML models for improved prediction accuracy",
      "Real-time data ingestion from multiple market sources",
      "Interactive visualizations with drill-down capabilities",
      "Automated model retraining and performance monitoring",
      "Explainable AI features for regulatory compliance",
      "Custom alerts and notification system"
    ],
    
    team: [
      { name: "Jesse A. Hawkins", role: "Lead Data Scientist", contribution: "ML models and architecture" },
      { name: "Emily Watson", role: "Frontend Developer", contribution: "Dashboard and visualizations" },
      { name: "Marcus Johnson", role: "Data Engineer", contribution: "Data pipeline and infrastructure" }
    ],
    
    client: {
      name: "DataDriven Corp",
      industry: "FinTech",
      size: "1000+ employees",
      location: "New York, NY"
    },
    
    testimonial: {
      text: "Jesse's analytics dashboard revolutionized our decision-making process. The real-time insights and predictive capabilities have given us a significant competitive advantage.",
      author: "Emily Watson",
      role: "VP of Operations",
      company: "DataDriven Corp",
      rating: 5
    },
    
    links: {
      demo: "https://analytics-demo.jesseahawkins.com",
      github: "https://github.com/jesseahawkins/predictive-dashboard",
      caseStudy: "/case-studies/predictive-analytics.pdf"
    },
    
    featured: false,
    published: true,
    lastUpdated: "2024-01-10"
  },
  
  {
    id: 4,
    title: "Neural Network-Powered Chat Assistant",
    slug: "neural-chat-assistant",
    description: "Conversational AI assistant built with transformer models, capable of context-aware responses and multi-turn conversations. Integrates with knowledge bases for domain-specific expertise.",
    shortDescription: "Transformer-based conversational AI with context awareness and knowledge integration.",
    
    image: "/api/placeholder/800/450",
    thumbnail: "/api/placeholder/400/240",
    gallery: [
      "/api/placeholder/800/450",
      "/api/placeholder/800/450",
      "/api/placeholder/800/450"
    ],
    
    category: "Machine Learning",
    subcategory: "Conversational AI",
    tags: ["NLP", "Transformers", "Python", "FastAPI", "Vector DB", "RAG", "LLM"],
    technologies: [
      { name: "Python", category: "Language", icon: "Code", proficiency: 95 },
      { name: "Transformers", category: "ML Library", icon: "Brain", proficiency: 92 },
      { name: "LangChain", category: "LLM Framework", icon: "Brain", proficiency: 88 },
      { name: "Vector DB", category: "Database", icon: "Database", proficiency: 85 },
      { name: "FastAPI", category: "Backend", icon: "Zap", proficiency: 90 },
      { name: "React", category: "Frontend", icon: "Code", proficiency: 82 }
    ],
    
    complexity: "Advanced",
    status: "Completed",
    timeline: {
      startDate: "2023-10-01", 
      endDate: "2024-01-25",
      duration: "4 months"
    },
    
    metrics: {
      stars: 67,
      views: 2100,
      forks: 31,
      downloads: 890
    },
    
    results: [
      { metric: "Response Accuracy", value: "92%", description: "user satisfaction", change: "+35%" },
      { metric: "Context Retention", value: "15+", description: "conversation turns", change: "+400%" },
      { metric: "Response Time", value: "1.2s", description: "average latency", change: "-40%" },
      { metric: "Knowledge Coverage", value: "10K+", description: "documents indexed", change: "+1000%" }
    ],
    
    challenge: "Building a conversational AI that could maintain context across long conversations while accessing domain-specific knowledge bases. The system needed to provide accurate, relevant responses while being fast enough for real-time interaction.",
    
    solution: "Implemented a RAG (Retrieval-Augmented Generation) architecture using transformer models with vector databases for knowledge retrieval. Used conversation memory management and context compression techniques for long-form dialogues.",
    
    features: [
      "Context-aware multi-turn conversations",
      "Integration with external knowledge bases",
      "Real-time response generation under 2 seconds",
      "Conversation memory and history management",
      "Domain-specific fine-tuning capabilities",
      "Multi-modal input support (text, voice, images)"
    ],
    
    team: [
      { name: "Jesse A. Hawkins", role: "Lead AI Engineer", contribution: "Model architecture and training" },
      { name: "Anna Kim", role: "NLP Specialist", contribution: "Language model optimization" },
      { name: "Tom Wilson", role: "Backend Developer", contribution: "API and infrastructure" }
    ],
    
    client: {
      name: "ChatTech Solutions",
      industry: "Customer Service",
      size: "300+ employees", 
      location: "Austin, TX"
    },
    
    testimonial: {
      text: "The conversational AI Jesse built exceeded our expectations. The context awareness and knowledge integration capabilities have transformed our customer service operations.",
      author: "Lisa Park",
      role: "Chief Technology Officer",
      company: "ChatTech Solutions",
      rating: 5
    },
    
    links: {
      demo: "https://chat-demo.jesseahawkins.com",
      github: "https://github.com/jesseahawkins/neural-chat",
      paper: "https://arxiv.org/neural-chat-2024",
      documentation: "https://docs.neural-chat.com"
    },
    
    featured: true,
    published: true,
    lastUpdated: "2024-01-25"
  },
  
  {
    id: 5,
    title: "Time Series Forecasting for Financial Markets",
    slug: "time-series-forecasting",
    description: "LSTM-based forecasting model for stock prices and cryptocurrency trends. Achieves 85% accuracy over 30-day periods using advanced feature engineering and ensemble methods.",
    shortDescription: "LSTM model for financial market prediction with 85% accuracy.",
    
    image: "/api/placeholder/800/450",
    thumbnail: "/api/placeholder/400/240",
    gallery: ["/api/placeholder/800/450"],
    
    category: "Data Analytics", 
    subcategory: "Time Series",
    tags: ["Time Series", "LSTM", "Python", "Pandas", "Scikit-learn", "Finance", "Crypto"],
    technologies: [
      { name: "Python", category: "Language", icon: "Code", proficiency: 95 },
      { name: "TensorFlow", category: "ML Framework", icon: "Brain", proficiency: 88 },
      { name: "Pandas", category: "Data Processing", icon: "Database", proficiency: 92 },
      { name: "NumPy", category: "Numerical Computing", icon: "Code", proficiency: 90 },
      { name: "Matplotlib", category: "Visualization", icon: "TrendingUp", proficiency: 85 }
    ],
    
    complexity: "Intermediate",
    status: "Completed",
    timeline: {
      startDate: "2023-09-01",
      endDate: "2024-01-05", 
      duration: "4 months"
    },
    
    metrics: {
      stars: 23,
      views: 750,
      forks: 8,
      downloads: 180
    },
    
    results: [
      { metric: "Prediction Accuracy", value: "85%", description: "30-day forecast", change: "+20%" },
      { metric: "Sharpe Ratio", value: "1.8", description: "risk-adjusted return", change: "+45%" },
      { metric: "Max Drawdown", value: "12%", description: "risk management", change: "-35%" },
      { metric: "Processing Speed", value: "500ms", description: "prediction time", change: "-80%" }
    ],
    
    challenge: "Financial markets are highly volatile and influenced by numerous factors. The goal was to create a forecasting model that could predict price movements with high accuracy while managing risk and providing actionable insights for trading decisions.",
    
    solution: "Developed an ensemble LSTM model with attention mechanisms, incorporating technical indicators, sentiment analysis, and macroeconomic factors. Used advanced feature engineering and regularization techniques to improve generalization.",
    
    features: [
      "Multi-asset forecasting (stocks, crypto, forex)",
      "Real-time prediction updates",
      "Risk assessment and volatility prediction",
      "Technical indicator integration",
      "Backtesting and performance analysis",
      "Alert system for significant price movements"
    ],
    
    team: [
      { name: "Jesse A. Hawkins", role: "Lead Data Scientist", contribution: "Model development and feature engineering" },
      { name: "Robert Chen", role: "Quantitative Analyst", contribution: "Financial modeling and validation" }
    ],
    
    client: {
      name: "QuantTrade Analytics",
      industry: "Financial Services",
      size: "50+ employees",
      location: "Chicago, IL"
    },
    
    testimonial: {
      text: "Jesse's forecasting model has significantly improved our trading performance. The 85% accuracy rate and risk management features have been game-changing for our investment strategy.",
      author: "Robert Chen", 
      role: "Head of Quantitative Research",
      company: "QuantTrade Analytics",
      rating: 5
    },
    
    links: {
      demo: "https://forecast-demo.jesseahawkins.com",
      github: "https://github.com/jesseahawkins/time-series-forecast",
      research: "/research/financial-forecasting.pdf"
    },
    
    featured: false,
    published: true,
    lastUpdated: "2024-01-05"
  },
  
  {
    id: 6,
    title: "E-commerce Recommendation Engine",
    slug: "ecommerce-recommendation-engine",
    description: "Collaborative filtering recommendation system for e-commerce platforms. Improves user engagement by 45% through personalized product recommendations using matrix factorization and deep learning.",
    shortDescription: "Collaborative filtering system improving e-commerce engagement by 45%.",
    
    image: "/api/placeholder/800/450",
    thumbnail: "/api/placeholder/400/240",
    gallery: ["/api/placeholder/800/450"],
    
    category: "Machine Learning",
    subcategory: "Recommendation Systems", 
    tags: ["Recommendation", "Python", "Spark", "Redis", "Flask", "Collaborative Filtering"],
    technologies: [
      { name: "Python", category: "Language", icon: "Code", proficiency: 95 },
      { name: "Apache Spark", category: "Big Data", icon: "Zap", proficiency: 88 },
      { name: "Redis", category: "Cache", icon: "Database", proficiency: 85 },
      { name: "Flask", category: "Backend", icon: "Zap", proficiency: 80 },
      { name: "scikit-learn", category: "ML Library", icon: "Brain", proficiency: 90 }
    ],
    
    complexity: "Beginner",
    status: "Completed",
    timeline: {
      startDate: "2023-06-01",
      endDate: "2023-12-28",
      duration: "7 months"
    },
    
    metrics: {
      stars: 19,
      views: 540,
      forks: 6,
      downloads: 95
    },
    
    results: [
      { metric: "User Engagement", value: "45%", description: "increase", change: "+45%" },
      { metric: "Click-through Rate", value: "12.8%", description: "on recommendations", change: "+85%" },
      { metric: "Revenue per User", value: "$24.50", description: "average increase", change: "+30%" },
      { metric: "Response Time", value: "150ms", description: "recommendation latency", change: "-60%" }
    ],
    
    challenge: "E-commerce platforms struggle with the cold start problem and providing relevant recommendations at scale. The system needed to handle millions of users and products while providing real-time recommendations with low latency.",
    
    solution: "Implemented a hybrid recommendation system combining collaborative filtering with content-based filtering. Used matrix factorization techniques and deep learning for feature extraction, with Redis caching for real-time performance.",
    
    features: [
      "Real-time personalized recommendations", 
      "Cold start problem handling for new users/products",
      "A/B testing framework for recommendation strategies",
      "Scalable architecture handling millions of users",
      "Cross-selling and upselling optimization",
      "Performance analytics and recommendation explanations"
    ],
    
    team: [
      { name: "Jesse A. Hawkins", role: "ML Engineer", contribution: "Recommendation algorithms and optimization" },
      { name: "Sophie Martinez", role: "Data Engineer", contribution: "Data pipeline and infrastructure" }
    ],
    
    client: {
      name: "ShopSmart Technologies",
      industry: "E-commerce",
      size: "300+ employees",
      location: "Seattle, WA"
    },
    
    testimonial: {
      text: "The recommendation engine Jesse built increased our user engagement by 45%. The system perfectly balances technical excellence with practical business impact.",
      author: "Marcus Johnson",
      role: "Director of Engineering", 
      company: "ShopSmart Technologies",
      rating: 5
    },
    
    links: {
      demo: "https://recsys-demo.jesseahawkins.com",
      github: "https://github.com/jesseahawkins/ecommerce-recsys",
      blog: "/blog/building-recommendation-systems"
    },
    
    featured: false,
    published: true,
    lastUpdated: "2023-12-28"
  }
];

// Helper functions for data manipulation
export const getProjectById = (id) => {
  return projectsData.find(project => project.id === parseInt(id));
};

export const getProjectBySlug = (slug) => {
  return projectsData.find(project => project.slug === slug);
};

export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured && project.published);
};

export const getProjectsByCategory = (category) => {
  return projectsData.filter(project => 
    project.category === category && project.published
  );
};

export const getProjectsByTechnology = (technology) => {
  return projectsData.filter(project => 
    project.tags.includes(technology) && project.published
  );
};

export const getProjectsByComplexity = (complexity) => {
  return projectsData.filter(project => 
    project.complexity === complexity && project.published
  );
};

export const getProjectsByStatus = (status) => {
  return projectsData.filter(project => 
    project.status === status && project.published
  );
};

export const searchProjects = (query) => {
  const searchTerm = query.toLowerCase();
  return projectsData.filter(project => 
    project.published && (
      project.title.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
      project.category.toLowerCase().includes(searchTerm)
    )
  );
};

export const getUniqueCategories = () => {
  return [...new Set(projectsData.map(project => project.category))];
};

export const getUniqueTechnologies = () => {
  const allTags = projectsData.flatMap(project => project.tags);
  return [...new Set(allTags)].sort();
};

export const getUniqueComplexityLevels = () => {
  return [...new Set(projectsData.map(project => project.complexity))];
};

export const getProjectStats = () => {
  const published = projectsData.filter(p => p.published);
  return {
    total: published.length,
    featured: published.filter(p => p.featured).length,
    completed: published.filter(p => p.status === 'Completed').length,
    inProgress: published.filter(p => p.status === 'In Progress').length,
    categories: getUniqueCategories().length,
    technologies: getUniqueTechnologies().length,
    totalStars: published.reduce((sum, p) => sum + p.metrics.stars, 0),
    totalViews: published.reduce((sum, p) => sum + p.metrics.views, 0)
  };
};

// Export default data for direct import
export default projectsData;