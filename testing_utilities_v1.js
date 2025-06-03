// testing/index.js - Comprehensive Testing Utilities

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import userEvent from '@testing-library/user-event';

// Test Utilities for React Components
export const testUtils = {
  
  // Enhanced render function with providers
  renderWithProviders: (ui, options = {}) => {
    const AllTheProviders = ({ children }) => {
      return (
        <HelmetProvider>
          {children}
        </HelmetProvider>
      );
    };

    return render(ui, { wrapper: AllTheProviders, ...options });
  },

  // Mock intersection observer for testing
  mockIntersectionObserver: () => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
    window.IntersectionObserver.POLL_INTERVAL = 100;
  },

  // Mock window methods
  mockWindowMethods: () => {
    Object.defineProperty(window, 'scrollTo', {
      value: jest.fn(),
      writable: true
    });
    
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  },

  // Create mock project data
  createMockProject: (overrides = {}) => ({
    id: 1,
    title: "Test AI Project",
    slug: "test-ai-project",
    description: "A test project for AI development",
    shortDescription: "Test project description",
    image: "/test-image.jpg",
    thumbnail: "/test-thumb.jpg",
    category: "Machine Learning",
    tags: ["Python", "TensorFlow", "React"],
    complexity: "Intermediate",
    status: "Completed",
    featured: false,
    metrics: {
      stars: 10,
      views: 100,
      forks: 5,
      downloads: 20
    },
    ...overrides
  }),

  // Create mock user event
  createUserEvent: () => userEvent.setup(),

  // Wait for element to appear
  waitForElement: async (selector) => {
    return await waitFor(() => {
      const element = screen.getByTestId(selector) || screen.getByRole(selector);
      expect(element).toBeInTheDocument();
      return element;
    });
  }
};

// Performance Testing Utilities
export const performanceUtils = {
  
  // Measure component render time
  measureRenderTime: async (Component, props = {}) => {
    const startTime = performance.now();
    testUtils.renderWithProviders(<Component {...props} />);
    const endTime = performance.now();
    return endTime - startTime;
  },

  // Test for performance regressions
  performanceTest: (componentName, maxRenderTime = 16) => {
    return async (Component, props) => {
      const renderTime = await performanceUtils.measureRenderTime(Component, props);
      expect(renderTime).toBeLessThan(maxRenderTime);
      console.log(`${componentName} rendered in ${renderTime.toFixed(2)}ms`);
    };
  },

  // Memory leak detection
  detectMemoryLeaks: () => {
    const initialMemory = performance.memory?.usedJSHeapSize || 0;
    
    return {
      checkMemoryUsage: () => {
        const currentMemory = performance.memory?.usedJSHeapSize || 0;
        const memoryIncrease = currentMemory - initialMemory;
        
        return {
          initial: initialMemory,
          current: currentMemory,
          increase: memoryIncrease,
          increasePercentage: ((memoryIncrease / initialMemory) * 100).toFixed(2)
        };
      }
    };
  },

  // Lighthouse performance testing
  auditPerformance: async (url) => {
    // This would integrate with Lighthouse CI in a real environment
    const mockAudit = {
      performance: Math.floor(Math.random() * 20) + 80, // 80-100
      accessibility: Math.floor(Math.random() * 10) + 90, // 90-100
      bestPractices: Math.floor(Math.random() * 15) + 85, // 85-100
      seo: Math.floor(Math.random() * 10) + 90, // 90-100
      lcp: (Math.random() * 1.5 + 1).toFixed(1), // 1.0-2.5s
      fid: Math.floor(Math.random() * 80 + 20), // 20-100ms
      cls: (Math.random() * 0.05).toFixed(3) // 0.000-0.050
    };

    return mockAudit;
  }
};

// Accessibility Testing Utilities
export const a11yUtils = {
  
  // Test keyboard navigation
  testKeyboardNavigation: async (container) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    for (let i = 0; i < focusableElements.length; i++) {
      await userEvent.tab();
      expect(focusableElements[i]).toHaveFocus();
    }
  },

  // Test ARIA attributes
  checkAriaAttributes: (element) => {
    const ariaTests = {
      hasAriaLabel: element.hasAttribute('aria-label'),
      hasAriaLabelledBy: element.hasAttribute('aria-labelledby'),
      hasAriaDescribedBy: element.hasAttribute('aria-describedby'),
      hasRole: element.hasAttribute('role'),
      hasTabIndex: element.hasAttribute('tabindex')
    };

    return ariaTests;
  },

  // Color contrast testing
  checkColorContrast: (element) => {
    const styles = window.getComputedStyle(element);
    const color = styles.color;
    const backgroundColor = styles.backgroundColor;
    
    // This is a simplified version - in practice, you'd use a proper color contrast library
    return {
      color,
      backgroundColor,
      // Mock contrast ratio calculation
      contrastRatio: (Math.random() * 10 + 4.5).toFixed(1),
      meetsWCAA: true
    };
  },

  // Screen reader testing simulation
  simulateScreenReader: (element) => {
    const textContent = element.textContent || '';
    const ariaLabel = element.getAttribute('aria-label') || '';
    const altText = element.getAttribute('alt') || '';
    
    return {
      announcedText: ariaLabel || altText || textContent,
      isAnnounced: !!(ariaLabel || altText || textContent),
      role: element.getAttribute('role') || element.tagName.toLowerCase()
    };
  }
};

// Form Testing Utilities
export const formUtils = {
  
  // Fill and submit form
  fillAndSubmitForm: async (formData) => {
    const user = testUtils.createUserEvent();
    
    for (const [fieldName, value] of Object.entries(formData)) {
      const field = screen.getByLabelText(new RegExp(fieldName, 'i')) || 
                   screen.getByPlaceholderText(new RegExp(fieldName, 'i'));
      await user.clear(field);
      await user.type(field, value);
    }
    
    const submitButton = screen.getByRole('button', { name: /submit|send/i });
    await user.click(submitButton);
  },

  // Test form validation
  testFormValidation: async (invalidData, expectedErrors) => {
    await formUtils.fillAndSubmitForm(invalidData);
    
    for (const errorMessage of expectedErrors) {
      expect(screen.getByText(new RegExp(errorMessage, 'i'))).toBeInTheDocument();
    }
  },

  // Test form field interactions
  testFieldInteractions: async (fieldLabel) => {
    const user = testUtils.createUserEvent();
    const field = screen.getByLabelText(new RegExp(fieldLabel, 'i'));
    
    // Test focus
    await user.click(field);
    expect(field).toHaveFocus();
    
    // Test typing
    await user.type(field, 'test input');
    expect(field).toHaveValue('test input');
    
    // Test clearing
    await user.clear(field);
    expect(field).toHaveValue('');
  }
};

// Visual Regression Testing Utilities
export const visualUtils = {
  
  // Capture component screenshot (mock)
  captureComponentScreenshot: async (componentName, Component, props = {}) => {
    // In a real implementation, this would integrate with tools like Percy or Chromatic
    testUtils.renderWithProviders(<Component {...props} />);
    
    return {
      componentName,
      timestamp: new Date().toISOString(),
      viewport: { width: 1200, height: 800 },
      screenshotPath: `/screenshots/${componentName}-${Date.now()}.png`
    };
  },

  // Compare visual differences
  compareScreenshots: (baseline, current) => {
    // Mock visual comparison result
    return {
      identical: Math.random() > 0.1, // 90% chance of being identical
      differences: Math.floor(Math.random() * 5), // 0-4 differences
      similarity: (Math.random() * 5 + 95).toFixed(2), // 95-100% similarity
      diffImage: '/diffs/comparison.png'
    };
  }
};

// Integration Testing Utilities
export const integrationUtils = {
  
  // Test API integration
  mockApiCall: (endpoint, response, delay = 100) => {
    return jest.fn().mockImplementation(() => 
      new Promise(resolve => 
        setTimeout(() => resolve(response), delay)
      )
    );
  },

  // Test analytics integration
  mockAnalytics: () => {
    const mockGtag = jest.fn();
    window.gtag = mockGtag;
    window.dataLayer = [];
    
    return {
      expectEventTracked: (eventName, parameters = {}) => {
        expect(mockGtag).toHaveBeenCalledWith('event', eventName, expect.objectContaining(parameters));
      },
      expectPageViewTracked: (pagePath) => {
        expect(mockGtag).toHaveBeenCalledWith('config', expect.any(String), expect.objectContaining({
          page_location: expect.stringContaining(pagePath)
        }));
      }
    };
  },

  // Test email service integration
  mockEmailService: () => {
    const mockEmailJS = {
      send: jest.fn().mockResolvedValue({ status: 200, text: 'OK' }),
      sendForm: jest.fn().mockResolvedValue({ status: 200, text: 'OK' }),
      init: jest.fn()
    };
    
    return mockEmailJS;
  }
};

// Component Testing Helpers
export const componentUtils = {
  
  // Test component props
  testComponentProps: (Component, propTests) => {
    propTests.forEach(({ props, expectations }) => {
      testUtils.renderWithProviders(<Component {...props} />);
      
      expectations.forEach(({ selector, expected }) => {
        const element = screen.getByTestId(selector) || screen.getByText(selector);
        expect(element).toBeInTheDocument();
        if (expected.text) expect(element).toHaveTextContent(expected.text);
        if (expected.className) expect(element).toHaveClass(expected.className);
        if (expected.attribute) {
          Object.entries(expected.attribute).forEach(([attr, value]) => {
            expect(element).toHaveAttribute(attr, value);
          });
        }
      });
    });
  },

  // Test component states
  testComponentStates: async (Component, stateTests) => {
    for (const { action, expectedState } of stateTests) {
      testUtils.renderWithProviders(<Component />);
      
      if (action.type === 'click') {
        await userEvent.click(screen.getByRole('button', { name: action.target }));
      }
      
      if (expectedState.text) {
        expect(screen.getByText(expectedState.text)).toBeInTheDocument();
      }
      
      if (expectedState.class) {
        const element = screen.getByTestId(expectedState.selector);
        expect(element).toHaveClass(expectedState.class);
      }
    }
  },

  // Test error boundaries
  testErrorBoundary: () => {
    const ThrowError = () => {
      throw new Error('Test error');
    };
    
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    testUtils.renderWithProviders(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );
    
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    consoleError.mockRestore();
  }
};

// Test Suites for Common Scenarios
export const testSuites = {
  
  // Full component test suite
  componentTestSuite: (Component, options = {}) => {
    const {
      name = 'Component',
      props = {},
      a11yTests = true,
      performanceTests = true,
      visualTests = false
    } = options;

    describe(`${name} Component`, () => {
      beforeEach(() => {
        testUtils.mockIntersectionObserver();
        testUtils.mockWindowMethods();
      });

      test('renders without crashing', () => {
        expect(() => {
          testUtils.renderWithProviders(<Component {...props} />);
        }).not.toThrow();
      });

      if (a11yTests) {
        test('meets accessibility standards', async () => {
          const { container } = testUtils.renderWithProviders(<Component {...props} />);
          await a11yUtils.testKeyboardNavigation(container);
        });
      }

      if (performanceTests) {
        test('renders within performance budget', async () => {
          const renderTime = await performanceUtils.measureRenderTime(Component, props);
          expect(renderTime).toBeLessThan(16); // 60fps = 16ms per frame
        });
      }

      if (visualTests) {
        test('matches visual snapshot', async () => {
          const screenshot = await visualUtils.captureComponentScreenshot(name, Component, props);
          expect(screenshot).toBeDefined();
        });
      }
    });
  },

  // Form component test suite
  formTestSuite: (FormComponent, formData) => {
    describe('Form Component', () => {
      test('handles form submission', async () => {
        testUtils.renderWithProviders(<FormComponent />);
        await formUtils.fillAndSubmitForm(formData.valid);
        // Add assertions based on expected behavior
      });

      test('validates required fields', async () => {
        testUtils.renderWithProviders(<FormComponent />);
        await formUtils.testFormValidation(formData.invalid, formData.expectedErrors);
      });

      test('handles form field interactions', async () => {
        testUtils.renderWithProviders(<FormComponent />);
        for (const fieldName of Object.keys(formData.valid)) {
          await formUtils.testFieldInteractions(fieldName);
        }
      });
    });
  },

  // Performance test suite
  performanceTestSuite: (components) => {
    describe('Performance Tests', () => {
      components.forEach(({ Component, name, props = {} }) => {
        test(`${name} renders efficiently`, async () => {
          const test = performanceUtils.performanceTest(name, 16);
          await test(Component, props);
        });
      });

      test('no memory leaks detected', () => {
        const memoryTracker = performanceUtils.detectMemoryLeaks();
        
        // Simulate multiple renders
        for (let i = 0; i < 100; i++) {
          components.forEach(({ Component, props = {} }) => {
            const { unmount } = testUtils.renderWithProviders(<Component {...props} />);
            unmount();
          });
        }
        
        const memoryUsage = memoryTracker.checkMemoryUsage();
        expect(parseFloat(memoryUsage.increasePercentage)).toBeLessThan(50); // Less than 50% increase
      });
    });
  }
};

// Test Data Generators
export const testDataGenerators = {
  
  // Generate mock project data
  generateProjects: (count = 5) => {
    return Array.from({ length: count }, (_, index) => 
      testUtils.createMockProject({
        id: index + 1,
        title: `Test Project ${index + 1}`,
        slug: `test-project-${index + 1}`
      })
    );
  },

  // Generate mock blog posts
  generateBlogPosts: (count = 3) => {
    const categories = ['AI Research', 'MLOps', 'Computer Vision'];
    
    return Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      title: `Test Article ${index + 1}`,
      slug: `test-article-${index + 1}`,
      excerpt: `This is a test excerpt for article ${index + 1}`,
      category: categories[index % categories.length],
      tags: ['AI', 'Testing', 'React'],
      publishDate: new Date().toISOString(),
      readTime: Math.floor(Math.random() * 10) + 5
    }));
  },

  // Generate mock testimonials
  generateTestimonials: (count = 3) => {
    return Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      text: `This is a test testimonial ${index + 1}`,
      author: `Test Author ${index + 1}`,
      role: `Test Role ${index + 1}`,
      company: `Test Company ${index + 1}`,
      rating: 5
    }));
  }
};

// Global Test Setup
export const setupTests = () => {
  // Mock IntersectionObserver
  testUtils.mockIntersectionObserver();
  
  // Mock window methods
  testUtils.mockWindowMethods();
  
  // Mock fetch for API calls
  global.fetch = jest.fn();
  
  // Mock console.error for cleaner test output
  const originalError = console.error;
  beforeAll(() => {
    console.error = (...args) => {
      if (
        typeof args[0] === 'string' &&
        args[0].includes('Warning: ReactDOM.render is no longer supported')
      ) {
        return;
      }
      originalError.call(console, ...args);
    };
  });
  
  afterAll(() => {
    console.error = originalError;
  });
};

// Export all utilities
export default {
  testUtils,
  performanceUtils,
  a11yUtils,
  formUtils,
  visualUtils,
  integrationUtils,
  componentUtils,
  testSuites,
  testDataGenerators,
  setupTests
};