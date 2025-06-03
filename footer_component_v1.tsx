import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Twitter, 
  MapPin, 
  Phone, 
  Heart, 
  ArrowUp,
  Brain,
  ExternalLink,
  Calendar,
  Coffee
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#blog' },
    { name: 'Resume', href: '#resume' }
  ];

  const projectCategories = [
    { name: 'Machine Learning', href: '#ml' },
    { name: 'Computer Vision', href: '#cv' },
    { name: 'NLP Projects', href: '#nlp' },
    { name: 'Data Science', href: '#data' },
    { name: 'AI Tools', href: '#tools' },
    { name: 'Open Source', href: '#opensource' }
  ];

  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com/o0Praiz', 
      icon: Github,
      color: 'hover:text-gray-900 hover:bg-gray-100'
    },
    { 
      name: 'LinkedIn', 
      href: '#', 
      icon: Linkedin,
      color: 'hover:text-blue-600 hover:bg-blue-50'
    },
    { 
      name: 'Twitter', 
      href: '#', 
      icon: Twitter,
      color: 'hover:text-blue-400 hover:bg-blue-50'
    },
    { 
      name: 'Email', 
      href: 'mailto:contact@jesseahawkins.com', 
      icon: Mail,
      color: 'hover:text-red-600 hover:bg-red-50'
    }
  ];

  const contactInfo = [
    { 
      icon: MapPin, 
      text: 'Available Worldwide',
      subtext: 'Remote & On-site'
    },
    { 
      icon: Mail, 
      text: 'contact@jesseahawkins.com',
      href: 'mailto:contact@jesseahawkins.com'
    },
    { 
      icon: Calendar, 
      text: 'Schedule a Call',
      href: '#contact'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-white rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-1/3 w-16 h-16 border border-white rounded-lg"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Jesse A. Hawkins</h3>
                  <p className="text-gray-400 text-sm">AI Engineer</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Passionate about creating intelligent solutions that bridge cutting-edge AI technology 
                with real-world applications. Let's build the future together.
              </p>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm text-gray-300 transition-all duration-300 ${link.color} transform hover:scale-110`}
                      aria-label={link.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200 flex items-center group"
                    >
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Project Categories</h4>
              <ul className="space-y-3">
                {projectCategories.map((category) => (
                  <li key={category.name}>
                    <a
                      href={category.href}
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200 flex items-center group"
                    >
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Get In Touch</h4>
              <ul className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm flex-shrink-0 mt-0.5">
                        <IconComponent className="w-4 h-4 text-gray-300" />
                      </div>
                      <div>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            className="text-gray-300 hover:text-white text-sm transition-colors duration-200 flex items-center group"
                          >
                            {contact.text}
                            <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          </a>
                        ) : (
                          <span className="text-gray-300 text-sm">{contact.text}</span>
                        )}
                        {contact.subtext && (
                          <p className="text-gray-400 text-xs mt-1">{contact.subtext}</p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Coffee className="w-4 h-4" />
                  <span>Let's Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>© {currentYear} Jesse A. Hawkins. Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>and lots of coffee.</span>
              </div>

              {/* Links */}
              <div className="flex items-center space-x-6 text-sm">
                <a href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#sitemap" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Sitemap
                </a>
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 group"
                aria-label="Back to top"
              >
                <span className="text-sm">Back to top</span>
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-colors duration-300">
                  <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-2 bg-gradient-to-r from-blue-500 to-purple-500 blur-sm opacity-50"></div>
    </footer>
  );
};

export default Footer;