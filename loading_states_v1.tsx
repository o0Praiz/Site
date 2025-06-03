import React from 'react';
import { Loader, Brain, Zap, Database, Code } from 'lucide-react';

// Base Skeleton Component
const Skeleton = ({ className = "", animate = true }) => (
  <div 
    className={`bg-gray-200 rounded ${animate ? 'animate-pulse' : ''} ${className}`}
  />
);

// Project Card Skeleton
const ProjectCardSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden">
    {/* Image skeleton */}
    <Skeleton className="h-48 w-full rounded-none" />
    
    <div className="p-6">
      {/* Category and complexity badges */}
      <div className="flex items-center justify-between mb-3">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-6 w-16" />
      </div>
      
      {/* Title */}
      <Skeleton className="h-6 w-3/4 mb-3" />
      
      {/* Description */}
      <div className="space-y-2 mb-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-6 w-14" />
        <Skeleton className="h-6 w-18" />
      </div>
      
      {/* Stats */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-4 w-8" />
          <Skeleton className="h-4 w-12" />
        </div>
        <Skeleton className="h-4 w-16" />
      </div>
    </div>
  </div>
);

// Hero Section Skeleton
const HeroSkeleton = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      
      {/* Welcome badge */}
      <Skeleton className="h-10 w-64 mx-auto mb-6" />
      
      {/* Main title */}
      <Skeleton className="h-16 w-96 mx-auto mb-6" />
      
      {/* Role subtitle */}
      <Skeleton className="h-12 w-80 mx-auto mb-12" />
      
      {/* Description */}
      <div className="max-w-3xl mx-auto mb-12 space-y-3">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-5/6 mx-auto" />
        <Skeleton className="h-6 w-4/6 mx-auto" />
      </div>
      
      {/* Tech stack icons */}
      <div className="flex justify-center items-center space-x-8 mb-12">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="text-center">
            <Skeleton className="w-16 h-16 rounded-xl mx-auto mb-2" />
            <Skeleton className="h-4 w-12 mx-auto" />
          </div>
        ))}
      </div>
      
      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Skeleton className="h-14 w-48" />
        <Skeleton className="h-14 w-40" />
      </div>
    </div>
  </div>
);

// Header Skeleton
const HeaderSkeleton = () => (
  <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        
        {/* Logo section */}
        <div className="flex items-center space-x-3">
          <Skeleton className="w-10 h-10 rounded-xl" />
          <div className="space-y-1">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-3 w-20" />
          </div>
        </div>
        
        {/* Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-5 w-16" />
          ))}
        </div>
        
        {/* Social links */}
        <div className="hidden lg:flex items-center space-x-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="w-10 h-10 rounded-lg" />
          ))}
        </div>
        
        {/* Mobile menu button */}
        <Skeleton className="lg:hidden w-10 h-10 rounded-lg" />
      </div>
    </div>
  </header>
);

// About Section Skeleton
const AboutSkeleton = () => (
  <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section header */}
      <div className="text-center mb-16">
        <Skeleton className="h-12 w-64 mx-auto mb-6" />
        <div className="max-w-3xl mx-auto space-y-3">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-4/5 mx-auto" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left column */}
        <div>
          {/* Profile image */}
          <Skeleton className="w-64 h-64 rounded-3xl mx-auto mb-8" />
          
          {/* Bio text */}
          <div className="space-y-4 mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
              </div>
            ))}
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Skeleton className="h-12 w-40" />
            <Skeleton className="h-12 w-36" />
          </div>
        </div>
        
        {/* Right column - Skills */}
        <div>
          <Skeleton className="h-8 w-48 mb-6" />
          
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-4 bg-white rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Skeleton className="w-10 h-10 rounded-lg" />
                    <Skeleton className="h-5 w-32" />
                  </div>
                  <Skeleton className="h-4 w-8" />
                </div>
                <Skeleton className="h-2 w-full rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Testimonials Skeleton
const TestimonialsSkeleton = () => (
  <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section header */}
      <div className="text-center mb-16">
        <Skeleton className="h-12 w-80 mx-auto mb-6" />
        <div className="max-w-3xl mx-auto space-y-3">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-4/5 mx-auto" />
        </div>
      </div>
      
      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="text-center">
            <Skeleton className="w-16 h-16 rounded-2xl mx-auto mb-3" />
            <Skeleton className="h-8 w-16 mx-auto mb-1" />
            <Skeleton className="h-4 w-20 mx-auto" />
          </div>
        ))}
      </div>
      
      {/* Main testimonial */}
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left side */}
          <div className="p-12">
            <Skeleton className="w-16 h-16 rounded-2xl mb-6" />
            <Skeleton className="h-6 w-32 mb-6" />
            
            <div className="space-y-4 mb-8">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-5/6" />
              <Skeleton className="h-6 w-4/6" />
              <Skeleton className="h-6 w-3/6" />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Skeleton className="h-20 rounded-xl" />
              <Skeleton className="h-20 rounded-xl" />
            </div>
            
            <div className="flex space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="w-3 h-3 rounded-full" />
              ))}
            </div>
          </div>
          
          {/* Right side */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-12">
            <div className="flex items-center space-x-4 mb-6">
              <Skeleton className="w-20 h-20 rounded-2xl bg-white/20" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-32 bg-white/20" />
                <Skeleton className="h-4 w-24 bg-white/20" />
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <Skeleton className="h-5 w-48 bg-white/20" />
              <Skeleton className="h-4 w-36 bg-white/20" />
              <Skeleton className="h-4 w-28 bg-white/20" />
            </div>
            
            <div className="flex space-x-3">
              <Skeleton className="w-12 h-12 rounded-xl bg-white/20" />
              <Skeleton className="w-12 h-12 rounded-xl bg-white/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Contact Form Skeleton
const ContactFormSkeleton = () => (
  <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section header */}
      <div className="text-center mb-16">
        <Skeleton className="h-12 w-96 mx-auto mb-6" />
        <div className="max-w-3xl mx-auto space-y-3">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-4/5 mx-auto" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Contact info */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6">
            <Skeleton className="h-6 w-32 mb-6" />
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start space-x-4">
                  <Skeleton className="w-12 h-12 rounded-xl" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-4 w-36" />
                    <Skeleton className="h-3 w-28" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6">
            <Skeleton className="h-5 w-32 mb-4" />
            <div className="flex space-x-3">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="w-12 h-12 rounded-xl" />
              ))}
            </div>
          </div>
        </div>
        
        {/* Contact form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-8">
            <div className="mb-8">
              <Skeleton className="h-8 w-48 mb-2" />
              <Skeleton className="h-4 w-64" />
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Skeleton className="h-4 w-16 mb-2" />
                  <Skeleton className="h-12 w-full" />
                </div>
                <div>
                  <Skeleton className="h-4 w-16 mb-2" />
                  <Skeleton className="h-12 w-full" />
                </div>
              </div>
              
              <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-12 w-full" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i}>
                    <Skeleton className="h-4 w-20 mb-2" />
                    <Skeleton className="h-12 w-full" />
                  </div>
                ))}
              </div>
              
              <div>
                <Skeleton className="h-4 w-32 mb-3" />
                <div className="flex space-x-4">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
              
              <div>
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-32 w-full" />
              </div>
              
              <Skeleton className="h-14 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Loading Spinner Component
const LoadingSpinner = ({ size = "medium", color = "blue" }) => {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-8 h-8", 
    large: "w-12 h-12",
    xlarge: "w-16 h-16"
  };
  
  const colorClasses = {
    blue: "text-blue-600",
    purple: "text-purple-600",
    gray: "text-gray-600",
    white: "text-white"
  };
  
  return (
    <Loader className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]}`} />
  );
};

// Full Page Loading Component
const FullPageLoader = () => (
  <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
    <div className="text-center">
      {/* Animated Logo */}
      <div className="relative mb-8">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl animate-bounce">
          <Brain className="w-12 h-12 text-white" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl animate-ping opacity-25"></div>
      </div>
      
      {/* Loading text */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Loading Portfolio</h2>
      <p className="text-gray-600 mb-8">Preparing amazing AI projects for you...</p>
      
      {/* Progress indicators */}
      <div className="flex justify-center space-x-2 mb-8">
        {[Zap, Database, Code, Brain].map((Icon, index) => (
          <div 
            key={index}
            className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center"
            style={{ 
              animation: `pulse 2s infinite ${index * 0.3}s` 
            }}
          >
            <Icon className="w-4 h-4 text-gray-600" />
          </div>
        ))}
      </div>
      
      {/* Loading bar */}
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-loading-bar"></div>
      </div>
    </div>
    
    <style jsx>{`
      @keyframes loading-bar {
        0% { width: 0%; }
        50% { width: 70%; }
        100% { width: 100%; }
      }
      
      .animate-loading-bar {
        animation: loading-bar 3s ease-in-out infinite;
      }
    `}</style>
  </div>
);

// Button Loading State
const LoadingButton = ({ children, isLoading, className = "", ...props }) => (
  <button 
    className={`flex items-center justify-center space-x-2 transition-all duration-200 ${
      isLoading ? 'opacity-80 cursor-not-allowed' : ''
    } ${className}`}
    disabled={isLoading}
    {...props}
  >
    {isLoading && <LoadingSpinner size="small" color="white" />}
    <span>{children}</span>
  </button>
);

// Error State Component
const ErrorState = ({ title = "Oops! Something went wrong", message, onRetry }) => (
  <div className="text-center py-12">
    <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <div className="w-12 h-12 text-red-600">⚠️</div>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-6 max-w-md mx-auto">
      {message || "We're experiencing some technical difficulties. Please try again later."}
    </p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Try Again
      </button>
    )}
  </div>
);

// Empty State Component
const EmptyState = ({ title = "No data found", message, action }) => (
  <div className="text-center py-12">
    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <div className="w-12 h-12 text-gray-400">📭</div>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-6 max-w-md mx-auto">{message}</p>
    {action}
  </div>
);

export {
  Skeleton,
  ProjectCardSkeleton,
  HeroSkeleton,
  HeaderSkeleton,
  AboutSkeleton,
  TestimonialsSkeleton,
  ContactFormSkeleton,
  LoadingSpinner,
  FullPageLoader,
  LoadingButton,
  ErrorState,
  EmptyState
};