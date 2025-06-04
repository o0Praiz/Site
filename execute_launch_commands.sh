# 🚀 JESSE A. HAWKINS AI PORTFOLIO - LAUNCH EXECUTION
# Copy and paste these commands one by one in your terminal

echo "🚀 STARTING LAUNCH SEQUENCE FOR JESSE A. HAWKINS AI PORTFOLIO"
echo "⏰ Start Time: $(date)"
echo ""

# STEP 1: Environment Setup (2 minutes)
echo "📋 STEP 1: Creating production environment..."

# Create environment file
cat > .env.local << 'EOF'
# Production Configuration - Jesse A. Hawkins AI Portfolio
VITE_SITE_URL=https://jesseahawkins.com
VITE_SITE_NAME=Jesse A. Hawkins - AI Engineer & Machine Learning Specialist

# Analytics (add your tracking ID when ready)
VITE_GA_TRACKING_ID=G-PLACEHOLDER

# Contact Form (add EmailJS credentials when ready)  
VITE_EMAILJS_SERVICE_ID=service_placeholder
VITE_EMAILJS_TEMPLATE_ID=template_placeholder
VITE_EMAILJS_PUBLIC_KEY=placeholder_key

# Feature Flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_CONTACT_FORM=false
EOF

echo "✅ Environment file created!"

# STEP 2: Verify project structure
echo ""
echo "📁 STEP 2: Verifying project structure..."

# Create required directories
mkdir -p public/images/profile
mkdir -p public/images/projects  
mkdir -p public/images/backgrounds

echo "✅ Directory structure verified!"

# STEP 3: Test production build
echo ""
echo "🔧 STEP 3: Testing production build..."

# Install dependencies if needed
npm install

# Build for production
npm run build

echo "✅ Production build successful!"

# STEP 4: Test locally before deployment
echo ""
echo "🌐 STEP 4: Testing local preview..."

# Start preview server in background
npm run preview &
PREVIEW_PID=$!

echo "✅ Local preview running at http://localhost:4173"
echo "🔍 Open browser and verify site loads correctly"
echo "⏹️  Press ENTER when ready to continue..."
read

# Stop preview server
kill $PREVIEW_PID 2>/dev/null

# STEP 5: Deploy to Vercel
echo ""
echo "🚀 STEP 5: Deploying to Vercel..."

# Install Vercel CLI if not installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Deploy to production
echo "🚀 Deploying to production..."
vercel --prod

echo ""
echo "🎉 DEPLOYMENT COMPLETE!"
echo ""
echo "✅ Your AI portfolio is now LIVE!"
echo "🌐 Copy the deployment URL from above"
echo "📱 Test on mobile and desktop"
echo "🔒 Verify SSL certificate (https://)"
echo ""

# STEP 6: Post-deployment verification
echo "📋 STEP 6: Post-deployment checklist..."
echo ""
echo "Verify these items on your live site:"
echo "□ Site loads without errors"
echo "□ All images display correctly"
echo "□ Navigation links work"
echo "□ Contact form renders (even if not functional yet)"
echo "□ Mobile responsive design"
echo "□ Fast loading speed (<3 seconds)"
echo ""
echo "✅ When verified, proceed to launch announcement!"
echo ""

# STEP 7: Launch announcement preparation
echo "🎺 STEP 7: Launch announcement ready!"
echo ""
echo "Your LinkedIn post is ready:"
echo ""
echo "🚀 Excited to announce the launch of my AI engineering portfolio!"
echo ""
echo "After months of development, I'm thrilled to share [YOUR-URL] - a comprehensive showcase of my journey in artificial intelligence and machine learning."
echo ""
echo "✨ What you'll find:"
echo "• 6 detailed AI project case studies with real-world business impact"
echo "• Technical deep-dives into computer vision, NLP, and predictive analytics" 
echo "• Insights from 5+ years building production ML systems"
echo "• Interactive demos and comprehensive project documentation"
echo ""
echo "The portfolio showcases not just technical implementations, but measurable business impact—over \$5M in documented value generated through AI solutions."
echo ""
echo "Check it out: [YOUR-URL]"
echo ""
echo "#ArtificialIntelligence #MachineLearning #ComputerVision #NLP #DataScience #AI #Portfolio"
echo ""
echo "What AI challenges is your organization facing? Let's discuss how we can solve them together."
echo ""

echo "🎯 LAUNCH COMPLETE! Time to announce to the world! 🌟"