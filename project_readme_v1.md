# Jesse A. Hawkins - AI Engineer Portfolio

A modern, responsive portfolio website showcasing AI and machine learning projects, built with React and optimized for performance.

## 🌟 Features

- **Modern Design**: Sleek, professional interface with smooth animations
- **AI Project Showcase**: Detailed project cards with filtering and search
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets
- **SEO Ready**: Comprehensive meta tags, structured data, and sitemap
- **Fully Responsive**: Mobile-first design that works on all devices
- **Interactive Components**: Dynamic testimonials, project modals, and contact forms
- **Blog Section**: Technical articles with search and categorization
- **Analytics Integration**: Google Analytics and performance monitoring

## 🚀 Quick Start

### Prerequisites
- Node.js v18 or higher
- npm v8 or higher

### Installation
```bash
# Clone the repository
git clone https://github.com/o0Praiz/Site.git
cd Site

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Build for Production
```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
jesseahawkins-website/
├── public/                     # Static assets
│   ├── images/                # Images and media files
│   ├── icons/                 # Icon files and favicons
│   └── docs/                  # Documentation files
├── src/
│   ├── components/            # React components
│   │   ├── layout/           # Header, Footer, Navigation
│   │   ├── ui/               # Reusable UI components
│   │   ├── sections/         # Page sections (Hero, About, etc.)
│   │   ├── project/          # Project-related components
│   │   ├── forms/            # Contact and other forms
│   │   ├── modals/           # Modal components
│   │   ├── animations/       # Animated backgrounds
│   │   ├── performance/      # Performance optimization components
│   │   └── loading/          # Loading states and skeletons
│   ├── data/                 # Project data and content
│   ├── hooks/                # Custom React hooks
│   ├── utils/                # Utility functions
│   ├── styles/               # Global styles and themes
│   └── App.jsx               # Main application component
├── docs/                     # Project documentation
│   ├── artifacts/            # Development artifacts
│   └── implementation/       # Implementation guides
├── .github/                  # GitHub workflows and templates
└── README.md                 # This file
```

## 🧩 Component Library

### Layout Components
- **Header**: Navigation with responsive menu and social links
- **Footer**: Contact information, links, and branding
- **Navigation**: Mobile-friendly navigation with smooth scrolling

### Section Components
- **HeroSection**: Animated hero with role rotation and tech stack
- **AboutSection**: Skills, achievements, and personal story
- **ProjectsSection**: Filterable project showcase with search
- **TestimonialsSection**: Client testimonials carousel
- **BlogSection**: Technical articles with categorization
- **ContactSection**: Contact form with validation

### UI Components
- **ProjectCard**: Interactive project display cards
- **ProjectDetailModal**: Comprehensive project information modal
- **LoadingStates**: Skeleton screens and loading indicators
- **AnimatedBackgrounds**: Various background animation effects

### Performance Components
- **LazyImage**: Optimized image loading with placeholders
- **VirtualizedList**: Efficient rendering for large lists
- **ErrorBoundary**: Graceful error handling
- **PerformanceMonitor**: Real-time performance tracking

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6) to Purple (#8B5CF6) gradient
- **Secondary**: Gray scale from #F9FAFB to #111827
- **Accent**: Green (#10B981) for success states
- **Warning**: Yellow (#F59E0B) for attention states
- **Error**: Red (#EF4444) for error states

### Typography
- **Headings**: Inter font family, bold weights
- **Body**: Inter font family, regular weights
- **Code**: Monospace for technical content

### Spacing
- **Base unit**: 4px (0.25rem)
- **Common spacings**: 8px, 12px, 16px, 24px, 32px, 48px, 64px

## 🔧 Custom Hooks

The project includes 25+ custom React hooks for common functionality:

### Data Management
- `useLocalStorage`: Persist state in localStorage
- `useAsync`: Handle async operations with loading states
- `useApi`: API calls with caching and error handling
- `useForm`: Form validation and state management

### UI/UX Hooks
- `useIntersectionObserver`: Scroll-triggered animations
- `useDebounce`: Debounced input handling
- `useClickOutside`: Close modals/dropdowns on outside click
- `useWindowSize`: Responsive design helpers
- `useBreakpoint`: Mobile/tablet/desktop detection

### Performance Hooks
- `useLazyImage`: Optimized image loading
- `usePreloadResources`: Resource preloading strategies
- `useIntersectionAnalytics`: View tracking for analytics

See `src/hooks/index.js` for the complete list.

## 📊 Performance Optimization

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Optimization Techniques
- **Code Splitting**: Dynamic imports for route-based splitting
- **Lazy Loading**: Images and components loaded on demand
- **Bundle Optimization**: Tree shaking and chunk optimization
- **Asset Optimization**: WebP images, compressed assets
- **Caching**: Browser caching with proper cache headers

### Performance Monitoring
```javascript
import { PerformanceMonitor } from './src/components/performance/';

// Monitor Core Web Vitals
<PerformanceMonitor 
  onMetrics={(metrics) => console.log(metrics)}
  interval={5000}
/>
```

## 🔍 SEO & Analytics

### SEO Features
- **Meta Tags**: Comprehensive meta tags for all pages
- **Structured Data**: JSON-LD markup for rich snippets
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawler instructions
- **Open Graph**: Social media sharing optimization

### Analytics Integration
```javascript
import { useAnalytics } from './src/components/seo/';

const { trackProjectView, trackContactForm } = useAnalytics();

// Track user interactions
trackProjectView('AI Sentiment Analysis');
trackContactForm('contact_form');
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1279px
- **Large**: 1280px - 1535px
- **XLarge**: ≥ 1536px

### Mobile-First Approach
All components are designed mobile-first with progressive enhancement for larger screens.

## 🧪 Testing

### Component Testing
```bash
# Run component tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run visual regression tests
npm run test:visual
```

### Performance Testing
```bash
# Lighthouse CI
npm run lighthouse

# Bundle analyzer
npm run analyze

# Performance profiling
npm run profile
```

## 🌐 Deployment

### Supported Platforms
- **Vercel** (Recommended): Zero-config deployment
- **Netlify**: JAMstack hosting with form handling
- **GitHub Pages**: Free static hosting
- **Traditional Hosting**: Any static file hosting

### Environment Variables
```env
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_SITE_URL=https://jesseahawkins.com
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_key
```

See [Deployment Guide](./docs/deployment-guide.md) for detailed instructions.

## 🛠️ Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # TypeScript type checking
npm run format       # Format code with Prettier
```

### Code Style
- **ESLint**: JavaScript/React linting
- **Prettier**: Code formatting
- **Husky**: Pre-commit hooks
- **Conventional Commits**: Standardized commit messages

### Development Workflow
1. Create feature branch from `main`
2. Make changes following code style guidelines
3. Test changes locally
4. Commit with conventional commit format
5. Push and create pull request
6. Deploy to staging for review
7. Merge to main for production deployment

## 📚 Documentation

### Artifact Documentation
All development artifacts are documented in `/docs/artifacts/`:
- Component specifications
- Design system guidelines
- Performance optimization strategies
- Implementation procedures

### API Documentation
- Component props and usage examples
- Custom hook interfaces
- Utility function references
- Integration guides

## 🔒 Security

### Security Features
- **CSP Headers**: Content Security Policy implementation
- **XSS Protection**: Cross-site scripting prevention
- **HTTPS**: SSL/TLS encryption
- **Input Validation**: Form input sanitization
- **Environment Security**: No sensitive data in client code

### Security Checklist
- [ ] All user inputs validated and sanitized
- [ ] No sensitive data exposed in client code
- [ ] HTTPS enabled with proper certificates
- [ ] Security headers configured
- [ ] Dependencies regularly updated

## 🤝 Contributing

### Getting Started
1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `npm install`
4. Create a feature branch: `git checkout -b feature/your-feature`
5. Make your changes following the code style
6. Test your changes thoroughly
7. Commit with conventional commit format
8. Push and create a pull request

### Code Style Guidelines
- Use functional components with hooks
- Follow React best practices
- Write self-documenting code with comments
- Use TypeScript for type safety (when applicable)
- Follow responsive design principles
- Optimize for performance and accessibility

## 🐛 Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node.js version
node --version  # Should be 18+
```

#### Performance Issues
- Check bundle size: `npm run analyze`
- Monitor Core Web Vitals
- Optimize images and assets
- Review lazy loading implementation

#### Styling Issues
- Check Tailwind CSS classes
- Verify responsive design breakpoints
- Test across different browsers
- Validate CSS syntax

### Getting Help
- Check the [Deployment Guide](./docs/deployment-guide.md)
- Review component documentation
- Search existing GitHub issues
- Create a new issue with detailed description

## 📊 Analytics & Metrics

### Performance Metrics
- **Lighthouse Score**: Target >90 for all categories
- **Bundle Size**: <500KB gzipped
- **First Paint**: <1.8s
- **Interactive**: <3.8s

### User Analytics
- **Page Views**: Track popular content
- **User Flow**: Understand navigation patterns
- **Conversion**: Monitor contact form submissions
- **Performance**: Real User Monitoring (RUM)

## 🚀 Future Enhancements

### Planned Features
- [ ] Blog CMS integration
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Progressive Web App (PWA)
- [ ] Advanced search functionality
- [ ] AI-powered content recommendations

### Performance Improvements
- [ ] Service Worker implementation
- [ ] Advanced caching strategies
- [ ] Image optimization pipeline
- [ ] Component lazy loading
- [ ] Bundle splitting optimization

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- **React Team**: For the amazing React framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Lucide React**: For the beautiful icon library
- **Vite**: For the fast build tool
- **Vercel**: For seamless deployment platform

## 📞 Contact

**Jesse A. Hawkins**
- **Website**: [jesseahawkins.com](https://jesseahawkins.com)
- **Email**: contact@jesseahawkins.com
- **LinkedIn**: [linkedin.com/in/jesseahawkins](https://linkedin.com/in/jesseahawkins)
- **GitHub**: [github.com/o0Praiz](https://github.com/o0Praiz)

---

## 📈 Project Stats

![GitHub Stars](https://img.shields.io/github/stars/o0Praiz/Site?style=social)
![GitHub Forks](https://img.shields.io/github/forks/o0Praiz/Site?style=social)
![GitHub Issues](https://img.shields.io/github/issues/o0Praiz/Site)
![GitHub License](https://img.shields.io/github/license/o0Praiz/Site)

**Built with ❤️ and lots of coffee**

*Last updated: January 2025*