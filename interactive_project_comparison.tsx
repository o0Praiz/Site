import React, { useState, useMemo } from 'react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import { 
  Brain, Code, Database, Zap, Eye, TrendingUp, Users, 
  Clock, DollarSign, CheckCircle, AlertTriangle, Info,
  Download, Share2, Bookmark, Star, BarChart3
} from 'lucide-react';

const InteractiveProjectComparison = () => {
  const [selectedProjects, setSelectedProjects] = useState([1, 2]); // Default comparison
  const [comparisonView, setComparisonView] = useState('overview'); // overview, technical, business
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Project data for comparison
  const projects = [
    {
      id: 1,
      title: "Document AI Processing System",
      category: "Computer Vision",
      complexity: 4.2,
      businessImpact: 4.8,
      technicalInnovation: 4.0,
      scalability: 4.5,
      implementationTime: 4.5, // months
      teamSize: 4,
      roi: 240,
      costSavings: 180000,
      accuracyImprovement: 85,
      processingSpeedUp: 2000,
      technologies: ["Python", "TensorFlow", "OpenCV", "OCR", "FastAPI", "React"],
      industries: ["Finance", "Healthcare", "Legal"],
      dataVolume: "High",
      realTimeRequirement: "Medium",
      mainMetrics: {
        accuracy: 94.2,
        speed: "45s per doc",
        cost: "$180K saved",
        volume: "50K docs/month"
      }
    },
    {
      id: 2,
      title: "Real-Time Fraud Detection",
      category: "Machine Learning",
      complexity: 4.8,
      businessImpact: 4.9,
      technicalInnovation: 4.3,
      scalability: 4.8,
      implementationTime: 6.5,
      teamSize: 6,
      roi: 340,
      costSavings: 2400000,
      accuracyImprovement: 12,
      processingSpeedUp: 75,
      technologies: ["Python", "Scikit-learn", "Kafka", "Redis", "PostgreSQL"],
      industries: ["FinTech", "Banking", "E-commerce"],
      dataVolume: "Very High",
      realTimeRequirement: "Critical",
      mainMetrics: {
        accuracy: 99.1,
        speed: "47ms response",
        cost: "$2.4M prevented",
        volume: "100K txn/min"
      }
    },
    {
      id: 3,
      title: "Conversational AI Support Bot",
      category: "NLP",
      complexity: 4.0,
      businessImpact: 4.3,
      technicalInnovation: 4.2,
      scalability: 4.0,
      implementationTime: 4.5,
      teamSize: 3,
      roi: 180,
      costSavings: 120000,
      accuracyImprovement: 70,
      processingSpeedUp: 80,
      technologies: ["Python", "LangChain", "OpenAI", "Pinecone", "React"],
      industries: ["E-commerce", "SaaS", "Customer Service"],
      dataVolume: "Medium",
      realTimeRequirement: "High",
      mainMetrics: {
        accuracy: 92,
        speed: "2.3s response",
        cost: "45% cost reduction",
        volume: "70% automated"
      }
    },
    {
      id: 4,
      title: "Predictive Maintenance System",
      category: "IoT Analytics",
      complexity: 4.5,
      businessImpact: 4.6,
      technicalInnovation: 3.8,
      scalability: 4.2,
      implementationTime: 6.5,
      teamSize: 5,
      roi: 240,
      costSavings: 450000,
      accuracyImprovement: 87,
      processingSpeedUp: 150,
      technologies: ["Python", "TensorFlow", "InfluxDB", "Grafana", "MQTT"],
      industries: ["Manufacturing", "Energy", "Transportation"],
      dataVolume: "High",
      realTimeRequirement: "Medium",
      mainMetrics: {
        accuracy: 87,
        speed: "Real-time monitoring",
        cost: "30% maintenance savings",
        volume: "65% downtime reduction"
      }
    },
    {
      id: 5,
      title: "Quality Control Vision System",
      category: "Computer Vision",
      complexity: 4.7,
      businessImpact: 4.4,
      technicalInnovation: 4.5,
      scalability: 4.3,
      implementationTime: 6.5,
      teamSize: 4,
      roi: 200,
      costSavings: 320000,
      accuracyImprovement: 15,
      processingSpeedUp: 250,
      technologies: ["Python", "PyTorch", "OpenCV", "NVIDIA Jetson", "CUDA"],
      industries: ["Manufacturing", "Electronics", "Automotive"],
      dataVolume: "Very High",
      realTimeRequirement: "Critical",
      mainMetrics: {
        accuracy: 99.2,
        speed: "500 items/min",
        cost: "55% quality cost reduction",
        volume: "Real-time inspection"
      }
    },
    {
      id: 6,
      title: "Multi-Language Recommendation Engine",
      category: "Recommendation Systems",
      complexity: 3.8,
      businessImpact: 4.1,
      technicalInnovation: 3.5,
      scalability: 4.4,
      implementationTime: 6.5,
      teamSize: 4,
      roi: 150,
      costSavings: 80000,
      accuracyImprovement: 78,
      processingSpeedUp: 120,
      technologies: ["Python", "TensorFlow", "Spark", "Redis", "Elasticsearch"],
      industries: ["Media", "E-commerce", "Content Platforms"],
      dataVolume: "Very High",
      realTimeRequirement: "Medium",
      mainMetrics: {
        accuracy: "6.8% CTR",
        speed: "Sub-second recommendations",
        cost: "78% engagement increase",
        volume: "12 languages supported"
      }
    }
  ];

  const selectedProjectsData = useMemo(() => {
    return projects.filter(p => selectedProjects.includes(p.id));
  }, [selectedProjects]);

  const radarData = useMemo(() => {
    const metrics = ['Complexity', 'Business Impact', 'Innovation', 'Scalability'];
    return metrics.map(metric => {
      const dataPoint = { metric };
      selectedProjectsData.forEach((project, index) => {
        const key = metric.toLowerCase().replace(' ', '');
        if (key === 'businessimpact') {
          dataPoint[`project${index + 1}`] = project.businessImpact;
        } else if (key === 'technicalinnovation' || key === 'innovation') {
          dataPoint[`project${index + 1}`] = project.technicalInnovation;
        } else {
          dataPoint[`project${index + 1}`] = project[key] || 0;
        }
      });
      return dataPoint;
    });
  }, [selectedProjectsData]);

  const businessMetricsData = useMemo(() => {
    return selectedProjectsData.map((project, index) => ({
      name: `Project ${index + 1}`,
      fullName: project.title,
      roi: project.roi,
      savings: project.costSavings / 1000, // Convert to thousands
      timeline: project.implementationTime,
      teamSize: project.teamSize
    }));
  }, [selectedProjectsData]);

  const ComparisonCard = ({ project, index }) => (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
            {project.category}
          </span>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
            <Bookmark className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">Accuracy</p>
          <p className="text-lg font-bold text-gray-900">{project.mainMetrics.accuracy}%</p>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">Speed</p>
          <p className="text-lg font-bold text-gray-900">{project.mainMetrics.speed}</p>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">Impact</p>
          <p className="text-lg font-bold text-gray-900">{project.mainMetrics.cost}</p>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">Volume</p>
          <p className="text-lg font-bold text-gray-900">{project.mainMetrics.volume}</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-2">Key Technologies</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Business Impact</span>
          <div className="flex items-center space-x-2">
            <div className="w-16 h-2 bg-gray-200 rounded-full">
              <div 
                className="h-2 bg-green-500 rounded-full" 
                style={{ width: `${(project.businessImpact / 5) * 100}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium">{project.businessImpact}/5</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Technical Complexity</span>
          <div className="flex items-center space-x-2">
            <div className="w-16 h-2 bg-gray-200 rounded-full">
              <div 
                className="h-2 bg-blue-500 rounded-full" 
                style={{ width: `${(project.complexity / 5) * 100}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium">{project.complexity}/5</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">ROI</span>
          <span className="text-sm font-bold text-green-600">{project.roi}%</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Project Comparison</h1>
        <p className="text-gray-600">Compare technical specifications, business impact, and implementation details across different AI projects</p>
      </div>

      {/* Project Selection */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <BarChart3 className="w-5 h-5 mr-2" />
          Select Projects to Compare
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <label key={project.id} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedProjects.includes(project.id)}
                onChange={(e) => {
                  if (e.target.checked) {
                    if (selectedProjects.length < 3) {
                      setSelectedProjects([...selectedProjects, project.id]);
                    }
                  } else {
                    setSelectedProjects(selectedProjects.filter(id => id !== project.id));
                  }
                }}
                disabled={!selectedProjects.includes(project.id) && selectedProjects.length >= 3}
                className="text-blue-600 focus:ring-blue-500"
              />
              <div className="flex-1">
                <p className="font-medium text-gray-900 text-sm">{project.title}</p>
                <p className="text-xs text-gray-500">{project.category}</p>
              </div>
            </label>
          ))}
        </div>
        
        <p className="text-sm text-gray-500 mt-4">
          <Info className="w-4 h-4 inline mr-1" />
          Select 2-3 projects to compare. Currently selected: {selectedProjects.length}
        </p>
      </div>

      {/* Comparison View Tabs */}
      <div className="mb-6">
        <div className="flex space-x-4 border-b border-gray-200">
          {[
            { id: 'overview', label: 'Overview', icon: Eye },
            { id: 'technical', label: 'Technical Details', icon: Code },
            { id: 'business', label: 'Business Impact', icon: TrendingUp }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setComparisonView(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 font-medium border-b-2 transition-colors ${
                  comparisonView === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Overview Tab */}
      {comparisonView === 'overview' && (
        <div className="space-y-8">
          {/* Project Cards */}
          <div className={`grid gap-6 ${selectedProjectsData.length === 2 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
            {selectedProjectsData.map((project, index) => (
              <ComparisonCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Radar Chart */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Comparison</h3>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" />
                <PolarRadiusAxis domain={[0, 5]} tickCount={6} />
                <Radar
                  name="Project 1"
                  dataKey="project1"
                  stroke="#3B82F6"
                  fill="#3B82F6"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                {selectedProjectsData[1] && (
                  <Radar
                    name="Project 2"
                    dataKey="project2"
                    stroke="#10B981"
                    fill="#10B981"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                )}
                {selectedProjectsData[2] && (
                  <Radar
                    name="Project 3"
                    dataKey="project3"
                    stroke="#F59E0B"
                    fill="#F59E0B"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                )}
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Technical Tab */}
      {comparisonView === 'technical' && (
        <div className="space-y-6">
          
          {/* Technical Specifications Table */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Technical Specifications</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Specification</th>
                    {selectedProjectsData.map((project, index) => (
                      <th key={project.id} className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                        Project {index + 1}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Project Name</td>
                    {selectedProjectsData.map((project) => (
                      <td key={project.id} className="px-6 py-4 text-sm text-gray-700">{project.title}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Category</td>
                    {selectedProjectsData.map((project) => (
                      <td key={project.id} className="px-6 py-4 text-sm text-gray-700">{project.category}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Complexity Score</td>
                    {selectedProjectsData.map((project) => (
                      <td key={project.id} className="px-6 py-4 text-sm text-gray-700">{project.complexity}/5</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Implementation Time</td>
                    {selectedProjectsData.map((project) => (
                      <td key={project.id} className="px-6 py-4 text-sm text-gray-700">{project.implementationTime} months</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Team Size</td>
                    {selectedProjectsData.map((project) => (
                      <td key={project.id} className="px-6 py-4 text-sm text-gray-700">{project.teamSize} engineers</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Data Volume</td>
                    {selectedProjectsData.map((project) => (
                      <td key={project.id} className="px-6 py-4 text-sm text-gray-700">{project.dataVolume}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Real-time Requirement</td>
                    {selectedProjectsData.map((project) => (
                      <td key={project.id} className="px-6 py-4 text-sm text-gray-700">{project.realTimeRequirement}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Technology Stack Comparison */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Technology Stack Comparison</h3>
            
            <div className="grid gap-6">
              {selectedProjectsData.map((project, index) => (
                <div key={project.id} className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">
                    Project {index + 1}: {project.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Business Tab */}
      {comparisonView === 'business' && (
        <div className="space-y-6">
          
          {/* Business Metrics Chart */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Impact Comparison</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={businessMetricsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'roi' ? `${value}%` : 
                    name === 'savings' ? `$${value}K` :
                    name === 'timeline' ? `${value} months` :
                    name === 'teamSize' ? `${value} people` : value,
                    name === 'roi' ? 'ROI' :
                    name === 'savings' ? 'Cost Savings' :
                    name === 'timeline' ? 'Timeline' :
                    name === 'teamSize' ? 'Team Size' : name
                  ]}
                  labelFormatter={(label) => {
                    const project = businessMetricsData.find(p => p.name === label);
                    return project ? project.fullName : label;
                  }}
                />
                <Legend />
                <Bar dataKey="roi" fill="#3B82F6" name="ROI (%)" />
                <Bar dataKey="savings" fill="#10B981" name="Savings ($K)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Detailed Business Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedProjectsData.map((project, index) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Project {index + 1} Business Impact</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">ROI</span>
                    <span className="text-lg font-bold text-green-600">{project.roi}%</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Cost Savings</span>
                    <span className="text-lg font-bold text-blue-600">
                      ${(project.costSavings / 1000).toFixed(0)}K
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Implementation</span>
                    <span className="text-sm font-medium text-gray-900">
                      {project.implementationTime} months
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Team Investment</span>
                    <span className="text-sm font-medium text-gray-900">
                      {project.teamSize} engineers
                    </span>
                  </div>

                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-500 mb-2">Target Industries</p>
                    <div className="flex flex-wrap gap-1">
                      {project.industries.map((industry, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Export/Share Options */}
      <div className="mt-8 flex justify-center space-x-4">
        <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Download className="w-4 h-4" />
          <span>Export Comparison</span>
        </button>
        <button className="flex items-center space-x-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
          <Share2 className="w-4 h-4" />
          <span>Share Analysis</span>
        </button>
      </div>
    </div>
  );
};

export default InteractiveProjectComparison;