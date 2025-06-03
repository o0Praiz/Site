import React, { 
  Suspense, 
  lazy, 
  useState, 
  useEffect, 
  useRef, 
  memo, 
  useMemo, 
  useCallback 
} from 'react';

// Lazy Loading Image Component with Progressive Enhancement
const LazyImage = memo(({ 
  src, 
  alt, 
  placeholder = '/api/placeholder/400/300',
  className = '',
  sizes = '',
  srcSet = '',
  loading = 'lazy',
  onLoad,
  onError,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);
  const placeholderRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(img);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    observer.observe(img);
    return () => observer.disconnect();
  }, []);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError]);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} {...props}>
      {/* Placeholder */}
      <img
        ref={placeholderRef}
        src={placeholder}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ filter: 'blur(8px)', transform: 'scale(1.1)' }}
      />
      
      {/* Actual Image */}
      {isInView && (
        <img
          src={hasError ? placeholder : src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
      
      {/* Loading Shimmer */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" />
      )}
      
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

// Component Lazy Loader with Error Boundary
const LazyLoader = ({ 
  loader, 
  fallback = <div className="animate-pulse bg-gray-200 h-32 rounded-lg" />,
  error = <div className="text-red-500 p-4">Failed to load component</div>
}) => {
  const LazyComponent = lazy(loader);
  
  return (
    <ErrorBoundary fallback={error}>
      <Suspense fallback={fallback}>
        <LazyComponent />
      </Suspense>
    </ErrorBoundary>
  );
};

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="text-red-800 font-semibold">Something went wrong</h3>
          <p className="text-red-600 text-sm mt-1">Please try refreshing the page</p>
        </div>
      );
    }

    return this.props.children;
  }
}

// Virtualized List for Large Datasets
const VirtualizedList = memo(({ 
  items, 
  itemHeight = 100, 
  containerHeight = 400, 
  renderItem,
  className = '' 
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef(null);

  const visibleItems = useMemo(() => {
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
      startIndex + Math.ceil(containerHeight / itemHeight) + 1,
      items.length
    );
    
    return items.slice(startIndex, endIndex).map((item, index) => ({
      ...item,
      index: startIndex + index
    }));
  }, [items, scrollTop, itemHeight, containerHeight]);

  const handleScroll = useCallback((e) => {
    setScrollTop(e.target.scrollTop);
  }, []);

  const totalHeight = items.length * itemHeight;
  const offsetY = Math.floor(scrollTop / itemHeight) * itemHeight;

  return (
    <div
      ref={containerRef}
      className={`overflow-auto ${className}`}
      style={{ height: containerHeight }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {visibleItems.map((item) => (
            <div
              key={item.index}
              style={{ height: itemHeight }}
              className="w-full"
            >
              {renderItem(item, item.index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

VirtualizedList.displayName = 'VirtualizedList';

// Debounced Input Component
const DebouncedInput = memo(({ 
  value, 
  onChange, 
  delay = 300, 
  ...props 
}) => {
  const [inputValue, setInputValue] = useState(value);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = useCallback((e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      onChange(newValue);
    }, delay);
  }, [onChange, delay]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <input
      {...props}
      value={inputValue}
      onChange={handleChange}
    />
  );
});

DebouncedInput.displayName = 'DebouncedInput';

// Memoized Card Component
const OptimizedCard = memo(({ 
  title, 
  description, 
  image, 
  onClick, 
  className = '' 
}) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <LazyImage 
        src={image} 
        alt={title}
        className="h-48 w-full rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
});

OptimizedCard.displayName = 'OptimizedCard';

// Resource Preloader Hook
const usePreloadResources = () => {
  const preloadImage = useCallback((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  }, []);

  const preloadImages = useCallback(async (sources) => {
    try {
      const promises = sources.map(src => preloadImage(src));
      return await Promise.all(promises);
    } catch (error) {
      console.warn('Failed to preload some images:', error);
      return [];
    }
  }, [preloadImage]);

  const preloadComponent = useCallback((importFn) => {
    return importFn();
  }, []);

  return { preloadImage, preloadImages, preloadComponent };
};

// Performance Monitor Component
const PerformanceMonitor = ({ onMetrics, interval = 5000 }) => {
  useEffect(() => {
    const measurePerformance = () => {
      const metrics = {
        memory: performance.memory ? {
          usedJSHeapSize: performance.memory.usedJSHeapSize,
          totalJSHeapSize: performance.memory.totalJSHeapSize,
          jsHeapSizeLimit: performance.memory.jsHeapSizeLimit
        } : null,
        navigation: performance.getEntriesByType('navigation')[0],
        paint: performance.getEntriesByType('paint'),
        timestamp: Date.now()
      };

      onMetrics?.(metrics);
    };

    measurePerformance();
    const intervalId = setInterval(measurePerformance, interval);

    return () => clearInterval(intervalId);
  }, [onMetrics, interval]);

  return null;
};

// Intersection Observer Hook for Analytics
const useIntersectionAnalytics = (elementRef, callback, options = {}) => {
  useEffect(() => {
    const element = elementRef.current;
    if (!element || !callback) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback({
            element: entry.target,
            intersectionRatio: entry.intersectionRatio,
            timestamp: Date.now()
          });
        }
      },
      {
        threshold: 0.5,
        ...options
      }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [elementRef, callback, options]);
};

// Progressive Enhancement Wrapper
const ProgressiveEnhancement = ({ 
  children, 
  fallback, 
  condition = () => true 
}) => {
  const [isEnhanced, setIsEnhanced] = useState(false);

  useEffect(() => {
    setIsEnhanced(condition());
  }, [condition]);

  return isEnhanced ? children : fallback;
};

// Code Splitting Wrapper
const CodeSplitWrapper = ({ 
  condition, 
  componentLoader, 
  fallback = <div>Loading...</div> 
}) => {
  const [shouldLoad, setShouldLoad] = useState(condition);
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    if (shouldLoad && !Component) {
      componentLoader().then(module => {
        setComponent(() => module.default || module);
      });
    }
  }, [shouldLoad, Component, componentLoader]);

  if (!shouldLoad) return null;
  if (!Component) return fallback;

  return <Component />;
};

// Optimized Image Gallery with Lazy Loading
const OptimizedGallery = memo(({ 
  images, 
  columns = 3, 
  gap = '1rem',
  onImageClick 
}) => {
  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = useCallback((index) => {
    setLoadedImages(prev => new Set([...prev, index]));
  }, []);

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap
  };

  return (
    <div style={gridStyle}>
      {images.map((image, index) => (
        <div 
          key={index}
          className="relative group cursor-pointer overflow-hidden rounded-lg"
          onClick={() => onImageClick?.(image, index)}
        >
          <LazyImage
            src={image.src}
            alt={image.alt || `Image ${index + 1}`}
            placeholder={image.placeholder}
            onLoad={() => handleImageLoad(index)}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {loadedImages.has(index) && (
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
});

OptimizedGallery.displayName = 'OptimizedGallery';

// Bundle Size Analyzer (Development Only)
const BundleAnalyzer = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const analyzeBundle = () => {
        const scripts = Array.from(document.querySelectorAll('script[src]'));
        const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
        
        console.group('Bundle Analysis');
        console.log('Scripts:', scripts.map(s => s.src));
        console.log('Stylesheets:', styles.map(s => s.href));
        console.log('Total Scripts:', scripts.length);
        console.log('Total Stylesheets:', styles.length);
        console.groupEnd();
      };

      setTimeout(analyzeBundle, 1000);
    }
  }, []);

  return null;
};

// Export all performance components
export {
  LazyImage,
  LazyLoader,
  ErrorBoundary,
  VirtualizedList,
  DebouncedInput,
  OptimizedCard,
  usePreloadResources,
  PerformanceMonitor,
  useIntersectionAnalytics,
  ProgressiveEnhancement,
  CodeSplitWrapper,
  OptimizedGallery,
  BundleAnalyzer
};

// Default export with all components
export default {
  LazyImage,
  LazyLoader,
  ErrorBoundary,
  VirtualizedList,
  DebouncedInput,
  OptimizedCard,
  usePreloadResources,
  PerformanceMonitor,
  useIntersectionAnalytics,
  ProgressiveEnhancement,
  CodeSplitWrapper,
  OptimizedGallery,
  BundleAnalyzer
};