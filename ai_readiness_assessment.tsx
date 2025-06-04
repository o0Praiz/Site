import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, AlertTriangle, XCircle, Info, ArrowRight, 
  Database, Shield, Users, Zap, Brain, Target, 
  TrendingUp, Clock, DollarSign, Star, Download,
  ChevronRight, ChevronLeft, BarChart3
} from 'lucide-react';

const AIReadinessAssessment = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [responses, setResponses] = useState({});
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const assessmentSections = [
    {
      id: 'data_infrastructure',
      title: 'Data Infrastructure',
      description: 'Assess your organization\'s data readiness for AI implementation',
      icon: Database,
      questions: [
        {
          id: 'data_quality',
          question: 'How would you rate the overall quality of your organization\'s data?',
          type: 'scale',
          options: [
            { value: 1, label: 'Poor - Inconsistent, incomplete, or unreliable data' },
            { value: 2, label: 'Fair - Some data quality issues but manageable' },
            { value: 3, label: 'Good - Generally reliable with minor quality issues' },
            { value: 4, label: 'Excellent - High quality, consistent, and well-maintained' }
          ]
        },
        {
          id: 'data_volume',
          question: 'What volume of relevant data does your organization have?',
          type: 'scale',
          options: [
            { value: 1, label: 'Limited - Less than 1GB of relevant data' },
            { value: 2, label: 'Moderate - 1GB to 100GB of relevant data' },
            { value: 3, label: 'Substantial - 100GB to 10TB of relevant data' },
            { value: 4, label: 'Extensive - More than 10TB of relevant data' }
          ]
        },
        {
          id: 'data_accessibility',
          question: 'How accessible is your data for analysis and processing?',
          type: 'scale',
          options: [
            { value: 1, label: 'Difficult - Data is siloed and hard to access' },
            { value: 2, label: 'Moderate - Some data accessible with effort' },
            { value: 3, label: 'Good - Most data accessible through APIs or tools' },
            { value: 4, label: 'Excellent - Centralized, easily accessible data platform' }
          ]
        },
        {
          id: 'data_governance',
          question: 'Does your organization have data governance policies and procedures?',
          type: 'scale',
          options: [
            { value: 1, label: 'None - No formal data governance' },
            { value: 2, label: 'Basic - Some informal guidelines' },
            { value: 3, label: 'Moderate - Formal policies with some enforcement' },
            { value: 4, label: 'Advanced - Comprehensive governance with strict enforcement' }
          ]
        }
      ]
    },
    {
      id: 'technical_capabilities',
      title: 'Technical Capabilities',
      description: 'Evaluate your technical infrastructure and expertise',
      icon: Zap,
      questions: [
        {
          id: 'cloud_infrastructure',
          question: 'What is your organization\'s cloud infrastructure maturity?',
          type: 'scale',
          options: [
            { value: 1, label: 'On-premise only - No cloud infrastructure' },
            { value: 2, label: 'Hybrid - Some cloud adoption with on-premise systems' },
            { value: 3, label: 'Cloud-first - Majority of systems in cloud' },
            { value: 4, label: 'Cloud-native - Fully cloud-based with modern architecture' }
          ]
        },
        {
          id: 'development_team',
          question: 'Does your organization have in-house development capabilities?',
          type: 'scale',
          options: [
            { value: 1, label: 'None - No internal development team' },
            { value: 2, label: 'Limited - Small team with basic capabilities' },
            { value: 3, label: 'Moderate - Capable team with some AI/ML experience' },
            { value: 4, label: 'Advanced - Strong team with AI/ML expertise' }
          ]
        },
        {
          id: 'api_integration',
          question: 'How comfortable is your organization with API integrations?',
          type: 'scale',
          options: [
            { value: 1, label: 'Uncomfortable - Limited API experience' },
            { value: 2, label: 'Basic - Some API integrations completed' },
            { value: 3, label: 'Comfortable - Regular API integrations' },
            { value: 4, label: 'Expert - Complex API ecosystem management' }
          ]
        },
        {
          id: 'security_standards',
          question: 'What is your organization\'s cybersecurity maturity level?',
          type: 'scale',
          options: [
            { value: 1, label: 'Basic - Minimal security measures' },
            { value: 2, label: 'Standard - Industry standard security practices' },
            { value: 3, label: 'Advanced - Robust security with compliance certifications' },
            { value: 4, label: 'Enterprise - Military-grade security and compliance' }
          ]
        }
      ]
    },
    {
      id: 'organizational_readiness',
      title: 'Organizational Readiness',
      description: 'Assess your organization\'s culture and change management capabilities',
      icon: Users,
      questions: [
        {
          id: 'leadership_support',
          question: 'How supportive is your leadership team of AI initiatives?',
          type: 'scale',
          options: [
            { value: 1, label: 'Skeptical - Leadership is hesitant about AI adoption' },
            { value: 2, label: 'Cautious - Some interest but concerns about risks' },
            { value: 3, label: 'Supportive - Leadership sees value in AI implementation' },
            { value: 4, label: 'Champion - Leadership actively drives AI transformation' }
          ]
        },
        {
          id: 'change_management',
          question: 'How effective is your organization at managing change?',
          type: 'scale',
          options: [
            { value: 1, label: 'Poor - Resistance to change is common' },
            { value: 2, label: 'Fair - Change happens but with significant effort' },
            { value: 3, label: 'Good - Well-structured change management processes' },
            { value: 4, label: 'Excellent - Agile organization that embraces change' }
          ]
        },
        {
          id: 'digital_literacy',
          question: 'What is the digital literacy level of your workforce?',
          type: 'scale',
          options: [
            { value: 1, label: 'Low - Limited comfort with digital tools' },
            { value: 2, label: 'Moderate - Basic digital skills across the organization' },
            { value: 3, label: 'High - Workforce comfortable with advanced tools' },
            { value: 4, label: 'Expert - Digitally native workforce' }
          ]
        },
        {
          id: 'innovation_culture',
          question: 'How would you describe your organization\'s innovation culture?',
          type: 'scale',
          options: [
            { value: 1, label: 'Conservative - Risk-averse, traditional approaches' },
            { value: 2, label: 'Cautious - Some experimentation with low risk tolerance' },
            { value: 3, label: 'Progressive - Regular innovation with managed risk' },
            { value: 4, label: 'Cutting-edge - High risk tolerance, innovation-first culture' }
          ]
        }
      ]
    },
    {
      id: 'business_objectives',
      title: 'Business Objectives',
      description: 'Define your AI goals and expected outcomes',
      icon: Target,
      questions: [
        {
          id: 'primary_goal',
          question: 'What is your primary goal for AI implementation?',
          type: 'multiple_choice',
          options: [
            { value: 'cost_reduction', label: 'Cost reduction and operational efficiency' },
            { value: 'revenue_growth', label: 'Revenue growth and new opportunities' },
            { value: 'customer_experience', label: 'Enhanced customer experience' },
            { value: 'competitive_advantage', label: 'Competitive advantage and differentiation' },
            { value: 'compliance', label: 'Compliance and risk management' }
          ]
        },
        {
          id: 'timeline_expectations',
          question: 'What is your expected timeline for seeing AI results?',
          type: 'scale',
          options: [
            { value: 1, label: 'Immediate - Within 3 months' },
            { value: 2, label: 'Short-term - 3-6 months' },
            { value: 3, label: 'Medium-term - 6-12 months' },
            { value: 4, label: 'Long-term - 12+ months' }
          ]
        },
        {
          id: 'budget_range',
          question: 'What is your estimated budget range for AI implementation?',
          type: 'scale',
          options: [
            { value: 1, label: 'Under $50K - Small pilot project' },
            { value: 2, label: '$50K - $200K - Moderate implementation' },
            { value: 3, label: '$200K - $500K - Substantial investment' },
            { value: 4, label: '$500K+ - Enterprise-level transformation' }
          ]
        },
        {
          id: 'success_metrics',
          question: 'How will you measure AI implementation success?',
          type: 'multiple_choice',
          options: [
            { value: 'roi', label: 'Return on investment (ROI)' },
            { value: 'efficiency', label: 'Process efficiency improvements' },
            { value: 'accuracy', label: 'Accuracy and quality improvements' },
            { value: 'satisfaction', label: 'Customer/employee satisfaction' },
            { value: 'speed', label: 'Speed and response time improvements' }
          ]
        }
      ]
    }
  ];

  const calculateResults = () => {
    const sectionScores = {};
    let totalScore = 0;
    let questionCount = 0;

    assessmentSections.forEach(section => {
      let sectionTotal = 0;
      let sectionQuestions = 0;

      section.questions.forEach(question => {
        const response = responses[question.id];
        if (response && question.type === 'scale') {
          sectionTotal += response;
          sectionQuestions++;
          totalScore += response;
          questionCount++;
        }
      });

      sectionScores[section.id] = sectionQuestions > 0 ? sectionTotal / sectionQuestions : 0;
    });

    const overallScore = questionCount > 0 ? totalScore / questionCount : 0;
    
    // Determine readiness level
    let readinessLevel;
    let readinessDescription;
    let recommendations = [];

    if (overallScore >= 3.5) {
      readinessLevel = 'High';
      readinessDescription = 'Your organization is well-prepared for AI implementation. You have strong foundations in place and can pursue advanced AI initiatives.';
      recommendations = [
        'Start with a high-impact AI pilot project',
        'Consider implementing multiple AI solutions in parallel',
        'Explore cutting-edge AI technologies like large language models',
        'Establish an AI center of excellence within your organization'
      ];
    } else if (overallScore >= 2.5) {
      readinessLevel = 'Medium';
      readinessDescription = 'Your organization has good potential for AI adoption but may need some preparation work before major implementations.';
      recommendations = [
        'Begin with a focused pilot project in your strongest area',
        'Invest in data quality and infrastructure improvements',
        'Provide AI literacy training for key stakeholders',
        'Establish clear governance and success metrics'
      ];
    } else if (overallScore >= 1.5) {
      readinessLevel = 'Low-Medium';
      readinessDescription = 'Your organization has some foundations for AI but will need significant preparation before implementation.';
      recommendations = [
        'Start with data infrastructure and governance improvements',
        'Invest in team training and capability building',
        'Begin with simple automation projects to build confidence',
        'Engage external AI consultants for guidance'
      ];
    } else {
      readinessLevel = 'Low';
      readinessDescription = 'Your organization needs foundational work before pursuing AI initiatives. Focus on building basic capabilities first.';
      recommendations = [
        'Prioritize data collection and quality improvement',
        'Invest in digital transformation fundamentals',
        'Build internal technical capabilities through training',
        'Start with process automation before advanced AI'
      ];
    }

    // Generate specific recommendations based on weak areas
    const specificRecommendations = [];
    
    Object.entries(sectionScores).forEach(([sectionId, score]) => {
      if (score < 2.5) {
        const section = assessmentSections.find(s => s.id === sectionId);
        switch (sectionId) {
          case 'data_infrastructure':
            specificRecommendations.push('Implement data quality management and governance frameworks');
            break;
          case 'technical_capabilities':
            specificRecommendations.push('Upgrade technical infrastructure and development capabilities');
            break;
          case 'organizational_readiness':
            specificRecommendations.push('Focus on change management and digital literacy training');
            break;
          case 'business_objectives':
            specificRecommendations.push('Clarify AI strategy and establish clear success metrics');
            break;
        }
      }
    });

    return {
      overallScore,
      readinessLevel,
      readinessDescription,
      sectionScores,
      recommendations: [...recommendations, ...specificRecommendations],
      nextSteps: generateNextSteps(overallScore, sectionScores),
      estimatedTimeline: estimateTimeline(overallScore),
      suggestedBudget: suggestBudget(overallScore, responses.budget_range || 2)
    };
  };

  const generateNextSteps = (overallScore, sectionScores) => {
    const steps = [];
    
    if (overallScore >= 3.0) {
      steps.push({
        phase: 'Immediate (0-3 months)',
        actions: [
          'Select high-impact AI use case',
          'Assemble project team',
          'Begin pilot development',
          'Establish success metrics'
        ]
      });
      steps.push({
        phase: 'Short-term (3-6 months)',
        actions: [
          'Complete pilot implementation',
          'Measure results and ROI',
          'Plan scaling strategy',
          'Begin second AI initiative'
        ]
      });
    } else {
      steps.push({
        phase: 'Foundation (0-6 months)',
        actions: [
          'Improve data infrastructure',
          'Build team capabilities',
          'Establish governance framework',
          'Define AI strategy'
        ]
      });
      steps.push({
        phase: 'Implementation (6-12 months)',
        actions: [
          'Launch first AI pilot',
          'Monitor and optimize',
          'Build internal expertise',
          'Plan expansion'
        ]
      });
    }

    return steps;
  };

  const estimateTimeline = (score) => {
    if (score >= 3.5) return '3-6 months to first results';
    if (score >= 2.5) return '6-9 months to first results';
    if (score >= 1.5) return '9-12 months to first results';
    return '12+ months to first results';
  };

  const suggestBudget = (score, budgetResponse) => {
    const budgetRanges = [
      { min: 25000, max: 75000, label: '$25K - $75K' },
      { min: 75000, max: 250000, label: '$75K - $250K' },
      { min: 250000, max: 500000, label: '$250K - $500K' },
      { min: 500000, max: 1000000, label: '$500K - $1M+' }
    ];

    let budgetIndex = Math.max(0, Math.min(3, Math.floor(score) - 1));
    return budgetRanges[budgetIndex];
  };

  const handleResponse = (questionId, value) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const nextSection = () => {
    if (currentSection < assessmentSections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      const calculatedResults = calculateResults();
      setResults(calculatedResults);
      setShowResults(true);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const getProgressPercentage = () => {
    return ((currentSection + 1) / assessmentSections.length) * 100;
  };

  const ScoreGauge = ({ score, label, color = "blue" }) => (
    <div className="text-center">
      <div className="relative w-24 h-24 mx-auto mb-2">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke={`var(--${color}-500)`}
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${score * 62.83} 251.32`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-gray-900">{score.toFixed(1)}</span>
        </div>
      </div>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );

  if (showResults && results) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        
        {/* Results Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Readiness Assessment Results</h1>
          <p className="text-gray-600">Your organization's AI readiness analysis and recommendations</p>
        </div>

        {/* Overall Score */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overall AI Readiness</h2>
          
          <div className="flex justify-center items-center space-x-8 mb-6">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#e5e7eb"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke={results.readinessLevel === 'High' ? '#10B981' : 
                           results.readinessLevel === 'Medium' ? '#F59E0B' : 
                           results.readinessLevel === 'Low-Medium' ? '#EF4444' : '#DC2626'}
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${(results.overallScore / 4) * 282.74} 282.74`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-gray-900">{results.overallScore.toFixed(1)}</span>
                    <p className="text-xs text-gray-600">out of 4.0</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className={`text-2xl font-bold mb-2 ${
                results.readinessLevel === 'High' ? 'text-green-600' : 
                results.readinessLevel === 'Medium' ? 'text-yellow-600' : 
                'text-red-600'
              }`}>
                {results.readinessLevel} Readiness
              </h3>
              <p className="text-gray-700 max-w-md">{results.readinessDescription}</p>
              <div className="mt-4 flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>Expected timeline: {results.estimatedTimeline}</span>
              </div>
              <div className="mt-2 flex items-center space-x-2 text-sm text-gray-600">
                <DollarSign className="w-4 h-4" />
                <span>Suggested budget: {results.suggestedBudget.label}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Breakdown */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Detailed Breakdown</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {assessmentSections.map((section) => {
              const score = results.sectionScores[section.id] || 0;
              const Icon = section.icon;
              return (
                <div key={section.id} className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <ScoreGauge 
                    score={score} 
                    label={section.title}
                    color={score >= 3 ? 'green' : score >= 2 ? 'yellow' : 'red'}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* Key Recommendations */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Target className="w-5 h-5 mr-2 text-blue-600" />
              Key Recommendations
            </h3>
            
            <div className="space-y-3">
              {results.recommendations.slice(0, 6).map((recommendation, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{recommendation}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <ArrowRight className="w-5 h-5 mr-2 text-green-600" />
              Next Steps Timeline
            </h3>
            
            <div className="space-y-4">
              {results.nextSteps.map((step, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">{step.phase}</h4>
                  <ul className="mt-2 space-y-1">
                    {step.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="text-sm text-gray-600 flex items-center">
                        <ChevronRight className="w-3 h-3 mr-1" />
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your AI Journey?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Based on your assessment, I can help you develop a customized AI implementation strategy 
            that aligns with your organization's readiness level and business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
            <button className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </button>
          </div>
        </div>

        {/* Restart Assessment */}
        <div className="text-center">
          <button 
            onClick={() => {
              setShowResults(false);
              setCurrentSection(0);
              setResponses({});
              setResults(null);
            }}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Take Assessment Again
          </button>
        </div>
      </div>
    );
  }

  const currentSectionData = assessmentSections[currentSection];

  return (
    <div className="max-w-4xl mx-auto p-6">
      
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Readiness Assessment</h1>
        <p className="text-gray-600">Evaluate your organization's readiness for AI implementation</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            Section {currentSection + 1} of {assessmentSections.length}
          </span>
          <span className="text-sm text-gray-500">
            {Math.round(getProgressPercentage())}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
            style={{ width: `${getProgressPercentage()}%` }}
          ></div>
        </div>
      </div>

      {/* Current Section */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8">
        
        {/* Section Header */}
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
            <currentSectionData.icon className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{currentSectionData.title}</h2>
            <p className="text-gray-600">{currentSectionData.description}</p>
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-8">
          {currentSectionData.questions.map((question, questionIndex) => (
            <div key={question.id} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {questionIndex + 1}. {question.question}
              </h3>
              
              <div className="space-y-3">
                {question.options.map((option) => (
                  <label 
                    key={option.value}
                    className={`flex items-start space-x-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                      responses[question.id] === option.value
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name={question.id}
                      value={option.value}
                      checked={responses[question.id] === option.value}
                      onChange={() => handleResponse(question.id, option.value)}
                      className="mt-1 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="flex-1">
                      <span className="text-gray-900">{option.label}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={prevSection}
          disabled={currentSection === 0}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
            currentSection === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        <div className="flex space-x-2">
          {assessmentSections.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSection
                  ? 'bg-blue-600'
                  : index < currentSection
                  ? 'bg-green-500'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSection}
          className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          <span>
            {currentSection === assessmentSections.length - 1 ? 'Get Results' : 'Next'}
          </span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AIReadinessAssessment;