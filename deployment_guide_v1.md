# Deployment Guide - JesseAHawkins.com

## Overview
This guide provides step-by-step instructions for deploying the Jesse A. Hawkins AI portfolio website to production. The site is built with React and optimized for static hosting.

## Prerequisites

### Required Software
- Node.js v18 or higher
- npm v8 or higher
- Git
- Modern web browser for testing

### Required Accounts
- GitHub account (for repository)
- Vercel/Netlify account (for hosting)
- Domain registrar account (for custom domain)
- Google Analytics account (optional)
- Email service provider (for contact forms)

## Local Development Setup

### 1. Clone and Install
```bash
# Clone the repository
git clone https://github.com/o0Praiz/Site.git
cd Site

# Install dependencies
npm install

# Start development server
npm run dev
```

### 2. Environment Configuration
Create a `.env.local` file in the project root:

```env
# Analytics
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Contact Form
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Site Configuration
VITE_SITE_URL=https://jesseahawkins.com
VITE_SITE_NAME="Jesse A. Hawkins"

# API Keys (if needed)
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_key
```

### 3. Build Configuration
Update `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['lucide-react'],
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react']
  }
})
```

## Production Build

### 1. Build the Application
```bash
# Create production build
npm run build

# Test production build locally
npm run preview
```

### 2. Build Optimization Checklist
- [ ] Images optimized (WebP format when possible)
- [ ] Bundle size analyzed and optimized
- [ ] Unused dependencies removed
- [ ] Source maps disabled for production
- [ ] Environment variables configured
- [ ] Meta tags and SEO elements included

## Deployment Options

### Option 1: Vercel Deployment (Recommended)

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Deploy to Vercel
```bash
# Login to Vercel
vercel login

# Deploy (first time)
vercel

# Production deployment
vercel --prod
```

#### Step 3: Configure Custom Domain
```bash
# Add custom domain
vercel domains add jesseahawkins.com
vercel domains add www.jesseahawkins.com

# Configure domain in Vercel dashboard
# Set up DNS records as instructed
```

#### Vercel Configuration (`vercel.json`)
```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "devCommand": "npm run dev",
  "functions": {
    "app/api/**/*.js": {
      "runtime": "nodejs18.x"
    }
  },
  "routes": [
    {
      "src": "/sitemap.xml",
      "dest": "/sitemap.xml"
    },
    {
      "src": "/robots.txt", 
      "dest": "/robots.txt"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains"
        }
      ]
    },
    {
      "source": "/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### Option 2: Netlify Deployment

#### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

#### Step 2: Deploy to Netlify
```bash
# Login to Netlify
netlify login

# Deploy
netlify deploy

# Production deployment
netlify deploy --prod
```

#### Netlify Configuration (`netlify.toml`)
```toml
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains"

[[headers]]
  for = "/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### Option 3: GitHub Pages

#### GitHub Actions Workflow (`.github/workflows/deploy.yml`)
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
      env:
        VITE_GA_TRACKING_ID: ${{ secrets.GA_TRACKING_ID }}
        VITE_SITE_URL: https://username.github.io/Site
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Domain Configuration

### DNS Records Setup
Configure the following DNS records with your domain provider:

```
# For root domain (jesseahawkins.com)
A     @     76.76.19.61 (Vercel IP)
A     @     76.76.21.21 (Vercel IP)

# For www subdomain
CNAME www   cname.vercel-dns.com

# For email (if using custom email)
MX    @     10 mx1.your-email-provider.com
MX    @     20 mx2.your-email-provider.com
```

### SSL Certificate
Most hosting providers (Vercel, Netlify) automatically provide SSL certificates. Verify HTTPS is working:
- https://jesseahawkins.com
- https://www.jesseahawkins.com

## Post-Deployment Setup

### 1. Analytics Configuration
- Set up Google Analytics 4
- Add tracking code to environment variables
- Configure goals and events
- Test analytics data collection

### 2. Search Console Setup
- Add property in Google Search Console
- Submit sitemap: `https://jesseahawkins.com/sitemap.xml`
- Monitor indexing status
- Set up alerts for crawl errors

### 3. Performance Monitoring
- Set up Lighthouse CI for ongoing monitoring
- Configure performance budgets
- Monitor Core Web Vitals
- Set up error tracking (Sentry/LogRocket)

### 4. Contact Form Integration
Configure email service (EmailJS recommended):

```javascript
// src/utils/emailService.js
import emailjs from '@emailjs/browser';

export const sendContactEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      process.env.VITE_EMAILJS_SERVICE_ID,
      process.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.VITE_EMAILJS_PUBLIC_KEY
    );
    return response;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};
```

## Security Checklist

### Basic Security Headers
- [x] X-Content-Type-Options: nosniff
- [x] X-Frame-Options: DENY
- [x] X-XSS-Protection: 1; mode=block
- [x] Strict-Transport-Security
- [ ] Content-Security-Policy (configure as needed)

### Environment Variables Security
- [ ] All sensitive data in environment variables
- [ ] No API keys in client-side code
- [ ] Environment variables configured in hosting platform
- [ ] `.env` files added to `.gitignore`

### Additional Security Measures
- [ ] Regular dependency updates
- [ ] Vulnerability scanning enabled
- [ ] Error pages don't expose sensitive information
- [ ] Rate limiting on contact forms

## Maintenance Procedures

### Regular Updates
```bash
# Update dependencies (monthly)
npm update
npm audit fix

# Check for outdated packages
npm outdated

# Security audit
npm audit
```

### Backup Procedures
- [ ] Code backed up in GitHub repository
- [ ] Domain registrar account secured
- [ ] Hosting account credentials stored securely
- [ ] Analytics and service account access documented

### Monitoring Setup
- [ ] Uptime monitoring (UptimeRobot/Pingdom)
- [ ] Performance monitoring (PageSpeed Insights)
- [ ] Error monitoring (Sentry)
- [ ] Analytics monitoring (Google Analytics)

## Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node.js version
node --version  # Should be 18+
```

#### Routing Issues (404s)
- Verify redirect rules in hosting configuration
- Check that all routes redirect to `index.html`
- Test routing in production environment

#### Environment Variables Not Working
- Verify variable names start with `VITE_`
- Check hosting platform environment configuration
- Ensure variables are available at build time

#### SSL/HTTPS Issues
- Check DNS propagation: `dig jesseahawkins.com`
- Verify SSL certificate status
- Clear browser cache and test in incognito

### Support Resources
- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Vite Docs**: https://vitejs.dev/guide/
- **React Docs**: https://react.dev

## Launch Checklist

### Pre-Launch
- [ ] All components tested in production build
- [ ] Performance optimized (Lighthouse score >90)
- [ ] SEO meta tags implemented
- [ ] Analytics configured and tested
- [ ] Contact form working
- [ ] Social media links updated
- [ ] Domain configured and SSL working
- [ ] Error pages tested
- [ ] Mobile responsiveness verified
- [ ] Cross-browser compatibility confirmed

### Launch Day
- [ ] Final production deployment
- [ ] DNS propagation verified
- [ ] All functionality tested on live site
- [ ] Analytics data flowing
- [ ] Search Console sitemap submitted
- [ ] Social media profiles updated
- [ ] Professional network notified

### Post-Launch (First Week)
- [ ] Monitor analytics for traffic and errors
- [ ] Check search console for indexing issues
- [ ] Monitor performance metrics
- [ ] Collect and address any user feedback
- [ ] Set up regular maintenance schedule

## Performance Targets

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Lighthouse Scores
- **Performance**: > 90
- **Accessibility**: > 95
- **Best Practices**: > 90
- **SEO**: > 95

### Additional Metrics
- **First Contentful Paint**: < 1.8s
- **Time to Interactive**: < 3.8s
- **Bundle Size**: < 500KB (gzipped)

---

## Contact and Support

For deployment questions or issues:
- **Email**: contact@jesseahawkins.com
- **Documentation**: See implementation artifacts
- **Repository**: https://github.com/o0Praiz/Site

Last Updated: January 2025