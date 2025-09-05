import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";

const Header = ({ title }) => {
  const navigate = useNavigate();
  
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FontAwesomeIcon icon="arrow-left" />
              <span>Back to Home</span>
            </motion.button>
            <div className="h-6 w-px bg-gray-300"></div>
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

const ProgressStepper = ({ steps, currentStep, onStepChange }) => (
  <div className="px-6 py-8">
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ 
                scale: currentStep === step.id ? 1.1 : 1,
                opacity: currentStep >= step.id ? 1 : 0.5
              }}
              whileHover={{ scale: 1.05 }}
              onClick={() => onStepChange(step.id)}
              className={`relative flex items-center justify-center w-16 h-16 rounded-full cursor-pointer transition-all duration-300 ${
                currentStep >= step.id 
                  ? `bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 text-white shadow-lg` 
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              <span className="text-2xl">{step.icon}</span>
              {currentStep === step.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -inset-2 rounded-full border-2 border-blue-500"
                />
              )}
            </motion.div>
            
            {index < steps.length - 1 && (
              <div className={`flex-1 h-1 mx-4 rounded-full transition-colors duration-500 ${
                currentStep > step.id ? 'bg-green-500' : 'bg-gray-200'
              }`} />
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center mt-6">
        <motion.h3
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-semibold text-gray-900"
        >
          Step {currentStep}: {steps[currentStep - 1].title}
        </motion.h3>
        <motion.p
          key={`desc-${currentStep}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 mt-2"
        >
          {steps[currentStep - 1].description}
        </motion.p>
      </div>
    </div>
  </div>
);

const StepContent = ({ currentStep }) => {
  const stepComponents = {
    1: <DataCleaningStep />,
    2: <FeatureEngineeringStep />,
    3: <HyperparameterTuningStep />,
    4: <ErrorAnalysisStep />
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="px-6 py-8"
      >
        <div className="max-w-6xl mx-auto">
          {stepComponents[currentStep]}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const DataCleaningStep = () => (
  <div className="space-y-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Cleaning & Preprocessing</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Identify and resolve data quality issues that could impact your model's performance
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
            <FontAwesomeIcon icon="search" className="text-white text-xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Missing Values Detection</h3>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Training Set</span>
            <span className="font-semibold text-blue-600">2.3% missing</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{width: '97.7%'}}></div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Test Set</span>
            <span className="font-semibold text-blue-600">1.8% missing</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{width: '98.2%'}}></div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
            <FontAwesomeIcon icon="chart-line" className="text-white text-xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Outlier Analysis</h3>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Feature A</span>
            <span className="font-semibold text-purple-600">12 outliers</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Feature B</span>
            <span className="font-semibold text-purple-600">8 outliers</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Feature C</span>
            <span className="font-semibold text-purple-600">3 outliers</span>
          </div>
        </div>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
          <FontAwesomeIcon icon="check-circle" className="text-white text-xl" />
        </div>
        <h3 className="text-xl font-semibold text-green-900">Recommended Actions</h3>
      </div>
      <ul className="space-y-2">
        <li className="flex items-center gap-3 text-green-800">
          <FontAwesomeIcon icon="arrow-right" className="text-green-600" />
          Apply median imputation for missing numerical values
        </li>
        <li className="flex items-center gap-3 text-green-800">
          <FontAwesomeIcon icon="arrow-right" className="text-green-600" />
          Use IQR method to handle outliers in Feature A
        </li>
        <li className="flex items-center gap-3 text-green-800">
          <FontAwesomeIcon icon="arrow-right" className="text-green-600" />
          Consider feature scaling for better model performance
        </li>
      </ul>
    </motion.div>
  </div>
);

const FeatureEngineeringStep = () => (
  <div className="space-y-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Feature Engineering</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Optimize your features for better model performance and interpretability
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
      >
        <div className="text-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <FontAwesomeIcon icon="layer-group" className="text-white text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Feature Importance</h3>
        </div>
        <div className="space-y-3">
          {[
            { name: 'Feature_1', importance: 0.24 },
            { name: 'Feature_2', importance: 0.18 },
            { name: 'Feature_3', importance: 0.15 },
            { name: 'Feature_4', importance: 0.12 },
            { name: 'Feature_5', importance: 0.08 }
          ].map((feature, index) => (
            <div key={feature.name} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{feature.name}</span>
                <span className="font-semibold text-cyan-600">{(feature.importance * 100).toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${feature.importance * 100}%` }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
      >
        <div className="text-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <FontAwesomeIcon icon="magic" className="text-white text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Generated Features</h3>
        </div>
        <div className="space-y-3">
          <div className="p-3 bg-purple-50 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <FontAwesomeIcon icon="plus" className="text-purple-600 text-sm" />
              <span className="font-medium text-gray-900">Feature_1_squared</span>
            </div>
            <p className="text-sm text-gray-600">Polynomial feature for non-linear patterns</p>
          </div>
          <div className="p-3 bg-purple-50 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <FontAwesomeIcon icon="plus" className="text-purple-600 text-sm" />
              <span className="font-medium text-gray-900">Feature_1_x_Feature_2</span>
            </div>
            <p className="text-sm text-gray-600">Interaction feature for combined effects</p>
          </div>
          <div className="p-3 bg-purple-50 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <FontAwesomeIcon icon="plus" className="text-purple-600 text-sm" />
              <span className="font-medium text-gray-900">Log_Feature_3</span>
            </div>
            <p className="text-sm text-gray-600">Log transformation for skewed data</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
      >
        <div className="text-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <FontAwesomeIcon icon="filter" className="text-white text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Feature Selection</h3>
        </div>
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">15</div>
            <div className="text-sm text-gray-600">Selected Features</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500">8</div>
            <div className="text-sm text-gray-600">Removed Features</div>
          </div>
          <div className="pt-4 border-t border-gray-200">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Performance Gain</span>
              <span className="font-semibold text-green-600">+12.5%</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const HyperparameterTuningStep = () => (
  <div className="space-y-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Hyperparameter Tuning</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Find the optimal hyperparameters for maximum model performance
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Optimization Progress</h3>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Learning Rate</span>
              <span className="font-semibold text-blue-600">0.001</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Batch Size</span>
              <span className="font-semibold text-green-600">32</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{width: '60%'}}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Max Depth</span>
              <span className="font-semibold text-purple-600">8</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{width: '85%'}}></div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Best Parameters Found</h3>
        <div className="space-y-4">
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">Accuracy</span>
              <span className="text-xl font-bold text-green-600">94.2%</span>
            </div>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">Precision</span>
              <span className="text-xl font-bold text-blue-600">91.8%</span>
            </div>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">Recall</span>
              <span className="text-xl font-bold text-purple-600">93.5%</span>
            </div>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">F1-Score</span>
              <span className="text-xl font-bold text-orange-600">92.6%</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const ErrorAnalysisStep = () => (
  <div className="space-y-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Error Analysis</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Deep dive into model errors to identify improvement opportunities
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Error Distribution</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span className="font-medium text-gray-900">False Positives</span>
            </div>
            <span className="font-bold text-red-600">18</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              <span className="font-medium text-gray-900">False Negatives</span>
            </div>
            <span className="font-bold text-orange-600">12</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="font-medium text-gray-900">True Positives</span>
            </div>
            <span className="font-bold text-green-600">245</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="font-medium text-gray-900">True Negatives</span>
            </div>
            <span className="font-bold text-blue-600">198</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-6"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center">
            <FontAwesomeIcon icon="lightbulb" className="text-white text-xl" />
          </div>
          <h3 className="text-xl font-semibold text-amber-900">Key Insights</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-amber-800">
            <FontAwesomeIcon icon="arrow-right" className="text-amber-600 mt-1" />
            <span>Model struggles with edge cases in the 20-30 age group</span>
          </li>
          <li className="flex items-start gap-3 text-amber-800">
            <FontAwesomeIcon icon="arrow-right" className="text-amber-600 mt-1" />
            <span>High confidence errors suggest need for additional features</span>
          </li>
          <li className="flex items-start gap-3 text-amber-800">
            <FontAwesomeIcon icon="arrow-right" className="text-amber-600 mt-1" />
            <span>Consider ensemble methods to reduce variance</span>
          </li>
          <li className="flex items-start gap-3 text-amber-800">
            <FontAwesomeIcon icon="arrow-right" className="text-amber-600 mt-1" />
            <span>Threshold optimization could improve precision by 5%</span>
          </li>
        </ul>
      </motion.div>
    </div>
  </div>
);

const StepNavigation = ({ currentStep, totalSteps, onStepChange }) => (
  <div className="px-6 py-8 border-t border-gray-200 bg-white">
    <div className="max-w-4xl mx-auto flex justify-between items-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onStepChange(Math.max(1, currentStep - 1))}
        disabled={currentStep === 1}
        className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FontAwesomeIcon icon="arrow-left" />
        Previous
      </motion.button>
      
      <div className="flex items-center gap-2">
        <span className="text-gray-600">Step {currentStep} of {totalSteps}</span>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onStepChange(Math.min(totalSteps, currentStep + 1))}
        disabled={currentStep === totalSteps}
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {currentStep === totalSteps ? 'Finish' : 'Next'}
        <FontAwesomeIcon icon={currentStep === totalSteps ? 'check' : 'arrow-right'} />
      </motion.button>
    </div>
  </div>
);

const AdvancedOptimizationSuite = () => {
  const [currentStep, setCurrentStep] = useState(1);
  
  const steps = [
    { 
      id: 1, 
      title: 'Data Cleaning', 
      icon: '🧹', 
      color: 'blue',
      description: 'Clean and preprocess your data for optimal model performance'
    },
    { 
      id: 2, 
      title: 'Feature Engineering', 
      icon: '🛠️', 
      color: 'purple',
      description: 'Engineer and select the most impactful features'
    },
    { 
      id: 3, 
      title: 'Hyperparameter Tuning', 
      icon: '⚙️', 
      color: 'green',
      description: 'Optimize model parameters for best performance'
    },
    { 
      id: 4, 
      title: 'Error Analysis', 
      icon: '🔍', 
      color: 'orange',
      description: 'Analyze errors and identify improvement opportunities'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Advanced Optimization Suite" />
      <ProgressStepper steps={steps} currentStep={currentStep} onStepChange={setCurrentStep} />
      <StepContent currentStep={currentStep} />
      <StepNavigation 
        currentStep={currentStep} 
        totalSteps={steps.length}
        onStepChange={setCurrentStep}
      />
    </div>
  );
};

export default AdvancedOptimizationSuite;