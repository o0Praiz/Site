import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  Video, 
  Phone, 
  MapPin, 
  User, 
  Mail, 
  Building2, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  Coffee,
  Brain,
  Zap,
  Target,
  DollarSign,
  Users,
  FileText,
  Send,
  Star,
  Shield,
  MessageSquare
} from 'lucide-react';

const ConsultationBooking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    // Step 1: Service Selection
    serviceType: '',
    consultationType: '',
    
    // Step 2: Scheduling
    selectedDate: '',
    selectedTime: '',
    timezone: 'PST',
    
    // Step 3: Meeting Details
    meetingType: 'video', // video, phone, in-person
    
    // Step 4: Personal Information
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    phone: '',
    
    // Step 5: Project Details
    projectDescription: '',
    budget: '',
    timeline: '',
    currentChallenges: '',
    expectedOutcomes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Service packages
  const services = [
    {
      id: 'strategy',
      title: 'AI Strategy Consultation',
      duration: '60 minutes',
      price: 'Free',
      description: 'Discuss your AI vision and create a roadmap for implementation',
      features: [
        'AI readiness assessment',
        'Technology recommendations',
        'Implementation roadmap',
        'ROI projections',
        'Risk assessment'
      ],
      icon: Target,
      popular: true
    },
    {
      id: 'technical',
      title: 'Technical Deep Dive',
      duration: '90 minutes',
      price: '$200',
      description: 'In-depth technical consultation for specific AI challenges',
      features: [
        'Architecture review',
        'Algorithm selection',
        'Performance optimization',
        'Code review',
        'Best practices guidance'
      ],
      icon: Brain,
      popular: false
    },
    {
      id: 'project',
      title: 'Project Scoping Session',
      duration: '120 minutes',
      price: '$300',
      description: 'Comprehensive project planning and estimation',
      features: [
        'Requirements analysis',
        'Project timeline',
        'Resource planning',
        'Cost estimation',
        'Success metrics definition'
      ],
      icon: FileText,
      popular: false
    }
  ];

  // Available time slots (would typically come from API)
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', 
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  // Generate next 14 days for booking
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          date: date.toISOString().split('T')[0],
          displayDate: date.toLocaleDateString('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric' 
          }),
          available: Math.random() > 0.3 // 70% of slots available
        });
      }
    }
    
    return dates;
  };

  const [availableDates] = useState(generateAvailableDates());

  const steps = [
    { number: 1, title: 'Service', description: 'Choose consultation type' },
    { number: 2, title: 'Schedule', description: 'Pick date & time' },
    { number: 3, title: 'Format', description: 'Meeting preferences' },
    { number: 4, title: 'Contact', description: 'Your information' },
    { number: 5, title: 'Details', description: 'Project specifics' },
    { number: 6, title: 'Confirm', description: 'Review & submit' }
  ];

  const updateBookingData = (field, value) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return bookingData.serviceType && bookingData.consultationType;
      case 2:
        return bookingData.selectedDate && bookingData.selectedTime;
      case 3:
        return bookingData.meetingType;
      case 4:
        return bookingData.firstName && bookingData.lastName && bookingData.email;
      case 5:
        return bookingData.projectDescription && bookingData.budget && bookingData.timeline;
      default:
        return true;
    }
  };

  const submitBooking = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsCompleted(true);
  };

  const selectedService = services.find(s => s.id === bookingData.serviceType);

  if (isCompleted) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center bg-white rounded-2xl shadow-lg border border-gray-200 p-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Consultation Booked Successfully!
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Thank you for booking your AI consultation. You'll receive a confirmation email shortly with meeting details and preparation materials.
          </p>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Booking Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <span className="text-sm text-gray-500">Service:</span>
                <p className="font-medium">{selectedService?.title}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Date & Time:</span>
                <p className="font-medium">
                  {new Date(bookingData.selectedDate).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })} at {bookingData.selectedTime}
                </p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Duration:</span>
                <p className="font-medium">{selectedService?.duration}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Meeting Type:</span>
                <p className="font-medium capitalize">{bookingData.meetingType} call</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.print()}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Save Confirmation
            </button>
            <button 
              onClick={() => {
                setIsCompleted(false);
                setCurrentStep(1);
                setBookingData({
                  serviceType: '',
                  consultationType: '',
                  selectedDate: '',
                  selectedTime: '',
                  timezone: 'PST',
                  meetingType: 'video',
                  firstName: '',
                  lastName: '',
                  email: '',
                  company: '',
                  role: '',
                  phone: '',
                  projectDescription: '',
                  budget: '',
                  timeline: '',
                  currentChallenges: '',
                  expectedOutcomes: ''
                });
              }}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Book Another Session
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Book Your AI Consultation
        </h1>
        <p className="text-xl text-gray-600">
          Get expert guidance on your AI initiatives with personalized consultation sessions
        </p>
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {steps.map((step) => (
            <div key={step.number} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                currentStep >= step.number
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {currentStep > step.number ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  step.number
                )}
              </div>
              <div className="ml-3 hidden sm:block">
                <p className={`text-sm font-medium ${
                  currentStep >= step.number ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {step.title}
                </p>
                <p className="text-xs text-gray-500">{step.description}</p>
              </div>
              {step.number < steps.length && (
                <div className={`flex-1 h-0.5 mx-4 ${
                  currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        
        {/* Step 1: Service Selection */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Choose Your Consultation Type
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                const isSelected = bookingData.serviceType === service.id;
                
                return (
                  <div
                    key={service.id}
                    onClick={() => {
                      updateBookingData('serviceType', service.id);
                      updateBookingData('consultationType', service.title);
                    }}
                    className={`relative p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50 shadow-lg'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-4">
                      <Icon className={`w-12 h-12 mx-auto mb-3 ${
                        isSelected ? 'text-blue-600' : 'text-gray-600'
                      }`} />
                      <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                      <div className="flex items-center justify-center space-x-2 mt-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{service.duration}</span>
                        <span className="text-lg font-bold text-green-600">{service.price}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-center mb-4">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 2: Date & Time Selection */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Select Date & Time
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Date Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Dates</h3>
                <div className="grid grid-cols-2 gap-3">
                  {availableDates.map((dateOption) => (
                    <button
                      key={dateOption.date}
                      onClick={() => updateBookingData('selectedDate', dateOption.date)}
                      disabled={!dateOption.available}
                      className={`p-3 rounded-lg border-2 text-center transition-all duration-200 ${
                        !dateOption.available
                          ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                          : bookingData.selectedDate === dateOption.date
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      <div className="font-medium">{dateOption.displayDate}</div>
                      {!dateOption.available && (
                        <div className="text-xs text-gray-400 mt-1">Unavailable</div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Times (PST)</h3>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => updateBookingData('selectedTime', time)}
                      disabled={!bookingData.selectedDate}
                      className={`p-3 rounded-lg border-2 text-center transition-all duration-200 ${
                        !bookingData.selectedDate
                          ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                          : bookingData.selectedTime === time
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                
                {!bookingData.selectedDate && (
                  <p className="text-sm text-gray-500 mt-3">
                    Please select a date first to see available times
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Meeting Format */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Choose Meeting Format
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { id: 'video', title: 'Video Call', icon: Video, description: 'Meet via Zoom or Google Meet' },
                { id: 'phone', title: 'Phone Call', icon: Phone, description: 'Traditional phone conversation' },
                { id: 'in-person', title: 'In-Person', icon: MapPin, description: 'Meet at agreed location (SF Bay Area only)' }
              ].map((option) => {
                const Icon = option.icon;
                const isSelected = bookingData.meetingType === option.id;
                
                return (
                  <button
                    key={option.id}
                    onClick={() => updateBookingData('meetingType', option.id)}
                    className={`p-6 border-2 rounded-xl text-center transition-all duration-300 ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Icon className={`w-12 h-12 mx-auto mb-3 ${
                      isSelected ? 'text-blue-600' : 'text-gray-600'
                    }`} />
                    <h3 className="text-lg font-semibold text-gray-900">{option.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{option.description}</p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 4: Contact Information */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Your Contact Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  value={bookingData.firstName}
                  onChange={(e) => updateBookingData('firstName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your first name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  value={bookingData.lastName}
                  onChange={(e) => updateBookingData('lastName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your last name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={bookingData.email}
                  onChange={(e) => updateBookingData('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={bookingData.phone}
                  onChange={(e) => updateBookingData('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  value={bookingData.company}
                  onChange={(e) => updateBookingData('company', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Role
                </label>
                <input
                  type="text"
                  value={bookingData.role}
                  onChange={(e) => updateBookingData('role', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., CTO, Product Manager, Founder"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Project Details */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Tell Me About Your Project
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description *
                </label>
                <textarea
                  value={bookingData.projectDescription}
                  onChange={(e) => updateBookingData('projectDescription', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe your AI project, goals, and what you're hoping to achieve..."
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range *
                  </label>
                  <select
                    value={bookingData.budget}
                    onChange={(e) => updateBookingData('budget', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-50k">$10,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-500k">$100,000 - $500,000</option>
                    <option value="500k-plus">$500,000+</option>
                    <option value="tbd">To be determined</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline *
                  </label>
                  <select
                    value={bookingData.timeline}
                    onChange={(e) => updateBookingData('timeline', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="12-plus-months">12+ months</option>
                    <option value="exploring">Just exploring</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Challenges
                </label>
                <textarea
                  value={bookingData.currentChallenges}
                  onChange={(e) => updateBookingData('currentChallenges', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What challenges are you facing that AI might help solve?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Outcomes
                </label>
                <textarea
                  value={bookingData.expectedOutcomes}
                  onChange={(e) => updateBookingData('expectedOutcomes', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What outcomes or results are you hoping to achieve?"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 6: Confirmation */}
        {currentStep === 6 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Confirm Your Booking
            </h2>
            
            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Consultation Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service:</span>
                      <span className="font-medium">{selectedService?.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">{selectedService?.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price:</span>
                      <span className="font-medium">{selectedService?.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Format:</span>
                      <span className="font-medium capitalize">{bookingData.meetingType} call</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Schedule</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium">
                        {new Date(bookingData.selectedDate).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium">{bookingData.selectedTime} PST</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-semibold text-gray-900 mb-3">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Name:</span>
                    <span className="font-medium ml-2">{bookingData.firstName} {bookingData.lastName}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Email:</span>
                    <span className="font-medium ml-2">{bookingData.email}</span>
                  </div>
                  {bookingData.company && (
                    <div>
                      <span className="text-gray-600">Company:</span>
                      <span className="font-medium ml-2">{bookingData.company}</span>
                    </div>
                  )}
                  {bookingData.role && (
                    <div>
                      <span className="text-gray-600">Role:</span>
                      <span className="font-medium ml-2">{bookingData.role}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-1">What to expect:</p>
                  <ul className="space-y-1 text-blue-700">
                    <li>• You'll receive a confirmation email with meeting link/details</li>
                    <li>• A preparation guide will be sent 24 hours before the meeting</li>
                    <li>• Meeting recording and summary will be provided afterward</li>
                    <li>• Follow-up resources and recommendations will be shared</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-8 border-t border-gray-200">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              currentStep === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>

          {currentStep < steps.length ? (
            <button
              onClick={nextStep}
              disabled={!canProceed()}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                !canProceed()
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg transform hover:scale-105'
              }`}
            >
              <span>Next</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={submitBooking}
              disabled={isSubmitting || !canProceed()}
              className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                isSubmitting || !canProceed()
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg transform hover:scale-105'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Booking...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Confirm Booking</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Trust Signals */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <Shield className="w-5 h-5 text-green-600" />
          <span className="text-sm">100% Confidential</span>
        </div>
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <Star className="w-5 h-5 text-yellow-500" />
          <span className="text-sm">5.0 Average Rating</span>
        </div>
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <Users className="w-5 h-5 text-blue-600" />
          <span className="text-sm">500+ Consultations</span>
        </div>
      </div>
    </div>
  );
};

export default ConsultationBooking;