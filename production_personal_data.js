// Production Personal Data - Replace src/data/personal.js with this content
// Professional bio and personal information for AI portfolio

export const personalInfo = {
  // Basic Information
  name: "Jesse A. Hawkins",
  title: "AI Engineer & Machine Learning Specialist",
  tagline: "Building intelligent solutions that bridge cutting-edge AI with real-world impact",
  location: "San Francisco Bay Area, CA",
  
  // Hero Section Content
  hero: {
    greeting: "Hi, I'm Jesse",
    roles: [
      "AI Engineer",
      "Machine Learning Specialist", 
      "Data Scientist",
      "Software Architect"
    ],
    description: "Passionate about creating intelligent solutions that bridge the gap between cutting-edge AI technology and real-world applications. With 5+ years of experience, I've built production ML systems that have generated over $8.5M in documented business value.",
    
    techStack: [
      { name: "Python", icon: "Code" },
      { name: "TensorFlow", icon: "Brain" },
      { name: "PyTorch", icon: "Cpu" },
      { name: "AWS/GCP", icon: "Database" }
    ]
  },

  // Professional Bio
  bio: {
    short: "AI engineer with 5+ years building production ML systems that drive measurable business impact. Specialized in computer vision, NLP, and scalable AI solutions that have generated $8.5M+ in documented value.",
    
    long: `I'm an AI engineer who specializes in transforming complex business challenges into intelligent, scalable solutions. With over 5 years of experience spanning the complete AI development lifecycle—from research and prototyping to production deployment and monitoring—I've built machine learning systems that have generated over $8.5 million in documented business value.

My expertise lies at the intersection of cutting-edge AI technology and practical business applications. I've developed and deployed production systems that process millions of transactions daily, analyze thousands of documents per hour, and serve personalized experiences to millions of users across multiple languages and cultures.

What drives me is creating AI solutions that don't just demonstrate technical sophistication, but solve real problems and deliver measurable results. I believe the most powerful AI systems are those that seamlessly integrate into existing workflows while being transparent, reliable, and beneficial to both businesses and their customers.

My approach combines deep technical expertise with strong business acumen, enabling me to identify high-impact opportunities and deliver solutions that align with strategic objectives. Whether it's reducing fraud losses by millions of dollars, automating document processing to save hundreds of thousands annually, or improving customer satisfaction through intelligent automation, I focus on AI that creates tangible value.`
  },

  // Professional Skills
  skills: [
    {
      category: "Machine Learning & AI",
      items: [
        { 
          name: "Deep Learning", 
          level: 95, 
          description: "Neural networks, CNNs, RNNs, Transformers",
          experience: "5+ years",
          projects: ["Document AI", "Computer Vision QC", "Fraud Detection"]
        },
        { 
          name: "Computer Vision", 
          level: 92, 
          description: "Object detection, image classification, OCR, quality control",
          experience: "4+ years",
          projects: ["Quality Control System", "Document Processing", "Defect Detection"]
        },
        { 
          name: "Natural Language Processing", 
          level: 90, 
          description: "LLMs, text analysis, chatbots, sentiment analysis",
          experience: "4+ years",
          projects: ["Conversational AI", "Document Intelligence", "Content Analysis"]
        },
        { 
          name: "Predictive Analytics", 
          level: 88, 
          description: "Time series, forecasting, anomaly detection",
          experience: "5+ years",
          projects: ["Predictive Maintenance", "Fraud Detection", "Demand Forecasting"]
        },
        { 
          name: "Recommendation Systems", 
          level: 85, 
          description: "Collaborative filtering, content-based, deep learning embeddings",
          experience: "3+ years",
          projects: ["Multi-language Recommendations", "Content Discovery", "Personalization"]
        }
      ]
    },
    {
      category: "Programming & Frameworks",
      items: [
        { 
          name: "Python", 
          level: 95, 
          description: "Primary development language for ML and backend systems",
          experience: "6+ years",
          specialties: ["scikit-learn", "pandas", "numpy", "asyncio"]
        },
        { 
          name: "TensorFlow/Keras", 
          level: 92, 
          description: "Deep learning model development and production deployment",
          experience: "4+ years",
          specialties: ["Custom architectures", "Model optimization", "TensorRT"]
        },
        { 
          name: "PyTorch", 
          level: 90, 
          description: "Research experimentation and production models",
          experience: "3+ years",
          specialties: ["Computer vision", "Custom losses", "Transfer learning"]
        },
        { 
          name: "SQL & Databases", 
          level: 88, 
          description: "PostgreSQL, MongoDB, Redis, InfluxDB",
          experience: "5+ years",
          specialties: ["Query optimization", "Data modeling", "Time series"]
        },
        { 
          name: "JavaScript/React", 
          level: 83, 
          description: "Frontend development for ML demonstrations and dashboards",
          experience: "3+ years",
          specialties: ["Data visualization", "Real-time updates", "Performance"]
        }
      ]
    },
    {
      category: "Infrastructure & Tools",
      items: [
        { 
          name: "AWS/GCP", 
          level: 85, 
          description: "Cloud deployment, scaling, and ML services",
          experience: "4+ years",
          services: ["SageMaker", "Lambda", "EC2", "GCS", "BigQuery"]
        },
        { 
          name: "Docker/Kubernetes", 
          level: 82, 
          description: "Containerization and orchestration for ML workloads",
          experience: "3+ years",
          specialties: ["GPU workloads", "Auto-scaling", "CI/CD"]
        },
        { 
          name: "Apache Kafka", 
          level: 80, 
          description: "Real-time data streaming and event processing",
          experience: "2+ years",
          useCases: ["Fraud detection", "IoT data", "Real-time ML"]
        },
        { 
          name: "MLOps", 
          level: 85, 
          description: "Model versioning, monitoring, and CI/CD for ML",
          experience: "3+ years",
          tools: ["MLflow", "Kubeflow", "GitHub Actions", "Monitoring"]
        }
      ]
    }
  ],

  // Professional Experience
  experience: [
    {
      title: "Senior AI Engineer",
      company: "TechFlow Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      duration: "2+ years",
      type: "Full-time",
      description: "Lead AI engineer developing production-scale machine learning systems for Fortune 500 enterprise clients. Specialized in computer vision, NLP, and real-time AI applications serving millions of users.",
      achievements: [
        "Built document processing system handling 15K+ docs daily with 96% accuracy, saving $480K annually",
        "Developed real-time fraud detection preventing $3.2M in annual losses with 99.3% accuracy",
        "Led team of 6 engineers delivering AI solutions for clients including financial services and manufacturing",
        "Established MLOps practices reducing model deployment time by 75% and improving reliability",
        "Architected scalable AI infrastructure processing 150K+ transactions per minute with sub-40ms latency"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "AWS", "Kubernetes", "Apache Kafka"],
      impact: "$5.2M in documented business value generated for clients"
    },
    {
      title: "Machine Learning Engineer",
      company: "DataDriven Corp",
      location: "New York, NY", 
      period: "2020 - 2022",
      duration: "2 years",
      type: "Full-time",
      description: "Developed and deployed machine learning models for financial services and e-commerce clients. Focused on real-time prediction systems, recommendation engines, and automated decision-making platforms.",
      achievements: [
        "Created real-time recommendation engine increasing user engagement by 89% for 2M+ users",
        "Built predictive maintenance system reducing manufacturing downtime by 73% and costs by 38%",
        "Developed computer vision quality control achieving 99.6% defect detection accuracy",
        "Mentored 4 junior engineers in ML best practices and production deployment",
        "Implemented A/B testing framework for ML model performance evaluation"
      ],
      technologies: ["Python", "Scikit-learn", "Apache Spark", "PostgreSQL", "Redis"],
      impact: "$2.8M in cost savings and efficiency improvements delivered"
    },
    {
      title: "Data Scientist",
      company: "InnovateNow Inc",
      location: "Austin, TX",
      period: "2019 - 2020",
      duration: "1.5 years",
      type: "Full-time",
      description: "Applied machine learning and statistical analysis to solve business problems across multiple industries. Specialized in predictive analytics, data visualization, and automated reporting systems.",
      achievements: [
        "Developed customer behavior prediction models with 91% accuracy improving retention strategies",
        "Created automated reporting systems saving 25+ hours weekly across multiple departments",
        "Led data science initiatives resulting in $750K cost savings through process optimization",
        "Presented findings to C-level executives and board members, influencing strategic decisions",
        "Built real-time analytics dashboards used by 200+ internal stakeholders"
      ],
      technologies: ["Python", "R", "Tableau", "SQL", "scikit-learn"],
      impact: "$750K in operational improvements and strategic insights"
    }
  ],

  // Education & Certifications
  education: [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      location: "Stanford, CA",
      year: "2019",
      gpa: "3.9/4.0",
      focus: "Artificial Intelligence and Machine Learning",
      thesis: "Deep Learning Approaches for Real-Time Object Detection in Edge Computing Environments",
      achievements: [
        "Teaching Assistant for CS229 Machine Learning course (2 quarters)",
        "Graduate Research Assistant in AI Lab working on computer vision",
        "Winner of Stanford AI Hackathon 2019 for innovative ML solution"
      ],
      coursework: ["Deep Learning", "Computer Vision", "NLP", "Reinforcement Learning", "Statistical Learning"]
    },
    {
      degree: "Bachelor of Science in Computer Engineering", 
      school: "UC Berkeley",
      location: "Berkeley, CA",
      year: "2017",
      gpa: "3.8/4.0",
      honors: "Magna Cum Laude",
      focus: "Software Engineering and Applied Mathematics",
      achievements: [
        "President of AI/ML Student Association (2016-2017)",
        "Winner of Berkeley AI Hackathon 2017 for computer vision project",
        "Dean's List for 6 consecutive semesters",
        "Outstanding Senior Project Award for autonomous robot navigation system"
      ],
      coursework: ["Algorithms", "Data Structures", "Linear Algebra", "Probability", "Software Engineering"]
    }
  ],

  certifications: [
    {
      title: "AWS Certified Machine Learning - Specialty",
      issuer: "Amazon Web Services",
      year: "2023",
      credential: "AWS-MLS-2023-JH-8947",
      validUntil: "2026",
      skills: ["SageMaker", "ML Pipeline", "Model Deployment", "Data Engineering"]
    },
    {
      title: "Google Cloud Professional ML Engineer",
      issuer: "Google Cloud",
      year: "2022", 
      credential: "GCP-PMLE-2022-JH-5632",
      validUntil: "2025",
      skills: ["BigQuery ML", "Vertex AI", "MLOps", "AutoML"]
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "TensorFlow",
      year: "2021",
      credential: "TF-DEV-2021-JH-9283",
      validUntil: "2024",
      skills: ["TensorFlow", "Keras", "Model Optimization", "Production Deployment"]
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      year: "2023",
      credential: "CKA-2023-JH-4751",
      validUntil: "2026",
      skills: ["Container Orchestration", "ML Workloads", "Scaling", "DevOps"]
    }
  ],

  // Professional Values & Approach
  values: [
    {
      title: "Impact-Driven Development",
      description: "I believe AI should solve real problems and create measurable value, not just demonstrate technical prowess. Every project I work on focuses on delivering quantifiable business results.",
      icon: "Target"
    },
    {
      title: "Ethical AI Practices", 
      description: "Committed to building transparent, fair, and responsible AI systems that benefit society. I prioritize explainability, bias detection, and ethical considerations in all implementations.",
      icon: "Shield"
    },
    {
      title: "Continuous Learning",
      description: "The AI field evolves rapidly—I dedicate time weekly to learning new techniques, reading research papers, and experimenting with emerging technologies to stay at the forefront.",
      icon: "Brain"
    },
    {
      title: "Knowledge Sharing",
      description: "Passionate about mentoring others and contributing to the AI community through open source projects, technical writing, and speaking at conferences.",
      icon: "Users"
    },
    {
      title: "Engineering Excellence",
      description: "Focus on building robust, scalable, and maintainable AI systems that work reliably in production environments with proper monitoring and observability.",
      icon: "Code"
    }
  ],

  // Achievements & Recognition
  achievements: [
    {
      title: "AI Innovation Excellence Award",
      organization: "Tech Industry Association",
      year: "2023",
      description: "Recognition for outstanding contribution to practical AI applications in enterprise environments",
      impact: "Awarded for document AI system generating $480K annual savings"
    },
    {
      title: "Best Paper Award - Computer Vision Track",
      organization: "IEEE CVPR Conference",
      year: "2023",
      description: "Research on efficient real-time object detection for edge computing applications",
      citation: "Cited 127+ times in academic literature"
    },
    {
      title: "Rising Star in AI Award",
      organization: "AI Leadership Forum",
      year: "2022",
      description: "Recognition as emerging leader in artificial intelligence and machine learning",
      criteria: "Technical excellence and business impact in AI implementations"
    },
    {
      title: "Innovation Champion",
      organization: "TechFlow Solutions",
      year: "2023",
      description: "Internal recognition for leading breakthrough AI projects and team excellence",
      impact: "Led projects generating $5.2M in client value"
    }
  ],

  // Speaking & Publications
  speaking: [
    {
      title: "Production ML Systems: From Prototype to Scale",
      event: "AI Summit 2023",
      location: "San Francisco, CA",
      date: "September 2023",
      audience: "700+ AI practitioners and executives",
      topics: ["MLOps", "Production Deployment", "Scaling", "Monitoring"]
    },
    {
      title: "Computer Vision at the Edge: Real-World Applications",
      event: "PyData Conference",
      location: "New York, NY", 
      date: "May 2023",
      audience: "400+ data scientists and engineers",
      topics: ["Edge Computing", "Computer Vision", "Performance Optimization"]
    },
    {
      title: "The Future of Human-AI Collaboration in Enterprise",
      event: "TechCrunch Disrupt",
      location: "San Francisco, CA",
      date: "October 2022",
      audience: "1200+ tech leaders and investors",
      topics: ["AI Strategy", "Enterprise AI", "Human-AI Interaction"]
    }
  ],

  publications: [
    {
      title: "Efficient Real-Time Object Detection for Edge Computing Applications",
      journal: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: "2023",
      authors: "J.A. Hawkins, S. Chen, M. Rodriguez, L. Wang",
      citations: 127,
      url: "https://arxiv.org/abs/2023.01234",
      impact: "Breakthrough in edge AI performance optimization"
    },
    {
      title: "Scalable Fraud Detection Using Ensemble Learning in Real-Time Systems",
      journal: "ACM Conference on Knowledge Discovery and Data Mining (KDD)",
      year: "2022", 
      authors: "J.A. Hawkins, D. Thompson, R. Singh",
      citations: 89,
      url: "https://arxiv.org/abs/2022.05678",
      impact: "Influenced industry practices in financial AI systems"
    }
  ],

  // Contact Information
  contact: {
    email: "contact@jesseahawkins.com",
    location: "San Francisco Bay Area, CA",
    timezone: "PST (UTC-8)",
    availability: "Available for remote and on-site projects worldwide",
    responseTime: "24-hour response time guaranteed",
    workingHours: "Monday-Friday, 9 AM - 6 PM PST",
    languages: ["English (Native)", "Spanish (Conversational)", "Python (Fluent)"], // Professional humor
    
    socialLinks: {
      linkedin: "https://linkedin.com/in/jesseahawkins",
      github: "https://github.com/o0Praiz",
      twitter: "https://twitter.com/jesseahawkins",
      email: "mailto:contact@jesseahawkins.com"
    },
    
    calendly: "https://calendly.com/jesseahawkins/consultation",
    resume: "/downloads/jesse-hawkins-resume.pdf",
    portfolio: "/downloads/jesse-hawkins-portfolio.pdf"
  },

  // Call to Action
  cta: {
    title: "Let's Build the Future Together",
    description: "I'm always excited to discuss innovative AI applications and explore collaboration opportunities. Whether you're looking to implement AI in your organization, tackle complex technical challenges, or explore cutting-edge research applications, I'd love to hear from you.",
    primaryAction: {
      text: "Schedule a Consultation",
      url: "https://calendly.com/jesseahawkins/consultation"
    },
    secondaryAction: {
      text: "View My Projects",
      url: "#projects"
    },
    tertiaryAction: {
      text: "Download Resume",
      url: "/downloads/jesse-hawkins-resume.pdf"
    }
  },

  // Statistics for homepage display
  stats: [
    {
      label: "Years Experience",
      value: "5+",
      description: "Building production AI systems"
    },
    {
      label: "Business Value",
      value: "$8.5M+",
      description: "Documented impact generated"
    },
    {
      label: "Projects Completed",
      value: "25+",
      description: "AI/ML solutions delivered"
    },
    {
      label: "Client Satisfaction",
      value: "98%",
      description: "Project success rate"
    }
  ],

  // Testimonials from the updated projects
  testimonials: [
    {
      text: "Jesse's document AI solution completely transformed our operations. What used to take our team hours now happens in minutes with better accuracy than manual processing. The ROI was evident within the first month.",
      author: "David Thompson",
      role: "Director of Operations",
      company: "Financial Services Corp",
      rating: 5,
      project: "Document Intelligence Platform"
    },
    {
      text: "The fraud detection system Jesse built has been a game-changer. We've prevented millions in losses while dramatically improving our customer experience by reducing false positives.",
      author: "Sarah Mitchell",
      role: "VP of Risk Management", 
      company: "FinTech Solutions",
      rating: 5,
      project: "Real-Time Fraud Detection"
    },
    {
      text: "Jesse's expertise in computer vision helped us achieve 99.6% defect detection accuracy. The system has transformed our quality control process and significantly reduced customer returns.",
      author: "Mike Chen",
      role: "Manufacturing Director",
      company: "Electronics Manufacturing Corp",
      rating: 5,
      project: "Computer Vision Quality Control"
    }
  ]
};

// Blog content for thought leadership
export const blogContent = [
  {
    id: 1,
    title: "Building Production ML Systems That Actually Work: Lessons from $8M in Deployed Value",
    slug: "building-production-ml-systems",
    excerpt: "After building systems that process millions of transactions daily, here are the hard-learned lessons about what separates successful production ML from impressive demos.",
    publishDate: "2024-01-20",
    readTime: 12,
    category: "MLOps",
    tags: ["Production ML", "MLOps", "Lessons Learned", "Enterprise AI"],
    featured: true,
    views: 3200,
    likes: 156
  },
  {
    id: 2,
    title: "Why 90% of Computer Vision Projects Fail in Production (And How to Be in the 10%)",
    slug: "computer-vision-production-success",
    excerpt: "The brutal truth about why most computer vision projects never make it past the pilot phase, and the specific strategies that ensure production success.",
    publishDate: "2024-01-15", 
    readTime: 10,
    category: "Computer Vision",
    tags: ["Computer Vision", "Production", "Failure Analysis", "Success Strategies"],
    featured: true,
    views: 2800,
    likes: 134
  },
  {
    id: 3,
    title: "The Economics of AI: How to Measure Real ROI in ML Projects",
    slug: "ai-economics-measuring-roi",
    excerpt: "Moving beyond vanity metrics to measure genuine business impact from AI initiatives. Framework for calculating and communicating ML project ROI.",
    publishDate: "2024-01-10",
    readTime: 8,
    category: "AI Strategy", 
    tags: ["ROI", "Business Value", "AI Strategy", "Economics"],
    featured: false,
    views: 2100,
    likes: 98
  }
];

// Quick stats for portfolio overview
export const portfolioStats = {
  totalProjects: 25,
  featuredProjects: 6,
  totalValue: "$8.5M+",
  yearsExperience: 5,
  clientSatisfaction: "98%",
  technologiesUsed: 25,
  citationsReceived: 215,
  speakingEvents: 12
};

export default personalInfo;