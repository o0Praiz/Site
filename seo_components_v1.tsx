import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// SEO Meta Tags Component
const SEOHead = ({ 
  title = "Jesse A. Hawkins - AI Engineer & Machine Learning Specialist",
  description = "Experienced AI engineer specializing in machine learning, computer vision, and NLP. Building intelligent solutions that bridge cutting-edge AI technology with real-world applications.",
  keywords = "AI engineer, machine learning, computer vision, NLP, artificial intelligence, data science, Python, TensorFlow, PyTorch",
  author = "Jesse A. Hawkins",
  url = "https://jesseahawkins.com",
  image = "https://jesseahawkins.com/images/og-image.jpg",
  type = "website",
  publishedTime,
  modifiedTime,
  canonicalUrl,
  noIndex = false,
  noFollow = false,
  customMeta = []
}) => {
  const fullTitle = title.includes("Jesse A. Hawkins") ? title : `${title} | Jesse A. Hawkins`;
  const robots = `${noIndex ? 'noindex' : 'index'},${noFollow ? 'nofollow' : 'follow'}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Jesse A. Hawkins Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@jesseahawkins" />
      <meta name="twitter:site" content="@jesseahawkins" />
      
      {/* Article specific meta tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Additional meta tags */}
      <meta name="theme-color" content="#3B82F6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Jesse A. Hawkins" />
      
      {/* Custom meta tags */}
      {customMeta.map((meta, index) => (
        <meta key={index} {...meta} />
      ))}
    </Helmet>
  );
};

// Structured Data Component
const StructuredData = ({ type = "Person", data }) => {
  const getPersonSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jesse A. Hawkins",
    jobTitle: "AI Engineer & Machine Learning Specialist",
    description: "Experienced AI engineer specializing in machine learning, computer vision, and natural language processing.",
    url: "https://jesseahawkins.com",
    image: "https://jesseahawkins.com/images/jesse-profile.jpg",
    email: "contact@jesseahawkins.com",
    sameAs: [
      "https://linkedin.com/in/jesseahawkins",
      "https://github.com/o0Praiz",
      "https://twitter.com/jesseahawkins"
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Data Science",
      "Python Programming",
      "TensorFlow",
      "PyTorch"
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "University of Technology"
    },
    workLocation: {
      "@type": "Place",
      name: "Remote / Worldwide"
    }
  });

  const getWebsiteSchema = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jesse A. Hawkins - AI Engineer Portfolio",
    url: "https://jesseahawkins.com",
    description: "Professional portfolio showcasing AI and machine learning projects, expertise, and insights.",
    author: {
      "@type": "Person",
      name: "Jesse A. Hawkins"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://jesseahawkins.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  });

  const getBlogSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "AI Insights & Research - Jesse A. Hawkins",
    url: "https://jesseahawkins.com/blog",
    description: "Deep dives into artificial intelligence, machine learning best practices, and the future of technology.",
    author: {
      "@type": "Person",
      name: "Jesse A. Hawkins"
    },
    publisher: {
      "@type": "Person",
      name: "Jesse A. Hawkins"
    }
  });

  const getProjectSchema = (project) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    url: project.demoUrl,
    applicationCategory: "AI/ML Application",
    operatingSystem: "Web Browser",
    author: {
      "@type": "Person",
      name: "Jesse A. Hawkins"
    },
    programmingLanguage: project.tags,
    dateCreated: project.timeline?.startDate,
    dateModified: project.lastUpdated
  });

  const getSchemaByType = () => {
    switch (type) {
      case "Person":
        return getPersonSchema();
      case "Website":
        return getWebsiteSchema();
      case "Blog":
        return getBlogSchema();
      case "Project":
        return getProjectSchema(data);
      default:
        return data || getPersonSchema();
    }
  };

  const schema = getSchemaByType();

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Google Analytics Component
const GoogleAnalytics = ({ trackingId, debug = false }) => {
  useEffect(() => {
    if (!trackingId) return;

    // Load gtag script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', trackingId, {
      page_title: document.title,
      page_location: window.location.href,
      debug_mode: debug
    });

    return () => {
      document.head.removeChild(script);
    };
  }, [trackingId, debug]);

  return null;
};

// Analytics Event Tracker Hook
const useAnalytics = () => {
  const trackEvent = (action, category = 'engagement', label, value) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  };

  const trackPageView = (page_title, page_location) => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'GA_TRACKING_ID', {
        page_title,
        page_location
      });
    }
  };

  const trackProjectView = (projectTitle) => {
    trackEvent('view_project', 'projects', projectTitle);
  };

  const trackContactForm = (formType) => {
    trackEvent('form_submit', 'contact', formType);
  };

  const trackDownload = (fileName) => {
    trackEvent('download', 'files', fileName);
  };

  const trackSocialClick = (platform) => {
    trackEvent('social_click', 'social', platform);
  };

  const trackBlogRead = (articleTitle) => {
    trackEvent('article_read', 'blog', articleTitle);
  };

  return {
    trackEvent,
    trackPageView,
    trackProjectView,
    trackContactForm,
    trackDownload,
    trackSocialClick,
    trackBlogRead
  };
};

// Page Speed Insights Component
const PageSpeedInsights = ({ url, strategy = 'mobile' }) => {
  const [metrics, setMetrics] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const analyzePageSpeed = async () => {
    if (!url) return;
    
    setLoading(true);
    try {
      const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=${strategy}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      setMetrics({
        score: data.lighthouseResult.categories.performance.score * 100,
        fcp: data.lighthouseResult.audits['first-contentful-paint'].displayValue,
        lcp: data.lighthouseResult.audits['largest-contentful-paint'].displayValue,
        cls: data.lighthouseResult.audits['cumulative-layout-shift'].displayValue,
        fid: data.lighthouseResult.audits['max-potential-fid']?.displayValue || 'N/A'
      });
    } catch (error) {
      console.error('PageSpeed Insights error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Page Speed Insights</h3>
      <button 
        onClick={analyzePageSpeed}
        disabled={loading}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Analyzing...' : 'Analyze Performance'}
      </button>
      
      {metrics && (
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Performance Score:</span>
            <span className={`font-bold ${metrics.score >= 90 ? 'text-green-600' : metrics.score >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
              {Math.round(metrics.score)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>First Contentful Paint:</span>
            <span>{metrics.fcp}</span>
          </div>
          <div className="flex justify-between">
            <span>Largest Contentful Paint:</span>
            <span>{metrics.lcp}</span>
          </div>
          <div className="flex justify-between">
            <span>Cumulative Layout Shift:</span>
            <span>{metrics.cls}</span>
          </div>
        </div>
      )}
    </div>
  );
};

// Sitemap Generator Function
const generateSitemap = (pages) => {
  const baseUrl = 'https://jesseahawkins.com';
  const currentDate = new Date().toISOString();
  
  const urlEntries = pages.map(page => `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${page.lastmod || currentDate}</lastmod>
    <changefreq>${page.changefreq || 'monthly'}</changefreq>
    <priority>${page.priority || '0.8'}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>${urlEntries}
</urlset>`;
};

// Robots.txt Generator Function
const generateRobotsTxt = (disallowPaths = []) => {
  const disallowEntries = disallowPaths.map(path => `Disallow: ${path}`).join('\n');
  
  return `User-agent: *
${disallowEntries || 'Allow: /'}

Sitemap: https://jesseahawkins.com/sitemap.xml

# Block AI crawlers if desired
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: CCBot
Disallow: /`;
};

// Meta Tags for Different Page Types
const getMetaTagsForPage = (pageType, data = {}) => {
  const baseMeta = {
    author: "Jesse A. Hawkins",
    url: "https://jesseahawkins.com",
    image: "https://jesseahawkins.com/images/og-image.jpg"
  };

  switch (pageType) {
    case 'home':
      return {
        ...baseMeta,
        title: "Jesse A. Hawkins - AI Engineer & Machine Learning Specialist",
        description: "Experienced AI engineer specializing in machine learning, computer vision, and NLP. Building intelligent solutions that bridge cutting-edge AI technology with real-world applications.",
        keywords: "AI engineer, machine learning, computer vision, NLP, artificial intelligence, data science, Python, TensorFlow, PyTorch"
      };

    case 'projects':
      return {
        ...baseMeta,
        title: "AI & ML Projects - Jesse A. Hawkins",
        description: "Explore my portfolio of AI and machine learning projects, from computer vision systems to NLP applications. Real-world solutions with detailed case studies.",
        keywords: "AI projects, machine learning portfolio, computer vision, NLP projects, data science projects"
      };

    case 'project':
      return {
        ...baseMeta,
        title: `${data.title} - AI Project by Jesse A. Hawkins`,
        description: data.description || data.shortDescription,
        keywords: data.tags?.join(', ') || "AI project, machine learning",
        url: `https://jesseahawkins.com/projects/${data.slug}`,
        image: data.image || baseMeta.image,
        type: "article",
        publishedTime: data.timeline?.startDate,
        modifiedTime: data.lastUpdated
      };

    case 'blog':
      return {
        ...baseMeta,
        title: "AI Insights & Research - Jesse A. Hawkins",
        description: "Deep dives into artificial intelligence, machine learning best practices, and the future of technology. Sharing knowledge from real-world AI implementations.",
        keywords: "AI blog, machine learning insights, AI research, tech articles, ML best practices"
      };

    case 'article':
      return {
        ...baseMeta,
        title: `${data.title} - Jesse A. Hawkins`,
        description: data.excerpt || data.description,
        keywords: data.tags?.join(', ') || "AI article, machine learning",
        url: `https://jesseahawkins.com/blog/${data.slug}`,
        image: data.image || baseMeta.image,
        type: "article",
        publishedTime: data.publishDate,
        modifiedTime: data.lastUpdated
      };

    case 'about':
      return {
        ...baseMeta,
        title: "About Jesse A. Hawkins - AI Engineer & Researcher",
        description: "Learn about Jesse's background in AI engineering, machine learning expertise, and passion for building intelligent solutions that solve real-world problems.",
        keywords: "Jesse A. Hawkins, AI engineer bio, machine learning expert, computer vision specialist"
      };

    case 'contact':
      return {
        ...baseMeta,
        title: "Contact Jesse A. Hawkins - AI Engineering Consultation",
        description: "Get in touch for AI consulting, machine learning projects, or collaboration opportunities. Available for remote and on-site AI engineering work.",
        keywords: "AI consultant, machine learning services, AI project consultation, hire AI engineer"
      };

    default:
      return baseMeta;
  }
};

// Export all SEO components
export {
  SEOHead,
  StructuredData,
  GoogleAnalytics,
  useAnalytics,
  PageSpeedInsights,
  generateSitemap,
  generateRobotsTxt,
  getMetaTagsForPage
};

// Default export
export default {
  SEOHead,
  StructuredData,
  GoogleAnalytics,
  useAnalytics,
  PageSpeedInsights,
  generateSitemap,
  generateRobotsTxt,
  getMetaTagsForPage
};