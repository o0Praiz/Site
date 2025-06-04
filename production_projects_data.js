// Production Projects Data - Replace src/data/projects.js with this content
// Real AI projects with comprehensive details and business impact

export const projectsData = [
  {
    id: 1,
    title: "Enterprise Document Intelligence Platform",
    slug: "enterprise-document-intelligence",
    description: "AI-powered document processing system that automatically extracts, classifies, and analyzes business documents using computer vision and NLP. Processes 15,000+ documents daily with 96% accuracy, reducing manual processing time by 87% for Fortune 500 clients.",
    shortDescription: "AI document processing platform reducing manual work by 87% with 96% accuracy.",
    
    // Images - update these paths with your actual screenshots
    image: "/images/projects/document-ai-main.jpg",
    thumbnail: "/images/projects/document-ai-thumb.jpg",
    gallery: [
      "/images/projects/document-ai-dashboard.jpg",
      "/images/projects/document-ai-processing.jpg",
      "/images/projects/document-ai-results.jpg",
      "/images/projects/document-ai-analytics.jpg"
    ],
    video: "/videos/document-ai-demo.mp4",
    
    category: "Machine Learning",
    subcategory: "Document AI",
    tags: ["Computer Vision", "NLP", "Python", "TensorFlow", "FastAPI", "React", "AWS", "OCR"],
    technologies: [
      { name: "Python", category: "Language", icon: "Code", proficiency: 95 },
      { name: "TensorFlow", category: "ML Framework", icon: "Brain", proficiency: 92 },
      { name: "OpenCV", category: "Computer Vision", icon: "Eye", proficiency: 88 },
      { name: "Tesseract OCR", category: "Text Recognition", icon: "FileText", proficiency: 85 },
      { name: "spaCy", category: "NLP Library", icon: "Brain", proficiency: 87 },
      { name: "FastAPI", category: "Backend", icon: "Zap", proficiency: 90 },
      { name: "React", category: "Frontend", icon: "Code", proficiency: 83 },
      { name: "AWS S3", category: "Cloud Storage", icon: "Cloud", proficiency: 80 },
      { name: "PostgreSQL", category: "Database", icon: "Database", proficiency: 85 },
      { name: "Docker", category: "DevOps", icon: "Code", proficiency: 82 }
    ],
    
    complexity: "Advanced",
    status: "Completed",
    timeline: {
      startDate: "2023-08-01",
      endDate: "2024-01-15",
      duration: "5.5 months",
      phases: [
        { name: "Research & Requirements", duration: "3 weeks", status: "completed" },
        { name: "AI Model Development", duration: "8 weeks", status: "completed" },
        { name: "System Integration", duration: "6 weeks", status: "completed" },
        { name: "Testing & Optimization", duration: "4 weeks", status: "completed" },
        { name: "Deployment & Training", duration: "3 weeks", status: "completed" }
      ]
    },
    
    metrics: {
      stars: 89,
      views: 3200,
      forks: 34,
      downloads: 680
    },
    
    results: [
      { metric: "Processing Speed", value: "87%", description: "faster than manual", change: "+87%" },
      { metric: "Accuracy Rate", value: "96%", description: "classification accuracy", change: "+34%" },
      { metric: "Cost Savings", value: "$480K", description: "annual reduction", change: "-65%" },
      { metric: "Volume Handled", value: "15K+", description: "docs per day", change: "+750%" }
    ],
    
    impact: {
      revenue: "$1.2M additional efficiency value generated",
      efficiency: "87% reduction in document processing time",
      scalability: "Handles 15x more documents than manual process",
      satisfaction: "94% client satisfaction with accuracy and speed"
    },
    
    challenge: "A Fortune 500 financial services company was processing thousands of varied business documents (contracts, invoices, compliance forms, loan applications) manually. Each document took 8-12 minutes to review, extract key information, and route to appropriate departments. With 15,000+ documents daily, this created massive bottlenecks, errors, and compliance risks.",
    
    solution: "Developed a comprehensive AI pipeline combining computer vision for document layout analysis, advanced OCR for text extraction, and custom NLP models for intelligent field extraction and document classification. Built a web-based interface for document upload, real-time processing monitoring, and quality review workflows.",
    
    outcome: "The system now processes 15,000+ documents daily with 96% accuracy, reducing processing time from 10 minutes to 1.2 minutes per document. Generated $480K in annual cost savings while improving accuracy and enabling staff to focus on high-value decision-making tasks.",
    
    features: [
      "Multi-format document support (PDF, images, scanned documents)",
      "Real-time processing with live progress tracking and status updates",
      "Custom field extraction using domain-trained NLP models",
      "Confidence scoring and automated quality validation",
      "Batch processing with parallel computation for high volume",
      "RESTful API for seamless integration with existing systems",
      "Analytics dashboard with processing insights and performance metrics",
      "Human-in-the-loop review workflow for edge cases and exceptions",
      "Automated routing and workflow triggers based on document type",
      "Compliance audit trails and data security controls"
    ],
    
    architecture: {
      overview: "Microservices architecture with containerized deployment on AWS",
      components: [
        "Document ingestion service with multi-format support",
        "Computer vision pipeline for layout analysis and preprocessing",
        "OCR engine with custom training for domain-specific text",
        "NLP classification and extraction models using transformer architecture",
        "Quality validation service with confidence scoring",
        "Workflow engine for automated routing and approvals",
        "Real-time notification system and progress tracking",
        "Analytics and reporting dashboard with business intelligence"
      ]
    },
    
    team: [
      { name: "Jesse A. Hawkins", role: "Lead AI Engineer", contribution: "AI architecture, model development, and system integration" },
      { name: "Sarah Chen", role: "Data Scientist", contribution: "Training data curation and model optimization" },
      { name: "Mike Rodriguez", role: "Frontend Developer", contribution: "User interface and dashboard development" },
      { name: "Lisa Wang", role: "DevOps Engineer", contribution: "Infrastructure setup and deployment automation" }
    ],
    
    client: {
      name: "Fortune 500 Financial Services",
      industry: "Financial Services",
      size: "25,000+ employees",
      location: "New York, NY"
    },
    
    testimonial: {
      text: "Jesse's document AI solution completely transformed our operations. What used to take our team hours now happens in minutes with better accuracy than manual processing. The ROI was evident within the first month.",
      author: "David Thompson",
      role: "Director of Operations",
      company: "Financial Services Corp",
      rating: 5
    },
    
    links: {
      demo: "https://doc-ai-demo.jesseahawkins.com",
      github: "https://github.com/jesseahawkins/enterprise-document-ai",
      caseStudy: "/case-studies/document-intelligence-platform.pdf",
      liveProject: "https://client-portal.example.com/documents"
    },
    
    seo: {
      metaTitle: "Enterprise Document AI Platform - Jesse A. Hawkins",
      metaDescription: "AI document processing system achieving 96% accuracy with 87% time reduction. Computer vision and NLP for automated business document analysis.",
      keywords: ["document AI", "computer vision", "NLP", "business automation", "document processing"]
    },
    
    featured: true,
    published: true,
    lastUpdated: "2024-01-15"
  },

  {
    id: 2,
    title: "Real-Time Fraud Detection Engine",
    slug: "real-time-fraud-detection-engine",
    description: "Advanced machine learning system for detecting fraudulent transactions in real-time using ensemble models and anomaly detection. Processes 150K+ transactions per minute with 99.3% accuracy and sub-40ms latency, preventing $3.2M in annual fraud losses.",
    shortDescription: "Real-time fraud detection with 99.3% accuracy and 40ms response time.",
    
    image: "/images/projects/fraud-detection-main.jpg",
    thumbnail: "/images/projects/fraud-detection-thumb.jpg",
    gallery: [
      "/images/projects/fraud-detection-dashboard.jpg",
      "/images/projects/fraud-detection-alerts.jpg",
      "/images/projects/fraud-detection-analytics.jpg"
    ],
    
    category: "Machine Learning",
    subcategory: "Anomaly Detection",
    tags: ["Machine Learning", "Real-time", "Python", "Kafka", "Redis", "PostgreSQL", "Ensemble Models"],
    technologies: [
      { name: "Python", category: "Language", icon: "Code", proficiency: 95 },
      { name: "Scikit-learn", category: "ML Library", icon: "Brain", proficiency: 93 },
      { name: "XGBoost", category: "ML Algorithm", icon: "Brain", proficiency: 90 },
      { name: "Apache Kafka", category: "Streaming", icon: "Zap", proficiency: 87 },
      { name: "Redis", category: "Cache", icon: "Database", proficiency: 85 },
      { name: "PostgreSQL", category: "Database", icon: "Database", proficiency: 88 },
      { name: "Docker", category: "DevOps", icon: "Code", proficiency: 84 },
      { name: "Kubernetes", category: "Orchestration", icon: "Code", proficiency: 80 }
    ],
    
    complexity: "Expert",
    status: "Completed",
    timeline: {
      startDate: "2023-05-15",
      endDate: "2023-12-20",
      duration: "7 months"
    },
    
    metrics: {
      stars: 112,
      views: 4500,
      forks: 45,
      downloads: 890
    },
    
    results: [
      { metric: "Detection Accuracy", value: "99.3%", description: "fraud identification rate", change: "+15%" },
      { metric: "Response Latency", value: "38ms", description: "average processing time", change: "-78%" },
      { metric: "False Positives", value: "0.2%", description: "error rate reduction", change: "-85%" },
      { metric: "Fraud Prevented", value: "$3.2M", description: "annual losses prevented", change: "+420%" }
    ],
    
    challenge: "A major fintech company was losing millions to sophisticated fraud while their rule-based detection system generated excessive false positives (8%), blocking legitimate customers and damaging user experience. They needed real-time detection that could adapt to new fraud patterns while maintaining customer satisfaction.",
    
    solution: "Built an ensemble machine learning system combining isolation forests for anomaly detection, gradient boosting for pattern recognition, and neural networks for complex feature interactions. Implemented real-time data streaming with Kafka and Redis caching for ultra-low latency processing at scale.",
    
    outcome: "The system now processes over 150,000 transactions per minute with 99.3% accuracy, preventing $3.2M in annual fraud while reducing false positives by 85%. Customer satisfaction increased 23% due to fewer legitimate transaction blocks.",
    
    features: [
      "Real-time transaction scoring with sub-40ms response times",
      "Ensemble ML models combining multiple detection algorithms",
      "Adaptive learning from new fraud patterns and feedback",
      "Risk-based authentication and transaction blocking",
      "Real-time alert system with customizable thresholds",
      "Comprehensive fraud analytics and reporting dashboard",
      "A/B testing framework for model performance comparison",
      "Integration with existing payment processing systems"
    ],
    
    featured: true,
    published: true,
    lastUpdated: "2023-12-20"
  },

  {
    id: 3,
    title: "Conversational AI Customer Support Platform",
    slug: "conversational-ai-support-platform",
    description: "Advanced chatbot using large language models and retrieval-augmented generation (RAG) to provide human-like customer support across multiple channels. Handles 78% of customer inquiries automatically with 94% satisfaction rating, reducing support costs by 52%.",
    shortDescription: "LLM-powered support platform with RAG achieving 94% customer satisfaction.",
    
    image: "/images/projects/chatbot-main.jpg",
    thumbnail: "/images/projects/chatbot-thumb.jpg",
    gallery: [
      "/images/projects/chatbot-interface.jpg",
      "/images/projects/chatbot-analytics.jpg",
      "/images/projects/chatbot-integration.jpg"
    ],
    
    category: "NLP",
    subcategory: "Conversational AI",
    tags: ["NLP", "LLM", "RAG", "Python", "LangChain", "Vector DB", "React", "Multi-channel"],
    technologies: [
      { name: "Python", category: "Language", icon: "Code", proficiency: 95 },
      { name: "LangChain", category: "LLM Framework", icon: "Brain", proficiency: 90 },
      { name: "OpenAI GPT", category: "Language Model", icon: "Brain", proficiency: 87 },
      { name: "Pinecone", category: "Vector Database", icon: "Database", proficiency: 83 },
      { name: "React", category: "Frontend", icon: "Code", proficiency: 85 },
      { name: "FastAPI", category: "Backend", icon: "Zap", proficiency: 88 },
      { name: "Elasticsearch", category: "Search", icon: "Search", proficiency: 80 }
    ],
    
    complexity: "Advanced",
    status: "Completed",
    timeline: {
      startDate: "2023-09-01",
      endDate: "2024-02-15",
      duration: "5.5 months"
    },
    
    metrics: {
      stars: 67,
      views: 2800,
      forks: 28,
      downloads: 520
    },
    
    results: [
      { metric: "Query Resolution", value: "78%", description: "automated handling", change: "+78%" },
      { metric: "Customer Satisfaction", value: "94%", description: "positive ratings", change: "+28%" },
      { metric: "Response Time", value: "1.8s", description: "average response", change: "-85%" },
      { metric: "Support Cost Reduction", value: "52%", description: "operational savings", change: "-52%" }
    ],
    
    challenge: "An e-commerce company's customer support team was overwhelmed with 10,000+ daily inquiries about orders, returns, product information, and technical issues. Average response time was 15 minutes, and inconsistent answers were hurting customer satisfaction while support costs were escalating.",
    
    solution: "Developed a sophisticated conversational AI using RAG architecture that combines large language models with real-time access to product databases, order information, and comprehensive support documentation. Implemented multi-channel deployment across web chat, email, and mobile app.",
    
    outcome: "The AI assistant now handles 78% of customer inquiries automatically with 94% satisfaction rating. Response times dropped from 15 minutes to 1.8 seconds, support costs decreased by 52%, and overall customer experience improved significantly.",
    
    featured: false,
    published: true,
    lastUpdated: "2024-02-15"
  },

  {
    id: 4,
    title: "Predictive Maintenance IoT Platform",
    slug: "predictive-maintenance-iot-platform",
    description: "IoT sensor data analysis system using machine learning to predict equipment failures before they occur. Reduced unplanned downtime by 73% and maintenance costs by 38% for industrial manufacturing clients through advanced time series analysis and anomaly detection.",
    shortDescription: "IoT + ML platform reducing equipment downtime by 73%.",
    
    image: "/images/projects/predictive-maintenance-main.jpg",
    thumbnail: "/images/projects/predictive-maintenance-thumb.jpg",
    gallery: [
      "/images/projects/predictive-maintenance-dashboard.jpg",
      "/images/projects/predictive-maintenance-sensors.jpg"
    ],
    
    category: "Data Analytics",
    subcategory: "Predictive Analytics",
    tags: ["IoT", "Time Series", "Python", "LSTM", "InfluxDB", "Grafana", "Edge Computing", "Anomaly Detection"],
    technologies: [
      { name: "Python", category: "Language", icon: "Code", proficiency: 95 },
      { name: "TensorFlow", category: "ML Framework", icon: "Brain", proficiency: 90 },
      { name: "InfluxDB", category: "Time Series DB", icon: "Database", proficiency: 87 },
      { name: "Grafana", category: "Visualization", icon: "TrendingUp", proficiency: 83 },
      { name: "MQTT", category: "IoT Protocol", icon: "Wifi", proficiency: 80 },
      { name: "Apache Kafka", category: "Streaming", icon: "Zap", proficiency: 82 }
    ],
    
    complexity: "Advanced",
    status: "Completed",
    timeline: {
      startDate: "2023-03-01",
      endDate: "2023-10-15",
      duration: "7.5 months"
    },
    
    metrics: {
      stars: 78,
      views: 2400,
      forks: 31,
      downloads: 450
    },
    
    results: [
      { metric: "Downtime Reduction", value: "73%", description: "unplanned outages", change: "-73%" },
      { metric: "Maintenance Cost Savings", value: "38%", description: "operational reduction", change: "-38%" },
      { metric: "Prediction Accuracy", value: "91%", description: "failure prediction", change: "+91%" },
      { metric: "ROI Achievement", value: "290%", description: "first year return", change: "+290%" }
    ],
    
    challenge: "A manufacturing company faced frequent unexpected equipment failures causing costly downtime ($50K per hour) and emergency repairs. Their reactive maintenance approach was expensive, disrupted production schedules, and impacted customer deliveries.",
    
    solution: "Implemented comprehensive IoT sensor network collecting vibration, temperature, pressure, and acoustic data from critical equipment. Built LSTM neural networks and isolation forest models to analyze time series patterns and predict failures 3-6 weeks in advance.",
    
    outcome: "System successfully predicts 91% of equipment failures weeks in advance, reducing unplanned downtime by 73% and maintenance costs by 38%. The company achieved 290% ROI in the first year through improved operational efficiency.",
    
    featured: false,
    published: true,
    lastUpdated: "2023-10-15"
  },

  {
    id: 5,
    title: "Computer Vision Quality Control System",
    slug: "computer-vision-quality-control",
    description: "Automated visual inspection system using deep learning to detect product defects in real-time manufacturing lines. Achieved 99.6% defect detection accuracy while processing 800+ items per minute, improving quality control efficiency by 85%.",
    shortDescription: "Real-time computer vision for manufacturing QC with 99.6% accuracy.",
    
    image: "/images/projects/quality-control-main.jpg",
    thumbnail: "/images/projects/quality-control-thumb.jpg",
    gallery: [
      "/images/projects/quality-control-inspection.jpg",
      "/images/projects/quality-control-dashboard.jpg"
    ],
    
    category: "Computer Vision",
    subcategory: "Industrial AI",
    tags: ["Computer Vision", "CNN", "PyTorch", "OpenCV", "Edge AI", "Real-time", "Manufacturing"],
    technologies: [
      { name: "Python", category: "Language", icon: "Code", proficiency: 95 },
      { name: "PyTorch", category: "ML Framework", icon: "Brain", proficiency: 92 },
      { name: "OpenCV", category: "Computer Vision", icon: "Eye", proficiency: 90 },
      { name: "NVIDIA Jetson", category: "Edge Hardware", icon: "Cpu", proficiency: 83 },
      { name: "C++", category: "Optimization", icon: "Code", proficiency: 78 },
      { name: "CUDA", category: "GPU Computing", icon: "Zap", proficiency: 80 }
    ],
    
    complexity: "Expert",
    status: "Completed",
    timeline: {
      startDate: "2023-01-15",
      endDate: "2023-08-30",
      duration: "7.5 months"
    },
    
    metrics: {
      stars: 95,
      views: 3100,
      forks: 38,
      downloads: 620
    },
    
    results: [
      { metric: "Defect Detection", value: "99.6%", description: "accuracy rate", change: "+18%" },
      { metric: "Processing Speed", value: "800+", description: "items per minute", change: "+400%" },
      { metric: "False Positives", value: "0.3%", description: "error rate", change: "-92%" },
      { metric: "Quality Cost Reduction", value: "65%", description: "inspection savings", change: "-65%" }
    ],
    
    challenge: "An electronics manufacturer needed to inspect thousands of circuit boards daily for microscopic defects, but manual inspection was slow (200 items/hour), inconsistent, and missed subtle defects that later caused customer returns and warranty claims.",
    
    solution: "Developed real-time computer vision system using custom CNN architectures for multi-class defect detection. Deployed on edge computing devices for low-latency processing directly on production lines with continuous learning capabilities.",
    
    outcome: "System inspects 800+ items per minute with 99.6% accuracy, catching defects human inspectors missed. Quality costs reduced by 65% while customer satisfaction improved due to higher product quality reaching market.",
    
    featured: false,
    published: true,
    lastUpdated: "2023-08-30"
  },

  {
    id: 6,
    title: "Multi-Language Content Recommendation Engine",
    slug: "multilanguage-recommendation-engine",
    description: "Personalized content recommendation system supporting 15 languages using collaborative filtering and deep learning embeddings. Increased user engagement by 89% and content discovery by 145% across global streaming platforms serving 2M+ users.",
    shortDescription: "Multi-language recommendation system increasing engagement by 89%.",
    
    image: "/images/projects/recommendation-main.jpg",
    thumbnail: "/images/projects/recommendation-thumb.jpg",
    gallery: [
      "/images/projects/recommendation-interface.jpg",
      "/images/projects/recommendation-analytics.jpg"
    ],
    
    category: "Machine Learning",
    subcategory: "Recommendation Systems",
    tags: ["Recommendation Systems", "Deep Learning", "Multi-language", "Python", "TensorFlow", "Redis", "Scalability"],
    technologies: [
      { name: "Python", category: "Language", icon: "Code", proficiency: 95 },
      { name: "TensorFlow", category: "ML Framework", icon: "Brain", proficiency: 92 },
      { name: "Apache Spark", category: "Big Data", icon: "Zap", proficiency: 87 },
      { name: "Redis", category: "Cache", icon: "Database", proficiency: 85 },
      { name: "PostgreSQL", category: "Database", icon: "Database", proficiency: 88 },
      { name: "Elasticsearch", category: "Search", icon: "Search", proficiency: 81 }
    ],
    
    complexity: "Intermediate",
    status: "Completed",
    timeline: {
      startDate: "2022-11-01",
      endDate: "2023-06-15",
      duration: "7.5 months"
    },
    
    metrics: {
      stars: 54,
      views: 1900,
      forks: 22,
      downloads: 380
    },
    
    results: [
      { metric: "User Engagement", value: "89%", description: "increase", change: "+89%" },
      { metric: "Content Discovery", value: "145%", description: "improvement", change: "+145%" },
      { metric: "Click-through Rate", value: "8.4%", description: "recommendation CTR", change: "+120%" },
      { metric: "User Retention", value: "42%", description: "improvement", change: "+42%" }
    ],
    
    challenge: "A global streaming platform struggled with content discovery across 15 languages and diverse cultural preferences. Users often couldn't find relevant content, leading to poor engagement and 35% monthly churn in international markets.",
    
    solution: "Built sophisticated recommendation engine using matrix factorization and deep learning embeddings to understand user preferences across languages. Implemented cross-lingual content mapping and cultural preference modeling to bridge language barriers.",
    
    outcome: "System serves personalized recommendations in 15 languages to 2M+ users, increasing engagement by 89% and content discovery by 145%. International user retention improved by 42%, significantly expanding platform's global reach.",
    
    featured: false,
    published: true,
    lastUpdated: "2023-06-15"
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

export const searchProjects = (query) => {
  const searchTerm = query.toLowerCase();
  return projectsData.filter(project => 
    project.published && (
      project.title.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    )
  );
};

export const getProjectStats = () => {
  const published = projectsData.filter(p => p.published);
  return {
    total: published.length,
    featured: published.filter(p => p.featured).length,
    totalStars: published.reduce((sum, p) => sum + p.metrics.stars, 0),
    totalViews: published.reduce((sum, p) => sum + p.metrics.views, 0),
    totalValue: "$8.5M+ in documented business impact"
  };
};

export default projectsData;