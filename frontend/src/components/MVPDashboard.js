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

const TabNavigation = ({ tabs, activeTab, onTabChange }) => (
  <div className="border-b border-gray-200 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <nav className="flex space-x-8">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            whileHover={{ y: -2 }}
            className={`relative py-4 px-1 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <FontAwesomeIcon icon={tab.icon} className="mr-2" />
            {tab.title}
            
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
              />
            )}
          </motion.button>
        ))}
      </nav>
    </div>
  </div>
);

const ThresholdOptimizer = () => {
  const [threshold, setThreshold] = useState(0.5);
  const [isOptimizing, setIsOptimizing] = useState(false);

  const handleOptimize = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      setThreshold(0.62);
      setIsOptimizing(false);
    }, 3000);
  };

  const metrics = {
    precision: 0.82 + (threshold - 0.5) * 0.3,
    recall: 0.75 - (threshold - 0.5) * 0.2,
    f1Score: 0.78 + (threshold - 0.5) * 0.1,
    accuracy: 0.85 + (threshold - 0.5) * 0.05
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Threshold Optimizer</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find the optimal decision threshold for your classification model
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Threshold Control */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Decision Threshold</h3>
          
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-indigo-600 mb-2">
              {threshold.toFixed(2)}
            </div>
            <div className="text-gray-600">Current Threshold</div>
          </div>

          <div className="mb-6">
            <input
              type="range"
              min="0.1"
              max="0.9"
              step="0.01"
              value={threshold}
              onChange={(e) => setThreshold(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>0.1</span>
              <span>0.5</span>
              <span>0.9</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOptimize}
            disabled={isOptimizing}
            className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg disabled:opacity-50"
          >
            {isOptimizing ? (
              <>
                <FontAwesomeIcon icon="spinner" className="animate-spin mr-2" />
                Optimizing...
              </>
            ) : (
              <>
                <FontAwesomeIcon icon="magic" className="mr-2" />
                Auto-Optimize
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Metrics Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Performance Metrics</h3>
          
          <div className="space-y-4">
            <MetricBar label="Precision" value={metrics.precision} color="blue" />
            <MetricBar label="Recall" value={metrics.recall} color="green" />
            <MetricBar label="F1-Score" value={metrics.f1Score} color="purple" />
            <MetricBar label="Accuracy" value={metrics.accuracy} color="cyan" />
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <FontAwesomeIcon icon="thumbs-up" className="text-green-600" />
              <span className="font-semibold text-green-900">Recommendation</span>
            </div>
            <p className="text-sm text-green-800">
              Current threshold shows good balance between precision and recall
            </p>
          </div>
        </motion.div>

        {/* ROC Curve Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">ROC Curve</h3>
          
          <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
            <div className="text-center">
              <FontAwesomeIcon icon="chart-line" className="text-4xl text-gray-400 mb-3" />
              <p className="text-gray-600">ROC Curve Visualization</p>
              <p className="text-sm text-gray-500">AUC: 0.92</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-lg font-bold text-indigo-600">0.92</div>
              <div className="text-sm text-gray-600">AUC Score</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">Excellent</div>
              <div className="text-sm text-gray-600">Performance</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const MetricBar = ({ label, value, color }) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    cyan: 'from-cyan-500 to-cyan-600'
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-600">{label}</span>
        <span className="font-semibold text-gray-900">{(value * 100).toFixed(1)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value * 100}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`bg-gradient-to-r ${colorClasses[color]} h-3 rounded-full`}
        />
      </div>
    </div>
  );
};

const ConfidenceAnalysis = () => (
  <div className="space-y-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Confidence Analysis</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Analyze prediction confidence distribution and reliability
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Confidence Distribution</h3>
        
        <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center border border-gray-200 mb-6">
          <div className="text-center">
            <FontAwesomeIcon icon="chart-bar" className="text-4xl text-gray-400 mb-3" />
            <p className="text-gray-600">Confidence Histogram</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-red-50 rounded-lg">
            <div className="text-xl font-bold text-red-600">15%</div>
            <div className="text-sm text-red-800">Low Confidence</div>
            <div className="text-xs text-red-600">(< 0.6)</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 rounded-lg">
            <div className="text-xl font-bold text-yellow-600">25%</div>
            <div className="text-sm text-yellow-800">Medium Confidence</div>
            <div className="text-xs text-yellow-600">(0.6 - 0.8)</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-xl font-bold text-green-600">60%</div>
            <div className="text-sm text-green-800">High Confidence</div>
            <div className="text-xs text-green-600">(> 0.8)</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Reliability Metrics</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
              <span className="font-medium text-gray-900">Calibration Score</span>
              <span className="text-xl font-bold text-blue-600">0.89</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <span className="font-medium text-gray-900">Brier Score</span>
              <span className="text-xl font-bold text-green-600">0.12</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
              <span className="font-medium text-gray-900">Expected Calibration Error</span>
              <span className="text-xl font-bold text-purple-600">0.08</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
              <FontAwesomeIcon icon="exclamation-triangle" className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-amber-900">Confidence Insights</h3>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start gap-3 text-amber-800">
              <FontAwesomeIcon icon="arrow-right" className="text-amber-600 mt-1" />
              <span>Model is well-calibrated overall</span>
            </li>
            <li className="flex items-start gap-3 text-amber-800">
              <FontAwesomeIcon icon="arrow-right" className="text-amber-600 mt-1" />
              <span>15% of predictions have low confidence</span>
            </li>
            <li className="flex items-start gap-3 text-amber-800">
              <FontAwesomeIcon icon="arrow-right" className="text-amber-600 mt-1" />
              <span>Consider ensemble methods for uncertain cases</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  </div>
);

const SankeyDiagram = () => (
  <div className="space-y-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Prediction Flow Diagram</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Visualize how your model's predictions flow through different confidence levels
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
    >
      <div className="h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center border border-gray-200 mb-6">
        <div className="text-center">
          <FontAwesomeIcon icon="project-diagram" className="text-6xl text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">Sankey Flow Diagram</h3>
          <p className="text-gray-500">Interactive visualization of prediction flows</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-blue-50 rounded-xl">
          <div className="text-2xl font-bold text-blue-600">1,250</div>
          <div className="text-sm text-blue-800">Total Predictions</div>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-xl">
          <div className="text-2xl font-bold text-green-600">987</div>
          <div className="text-sm text-green-800">Correct Predictions</div>
        </div>
        <div className="text-center p-4 bg-red-50 rounded-xl">
          <div className="text-2xl font-bold text-red-600">263</div>
          <div className="text-sm text-red-800">Incorrect Predictions</div>
        </div>
        <div className="text-center p-4 bg-purple-50 rounded-xl">
          <div className="text-2xl font-bold text-purple-600">78.9%</div>
          <div className="text-sm text-purple-800">Overall Accuracy</div>
        </div>
      </div>
    </motion.div>
  </div>
);

const ReportGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [reportGenerated, setReportGenerated] = useState(false);

  const handleGenerateReport = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setReportGenerated(true);
    }, 4000);
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Report Generator</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Generate comprehensive PDF reports with all your model analysis results
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Report Configuration</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon="chart-bar" className="text-indigo-600" />
                <span className="font-medium">Performance Metrics</span>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 text-indigo-600 rounded" />
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon="table" className="text-purple-600" />
                <span className="font-medium">Confusion Matrix</span>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 text-indigo-600 rounded" />
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon="chart-line" className="text-green-600" />
                <span className="font-medium">ROC Curve</span>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 text-indigo-600 rounded" />
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon="brain" className="text-orange-600" />
                <span className="font-medium">Feature Importance</span>
              </div>
              <input type="checkbox" className="w-5 h-5 text-indigo-600 rounded" />
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon="lightbulb" className="text-yellow-600" />
                <span className="font-medium">Recommendations</span>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 text-indigo-600 rounded" />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGenerateReport}
            disabled={isGenerating}
            className="w-full mt-6 py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <FontAwesomeIcon icon="spinner" className="animate-spin mr-2" />
                Generating Report...
              </>
            ) : (
              <>
                <FontAwesomeIcon icon="file-pdf" className="mr-2" />
                Generate PDF Report
              </>
            )}
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Report Preview</h3>
          
          <div className="h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 p-4 relative overflow-hidden">
            {isGenerating && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-lg font-semibold text-gray-900">Generating Report...</p>
                  <div className="w-48 h-2 bg-gray-200 rounded-full mt-4 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </motion.div>
            )}
            
            <div className="flex items-center justify-center h-full">
              {reportGenerated ? (
                <div className="text-center">
                  <FontAwesomeIcon icon="check-circle" className="text-5xl text-green-500 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Report Generated!</h4>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg"
                  >
                    <FontAwesomeIcon icon="download" className="mr-2" />
                    Download PDF
                  </motion.button>
                </div>
              ) : (
                <div className="text-center">
                  <FontAwesomeIcon icon="file-pdf" className="text-4xl text-gray-400 mb-3" />
                  <p className="text-gray-600">PDF Report Preview</p>
                  <p className="text-sm text-gray-500">Configure options and generate</p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-lg font-bold text-blue-600">15</div>
              <div className="text-sm text-blue-800">Pages</div>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <div className="text-lg font-bold text-purple-600">8</div>
              <div className="text-sm text-purple-800">Charts</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const MVPDashboard = () => {
  const [activeTab, setActiveTab] = useState('threshold');
  
  const tabs = [
    { id: 'threshold', title: 'Threshold Optimizer', icon: 'sliders-h' },
    { id: 'confidence', title: 'Confidence Analysis', icon: 'chart-bar' },
    { id: 'sankey', title: 'Flow Diagram', icon: 'project-diagram' },
    { id: 'report', title: 'Report Generator', icon: 'file-pdf' }
  ];

  const tabComponents = {
    threshold: <ThresholdOptimizer />,
    confidence: <ConfidenceAnalysis />,
    sankey: <SankeyDiagram />,
    report: <ReportGenerator />
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="MVP Dashboard" />
      <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="px-6 py-8"
        >
          <div className="max-w-7xl mx-auto">
            {tabComponents[activeTab]}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MVPDashboard;