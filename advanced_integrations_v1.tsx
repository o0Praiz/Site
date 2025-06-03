import React, { useState, useEffect } from 'react';
import { Calendar, Mail, BarChart3, Edit, Save, Eye, Settings } from 'lucide-react';

// CMS Integration Component
const ContentManagementSystem = () => {
  const [posts, setPosts] = useState([]);
  const [projects, setProjects] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  // Simulated CMS functionality
  const cms = {
    // Blog post management
    createPost: (postData) => {
      const newPost = {
        id: Date.now(),
        ...postData,
        created: new Date().toISOString(),
        status: 'draft'
      };
      setPosts(prev => [...prev, newPost]);
      return newPost;
    },

    updatePost: (id, updates) => {
      setPosts(prev => prev.map(post => 
        post.id === id ? { ...post, ...updates, updated: new Date().toISOString() } : post
      ));
    },

    publishPost: (id) => {
      cms.updatePost(id, { status: 'published', published: new Date().toISOString() });
    },

    deletePost: (id) => {
      setPosts(prev => prev.filter(post => post.id !== id));
    },

    // Project management
    createProject: (projectData) => {
      const newProject = {
        id: Date.now(),
        ...projectData,
        created: new Date().toISOString(),
        status: 'active'
      };
      setProjects(prev => [...prev, newProject]);
      return newProject;
    },

    updateProject: (id, updates) => {
      setProjects(prev => prev.map(project => 
        project.id === id ? { ...project, ...updates, updated: new Date().toISOString() } : project
      ));
    },

    // Content export/import
    exportContent: () => {
      const content = {
        posts: posts,
        projects: projects,
        exported: new Date().toISOString()
      };
      return JSON.stringify(content, null, 2);
    },

    importContent: (contentJson) => {
      try {
        const content = JSON.parse(contentJson);
        if (content.posts) setPosts(content.posts);
        if (content.projects) setProjects(content.projects);
        return true;
      } catch (error) {
        console.error('Import failed:', error);
        return false;
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Edit className="w-6 h-6 mr-2 text-blue-600" />
              Content Management System
            </h2>
            <div className="flex space-x-3">
              <button
                onClick={() => setEditMode(!editMode)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  editMode 
                    ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                    : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                }`}
              >
                {editMode ? 'Exit Edit Mode' : 'Edit Mode'}
              </button>
              <button className="px-4 py-2 bg-purple-100 text-purple-800 rounded-lg hover:bg-purple-200 transition-colors">
                Export Content
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Blog Posts Management */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Blog Posts</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-700">Recent Posts</span>
                  <button 
                    onClick={() => cms.createPost({
                      title: 'New Blog Post',
                      content: 'Start writing your content here...',
                      excerpt: 'Brief description of the post'
                    })}
                    className="text-sm bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
                  >
                    New Post
                  </button>
                </div>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {posts.map(post => (
                    <div key={post.id} className="bg-white p-3 rounded-md border border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm">{post.title}</h4>
                          <p className="text-xs text-gray-500">
                            {post.status} • {new Date(post.created).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex space-x-1">
                          <button
                            onClick={() => setSelectedContent(post)}
                            className="p-1 text-gray-400 hover:text-blue-600"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => cms.publishPost(post.id)}
                            className="p-1 text-gray-400 hover:text-green-600"
                          >
                            <Save className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Projects Management */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Projects</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-700">Project Portfolio</span>
                  <button 
                    onClick={() => cms.createProject({
                      title: 'New AI Project',
                      description: 'Project description here...',
                      category: 'Machine Learning',
                      status: 'active'
                    })}
                    className="text-sm bg-purple-600 text-white px-3 py-1 rounded-md hover:bg-purple-700"
                  >
                    New Project
                  </button>
                </div>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {projects.map(project => (
                    <div key={project.id} className="bg-white p-3 rounded-md border border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm">{project.title}</h4>
                          <p className="text-xs text-gray-500">
                            {project.category} • {project.status}
                          </p>
                        </div>
                        <div className="flex space-x-1">
                          <button
                            onClick={() => setSelectedContent(project)}
                            className="p-1 text-gray-400 hover:text-blue-600"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-green-600">
                            <Settings className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Editor */}
          {selectedContent && (
            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Editing: {selectedContent.title}
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  value={selectedContent.title}
                  onChange={(e) => setSelectedContent({...selectedContent, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Title"
                />
                <textarea
                  value={selectedContent.description || selectedContent.content || ''}
                  onChange={(e) => setSelectedContent({
                    ...selectedContent, 
                    [selectedContent.content ? 'content' : 'description']: e.target.value
                  })}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Content"
                />
                <div className="flex space-x-3">
                  <button 
                    onClick={() => {
                      if (selectedContent.content) {
                        cms.updatePost(selectedContent.id, selectedContent);
                      } else {
                        cms.updateProject(selectedContent.id, selectedContent);
                      }
                      setSelectedContent(null);
                    }}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  >
                    Save Changes
                  </button>
                  <button 
                    onClick={() => setSelectedContent(null)}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Advanced Analytics Dashboard
const AdvancedAnalytics = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [metrics, setMetrics] = useState({
    pageViews: 12540,
    uniqueVisitors: 8920,
    bounceRate: 34.2,
    avgSessionDuration: '3:42',
    conversionRate: 2.8,
    topPages: [
      { page: '/projects', views: 4320, conversions: 12 },
      { page: '/', views: 3890, conversions: 8 },
      { page: '/about', views: 2140, conversions: 5 },
      { page: '/blog', views: 1890, conversions: 3 },
      { page: '/contact', views: 300, conversions: 15 }
    ],
    userFlow: [
      { from: 'Google', to: 'Homepage', users: 3200 },
      { from: 'Homepage', to: 'Projects', users: 2100 },
      { from: 'Projects', to: 'Contact', users: 180 },
      { from: 'LinkedIn', to: 'About', users: 1500 },
      { from: 'About', to: 'Projects', users: 800 }
    ],
    demographics: {
      countries: [
        { country: 'United States', percentage: 45.2 },
        { country: 'United Kingdom', percentage: 12.8 },
        { country: 'Canada', percentage: 8.9 },
        { country: 'Germany', percentage: 7.3 },
        { country: 'Australia', percentage: 4.8 }
      ],
      devices: [
        { device: 'Desktop', percentage: 62.4 },
        { device: 'Mobile', percentage: 31.7 },
        { device: 'Tablet', percentage: 5.9 }
      ]
    }
  });

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <BarChart3 className="w-6 h-6 mr-2 text-blue-600" />
              Advanced Analytics Dashboard
            </h2>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="1d">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
            </select>
          </div>
        </div>

        <div className="p-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-blue-600 mb-2">Page Views</h3>
              <p className="text-2xl font-bold text-blue-900">{metrics.pageViews.toLocaleString()}</p>
              <p className="text-sm text-blue-700">+12.3% from last period</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-green-600 mb-2">Unique Visitors</h3>
              <p className="text-2xl font-bold text-green-900">{metrics.uniqueVisitors.toLocaleString()}</p>
              <p className="text-sm text-green-700">+8.7% from last period</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-yellow-600 mb-2">Bounce Rate</h3>
              <p className="text-2xl font-bold text-yellow-900">{metrics.bounceRate}%</p>
              <p className="text-sm text-yellow-700">-2.1% from last period</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-purple-600 mb-2">Avg. Session</h3>
              <p className="text-2xl font-bold text-purple-900">{metrics.avgSessionDuration}</p>
              <p className="text-sm text-purple-700">+15.2% from last period</p>
            </div>
            <div className="bg-red-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-red-600 mb-2">Conversion Rate</h3>
              <p className="text-2xl font-bold text-red-900">{metrics.conversionRate}%</p>
              <p className="text-sm text-red-700">+0.4% from last period</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Top Pages */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Pages</h3>
              <div className="space-y-3">
                {metrics.topPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between bg-white p-3 rounded-md">
                    <div>
                      <p className="font-medium text-gray-900">{page.page}</p>
                      <p className="text-sm text-gray-500">{page.views.toLocaleString()} views</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-green-600">{page.conversions}</p>
                      <p className="text-xs text-gray-500">conversions</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* User Demographics */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Demographics</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Top Countries</h4>
                  <div className="space-y-2">
                    {metrics.demographics.countries.map((country, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{country.country}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${country.percentage}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-900">{country.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Device Types</h4>
                  <div className="space-y-2">
                    {metrics.demographics.devices.map((device, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{device.device}</span>
                        <span className="text-sm font-medium text-gray-900">{device.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Email Marketing Integration
const EmailMarketing = () => {
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: "Portfolio Launch Announcement",
      subject: "🚀 New AI Portfolio - Check Out My Latest Projects",
      status: "sent",
      opens: 847,
      clicks: 124,
      conversions: 12,
      sent: 2000,
      sentDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Monthly AI Insights Newsletter",
      subject: "January AI Trends: What's Shaping the Industry",
      status: "draft",
      opens: 0,
      clicks: 0,
      conversions: 0,
      sent: 0,
      sentDate: null
    }
  ]);

  const [subscribers, setSubscribers] = useState([
    { email: "john@example.com", subscribed: "2024-01-10", source: "Contact Form" },
    { email: "sarah@company.com", subscribed: "2024-01-12", source: "Newsletter Signup" },
    { email: "mike@startup.ai", subscribed: "2024-01-14", source: "LinkedIn" }
  ]);

  const [newCampaign, setNewCampaign] = useState({
    name: "",
    subject: "",
    content: ""
  });

  const emailTemplates = {
    newsletter: {
      subject: "AI Insights Newsletter - [Month] Edition",
      content: `Hi [First Name],

Welcome to this month's AI Insights newsletter! Here's what's happening in the world of artificial intelligence:

🔬 **Latest Research Highlights**
- [Research topic 1]
- [Research topic 2]
- [Research topic 3]

💼 **Industry Applications**
- [Real-world application 1]
- [Real-world application 2]

📊 **Project Spotlight**
[Brief description of featured project]

🎯 **Actionable Takeaways**
1. [Takeaway 1]
2. [Takeaway 2]
3. [Takeaway 3]

Best regards,
Jesse A. Hawkins

P.S. Have a specific AI challenge you're working on? Reply to this email - I'd love to discuss it!

---
Unsubscribe | Update Preferences | Forward to a Friend`
    },
    
    projectUpdate: {
      subject: "New Project Case Study: [Project Name]",
      content: `Hi [First Name],

I'm excited to share a detailed case study of my latest AI project: [Project Name].

🎯 **The Challenge**
[Brief description of the problem solved]

⚡ **The Solution**
[High-level overview of the technical approach]

📈 **The Results**
- [Key metric 1]
- [Key metric 2]
- [Key metric 3]

🔗 **Read the Full Case Study**
[Link to detailed case study]

This project demonstrates how [key insight/learning]. I'm always interested in discussing similar challenges and potential solutions.

Best regards,
Jesse A. Hawkins

---
View All Projects: jesseahawkins.com/projects
Get in Touch: contact@jesseahawkins.com`
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="border-b border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Mail className="w-6 h-6 mr-2 text-blue-600" />
            Email Marketing Dashboard
          </h2>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Campaign Management */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Campaigns</h3>
                <div className="space-y-4">
                  {campaigns.map(campaign => (
                    <div key={campaign.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-900">{campaign.name}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          campaign.status === 'sent' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {campaign.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{campaign.subject}</p>
                      {campaign.status === 'sent' && (
                        <div className="grid grid-cols-4 gap-4 text-center">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{campaign.sent}</p>
                            <p className="text-xs text-gray-500">Sent</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{campaign.opens}</p>
                            <p className="text-xs text-gray-500">Opens</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{campaign.clicks}</p>
                            <p className="text-xs text-gray-500">Clicks</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{campaign.conversions}</p>
                            <p className="text-xs text-gray-500">Conversions</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Create New Campaign */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-3">Create New Campaign</h4>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Campaign Name"
                    value={newCampaign.name}
                    onChange={(e) => setNewCampaign({...newCampaign, name: e.target.value})}
                    className="w-full px-3 py-2 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Email Subject"
                    value={newCampaign.subject}
                    onChange={(e) => setNewCampaign({...newCampaign, subject: e.target.value})}
                    className="w-full px-3 py-2 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        setNewCampaign(emailTemplates.newsletter);
                      }}
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
                    >
                      Newsletter Template
                    </button>
                    <button
                      onClick={() => {
                        setNewCampaign(emailTemplates.projectUpdate);
                      }}
                      className="px-3 py-1 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700"
                    >
                      Project Update Template
                    </button>
                  </div>
                  <textarea
                    placeholder="Email Content"
                    value={newCampaign.content}
                    onChange={(e) => setNewCampaign({...newCampaign, content: e.target.value})}
                    rows={6}
                    className="w-full px-3 py-2 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => {
                      const campaign = {
                        id: campaigns.length + 1,
                        ...newCampaign,
                        status: 'draft',
                        opens: 0,
                        clicks: 0,
                        conversions: 0,
                        sent: 0,
                        sentDate: null
                      };
                      setCampaigns(prev => [...prev, campaign]);
                      setNewCampaign({ name: "", subject: "", content: "" });
                    }}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  >
                    Create Campaign
                  </button>
                </div>
              </div>
            </div>

            {/* Subscriber Management */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Subscribers</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-center mb-4">
                    <p className="text-2xl font-bold text-gray-900">{subscribers.length}</p>
                    <p className="text-sm text-gray-600">Total Subscribers</p>
                  </div>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {subscribers.map((subscriber, index) => (
                      <div key={index} className="bg-white p-2 rounded-md border border-gray-200">
                        <p className="text-sm font-medium text-gray-900">{subscriber.email}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(subscriber.subscribed).toLocaleDateString()} • {subscriber.source}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3">Campaign Performance</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Avg. Open Rate</span>
                    <span className="text-sm font-medium text-gray-900">42.4%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Avg. Click Rate</span>
                    <span className="text-sm font-medium text-gray-900">6.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Conversion Rate</span>
                    <span className="text-sm font-medium text-gray-900">0.6%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Unsubscribe Rate</span>
                    <span className="text-sm font-medium text-gray-900">0.8%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Booking System Integration
const BookingSystem = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      clientName: "Sarah Johnson",
      email: "sarah@techcorp.com",
      date: "2024-01-25",
      time: "10:00",
      duration: 60,
      type: "AI Consultation",
      status: "confirmed",
      notes: "Interested in computer vision for retail analytics"
    },
    {
      id: 2,
      clientName: "Mike Chen",
      email: "mike@startup.ai",
      date: "2024-01-26",
      time: "14:00",
      duration: 30,
      type: "Technical Review",
      status: "pending",
      notes: "ML model performance optimization"
    }
  ]);

  const [availability, setAvailability] = useState({
    monday: { enabled: true, start: "09:00", end: "17:00" },
    tuesday: { enabled: true, start: "09:00", end: "17:00" },
    wednesday: { enabled: true, start: "09:00", end: "17:00" },
    thursday: { enabled: true, start: "09:00", end: "17:00" },
    friday: { enabled: true, start: "09:00", end: "17:00" },
    saturday: { enabled: false, start: "10:00", end: "16:00" },
    sunday: { enabled: false, start: "10:00", end: "16:00" }
  });

  const serviceTypes = [
    {
      name: "AI Strategy Consultation",
      duration: 60,
      price: 250,
      description: "Strategic planning for AI implementation in your business"
    },
    {
      name: "Technical Review",
      duration: 30,
      price: 150,
      description: "Review of existing ML models and technical architecture"
    },
    {
      name: "Project Scoping",
      duration: 45,
      price: 200,
      description: "Define scope and requirements for AI projects"
    },
    {
      name: "Team Training",
      duration: 120,
      price: 500,
      description: "Training sessions for your technical team"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="border-b border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Calendar className="w-6 h-6 mr-2 text-blue-600" />
            Consultation Booking System
          </h2>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Upcoming Appointments */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h3>
                <div className="space-y-4">
                  {appointments.map(appointment => (
                    <div key={appointment.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-gray-900">{appointment.clientName}</h4>
                          <p className="text-sm text-gray-600">{appointment.email}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          appointment.status === 'confirmed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {appointment.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-sm font-medium text-gray-700">Date & Time</p>
                          <p className="text-sm text-gray-600">
                            {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">Service</p>
                          <p className="text-sm text-gray-600">
                            {appointment.type} ({appointment.duration} min)
                          </p>
                        </div>
                      </div>
                      {appointment.notes && (
                        <div>
                          <p className="text-sm font-medium text-gray-700">Notes</p>
                          <p className="text-sm text-gray-600">{appointment.notes}</p>
                        </div>
                      )}
                      <div className="flex space-x-2 mt-3">
                        <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                          Join Meeting
                        </button>
                        <button className="px-3 py-1 bg-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-400">
                          Reschedule
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Types Configuration */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Types</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serviceTypes.map((service, index) => (
                    <div key={index} className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-medium text-blue-900 mb-2">{service.name}</h4>
                      <p className="text-sm text-blue-700 mb-2">{service.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-blue-600">{service.duration} minutes</span>
                        <span className="font-medium text-blue-900">${service.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Settings */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Availability Settings</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-3">
                    {Object.entries(availability).map(([day, settings]) => (
                      <div key={day} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={settings.enabled}
                            onChange={(e) => setAvailability(prev => ({
                              ...prev,
                              [day]: { ...settings, enabled: e.target.checked }
                            }))}
                            className="rounded border-gray-300 text-blue-600"
                          />
                          <span className="text-sm font-medium text-gray-700 capitalize">
                            {day}
                          </span>
                        </div>
                        {settings.enabled && (
                          <div className="flex space-x-1 text-xs">
                            <input
                              type="time"
                              value={settings.start}
                              onChange={(e) => setAvailability(prev => ({
                                ...prev,
                                [day]: { ...settings, start: e.target.value }
                              }))}
                              className="border border-gray-300 rounded px-1"
                            />
                            <span className="self-center">-</span>
                            <input
                              type="time"
                              value={settings.end}
                              onChange={(e) => setAvailability(prev => ({
                                ...prev,
                                [day]: { ...settings, end: e.target.value }
                              }))}
                              className="border border-gray-300 rounded px-1"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking Statistics */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3">Booking Statistics</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">This Month</span>
                    <span className="text-sm font-medium text-gray-900">12 bookings</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Revenue</span>
                    <span className="text-sm font-medium text-gray-900">$2,850</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Avg. Booking Value</span>
                    <span className="text-sm font-medium text-gray-900">$237</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Cancellation Rate</span>
                    <span className="text-sm font-medium text-gray-900">5.2%</span>
                  </div>
                </div>
              </div>

              {/* Integration Settings */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3">Integration Settings</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Calendar Sync</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Connected</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Video Conferencing</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Zoom</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Payment Processing</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Stripe</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Email Notifications</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Integration Dashboard
const IntegrationDashboard = () => {
  const [activeTab, setActiveTab] = useState('cms');

  const tabs = [
    { id: 'cms', label: 'Content Management', component: ContentManagementSystem },
    { id: 'analytics', label: 'Advanced Analytics', component: AdvancedAnalytics },
    { id: 'email', label: 'Email Marketing', component: EmailMarketing },
    { id: 'booking', label: 'Booking System', component: BookingSystem }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="py-8">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default IntegrationDashboard;