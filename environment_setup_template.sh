# Environment Setup & Deployment Template
# Copy these files and configurations to deploy your AI portfolio

# =============================================================================
# 1. ENVIRONMENT VARIABLES (.env.local)
# =============================================================================

# Create .env.local file in your project root:
cat > .env.local << EOF
# Analytics & Tracking
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Contact Form Setup (EmailJS - FREE)
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here

# Site Configuration
VITE_SITE_URL=https://jesseahawkins.com
VITE_SITE_NAME="Jesse A. Hawkins - AI Engineer"
VITE_AUTHOR="Jesse A. Hawkins"

# Optional: reCAPTCHA (for form protection)
VITE_RECAPTCHA_SITE_KEY=6LeXXXXXXXXXXXXXXXXXXX

# Development vs Production
NODE_ENV=production
EOF

# =============================================================================
# 2. QUICK DEPLOYMENT SCRIPT
# =============================================================================

#!/bin/bash
echo "🚀 Deploying Jesse A. Hawkins AI Portfolio..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build production version
echo "🏗️ Building production version..."
npm run build

# Deploy to Vercel (recommended)
echo "🌐 Deploying to Vercel..."
npx vercel --prod

# Alternative: Deploy to Netlify
# echo "🌐 Deploying to Netlify..."
# netlify deploy --prod --dir=dist

echo "✅ Deployment complete!"
echo "🎉 Your AI portfolio is now live!"

# =============================================================================
# 3. VERCEL CONFIGURATION (vercel.json)
# =============================================================================

cat > vercel.json << EOF
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "devCommand": "npm run dev",
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
      "source": "/images/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/portfolio",
      "destination": "/projects",
      "permanent": true
    }
  ]
}
EOF

# =============================================================================
# 4. NETLIFY CONFIGURATION (netlify.toml)
# =============================================================================

cat > netlify.toml << EOF
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
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
EOF

# =============================================================================
# 5. PACKAGE.JSON SCRIPTS UPDATE
# =============================================================================

# Add these scripts to your package.json:
cat >> package.json << EOF
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && vercel --prod",
    "deploy:netlify": "npm run build && netlify deploy --prod --dir=dist",
    "test": "npm run build && npm run preview",
    "lighthouse": "lighthouse http://localhost:4173 --output=html --output-path=lighthouse-report.html",
    "analyze": "npm run build && npx vite-bundle-analyzer"
  }
}
EOF

# =============================================================================
# 6. ROBOTS.TXT (public/robots.txt)
# =============================================================================

cat > public/robots.txt << EOF
User-agent: *
Allow: /

# Sitemap
Sitemap: https://jesseahawkins.com/sitemap.xml

# Block AI crawlers (optional - uncomment if desired)
# User-agent: GPTBot
# Disallow: /
# 
# User-agent: ChatGPT-User
# Disallow: /
# 
# User-agent: CCBot
# Disallow: /
EOF

# =============================================================================
# 7. QUICK CONTENT REPLACEMENT
# =============================================================================

echo "📝 To replace placeholder content:"
echo "1. Copy production_projects_data.js content to src/data/projects.js"
echo "2. Copy production_personal_data.js content to src/data/personal.js"
echo "3. Add your real images to public/images/ folders"
echo "4. Update social media links in personal data"
echo "5. Configure EmailJS for contact form"

# =============================================================================
# 8. IMAGE FOLDER STRUCTURE SETUP
# =============================================================================

mkdir -p public/images/profile
mkdir -p public/images/projects
mkdir -p public/images/backgrounds
mkdir -p public/images/social

echo "📸 Image folders created. Add these files:"
echo "- public/images/profile/jesse-hawkins.jpg (512x512px)"
echo "- public/images/projects/[project-name]-main.jpg (800x450px each)"
echo "- public/images/backgrounds/hero-bg.jpg (1920x1080px)"

# =============================================================================
# 9. EMAILJS SETUP INSTRUCTIONS
# =============================================================================

cat > EMAILJS_SETUP.md << EOF
# EmailJS Setup (Free Contact Form)

## Step 1: Create EmailJS Account
1. Go to https://emailjs.com
2. Sign up for free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to Email Services
2. Add service (Gmail, Outlook, etc.)
3. Follow connection instructions
4. Copy Service ID

## Step 3: Create Email Template
1. Go to Email Templates
2. Create new template
3. Use these variables:
   - {{from_name}} - sender name
   - {{from_email}} - sender email
   - {{subject}} - email subject
   - {{message}} - email message
   - {{to_name}} - your name (Jesse A. Hawkins)
4. Copy Template ID

## Step 4: Get Public Key
1. Go to Account > General
2. Copy Public Key

## Step 5: Update Environment Variables
Add to .env.local:
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key

## Test Your Setup
Send a test email through your contact form to verify everything works!
EOF

# =============================================================================
# 10. GOOGLE ANALYTICS SETUP
# =============================================================================

cat > ANALYTICS_SETUP.md << EOF
# Google Analytics Setup

## Step 1: Create GA4 Property
1. Go to https://analytics.google.com
2. Create account/property for jesseahawkins.com
3. Choose "Web" platform
4. Copy Measurement ID (G-XXXXXXXXXX format)

## Step 2: Add to Environment
Add to .env.local:
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

## Step 3: Verify Tracking
1. Deploy your site
2. Visit site in browser
3. Check Real-Time reports in GA
4. Verify events are tracking

## Goals to Set Up
- Contact form submissions
- Project demo clicks
- Resume downloads
- Blog article reads
EOF

# =============================================================================
# 11. PRE-LAUNCH CHECKLIST
# =============================================================================

cat > PRE_LAUNCH_CHECKLIST.md << EOF
# Pre-Launch Checklist ✅

## Content ✅
- [ ] Real project data added to src/data/projects.js
- [ ] Professional bio added to src/data/personal.js
- [ ] Professional headshot uploaded (512x512px)
- [ ] 6 project screenshots uploaded (800x450px each)
- [ ] Social media links updated to real profiles
- [ ] Contact information verified

## Technical ✅
- [ ] Environment variables configured (.env.local)
- [ ] EmailJS contact form working
- [ ] Google Analytics tracking active
- [ ] All images optimized (<100KB each)
- [ ] Production build tested (npm run build && npm run preview)
- [ ] Mobile responsiveness verified

## Deployment ✅
- [ ] Domain purchased (jesseahawkins.com)
- [ ] Hosting platform chosen (Vercel/Netlify)
- [ ] SSL certificate working (https://)
- [ ] All pages loading correctly
- [ ] Contact form sending emails
- [ ] Analytics data flowing

## SEO ✅
- [ ] Meta tags customized for all pages
- [ ] Open Graph images working for social sharing
- [ ] Sitemap accessible (/sitemap.xml)
- [ ] Google Search Console configured
- [ ] Page titles and descriptions optimized

## Final Tests ✅
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Mobile testing (iOS and Android)
- [ ] Lighthouse audit score >90
- [ ] All links working correctly
- [ ] Contact form spam protection enabled
- [ ] Error pages working (404, 500)

## Launch Day ✅
- [ ] Social media announcement ready
- [ ] Professional network email drafted
- [ ] LinkedIn profile updated with website
- [ ] Email signature updated
- [ ] Business cards updated (if applicable)

🚀 Ready for launch when all boxes are checked!
EOF

# =============================================================================
# 12. LAUNCH DAY SOCIAL MEDIA POSTS
# =============================================================================

cat > LAUNCH_POSTS.md << EOF
# Ready-to-Post Launch Announcements

## LinkedIn Post (Copy & Paste)
🚀 Excited to announce the launch of my AI engineering portfolio!

After months of development, I'm thrilled to share jesseahawkins.com - showcasing my journey in building production AI systems that drive real business impact.

✨ Featured projects include:
• Document AI processing 15K+ docs daily with 96% accuracy
• Real-time fraud detection preventing $3.2M in annual losses  
• Conversational AI reducing support costs by 52%
• Computer vision achieving 99.6% defect detection accuracy

The portfolio demonstrates not just technical capability, but measurable business results - over $8.5M in documented value generated through AI solutions.

Whether you're exploring AI implementation, seeking collaboration opportunities, or interested in the latest ML developments, I'd love to connect!

Check it out: jesseahawkins.com

#ArtificialIntelligence #MachineLearning #AIEngineering #ComputerVision #NLP

## Twitter Thread (Copy & Paste)
🧵 Just launched my AI engineering portfolio! 🚀

1/6 After 5+ years building production ML systems, excited to share: jesseahawkins.com

Showcasing real-world AI applications with $8.5M+ in documented business impact.

2/6 Featured projects:
• Document AI: 15K+ docs/day, 96% accuracy
• Fraud detection: $3.2M saved, 99.3% accuracy  
• Conversational AI: 52% cost reduction
• Computer vision: 99.6% defect detection

3/6 What makes this different? Focus on business outcomes, not just tech demos. Each project shows problem → solution → quantified results.

4/6 Tech stack: Python, TensorFlow, PyTorch, AWS/GCP
Built for performance: 90+ Lighthouse scores, mobile-first design

5/6 The portfolio itself demonstrates technical excellence - modern React architecture with comprehensive SEO and accessibility.

6/6 Looking forward to collaborating on challenging AI problems and sharing insights from production ML experience.

Check it out: jesseahawkins.com

#AI #MachineLearning #TechLaunch #Portfolio

## Email to Professional Network (Template)
Subject: 🚀 Launched My AI Engineering Portfolio - Would Love Your Thoughts

Hi [Name],

I hope you're doing well! I wanted to share some exciting news—I just launched my new AI engineering portfolio website and would love to get your thoughts.

After months of development, jesseahawkins.com is now live, showcasing my journey in AI and machine learning over the past 5+ years.

The portfolio features:
• 6 detailed project case studies with real business impact
• Technical insights from production ML systems  
• Interactive demonstrations and comprehensive documentation
• Measurable results: $8.5M+ in documented value generated

What makes this special is the focus on real-world applications rather than just technical demos. Each project tells the complete story from business problem to technical solution to quantified results.

I'd genuinely appreciate any feedback you might have—whether on the technical content, user experience, or overall presentation.

Check it out: jesseahawkins.com

Thanks for being part of my professional journey!

Best regards,
Jesse

P.S. If you know anyone who might benefit from AI consulting or collaboration, I'd be grateful for the introduction!
EOF

echo "🎉 All setup files created!"
echo "📋 Next steps:"
echo "1. Run the deployment script"
echo "2. Follow the setup guides (EMAILJS_SETUP.md, ANALYTICS_SETUP.md)"
echo "3. Complete the pre-launch checklist"
echo "4. Use the launch posts for social media"
echo ""
echo "🚀 You're ready to launch your AI portfolio!"