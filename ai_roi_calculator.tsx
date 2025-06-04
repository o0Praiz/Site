import React, { useState, useEffect } from 'react';
import { 
  Calculator, DollarSign, TrendingUp, Clock, Users, 
  Target, Zap, AlertCircle, CheckCircle, Info,
  Download, Share2, BarChart3, PieChart
} from 'lucide-react';

const AIROICalculator = () => {
  const [inputs, setInputs] = useState({
    // Basic Business Inputs
    annualRevenue: 5000000,
    currentOperatingCosts: 1000000,
    employeeCount: 50,
    
    // Process-Specific Inputs
    processType: 'document_processing',
    currentProcessTime: 480, // minutes per day
    currentAccuracy: 80, // percentage
    currentThroughput: 100, // items per day
    
    // Cost Inputs
    employeesInvolved: 5,
    averageHourlyRate: 45,
    errorCostPercentage: 5, // percentage of revenue lost to errors
    
    // AI Implementation Costs
    developmentCost: 150000,
    implementationTime: 6, // months
    maintenanceCostPercentage: 15, // percentage of development cost annually
    
    // Expected AI Improvements
    expectedSpeedIncrease: 85, // percentage
    expectedAccuracyIncrease: 94, // final accuracy percentage
    expectedThroughputIncrease: 300 // percentage
  });

  const [results, setResults] = useState({});
  const [selectedView, setSelectedView] = useState('calculator');

  // Process type templates
  const processTemplates = {
    document_processing: {
      name: "Document Processing",
      description: "Automated extraction and processing of business documents",
      baseSpeedIncrease: 85,
      baseAccuracyIncrease: 15,
      baseThroughputIncrease: 300,
      estimatedDevCost: 150000,
      implementationMonths: 6
    },
    fraud_detection: {
      name: "Fraud Detection",
      description: "Real-time transaction monitoring and fraud prevention",
      baseSpeedIncrease: 95,
      baseAccuracyIncrease: 20,
      baseThroughputIncrease: 500,
      estimatedDevCost: 250000,
      implementationMonths: 8
    },
    customer_support: {
      name: "Customer Support Automation",
      description: "AI-powered chatbots and support ticket routing",
      baseSpeedIncrease: 70,
      baseAccuracyIncrease: 25,
      baseThroughputIncrease: 200,
      estimatedDevCost: 120000,
      implementationMonths: 4
    },
    predictive_maintenance: {
      name: "Predictive Maintenance",
      description: "IoT-based equipment failure prediction and optimization",
      baseSpeedIncrease: 60,
      baseAccuracyIncrease: 30,
      baseThroughputIncrease: 150,
      estimatedDevCost: 200000,
      implementationMonths: 8
    },
    quality_control: {
      name: "Quality Control Vision",
      description: "Computer vision for automated quality inspection",
      baseSpeedIncrease: 90,
      baseAccuracyIncrease: 18,
      baseThroughputIncrease: 400,
      estimatedDevCost: 180000,
      implementationMonths: 7
    }
  };

  // Calculate ROI whenever inputs change
  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    // Current state calculations
    const currentDailyCost = (inputs.employeesInvolved * inputs.averageHourlyRate * (inputs.currentProcessTime / 60));
    const currentAnnualProcessingCost = currentDailyCost * 250; // 250 working days
    const currentErrorCost = inputs.annualRevenue * (inputs.errorCostPercentage / 100);
    const totalCurrentCosts = currentAnnualProcessingCost + currentErrorCost;

    // AI implementation calculations
    const newAccuracy = inputs.expectedAccuracyIncrease;
    const newSpeedReduction = inputs.expectedSpeedIncrease / 100;
    const newThroughputMultiplier = (inputs.expectedThroughputIncrease + 100) / 100;

    // Post-AI state calculations
    const newProcessTimePerDay = inputs.currentProcessTime * (1 - newSpeedReduction);
    const newDailyCost = (inputs.employeesInvolved * inputs.averageHourlyRate * (newProcessTimePerDay / 60));
    const newAnnualProcessingCost = newDailyCost * 250;
    
    // Error cost reduction based on accuracy improvement
    const errorReductionFactor = (newAccuracy - inputs.currentAccuracy) / 100;
    const newErrorCost = currentErrorCost * (1 - errorReductionFactor);
    
    // Revenue increase from throughput improvement
    const additionalRevenuePercentage = (newThroughputMultiplier - 1) * 0.3; // Conservative 30% of throughput gains convert to revenue
    const additionalRevenue = inputs.annualRevenue * additionalRevenuePercentage;

    const totalNewCosts = newAnnualProcessingCost + newErrorCost;
    const annualSavings = totalCurrentCosts - totalNewCosts + additionalRevenue;

    // Implementation costs
    const totalImplementationCost = inputs.developmentCost;
    const annualMaintenanceCost = inputs.developmentCost * (inputs.maintenanceCostPercentage / 100);
    const netAnnualBenefit = annualSavings - annualMaintenanceCost;

    // ROI calculations
    const firstYearROI = ((netAnnualBenefit - totalImplementationCost) / totalImplementationCost) * 100;
    const ongoingROI = (netAnnualBenefit / totalImplementationCost) * 100;
    const paybackPeriod = totalImplementationCost / netAnnualBenefit;

    // 5-year projection
    const fiveYearSavings = netAnnualBenefit * 5;
    const fiveYearROI = ((fiveYearSavings - totalImplementationCost) / totalImplementationCost) * 100;

    setResults({
      currentAnnualCost: totalCurrentCosts,
      newAnnualCost: totalNewCosts,
      annualSavings: annualSavings,
      netAnnualBenefit: netAnnualBenefit,
      implementationCost: totalImplementationCost,
      annualMaintenanceCost: annualMaintenanceCost,
      firstYearROI: firstYearROI,
      ongoingROI: ongoingROI,
      paybackPeriod: paybackPeriod,
      fiveYearROI: fiveYearROI,
      fiveYearSavings: fiveYearSavings,
      productivityImprovement: newSpeedReduction * 100,
      accuracyImprovement: newAccuracy - inputs.currentAccuracy,
      additionalRevenue: additionalRevenue
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatPercent = (percent) => {
    return `${percent.toFixed(1)}%`;
  };

  const applyTemplate = (templateKey) => {
    const template = processTemplates[templateKey];
    setInputs(prev => ({
      ...prev,
      processType: templateKey,
      expectedSpeedIncrease: template.baseSpeedIncrease,
      expectedAccuracyIncrease: prev.currentAccuracy + template.baseAccuracyIncrease,
      expectedThroughputIncrease: template.baseThroughputIncrease,
      developmentCost: template.estimatedDevCost,
      implementationTime: template.implementationMonths
    }));
  };

  const InputField = ({ label, value, onChange, type = "number", suffix = "", prefix = "", min = 0, max = null, step = "1" }) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        {prefix && <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">{prefix}</span>}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(type === 'number' ? parseFloat(e.target.value) || 0 : e.target.value)}
          className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            prefix ? 'pl-8' : ''
          } ${suffix ? 'pr-12' : ''}`}
          min={min}
          max={max}
          step={step}
        />
        {suffix && <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">{suffix}</span>}
      </div>
    </div>
  );

  const ResultCard = ({ title, value, subtitle, color = "blue", icon: Icon }) => (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className={`text-2xl font-bold text-${color}-600 mt-1`}>{value}</p>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
        {Icon && (
          <div className={`w-12 h-12 bg-${color}-100 rounded-xl flex items-center justify-center`}>
            <Icon className={`w-6 h-6 text-${color}-600`} />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Project ROI Calculator</h1>
        <p className="text-gray-600">Calculate the return on investment for your AI implementation project</p>
      </div>

      {/* View Toggle */}
      <div className="mb-6">
        <div className="flex space-x-4 border-b border-gray-200">
          {[
            { id: 'calculator', label: 'Calculator', icon: Calculator },
            { id: 'results', label: 'Results & Analysis', icon: BarChart3 },
            { id: 'comparison', label: 'Scenario Comparison', icon: PieChart }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedView(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 font-medium border-b-2 transition-colors ${
                  selectedView === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Calculator View */}
      {selectedView === 'calculator' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Input Panel */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Process Type Selection */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Select AI Implementation Type</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(processTemplates).map(([key, template]) => (
                  <button
                    key={key}
                    onClick={() => applyTemplate(key)}
                    className={`text-left p-4 border rounded-lg hover:bg-blue-50 transition-colors ${
                      inputs.processType === key ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                    }`}
                  >
                    <h4 className="font-medium text-gray-900">{template.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                      <span>Est. Cost: {formatCurrency(template.estimatedDevCost)}</span>
                      <span>{template.implementationMonths}mo timeline</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Business Context */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Context</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Annual Revenue"
                  value={inputs.annualRevenue}
                  onChange={(val) => setInputs(prev => ({...prev, annualRevenue: val}))}
                  prefix="$"
                />
                <InputField
                  label="Current Operating Costs"
                  value={inputs.currentOperatingCosts}
                  onChange={(val) => setInputs(prev => ({...prev, currentOperatingCosts: val}))}
                  prefix="$"
                />
                <InputField
                  label="Total Employee Count"
                  value={inputs.employeeCount}
                  onChange={(val) => setInputs(prev => ({...prev, employeeCount: val}))}
                />
                <InputField
                  label="Error Cost (% of Revenue)"
                  value={inputs.errorCostPercentage}
                  onChange={(val) => setInputs(prev => ({...prev, errorCostPercentage: val}))}
                  suffix="%"
                  max={20}
                  step="0.1"
                />
              </div>
            </div>

            {/* Current Process */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Process Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Daily Process Time"
                  value={inputs.currentProcessTime}
                  onChange={(val) => setInputs(prev => ({...prev, currentProcessTime: val}))}
                  suffix="min"
                />
                <InputField
                  label="Current Accuracy"
                  value={inputs.currentAccuracy}
                  onChange={(val) => setInputs(prev => ({...prev, currentAccuracy: val}))}
                  suffix="%"
                  max={100}
                />
                <InputField
                  label="Current Throughput"
                  value={inputs.currentThroughput}
                  onChange={(val) => setInputs(prev => ({...prev, currentThroughput: val}))}
                  suffix="items/day"
                />
                <InputField
                  label="Employees Involved"
                  value={inputs.employeesInvolved}
                  onChange={(val) => setInputs(prev => ({...prev, employeesInvolved: val}))}
                />
                <InputField
                  label="Average Hourly Rate"
                  value={inputs.averageHourlyRate}
                  onChange={(val) => setInputs(prev => ({...prev, averageHourlyRate: val}))}
                  prefix="$"
                />
              </div>
            </div>

            {/* AI Implementation */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Implementation Costs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Development Cost"
                  value={inputs.developmentCost}
                  onChange={(val) => setInputs(prev => ({...prev, developmentCost: val}))}
                  prefix="$"
                />
                <InputField
                  label="Implementation Timeline"
                  value={inputs.implementationTime}
                  onChange={(val) => setInputs(prev => ({...prev, implementationTime: val}))}
                  suffix="months"
                />
                <InputField
                  label="Annual Maintenance (%)"
                  value={inputs.maintenanceCostPercentage}
                  onChange={(val) => setInputs(prev => ({...prev, maintenanceCostPercentage: val}))}
                  suffix="%"
                  max={50}
                />
              </div>
            </div>

            {/* Expected Improvements */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Expected AI Improvements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Speed Increase"
                  value={inputs.expectedSpeedIncrease}
                  onChange={(val) => setInputs(prev => ({...prev, expectedSpeedIncrease: val}))}
                  suffix="%"
                  max={99}
                />
                <InputField
                  label="Final Accuracy Target"
                  value={inputs.expectedAccuracyIncrease}
                  onChange={(val) => setInputs(prev => ({...prev, expectedAccuracyIncrease: val}))}
                  suffix="%"
                  max={100}
                />
                <InputField
                  label="Throughput Increase"
                  value={inputs.expectedThroughputIncrease}
                  onChange={(val) => setInputs(prev => ({...prev, expectedThroughputIncrease: val}))}
                  suffix="%"
                />
              </div>
            </div>
          </div>

          {/* Quick Results Panel */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Results</h3>
              
              <div className="space-y-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-600">Annual Savings</p>
                  <p className="text-2xl font-bold text-green-600">
                    {formatCurrency(results.annualSavings || 0)}
                  </p>
                </div>
                
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">5-Year ROI</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {formatPercent(results.fiveYearROI || 0)}
                  </p>
                </div>
                
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-gray-600">Payback Period</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {(results.paybackPeriod || 0).toFixed(1)} years
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">Process Improvements</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Speed Increase:</span>
                    <span className="font-medium">{formatPercent(results.productivityImprovement || 0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Accuracy Gain:</span>
                    <span className="font-medium">+{(results.accuracyImprovement || 0).toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Additional Revenue:</span>
                    <span className="font-medium">{formatCurrency(results.additionalRevenue || 0)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Risk Assessment */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Assessment</h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  {results.paybackPeriod < 2 ? 
                    <CheckCircle className="w-5 h-5 text-green-500" /> :
                    <AlertCircle className="w-5 h-5 text-yellow-500" />
                  }
                  <span className="text-sm">
                    {results.paybackPeriod < 2 ? 'Low Risk' : 'Medium Risk'} - 
                    {(results.paybackPeriod || 0).toFixed(1)} year payback
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  {results.fiveYearROI > 200 ?
                    <CheckCircle className="w-5 h-5 text-green-500" /> :
                    <Info className="w-5 h-5 text-blue-500" />
                  }
                  <span className="text-sm">
                    {results.fiveYearROI > 200 ? 'High Value' : 'Moderate Value'} - 
                    {formatPercent(results.fiveYearROI || 0)} 5-year ROI
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <Info className="w-5 h-5 text-blue-500" />
                  <span className="text-sm">
                    Implementation: {inputs.implementationTime} months
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results View */}
      {selectedView === 'results' && (
        <div className="space-y-8">
          
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ResultCard
              title="Annual Savings"
              value={formatCurrency(results.annualSavings || 0)}
              subtitle="Total cost reduction per year"
              color="green"
              icon={DollarSign}
            />
            <ResultCard
              title="5-Year ROI"
              value={formatPercent(results.fiveYearROI || 0)}
              subtitle="Total return over 5 years"
              color="blue"
              icon={TrendingUp}
            />
            <ResultCard
              title="Payback Period"
              value={`${(results.paybackPeriod || 0).toFixed(1)} years`}
              subtitle="Time to recover investment"
              color="purple"
              icon={Clock}
            />
            <ResultCard
              title="Productivity Gain"
              value={formatPercent(results.productivityImprovement || 0)}
              subtitle="Process speed improvement"
              color="orange"
              icon={Zap}
            />
          </div>

          {/* Detailed Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Cost Analysis */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Cost Analysis</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Current Annual Cost</span>
                  <span className="font-semibold text-red-600">
                    {formatCurrency(results.currentAnnualCost || 0)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Post-AI Annual Cost</span>
                  <span className="font-semibold text-blue-600">
                    {formatCurrency(results.newAnnualCost || 0)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Implementation Cost</span>
                  <span className="font-semibold text-orange-600">
                    {formatCurrency(results.implementationCost || 0)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Annual Maintenance</span>
                  <span className="font-semibold text-gray-600">
                    {formatCurrency(results.annualMaintenanceCost || 0)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-3 bg-green-50 px-3 rounded-lg">
                  <span className="font-medium text-gray-900">Net Annual Benefit</span>
                  <span className="font-bold text-green-600 text-lg">
                    {formatCurrency(results.netAnnualBenefit || 0)}
                  </span>
                </div>
              </div>
            </div>

            {/* Performance Improvements */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Improvements</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Process Speed</span>
                    <span className="text-sm font-medium">
                      +{formatPercent(results.productivityImprovement || 0)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${Math.min((results.productivityImprovement || 0), 100)}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Accuracy Improvement</span>
                    <span className="text-sm font-medium">
                      +{(results.accuracyImprovement || 0).toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${Math.min((results.accuracyImprovement || 0) * 3, 100)}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Additional Revenue</span>
                    <span className="text-sm font-medium">
                      {formatCurrency(results.additionalRevenue || 0)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full" 
                      style={{ width: `${Math.min(((results.additionalRevenue || 0) / inputs.annualRevenue) * 1000, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Key Benefits</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Reduced manual processing time</li>
                  <li>• Improved accuracy and quality</li>
                  <li>• Scalable throughput capacity</li>
                  <li>• Consistent 24/7 operation</li>
                  <li>• Data-driven insights and analytics</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 5-Year Projection */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">5-Year Financial Projection</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map(year => {
                const yearSavings = year === 1 ? 
                  (results.netAnnualBenefit || 0) - (results.implementationCost || 0) : 
                  (results.netAnnualBenefit || 0);
                
                return (
                  <div key={year} className="text-center p-4 border rounded-lg">
                    <p className="text-sm text-gray-600">Year {year}</p>
                    <p className={`text-lg font-bold ${yearSavings >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {formatCurrency(yearSavings)}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {year === 1 ? 'After implementation' : 'Annual benefit'}
                    </p>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600">Total 5-Year Value</p>
              <p className="text-2xl font-bold text-green-600">
                {formatCurrency(results.fiveYearSavings || 0)}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="w-4 h-4" />
              <span>Download Report</span>
            </button>
            <button className="flex items-center space-x-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
              <Share2 className="w-4 h-4" />
              <span>Share Results</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIROICalculator;