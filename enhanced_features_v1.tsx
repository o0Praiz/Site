import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Filter, 
  Play, 
  Pause, 
  RotateCcw, 
  Settings, 
  Mic, 
  Camera, 
  Upload,
  Download,
  Share2,
  Code,
  Database,
  BarChart3,
  Brain,
  Eye,
  MessageSquare,
  Zap,
  Globe,
  Lock,
  Key,
  Monitor,
  Smartphone,
  Activity
} from 'lucide-react';

// Interactive AI Demo Component
const InteractiveAIDemo = ({ demoType = 'sentiment' }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState(null);
  const [inputData, setInputData] = useState('');
  const [confidence, setConfidence] = useState(0);
  const [processing, setProcessing] = useState(false);

  const demos = {
    sentiment: {
      title: 'Sentiment Analysis Demo',
      description: 'Analyze the emotional tone of text using advanced NLP models',
      placeholder: 'Enter text to analyze sentiment (e.g., "I love this new AI technology!")',
      icon: MessageSquare,
      process: async (text) => {
        setProcessing(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const sentiments = ['positive', 'negative', 'neutral'];
        const sentiment = text.toLowerCase().includes('love') || text.toLowerCase().includes('great') || text.toLowerCase().includes('amazing') 
          ? 'positive' 
          : text.toLowerCase().includes('hate') || text.toLowerCase().includes('bad') || text.toLowerCase().includes('terrible')
          ? 'negative' 
          : 'neutral';
        
        setResult({
          sentiment: sentiment,
          confidence: Math.random() * 0.3 + 0.7, // 70-100%
          details: {
            positive: sentiment === 'positive' ? Math.random() * 0.3 + 0.7 : Math.random() * 0.3,
            negative: sentiment === 'negative' ? Math.random() * 0.3 + 0.7 : Math.random() * 0.3,
            neutral: sentiment === 'neutral' ? Math.random() * 0.3 + 0.7 : Math.random() * 0.3
          }
        });
        setProcessing(false);
      }
    },
    
    objectDetection: {
      title: 'Object Detection Demo',
      description: 'Detect and classify objects in images using computer vision',
      placeholder: 'Upload an image or use sample image',
      icon: Eye,
      process: async (imageData) => {
        setProcessing(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const objects = [
          { name: 'Person', confidence: 0.95, bbox: [120, 80, 200, 300] },
          { name: 'Car', confidence: 0.87, bbox: [300, 150, 180, 120] },
          { name: 'Traffic Light', confidence: 0.92, bbox: [500, 50, 30, 80] }
        ];
        
        setResult({
          objects: objects,
          processingTime: '0.12s',
          resolution: '640x480'
        });
        setProcessing(false);
      }
    },
    
    textGeneration: {
      title: 'AI Text Generation Demo',
      description: 'Generate coherent text using large language models',
      placeholder: 'Enter a prompt (e.g., "The future of artificial intelligence is")',
      icon: Brain,
      process: async (prompt) => {
        setProcessing(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const completions = {
          'The future of artificial intelligence is': 'bright and full of possibilities. As AI continues to evolve, we can expect to see revolutionary advances in healthcare, education, and scientific research. Machine learning models will become more efficient and accessible, enabling solutions to complex global challenges.',
          'Machine learning can help': 'organizations make data-driven decisions by identifying patterns and insights that would be impossible for humans to detect manually. From predictive analytics to automated customer service, ML applications are transforming industries worldwide.',
          default: 'an exciting field that combines mathematics, computer science, and domain expertise to solve real-world problems. The applications are limitless, from autonomous vehicles to personalized medicine.'
        };
        
        const generated = completions[prompt] || completions.default;
        
        setResult({
          text: generated,
          tokens: generated.split(' ').length,
          model: 'GPT-4-Turbo',
          temperature: 0.7
        });
        setProcessing(false);
      }
    }
  };

  const currentDemo = demos[demoType];
  const IconComponent = currentDemo.icon;

  const handleRun = async () => {
    if (!inputData.trim()) return;
    setIsRunning(true);
    await currentDemo.process(inputData);
    setIsRunning(false);
  };

  const handleReset = () => {
    setResult(null);
    setInputData('');
    setConfidence(0);
    setProcessing(false);
    setIsRunning(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <IconComponent className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{currentDemo.title}</h3>
            <p className="text-sm text-gray-600">{currentDemo.description}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handleRun}
            disabled={!inputData.trim() || isRunning}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              !inputData.trim() || isRunning
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isRunning ? 'Processing...' : 'Run Demo'}</span>
          </button>
          <button
            onClick={handleReset}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="space-y-4">
          <h4 className="font-medium text-gray-900">Input</h4>
          
          {demoType === 'objectDetection' ? (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">Upload an image for object detection</p>
              <div className="flex space-x-2 justify-center">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                  <Upload className="w-4 h-4" />
                  <span>Upload Image</span>
                </button>
                <button 
                  onClick={() => setInputData('sample-image.jpg')}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                >
                  Use Sample
                </button>
              </div>
              {inputData && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">Image loaded: {inputData}</p>
                </div>
              )}
            </div>
          ) : (
            <textarea
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              placeholder={currentDemo.placeholder}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          )}

          {demoType === 'sentiment' && inputData && (
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-sm text-gray-600">
                Character count: {inputData.length} | Word count: {inputData.split(' ').length}
              </p>
            </div>
          )}
        </div>

        {/* Output Section */}
        <div className="space-y-4">
          <h4 className="font-medium text-gray-900">Output</h4>
          
          {processing ? (
            <div className="bg-blue-50 rounded-lg p-6 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mr-3"></div>
              <span className="text-blue-800">Processing with AI model...</span>
            </div>
          ) : result ? (
            <div className="space-y-4">
              {demoType === 'sentiment' && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-gray-900">Sentiment:</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      result.sentiment === 'positive' ? 'bg-green-100 text-green-800' :
                      result.sentiment === 'negative' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {result.sentiment.charAt(0).toUpperCase() + result.sentiment.slice(1)}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {Object.entries(result.details).map(([emotion, score]) => (
                      <div key={emotion} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 capitalize">{emotion}:</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                emotion === 'positive' ? 'bg-green-500' :
                                emotion === 'negative' ? 'bg-red-500' : 'bg-gray-500'
                              }`}
                              style={{ width: `${score * 100}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-900">
                            {(score * 100).toFixed(1)}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {demoType === 'objectDetection' && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 mb-3">Detected Objects:</h5>
                  <div className="space-y-2">
                    {result.objects.map((obj, index) => (
                      <div key={index} className="flex items-center justify-between bg-white p-2 rounded-md">
                        <span className="text-sm font-medium text-gray-900">{obj.name}</span>
                        <span className="text-sm text-gray-600">{(obj.confidence * 100).toFixed(1)}% confident</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 text-xs text-gray-500">
                    Processing time: {result.processingTime} | Resolution: {result.resolution}
                  </div>
                </div>
              )}

              {demoType === 'textGeneration' && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 mb-3">Generated Text:</h5>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">{result.text}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Tokens: {result.tokens}</span>
                    <span>Model: {result.model}</span>
                    <span>Temperature: {result.temperature}</span>
                  </div>
                </div>
              )}

              <div className="flex space-x-2">
                <button className="flex items-center space-x-2 px-3 py-1 bg-green-100 text-green-800 rounded-md hover:bg-green-200 text-sm">
                  <Download className="w-3 h-3" />
                  <span>Export</span>
                </button>
                <button className="flex items-center space-x-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 text-sm">
                  <Share2 className="w-3 h-3" />
                  <span>Share</span>
                </button>
                <button className="flex items-center space-x-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-md hover:bg-purple-200 text-sm">
                  <Code className="w-3 h-3" />
                  <span>View Code</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <p className="text-gray-500">Run the demo to see AI-powered results</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Advanced Search Component with AI
const AdvancedSearchEngine = () => {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    type: 'all',
    category: 'all',
    difficulty: 'all',
    dateRange: 'all'
  });
  const [results, setResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchMode, setSearchMode] = useState('semantic'); // semantic, keyword, ai

  const searchModes = {
    semantic: {
      name: 'Semantic Search',
      description: 'AI-powered understanding of meaning and context',
      icon: Brain
    },
    keyword: {
      name: 'Keyword Search',
      description: 'Traditional exact word matching',
      icon: Search
    },
    ai: {
      name: 'AI Assistant',
      description: 'Natural language questions and answers',
      icon: MessageSquare
    }
  };

  const sampleContent = [
    {
      id: 1,
      type: 'project',
      title: 'Real-time Object Detection for Autonomous Vehicles',
      content: 'Computer vision system using YOLO algorithm achieving 95% accuracy',
      category: 'Computer Vision',
      difficulty: 'Advanced',
      tags: ['YOLO', 'Computer Vision', 'Autonomous Vehicles', 'Real-time'],
      date: '2024-01-15'
    },
    {
      id: 2,
      type: 'blog',
      title: 'The Future of Transformer Models in NLP',
      content: 'Deep dive into transformer architecture and its applications',
      category: 'NLP',
      difficulty: 'Intermediate',
      tags: ['Transformers', 'NLP', 'BERT', 'GPT'],
      date: '2024-01-10'
    },
    {
      id: 3,
      type: 'project',
      title: 'Predictive Customer Churn Analysis',
      content: 'Machine learning model predicting customer behavior with 87% accuracy',
      category: 'Data Science',
      difficulty: 'Intermediate',
      tags: ['Churn Analysis', 'Predictive Analytics', 'Customer Behavior'],
      date: '2024-01-05'
    }
  ];

  const performSearch = async () => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    await new Promise(resolve => setTimeout(resolve, 800));

    let filteredResults = sampleContent.filter(item => {
      const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase()) ||
                          item.content.toLowerCase().includes(query.toLowerCase()) ||
                          item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
      
      const matchesType = filters.type === 'all' || item.type === filters.type;
      const matchesCategory = filters.category === 'all' || item.category === filters.category;
      const matchesDifficulty = filters.difficulty === 'all' || item.difficulty === filters.difficulty;
      
      return matchesQuery && matchesType && matchesCategory && matchesDifficulty;
    });

    // Simulate AI-enhanced results based on search mode
    if (searchMode === 'semantic') {
      // Add semantic similarity scoring
      filteredResults = filteredResults.map(result => ({
        ...result,
        relevanceScore: Math.random() * 0.3 + 0.7,
        semanticMatch: true
      }));
    }

    if (searchMode === 'ai') {
      // Add AI-generated insights
      filteredResults = filteredResults.map(result => ({
        ...result,
        aiSummary: `This ${result.type} focuses on ${result.category.toLowerCase()} and demonstrates ${result.difficulty.toLowerCase()}-level concepts.`,
        relatedQuestions: [
          `How does this relate to other ${result.category} projects?`,
          `What are the key technical challenges?`,
          `What are similar applications in industry?`
        ]
      }));
    }

    setResults(filteredResults.sort((a, b) => (b.relevanceScore || 0.5) - (a.relevanceScore || 0.5)));
    setIsSearching(false);
  };

  const generateSuggestions = (input) => {
    const suggestions = [
      'computer vision projects',
      'machine learning algorithms',
      'natural language processing',
      'deep learning architectures',
      'AI ethics and fairness',
      'production ML systems'
    ];
    
    if (input.length > 2) {
      setSuggestions(suggestions.filter(s => s.includes(input.toLowerCase())));
    } else {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    generateSuggestions(query);
  }, [query]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced AI-Powered Search</h2>
          
          {/* Search Mode Selection */}
          <div className="flex space-x-4 mb-6">
            {Object.entries(searchModes).map(([mode, config]) => {
              const IconComponent = config.icon;
              return (
                <button
                  key={mode}
                  onClick={() => setSearchMode(mode)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    searchMode === mode
                      ? 'bg-blue-100 text-blue-800 border border-blue-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="text-sm font-medium">{config.name}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && performSearch()}
              placeholder={`Search using ${searchModes[searchMode].description.toLowerCase()}...`}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={performSearch}
              disabled={!query.trim() || isSearching}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 text-sm"
            >
              {isSearching ? 'Searching...' : 'Search'}
            </button>
          </div>

          {/* Search Suggestions */}
          {suggestions.length > 0 && (
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Suggestions:</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(suggestion)}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Filters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <select
              value={filters.type}
              onChange={(e) => setFilters({...filters, type: e.target.value})}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Types</option>
              <option value="project">Projects</option>
              <option value="blog">Blog Posts</option>
              <option value="case-study">Case Studies</option>
            </select>
            
            <select
              value={filters.category}
              onChange={(e) => setFilters({...filters, category: e.target.value})}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Categories</option>
              <option value="Computer Vision">Computer Vision</option>
              <option value="NLP">NLP</option>
              <option value="Data Science">Data Science</option>
            </select>
            
            <select
              value={filters.difficulty}
              onChange={(e) => setFilters({...filters, difficulty: e.target.value})}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            
            <select
              value={filters.dateRange}
              onChange={(e) => setFilters({...filters, dateRange: e.target.value})}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Any Date</option>
              <option value="week">Past Week</option>
              <option value="month">Past Month</option>
              <option value="year">Past Year</option>
            </select>
          </div>
        </div>

        {/* Search Results */}
        <div className="p-6">
          {isSearching ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mr-3"></div>
              <span className="text-gray-600">Searching with AI...</span>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Found {results.length} results using {searchModes[searchMode].name}
              </p>
              {results.map((result) => (
                <div key={result.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                          {result.type}
                        </span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {result.category}
                        </span>
                        {result.relevanceScore && (
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                            {(result.relevanceScore * 100).toFixed(0)}% match
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{result.title}</h3>
                      <p className="text-gray-600 mb-3">{result.content}</p>
                      
                      {result.aiSummary && (
                        <div className="bg-blue-50 rounded-lg p-3 mb-3">
                          <p className="text-blue-800 text-sm">{result.aiSummary}</p>
                        </div>
                      )}
                      
                      <div className="flex flex-wrap gap-1 mb-2">
                        {result.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {result.relatedQuestions && (
                        <div className="mt-3">
                          <p className="text-sm font-medium text-gray-700 mb-1">Related Questions:</p>
                          <div className="space-y-1">
                            {result.relatedQuestions.map((question, index) => (
                              <button
                                key={index}
                                onClick={() => setQuery(question)}
                                className="block text-sm text-blue-600 hover:text-blue-800 hover:underline"
                              >
                                • {question}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col items-end space-y-2 ml-4">
                      <span className="text-xs text-gray-500">{result.date}</span>
                      <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : query ? (
            <div className="text-center py-8">
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters</p>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">Enter a search query to find projects, articles, and insights</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// User Dashboard Component
const UserDashboard = () => {
  const [activeView, setActiveView] = useState('overview');
  const [userStats, setUserStats] = useState({
    totalViews: 15240,
    uniqueVisitors: 8920,
    projectViews: 6540,
    blogViews: 4320,
    contactRequests: 45,
    downloadCount: 280
  });

  const views = {
    overview: 'Dashboard Overview',
    content: 'Content Management',
    analytics: 'Analytics & Insights',
    settings: 'Site Settings',
    api: 'API Management'
  };

  const recentActivity = [
    { type: 'view', content: 'Computer Vision Project', time: '2 minutes ago', icon: Eye },
    { type: 'contact', content: 'New consultation request', time: '1 hour ago', icon: MessageSquare },
    { type: 'download', content: 'Resume downloaded', time: '3 hours ago', icon: Download },
    { type: 'share', content: 'Project shared on LinkedIn', time: '5 hours ago', icon: Share2 },
    { type: 'view', content: 'AI Insights blog post', time: '1 day ago', icon: Eye }
  ];

  const quickActions = [
    { name: 'Add New Project', icon: Database, color: 'blue' },
    { name: 'Write Blog Post', icon: MessageSquare, color: 'green' },
    { name: 'Update Resume', icon: Download, color: 'purple' },
    { name: 'View Analytics', icon: BarChart3, color: 'orange' },
    { name: 'Check Messages', icon: MessageSquare, color: 'red' },
    { name: 'Backup Content', icon: Database, color: 'gray' }
  ];

  const performanceMetrics = [
    { label: 'Page Load Speed', value: '1.2s', status: 'good', target: '<2s' },
    { label: 'SEO Score', value: '94/100', status: 'excellent', target: '>90' },
    { label: 'Accessibility', value: '98/100', status: 'excellent', target: '>95' },
    { label: 'Mobile Score', value: '96/100', status: 'excellent', target: '>90' },
    { label: 'Security', value: 'A+', status: 'excellent', target: 'A' },
    { label: 'Uptime', value: '99.9%', status: 'excellent', target: '>99%' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Monitor className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Activity className="w-4 h-4 text-green-500" />
                <span>Site Status: Online</span>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
              <nav className="space-y-2">
                {Object.entries(views).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setActiveView(key)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      activeView === key
                        ? 'bg-blue-100 text-blue-800 font-medium'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeView === 'overview' && (
              <div className="space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Total Views</p>
                        <p className="text-2xl font-bold text-gray-900">{userStats.totalViews.toLocaleString()}</p>
                        <p className="text-sm text-green-600">+12% from last month</p>
                      </div>
                      <Eye className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Contact Requests</p>
                        <p className="text-2xl font-bold text-gray-900">{userStats.contactRequests}</p>
                        <p className="text-sm text-green-600">+8 this week</p>
                      </div>
                      <MessageSquare className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Downloads</p>
                        <p className="text-2xl font-bold text-gray-900">{userStats.downloadCount}</p>
                        <p className="text-sm text-blue-600">Resume & Portfolio</p>
                      </div>
                      <Download className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {quickActions.map((action, index) => {
                      const IconComponent = action.icon;
                      return (
                        <button
                          key={index}
                          className={`p-4 rounded-lg border-2 border-dashed border-${action.color}-200 hover:border-${action.color}-300 hover:bg-${action.color}-50 transition-colors text-center`}
                        >
                          <IconComponent className={`w-6 h-6 text-${action.color}-600 mx-auto mb-2`} />
                          <span className="text-sm font-medium text-gray-700">{action.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {recentActivity.map((activity, index) => {
                      const IconComponent = activity.icon;
                      return (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-4 h-4 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{activity.content}</p>
                            <p className="text-xs text-gray-500">{activity.time}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Site Performance</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {performanceMetrics.map((metric, index) => (
                      <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-lg font-bold text-gray-900">{metric.value}</p>
                        <p className="text-sm text-gray-600">{metric.label}</p>
                        <p className="text-xs text-gray-500">Target: {metric.target}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeView !== 'overview' && (
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{views[activeView]}</h3>
                <p className="text-gray-600 mb-6">This section would contain the {activeView} interface.</p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Configure {views[activeView]}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// API Integration Manager
const APIIntegrationManager = () => {
  const [apiKeys, setApiKeys] = useState([
    { id: 1, name: 'Google Analytics', key: 'GA-***********', status: 'active', lastUsed: '2 hours ago' },
    { id: 2, name: 'EmailJS', key: 'ejs_***********', status: 'active', lastUsed: '1 day ago' },
    { id: 3, name: 'OpenAI API', key: 'sk-***********', status: 'inactive', lastUsed: 'Never' }
  ]);

  const [webhooks, setWebhooks] = useState([
    { id: 1, url: 'https://api.jesseahawkins.com/contact', event: 'form_submission', status: 'active' },
    { id: 2, url: 'https://api.jesseahawkins.com/analytics', event: 'page_view', status: 'active' }
  ]);

  const [apiStats, setApiStats] = useState({
    totalRequests: 12540,
    successRate: 99.2,
    avgResponseTime: 156,
    errorCount: 8
  });

  const availableIntegrations = [
    { name: 'Stripe', description: 'Payment processing for consultations', icon: Database, status: 'available' },
    { name: 'Calendly', description: 'Automated scheduling system', icon: Calendar, status: 'available' },
    { name: 'Mailchimp', description: 'Email marketing automation', icon: Mail, status: 'available' },
    { name: 'Slack', description: 'Team communication and notifications', icon: MessageSquare, status: 'available' },
    { name: 'GitHub', description: 'Repository integration and project sync', icon: Code, status: 'connected' },
    { name: 'LinkedIn', description: 'Professional network integration', icon: Globe, status: 'connected' }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Zap className="w-6 h-6 mr-2 text-blue-600" />
              API Integration Manager
            </h2>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
              <Key className="w-4 h-4" />
              <span>Add Integration</span>
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* API Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-blue-600 mb-2">Total Requests</h3>
              <p className="text-2xl font-bold text-blue-900">{apiStats.totalRequests.toLocaleString()}</p>
              <p className="text-sm text-blue-700">Last 30 days</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-green-600 mb-2">Success Rate</h3>
              <p className="text-2xl font-bold text-green-900">{apiStats.successRate}%</p>
              <p className="text-sm text-green-700">Uptime performance</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-purple-600 mb-2">Response Time</h3>
              <p className="text-2xl font-bold text-purple-900">{apiStats.avgResponseTime}ms</p>
              <p className="text-sm text-purple-700">Average latency</p>
            </div>
            <div className="bg-red-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-red-600 mb-2">Errors</h3>
              <p className="text-2xl font-bold text-red-900">{apiStats.errorCount}</p>
              <p className="text-sm text-red-700">Last 24 hours</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* API Keys Management */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">API Keys</h3>
                <div className="space-y-3">
                  {apiKeys.map((key) => (
                    <div key={key.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{key.name}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          key.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {key.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 font-mono mb-2">{key.key}</p>
                      <p className="text-xs text-gray-500">Last used: {key.lastUsed}</p>
                      <div className="flex space-x-2 mt-3">
                        <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                          Edit
                        </button>
                        <button className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700">
                          Revoke
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Webhooks */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Webhooks</h3>
                <div className="space-y-3">
                  {webhooks.map((webhook) => (
                    <div key={webhook.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">{webhook.event}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          webhook.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {webhook.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 font-mono break-all">{webhook.url}</p>
                      <div className="flex space-x-2 mt-3">
                        <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                          Test
                        </button>
                        <button className="px-3 py-1 bg-gray-600 text-white text-sm rounded hover:bg-gray-700">
                          Edit
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Available Integrations */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Integrations</h3>
              <div className="grid grid-cols-1 gap-4">
                {availableIntegrations.map((integration, index) => {
                  const IconComponent = integration.icon;
                  return (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-gray-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{integration.name}</h4>
                            <p className="text-sm text-gray-600">{integration.description}</p>
                          </div>
                        </div>
                        <button className={`px-3 py-1 text-sm rounded font-medium ${
                          integration.status === 'connected'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}>
                          {integration.status === 'connected' ? 'Connected' : 'Connect'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Enhanced Features Component
const EnhancedFeaturesDemo = () => {
  const [activeFeature, setActiveFeature] = useState('demos');

  const features = {
    demos: { name: 'Interactive Demos', component: InteractiveAIDemo },
    search: { name: 'Advanced Search', component: AdvancedSearchEngine },
    dashboard: { name: 'User Dashboard', component: UserDashboard },
    api: { name: 'API Integration', component: APIIntegrationManager }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Feature Navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {Object.entries(features).map(([key, feature]) => (
              <button
                key={key}
                onClick={() => setActiveFeature(key)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeFeature === key
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {feature.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Feature Content */}
      <div className="py-8">
        {activeFeature === 'demos' && (
          <div className="max-w-6xl mx-auto px-4 space-y-8">
            <InteractiveAIDemo demoType="sentiment" />
            <InteractiveAIDemo demoType="objectDetection" />
            <InteractiveAIDemo demoType="textGeneration" />
          </div>
        )}
        {activeFeature === 'search' && <AdvancedSearchEngine />}
        {activeFeature === 'dashboard' && <UserDashboard />}
        {activeFeature === 'api' && <APIIntegrationManager />}
      </div>
    </div>
  );
};

export default EnhancedFeaturesDemo;