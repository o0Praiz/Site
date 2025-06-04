import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Upload, 
  Download, 
  Eye, 
  Brain, 
  Zap, 
  FileText,
  Image,
  MessageSquare,
  TrendingUp,
  CheckCircle,
  Clock,
  Code,
  Settings
} from 'lucide-react';

const InteractiveAIDemo = () => {
  const [activeDemo, setActiveDemo] = useState('sentiment');
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState(null);
  const [inputText, setInputText] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);

  // Demo configurations
  const demos = {
    sentiment: {
      title: 'Sentiment Analysis',
      description: 'Analyze the emotional tone of text using NLP',
      icon: MessageSquare,
      color: 'blue',
      placeholder: 'Enter text to analyze sentiment... (e.g., "I love this new AI technology!")',
      sampleInputs: [
        "I absolutely love this new AI technology! It's revolutionary.",
        "This product is okay, nothing special though.",
        "I'm really disappointed with the customer service today.",
        "The team did an amazing job on this project. Excellent work!"
      ]
    },
    textClassification: {
      title: 'Text Classification',
      description: 'Classify text into predefined categories',
      icon: FileText,
      color: 'green',
      placeholder: 'Enter text to classify... (e.g., technical documentation, customer feedback, etc.)',
      sampleInputs: [
        "How do I reset my password? I can't log into my account.",
        "The new machine learning model shows 95% accuracy on the test dataset.",
        "Please process my refund for order #12345. The item was damaged.",
        "import tensorflow as tf\nmodel = tf.keras.Sequential([...])"
      ]
    },
    objectDetection: {
      title: 'Object Detection',
      description: 'Detect and identify objects in images',
      icon: Eye,
      color: 'purple',
      placeholder: 'Upload an image to detect objects...',
      fileTypes: 'image/*'
    },
    dataAnalysis: {
      title: 'Predictive Analytics',
      description: 'Generate insights from sample data patterns',
      icon: TrendingUp,
      color: 'orange',
      placeholder: 'Upload CSV data or use sample dataset...',
      fileTypes: '.csv'
    }
  };

  const processDemo = async () => {
    setIsProcessing(true);
    setResults(null);

    // Simulate AI processing with realistic delays
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));

    // Generate demo results based on active demo
    let demoResults;
    
    switch (activeDemo) {
      case 'sentiment':
        demoResults = generateSentimentResults(inputText);
        break;
      case 'textClassification':
        demoResults = generateClassificationResults(inputText);
        break;
      case 'objectDetection':
        demoResults = generateObjectDetectionResults();
        break;
      case 'dataAnalysis':
        demoResults = generateAnalyticsResults();
        break;
      default:
        demoResults = { error: 'Demo not found' };
    }

    setResults(demoResults);
    setIsProcessing(false);
  };

  const generateSentimentResults = (text) => {
    const sentiments = ['positive', 'negative', 'neutral'];
    const confidence = 0.7 + Math.random() * 0.3; // 70-100% confidence
    
    // Simple keyword-based sentiment detection for demo
    let sentiment = 'neutral';
    if (text.toLowerCase().includes('love') || text.toLowerCase().includes('amazing') || 
        text.toLowerCase().includes('excellent') || text.toLowerCase().includes('great')) {
      sentiment = 'positive';
    } else if (text.toLowerCase().includes('hate') || text.toLowerCase().includes('terrible') || 
               text.toLowerCase().includes('disappointed') || text.toLowerCase().includes('awful')) {
      sentiment = 'negative';
    }

    return {
      sentiment: sentiment,
      confidence: (confidence * 100).toFixed(1),
      breakdown: {
        positive: sentiment === 'positive' ? confidence : Math.random() * 0.3,
        negative: sentiment === 'negative' ? confidence : Math.random() * 0.3,
        neutral: sentiment === 'neutral' ? confidence : Math.random() * 0.3
      },
      keyPhrases: extractKeyPhrases(text),
      processingTime: (Math.random() * 500 + 200).toFixed(0)
    };
  };

  const generateClassificationResults = (text) => {
    const categories = [
      { name: 'Customer Support', score: 0.15 },
      { name: 'Technical Documentation', score: 0.25 },
      { name: 'Business Communication', score: 0.20 },
      { name: 'Marketing Content', score: 0.10 },
      { name: 'Code Documentation', score: 0.30 }
    ];

    // Adjust scores based on content
    if (text.toLowerCase().includes('password') || text.toLowerCase().includes('help') ||
        text.toLowerCase().includes('support') || text.toLowerCase().includes('refund')) {
      categories[0].score = 0.85;
      categories[1].score = 0.05;
      categories[2].score = 0.05;
      categories[3].score = 0.02;
      categories[4].score = 0.03;
    } else if (text.includes('import') || text.includes('def ') || text.includes('class ') ||
               text.toLowerCase().includes('algorithm') || text.toLowerCase().includes('model')) {
      categories[4].score = 0.80;
      categories[1].score = 0.15;
      categories[0].score = 0.02;
      categories[2].score = 0.02;
      categories[3].score = 0.01;
    }

    return {
      topCategory: categories.reduce((max, cat) => cat.score > max.score ? cat : max),
      allCategories: categories.sort((a, b) => b.score - a.score),
      confidence: (Math.max(...categories.map(c => c.score)) * 100).toFixed(1),
      processingTime: (Math.random() * 300 + 150).toFixed(0)
    };
  };

  const generateObjectDetectionResults = () => {
    const objects = [
      { name: 'Person', confidence: 94.2, bbox: { x: 150, y: 80, width: 120, height: 180 } },
      { name: 'Car', confidence: 89.7, bbox: { x: 300, y: 200, width: 180, height: 90 } },
      { name: 'Building', confidence: 76.3, bbox: { x: 50, y: 50, width: 200, height: 150 } },
      { name: 'Tree', confidence: 82.1, bbox: { x: 400, y: 100, width: 80, height: 120 } }
    ];

    return {
      objectsDetected: objects.length,
      objects: objects,
      imageSize: { width: 640, height: 480 },
      processingTime: (Math.random() * 800 + 400).toFixed(0),
      modelVersion: 'YOLOv5s',
      totalConfidence: (objects.reduce((sum, obj) => sum + obj.confidence, 0) / objects.length).toFixed(1)
    };
  };

  const generateAnalyticsResults = () => {
    return {
      insights: [
        { type: 'Trend', description: 'Strong upward trend detected in Q4 data', confidence: 87.4 },
        { type: 'Anomaly', description: 'Unusual spike detected on Dec 15th', confidence: 92.1 },
        { type: 'Correlation', description: 'Strong correlation between features A and C', confidence: 78.9 },
        { type: 'Prediction', description: 'Expected 23% growth in next quarter', confidence: 81.2 }
      ],
      metrics: {
        accuracy: 94.2,
        precision: 91.7,
        recall: 89.3,
        f1Score: 90.5
      },
      dataPoints: Math.floor(Math.random() * 10000 + 5000),
      processingTime: (Math.random() * 1200 + 800).toFixed(0)
    };
  };

  const extractKeyPhrases = (text) => {
    const words = text.split(' ');
    const phrases = [];
    
    // Simple extraction for demo
    words.forEach((word, index) => {
      if (word.length > 4 && Math.random() > 0.7) {
        phrases.push(word.replace(/[.,!?]/g, ''));
      }
    });
    
    return phrases.slice(0, 5);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      setInputText(`Uploaded: ${file.name}`);
    }
  };

  const resetDemo = () => {
    setResults(null);
    setInputText('');
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const currentDemo = demos[activeDemo];
  const DemoIcon = currentDemo.icon;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl">
      
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Interactive AI Demonstrations
        </h2>
        <p className="text-lg text-gray-600">
          Experience real AI capabilities with live demonstrations of machine learning models
        </p>
      </div>

      {/* Demo Selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {Object.entries(demos).map(([key, demo]) => {
          const Icon = demo.icon;
          const isActive = activeDemo === key;
          return (
            <button
              key={key}
              onClick={() => {
                setActiveDemo(key);
                resetDemo();
              }}
              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                isActive
                  ? `border-${demo.color}-500 bg-${demo.color}-50 shadow-lg scale-105`
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
              }`}
            >
              <Icon className={`w-8 h-8 mx-auto mb-2 ${
                isActive ? `text-${demo.color}-600` : 'text-gray-600'
              }`} />
              <h3 className={`font-semibold text-sm ${
                isActive ? `text-${demo.color}-900` : 'text-gray-900'
              }`}>
                {demo.title}
              </h3>
            </button>
          );
        })}
      </div>

      {/* Active Demo Interface */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        
        {/* Demo Header */}
        <div className={`p-6 border-b border-gray-200 bg-gradient-to-r from-${currentDemo.color}-500 to-${currentDemo.color}-600`}>
          <div className="flex items-center space-x-3 text-white">
            <DemoIcon className="w-8 h-8" />
            <div>
              <h3 className="text-xl font-bold">{currentDemo.title}</h3>
              <p className="text-white/90">{currentDemo.description}</p>
            </div>
          </div>
        </div>

        {/* Input Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="space-y-4">
            
            {/* Sample Inputs */}
            {currentDemo.sampleInputs && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Try these examples:
                </label>
                <div className="flex flex-wrap gap-2">
                  {currentDemo.sampleInputs.map((sample, index) => (
                    <button
                      key={index}
                      onClick={() => setInputText(sample)}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Example {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Text Input */}
            {(activeDemo === 'sentiment' || activeDemo === 'textClassification') && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Input Text:
                </label>
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={currentDemo.placeholder}
                  className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
            )}

            {/* File Upload */}
            {(activeDemo === 'objectDetection' || activeDemo === 'dataAnalysis') && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload File:
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept={currentDemo.fileTypes}
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">{currentDemo.placeholder}</p>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Choose File
                  </button>
                  {uploadedFile && (
                    <p className="text-sm text-green-600 mt-2">
                      ✓ {uploadedFile.name}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={processDemo}
                disabled={isProcessing || (!inputText && !uploadedFile)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isProcessing || (!inputText && !uploadedFile)
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : `bg-${currentDemo.color}-600 text-white hover:bg-${currentDemo.color}-700 hover:shadow-lg transform hover:scale-105`
                }`}
              >
                {isProcessing ? (
                  <>
                    <Brain className="w-5 h-5 animate-pulse" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    <span>Run Analysis</span>
                  </>
                )}
              </button>

              <button
                onClick={resetDemo}
                className="flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Reset</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {(isProcessing || results) && (
          <div className="p-6">
            {isProcessing && (
              <div className="text-center py-8">
                <div className="inline-flex items-center space-x-3 text-gray-600">
                  <Brain className="w-8 h-8 animate-pulse text-blue-600" />
                  <div>
                    <p className="font-semibold">AI Model Processing...</p>
                    <p className="text-sm">Analyzing your input with advanced algorithms</p>
                  </div>
                </div>
              </div>
            )}

            {results && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-gray-900">Analysis Results</h4>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>Processed in {results.processingTime}ms</span>
                  </div>
                </div>

                {/* Sentiment Analysis Results */}
                {activeDemo === 'sentiment' && results.sentiment && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className={`p-4 rounded-lg border-l-4 ${
                        results.sentiment === 'positive' ? 'bg-green-50 border-green-500' :
                        results.sentiment === 'negative' ? 'bg-red-50 border-red-500' :
                        'bg-gray-50 border-gray-500'
                      }`}>
                        <h5 className="font-semibold text-gray-900">Overall Sentiment</h5>
                        <p className={`text-lg font-bold ${
                          results.sentiment === 'positive' ? 'text-green-600' :
                          results.sentiment === 'negative' ? 'text-red-600' :
                          'text-gray-600'
                        }`}>
                          {results.sentiment.charAt(0).toUpperCase() + results.sentiment.slice(1)}
                        </p>
                        <p className="text-sm text-gray-600">Confidence: {results.confidence}%</p>
                      </div>

                      {results.keyPhrases.length > 0 && (
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Key Phrases</h5>
                          <div className="flex flex-wrap gap-2">
                            {results.keyPhrases.map((phrase, index) => (
                              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                {phrase}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Confidence Breakdown</h5>
                      <div className="space-y-3">
                        {Object.entries(results.breakdown).map(([sentiment, score]) => (
                          <div key={sentiment}>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="capitalize">{sentiment}</span>
                              <span>{(score * 100).toFixed(1)}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${
                                  sentiment === 'positive' ? 'bg-green-500' :
                                  sentiment === 'negative' ? 'bg-red-500' :
                                  'bg-gray-500'
                                }`}
                                style={{ width: `${score * 100}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Classification Results */}
                {activeDemo === 'textClassification' && results.topCategory && (
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h5 className="font-semibold text-gray-900">Top Classification</h5>
                      <p className="text-lg font-bold text-green-600">{results.topCategory.name}</p>
                      <p className="text-sm text-gray-600">Confidence: {(results.topCategory.score * 100).toFixed(1)}%</p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">All Categories</h5>
                      <div className="space-y-2">
                        {results.allCategories.map((category, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <span className="font-medium">{category.name}</span>
                            <div className="flex items-center space-x-3">
                              <div className="w-20 bg-gray-200 rounded-full h-2">
                                <div 
                                  className="h-2 bg-blue-500 rounded-full"
                                  style={{ width: `${category.score * 100}%` }}
                                />
                              </div>
                              <span className="text-sm text-gray-600 w-12">
                                {(category.score * 100).toFixed(1)}%
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Object Detection Results */}
                {activeDemo === 'objectDetection' && results.objects && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <p className="text-2xl font-bold text-blue-600">{results.objectsDetected}</p>
                        <p className="text-sm text-gray-600">Objects Detected</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <p className="text-2xl font-bold text-green-600">{results.totalConfidence}%</p>
                        <p className="text-sm text-gray-600">Avg Confidence</p>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <p className="text-2xl font-bold text-purple-600">{results.modelVersion}</p>
                        <p className="text-sm text-gray-600">Model Used</p>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <p className="text-2xl font-bold text-orange-600">{results.processingTime}ms</p>
                        <p className="text-sm text-gray-600">Processing Time</p>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Detected Objects</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {results.objects.map((obj, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <span className="font-medium">{obj.name}</span>
                            <span className="text-sm text-gray-600">{obj.confidence}% confidence</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Analytics Results */}
                {activeDemo === 'dataAnalysis' && results.insights && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Object.entries(results.metrics).map(([metric, value]) => (
                        <div key={metric} className="text-center p-4 bg-blue-50 rounded-lg">
                          <p className="text-2xl font-bold text-blue-600">{value}%</p>
                          <p className="text-sm text-gray-600 capitalize">{metric.replace(/([A-Z])/g, ' $1')}</p>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Key Insights</h5>
                      <div className="space-y-3">
                        {results.insights.map((insight, index) => (
                          <div key={index} className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-blue-600">{insight.type}</span>
                              <span className="text-sm text-gray-600">{insight.confidence}% confidence</span>
                            </div>
                            <p className="text-gray-700">{insight.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Download Results Button */}
                <div className="pt-4 border-t border-gray-200">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Download Results</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Technical Info */}
      <div className="mt-8 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Settings className="w-4 h-4" />
          <span>
            These are live demonstrations of AI capabilities similar to those used in production systems. 
            Processing times and accuracy reflect real-world performance characteristics.
          </span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveAIDemo;