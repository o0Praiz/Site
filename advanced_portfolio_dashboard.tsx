import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, Area, AreaChart
} from 'recharts';
import { 
  TrendingUp, Users, Eye, MessageSquare, Download, Star,
  Calendar, Clock, MapPin, Smartphone, Monitor, Tablet,
  Globe, Search, Mail, ExternalLink, Activity, Target
} from 'lucide-react';

const AdvancedPortfolioDashboard = () => {
  const [timeRange, setTimeRange] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('views');
  const [isLoading, setIsLoading] = useState(false);

  // Mock analytics data (replace with real analytics API)
  const analyticsData = {
    overview: {
      totalViews: 15420,
      uniqueVisitors: 8934,
      avgSessionDuration: '4:32',
      bounceRate: '32%',
      conversionRate: '3.2%',
      topTrafficSource: 'Organic Search'
    },
    
    projectPerformance: [
      { name: 'Document AI', views: 3420, engagement: 85, inquiries: 12 },
      { name: 'Fraud Detection', views: 2890, engagement: 92, inquiries: 18 },
      { name: 'Chatbot System', views: 2340, engagement: 78, inquiries: 8 },
      { name: 'Predictive Maintenance', views: 1980, engagement: 88, inquiries: 15 },
      { name: 'Quality Control', views: 1760, engagement: 83, inquiries: 7 },
      { name: 'Recommendation Engine', views: 1420, engagement: 76, inquiries: 5 }
    ],

    trafficSources: [
      { name: 'Organic Search', value: 45, color: '#3B82F6' },
      { name: 'LinkedIn', value: 28, color: '#0A66C2' },
      { name: 'Direct', value: 15, color: '#10B981' },
      { name: 'GitHub', value: 8, color: '#24292E' },
      { name: 'Referral', value: 4, color: '#F59E0B' }
    ],

    deviceBreakdown: [
      { device: 'Desktop', percentage: 58, sessions: 5200 },
      { device: 'Mobile', percentage: 35, sessions: 3130 },
      { device: 'Tablet', percentage: 7, sessions: 625 }
    ],

    weeklyTrends: [
      { week: 'Week 1', views: 1200, visitors: 890, inquiries: 3 },
      { week: 'Week 2', views: 1450, visitors: 1020, inquiries: 5 },
      { week: 'Week 3', views: 1680, visitors: 1180, inquiries: 8 },
      { week: 'Week 4', views: 1890, visitors: 1340, inquiries: 12 }
    ],

    topPages: [
      { page: '/projects/document-ai', views: 3420, avgTime: '5:23' },
      { page: '/projects/fraud-detection', views: 2890, avgTime: '4:45' },
      { page: '/about', views: 2156, avgTime: '3:12' },
      { page: '/', views: 1980, avgTime: '2:34' },
      { page: '/contact', views: 1340, avgTime: '2:56' }
    ],

    contactFormAnalytics: {
      submissions: 47,
      conversionRate: 3.2,
      topInquiryTypes: [
        { type: 'AI Consultation', count: 18 },
        { type: 'Project Collaboration', count: 12 },
        { type: 'Speaking Opportunity', count: 8 },
        { type: 'General Inquiry', count: 9 }
      ]
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const StatCard = ({ title, value, change, icon: Icon, color = "blue" }) => (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {change && (
            <p className={`text-sm mt-1 flex items-center ${
              change.startsWith('+') ? 'text-green-600' : 'text-red-600'
            }`}>
              <TrendingUp className="w-4 h-4 mr-1" />
              {change} from last period
            </p>
          )}
        </div>
        <div className={`w-12 h-12 bg-${color}-100 rounded-xl flex items-center justify-center`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Portfolio Analytics</h1>
          <p className="text-gray-600">Track the performance and impact of your AI portfolio</p>
          
          <div className="flex items-center space-x-4 mt-4">
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
            
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Export Report
            </button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Total Views" 
            value={formatNumber(analyticsData.overview.totalViews)}
            change="+23.5%"
            icon={Eye}
            color="blue"
          />
          <StatCard 
            title="Unique Visitors" 
            value={formatNumber(analyticsData.overview.uniqueVisitors)}
            change="+18.2%"
            icon={Users}
            color="green"
          />
          <StatCard 
            title="Avg. Session" 
            value={analyticsData.overview.avgSessionDuration}
            change="+12.3%"
            icon={Clock}
            color="purple"
          />
          <StatCard 
            title="Conversion Rate" 
            value={analyticsData.overview.conversionRate}
            change="+0.8%"
            icon={Target}
            color="orange"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* Project Performance */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Performance</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={analyticsData.projectPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="views" fill="#3B82F6" name="Views" />
                <Bar dataKey="inquiries" fill="#10B981" name="Inquiries" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Traffic Sources */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={analyticsData.trafficSources}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({name, value}) => `${name}: ${value}%`}
                >
                  {analyticsData.trafficSources.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Weekly Trends */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={analyticsData.weeklyTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="views" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
              <Area type="monotone" dataKey="visitors" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Detailed Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* Top Pages */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Pages</h3>
            <div className="space-y-3">
              {analyticsData.topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 truncate">{page.page}</p>
                    <p className="text-sm text-gray-600">Avg. time: {page.avgTime}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{formatNumber(page.views)}</p>
                    <p className="text-sm text-gray-600">views</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Device Breakdown */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Breakdown</h3>
            <div className="space-y-4">
              {analyticsData.deviceBreakdown.map((device, index) => {
                const Icon = device.device === 'Desktop' ? Monitor : 
                           device.device === 'Mobile' ? Smartphone : Tablet;
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <Icon className="w-8 h-8 text-gray-600" />
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-gray-900">{device.device}</span>
                        <span className="text-sm text-gray-600">{device.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${device.percentage}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{formatNumber(device.sessions)} sessions</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Contact Form Analytics */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Form Performance</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Form Stats */}
            <div className="space-y-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">{analyticsData.contactFormAnalytics.submissions}</p>
                <p className="text-sm text-gray-600">Total Submissions</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">{analyticsData.contactFormAnalytics.conversionRate}%</p>
                <p className="text-sm text-gray-600">Conversion Rate</p>
              </div>
            </div>

            {/* Inquiry Types */}
            <div className="col-span-2">
              <h4 className="font-medium text-gray-900 mb-3">Inquiry Types</h4>
              <div className="space-y-3">
                {analyticsData.contactFormAnalytics.topInquiryTypes.map((inquiry, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700">{inquiry.type}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(inquiry.count / 47) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{inquiry.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Real-time Activity */}
        <div className="mt-8 bg-white rounded-xl shadow-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Activity className="w-5 h-5 mr-2 text-green-500" />
            Recent Activity
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-700">New visitor from LinkedIn viewing Document AI project</span>
              <span className="text-xs text-gray-500 ml-auto">2 minutes ago</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Contact form submission: AI Consultation inquiry</span>
              <span className="text-xs text-gray-500 ml-auto">15 minutes ago</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Project download: Fraud Detection case study</span>
              <span className="text-xs text-gray-500 ml-auto">32 minutes ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPortfolioDashboard;