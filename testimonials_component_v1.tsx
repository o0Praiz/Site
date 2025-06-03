import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Quote, 
  Linkedin, 
  Twitter, 
  Building,
  MapPin,
  Calendar,
  Award,
  TrendingUp,
  Users,
  Target
} from 'lucide-react';

const TestimonialsComponent = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      text: "Jesse's sentiment analysis solution transformed how we understand our customers. The accuracy and speed improvements were beyond our expectations. His technical expertise combined with clear communication made the entire process seamless.",
      author: "Sarah Chen",
      role: "Head of Product Analytics",
      company: "TechFlow Solutions",
      companySize: "500+ employees",
      industry: "SaaS",
      location: "San Francisco, CA",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      projectType: "Sentiment Analysis Platform",
      results: "94% accuracy improvement",
      timeline: "Delivered 2 weeks early",
      linkedin: "https://linkedin.com/in/sarahchen",
      featured: true
    },
    {
      id: 2,
      text: "Working with Jesse on our computer vision project was exceptional. He delivered a robust object detection system that exceeded our performance requirements. His attention to detail and innovative approach solved complex challenges we didn't think were possible.",
      author: "David Rodriguez",
      role: "CTO",
      company: "AutoVision AI",
      companySize: "200+ employees", 
      industry: "Automotive AI",
      location: "Detroit, MI",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      projectType: "Computer Vision System",
      results: "30% performance boost",
      timeline: "6-month project",
      linkedin: "https://linkedin.com/in/davidrodriguez",
      featured: true
    },
    {
      id: 3,
      text: "Jesse's data analytics dashboard revolutionized our decision-making process. The real-time insights and predictive capabilities have given us a significant competitive advantage. Highly recommend his expertise to any organization looking to leverage data effectively.",
      author: "Emily Watson",
      role: "VP of Operations",
      company: "DataDriven Corp",
      companySize: "1000+ employees",
      industry: "FinTech",
      location: "New York, NY",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      projectType: "Analytics Dashboard",
      results: "40% faster decisions",
      timeline: "3-month delivery",
      twitter: "https://twitter.com/emilywatson",
      featured: false
    },
    {
      id: 4,
      text: "The recommendation engine Jesse built for our e-commerce platform increased user engagement by 45%. His deep understanding of machine learning algorithms and business requirements resulted in a solution that perfectly balanced technical excellence with practical impact.",
      author: "Marcus Johnson",
      role: "Director of Engineering",
      company: "ShopSmart Technologies",
      companySize: "300+ employees",
      industry: "E-commerce",
      location: "Seattle, WA",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      projectType: "Recommendation Engine",
      results: "45% engagement increase",
      timeline: "4-month project",
      linkedin: "https://linkedin.com/in/marcusjohnson",
      featured: false
    },
    {
      id: 5,
      text: "Jesse's AI consultation helped us identify key opportunities for automation in our workflow. His strategic insights and technical roadmap have positioned us perfectly for scaling our AI initiatives. A true expert who delivers real business value.",
      author: "Lisa Park",
      role: "Chief Innovation Officer",
      company: "InnovateNow Inc",
      companySize: "150+ employees",
      industry: "Consulting",
      location: "Austin, TX",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      projectType: "AI Strategy Consultation",
      results: "60% process automation",
      timeline: "2-month engagement",
      linkedin: "https://linkedin.com/in/lisapark",
      featured: false
    }
  ];

  const stats = [
    { icon: Users, value: "50+", label: "Happy Clients" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: Target, value: "98%", label: "Success Rate" },
    { icon: TrendingUp, value: "150%", label: "Avg ROI Increase" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 6000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
              Client Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from the industry leaders who've transformed their businesses with AI solutions. 
            Real results from real partnerships.
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Main Testimonial */}
        <div className={`relative transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Left Side - Testimonial Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <Quote className="w-8 h-8 text-blue-600" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {renderStars(currentTest.rating)}
                  <span className="ml-2 text-sm text-gray-500">({currentTest.rating}.0)</span>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl lg:text-2xl text-gray-800 leading-relaxed mb-8 font-medium">
                  "{currentTest.text}"
                </blockquote>

                {/* Project Details */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="text-sm text-blue-600 font-medium">Project Type</div>
                    <div className="text-blue-900 font-semibold">{currentTest.projectType}</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <div className="text-sm text-green-600 font-medium">Key Result</div>
                    <div className="text-green-900 font-semibold">{currentTest.results}</div>
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex items-center space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-blue-600 scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Side - Author Info */}
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-8 lg:p-12 text-white flex flex-col justify-center">
                
                {/* Author Avatar & Basic Info */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <span className="text-2xl font-bold">
                      {currentTest.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{currentTest.author}</h3>
                    <p className="text-blue-100">{currentTest.role}</p>
                  </div>
                </div>

                {/* Company Info */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Building className="w-5 h-5 text-blue-200" />
                    <div>
                      <div className="font-semibold">{currentTest.company}</div>
                      <div className="text-sm text-blue-200">{currentTest.industry} • {currentTest.companySize}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-200" />
                    <span className="text-blue-100">{currentTest.location}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-blue-200" />
                    <span className="text-blue-100">{currentTest.timeline}</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-3">
                  {currentTest.linkedin && (
                    <a
                      href={currentTest.linkedin}
                      className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  )}
                  {currentTest.twitter && (
                    <a
                      href={currentTest.twitter}
                      className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors"
                    >
                      <Twitter className="w-6 h-6" />
                    </a>
                  )}
                </div>

                {/* Featured Badge */}
                {currentTest.featured && (
                  <div className="mt-6">
                    <div className="inline-flex items-center space-x-2 bg-yellow-400/20 text-yellow-200 px-4 py-2 rounded-full text-sm font-medium">
                      <Award className="w-4 h-4" />
                      <span>Featured Client</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Additional Testimonials Grid */}
        <div className={`mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">More Success Stories</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.filter((_, index) => index !== currentTestimonial).slice(0, 3).map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-xl shadow-lg border border-gray-200/50 p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => goToTestimonial(testimonials.findIndex(t => t.id === testimonial.id))}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-700 mb-4 line-clamp-3 group-hover:text-gray-900 transition-colors">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-semibold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                    <div className="text-sm text-blue-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how AI can transform your business. Schedule a free consultation 
              to explore the possibilities for your next project.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsComponent;