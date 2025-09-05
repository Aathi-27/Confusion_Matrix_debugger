// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useNavigate } from "react-router-dom";

// const Header = ({ title }) => {
//   const navigate = useNavigate();
  
//   return (
//     <header className="bg-white shadow-sm border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-4">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => navigate('/')}
//               className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
//             >
//               <FontAwesomeIcon icon="arrow-left" />
//               <span>Back to Home</span>
//             </motion.button>
//             <div className="h-6 w-px bg-gray-300"></div>
//             <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// const ProgressStepper = ({ steps, currentStep, onStepChange }) => (
//   <div className="px-6 py-8">
//     <div className="max-w-4xl mx-auto">
//       <div className="flex items-center justify-between">
//         {steps.map((step, index) => (
//           <div key={step.id} className="flex items-center">
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0.5 }}
//               animate={{ 
//                 scale: currentStep === step.id ? 1.1 : 1,
//                 opacity: currentStep >= step.id ? 1 : 0.5
//               }}
//               whileHover={{ scale: 1.05 }}
//               onClick={() => onStepChange(step.id)}
//               className={`relative flex items-center justify-center w-16 h-16 rounded-full cursor-pointer transition-all duration-300 ${
//                 currentStep >= step.id 
//                   ? `bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 text-white shadow-lg` 
//                   : 'bg-gray-200 text-gray-500'
//               }`}
//             >
//               <span className="text-2xl">{step.icon}</span>
//               {currentStep === step.id && (
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   className="absolute -inset-2 rounded-full border-2 border-blue-500"
//                 />
//               )}
//             </motion.div>
            
//             {index < steps.length - 1 && (
//               <div className={`flex-1 h-1 mx-4 rounded-full transition-colors duration-500 ${
//                 currentStep > step.id ? 'bg-green-500' : 'bg-gray-200'
//               }`} />
//             )}
//           </div>
//         ))}
//       </div>
      
//       <div className="text-center mt-6">
//         <motion.h3
//           key={currentStep}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-xl font-semibold text-gray-900"
//         >
//           Step {currentStep}: {steps[currentStep - 1].title}
//         </motion.h3>
//         <motion.p
//           key={`desc-${currentStep}`}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="text-gray-600 mt-2"
//         >
//           {steps[currentStep - 1].description}
//         </motion.p>
//       </div>
//     </div>
//   </div>
// );

// const StepContent = ({ currentStep }) => {
//   const stepComponents = {
//     1: <DataCleaningStep />,
//     2: <FeatureEngineeringStep />,
//     3: <HyperparameterTuningStep />,
//     4: <ErrorAnalysisStep />
//   };

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={currentStep}
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         exit={{ opacity: 0, x: -50 }}
//         transition={{ duration: 0.3 }}
//         className="px-6 py-8"
//       >
//         <div className="max-w-6xl mx-auto">
//           {stepComponents[currentStep]}
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// const DataCleaningStep = () => (
//   <div className="space-y-8">
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="text-center"
//     >
//       <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Cleaning & Preprocessing</h2>
//       <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//         Identify and resolve data quality issues that could impact your model's performance
//       </p>
//     </motion.div>

//     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//       <motion.div
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.2 }}
//         className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
//       >
//         <div className="flex items-center gap-4 mb-4">
//           <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
//             <FontAwesomeIcon icon="search" className="text-white text-xl" />
//           </div>
//           <h3 className="text-xl font-semibold text-gray-900">Missing Values Detection</h3>
//         </div>
//         <div className="space-y-4">
//           <div className="flex justify-between items-center">
//             <span className="text-gray-600">Training Set</span>
//             <span className="font-semibold text-blue-600">2.3% missing</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2">
//             <div className="bg-blue-500 h-2 rounded-full" style={{width: '97.7%'}}></div>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-600">Test Set</span>
//             <span className="font-semibold text-blue-600">1.8% missing</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2">
//             <div className="bg-blue-500 h-2 rounded-full" style={{width: '98.2%'}}></div>
//           </div>
//         </div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, x: 20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.4 }}
//         className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
//       >
//         <div className="flex items-center gap-4 mb-4">
//           <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
//             <FontAwesomeIcon icon="chart-line" className="text-white text-xl" />
//           </div>
//           <h3 className="text-xl font-semibold text-gray-900">Outlier Analysis</h3>
//         </div>
//         <div className="space-y-4">
//           <div className="flex justify-between items-center">
//             <span className="text-gray-600">Feature A</span>
//             <span className="font-semibold text-purple-600">12 outliers</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-600">Feature B</span>
//             <span className="font-semibold text-purple-600">8 outliers</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-600">Feature C</span>
//             <span className="font-semibold text-purple-600">3 outliers</span>
//           </div>
//         </div>
//       </motion.div>
//     </div>

//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.6 }}
//       className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6"
//     >
//       <div className="flex items-center gap-4 mb-4">
//         <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
//           <FontAwesomeIcon icon="check-circle" className="text-white text-xl" />
//         </div>
//         <h3 className="text-xl font-semibold text-green-900">Recommended Actions</h3>
//       </div>
//       <ul className="space-y-2">
//         <li className="flex items-center gap-3 text-green-800">
//           <FontAwesomeIcon icon="arrow-right" className="text-green-600" />
//           Apply median imputation for missing numerical values
//         </li>
//         <li className="flex items-center gap-3 text-green-800">
//           <FontAwesomeIcon icon="arrow-right" className="text-green-600" />
//           Use IQR method to handle outliers in Feature A
//         </li>
//         <li className="flex items-center gap-3 text-green-800">
//           <FontAwesomeIcon icon="arrow-right" className="text-green-600" />
//           Consider feature scaling for better model performance
//         </li>
//       </ul>
//     </motion.div>
//   </div>
// );

// const FeatureEngineeringStep = () => (
//   <div className="space-y-8">
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="text-center"
//     >
//       <h2 className="text-3xl font-bold text-gray-900 mb-4">Feature Engineering</h2>
//       <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//         Optimize your features for better model performance and interpretability
//       </p>
//     </motion.div>

//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//         className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
//       >
//         <div className="text-center mb-4">
//           <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
//             <FontAwesomeIcon icon="layer-group" className="text-white text-2xl" />
//           </div>
//           <h3 className="text-xl font-semibold text-gray-900">Feature Importance</h3>
//         </div>
//         <div className="space-y-3">
//           {[
//             { name: 'Feature_1', importance: 0.24 },
//             { name: 'Feature_2', importance: 0.18 },
//             { name: 'Feature_3', importance: 0.15 },
//             { name: 'Feature_4', importance: 0.12 },
//             { name: 'Feature_5', importance: 0.08 }
//           ].map((feature, index) => (
//             <div key={feature.name} className="space-y-1">
//               <div className="flex justify-between text-sm">
//                 <span className="text-gray-600">{feature.name}</span>
//                 <span className="font-semibold text-cyan-600">{(feature.importance * 100).toFixed(1)}%</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   animate={{ width: `${feature.importance * 100}%` }}
//                   transition={{ delay: 0.5 + index * 0.1 }}
//                   className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4 }}
//         className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
//       >
//         <div className="text-center mb-4">
//           <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
//             <FontAwesomeIcon icon="magic" className="text-white text-2xl" />
//           </div>
//           <h3 className="text-xl font-semibold text-gray-900">Generated Features</h3>
//         </div>
//         <div className="space-y-3">
//           <div className="p-3 bg-purple-50 rounded-lg">
//             <div className="flex items-center gap-2 mb-1">
//               <FontAwesomeIcon icon="plus" className="text-purple-600 text-sm" />
//               <span className="font-medium text-gray-900">Feature_1_squared</span>
//             </div>
//             <p className="text-sm text-gray-600">Polynomial feature for non-linear patterns</p>
//           </div>
//           <div className="p-3 bg-purple-50 rounded-lg">
//             <div className="flex items-center gap-2 mb-1">
//               <FontAwesomeIcon icon="plus" className="text-purple-600 text-sm" />
//               <span className="font-medium text-gray-900">Feature_1_x_Feature_2</span>
//             </div>
//             <p className="text-sm text-gray-600">Interaction feature for combined effects</p>
//           </div>
//           <div className="p-3 bg-purple-50 rounded-lg">
//             <div className="flex items-center gap-2 mb-1">
//               <FontAwesomeIcon icon="plus" className="text-purple-600 text-sm" />
//               <span className="font-medium text-gray-900">Log_Feature_3</span>
//             </div>
//             <p className="text-sm text-gray-600">Log transformation for skewed data</p>
//           </div>
//         </div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6 }}
//         className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
//       >
//         <div className="text-center mb-4">
//           <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
//             <FontAwesomeIcon icon="filter" className="text-white text-2xl" />
//           </div>
//           <h3 className="text-xl font-semibold text-gray-900">Feature Selection</h3>
//         </div>
//         <div className="space-y-4">
//           <div className="text-center">
//             <div className="text-3xl font-bold text-green-600">15</div>
//             <div className="text-sm text-gray-600">Selected Features</div>
//           </div>
//           <div className="text-center">
//             <div className="text-3xl font-bold text-red-500">8</div>
//             <div className="text-sm text-gray-600">Removed Features</div>
//           </div>
//           <div className="pt-4 border-t border-gray-200">
//             <div className="flex justify-between text-sm">
//               <span className="text-gray-600">Performance Gain</span>
//               <span className="font-semibold text-green-600">+12.5%</span>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   </div>
// );

// const HyperparameterTuningStep = () => (
//   <div className="space-y-8">
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="text-center"
//     >
//       <h2 className="text-3xl font-bold text-gray-900 mb-4">Hyperparameter Tuning</h2>
//       <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//         Find the optimal hyperparameters for maximum model performance
//       </p>
//     </motion.div>

//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//       <motion.div
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.2 }}
//         className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
//       >
//         <h3 className="text-xl font-semibold text-gray-900 mb-6">Optimization Progress</h3>
//         <div className="space-y-6">
//           <div>
//             <div className="flex justify-between items-center mb-2">
//               <span className="text-gray-600">Learning Rate</span>
//               <span className="font-semibold text-blue-600">0.001</span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2">
//               <div className="bg-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
//             </div>
//           </div>
//           <div>
//             <div className="flex justify-between items-center mb-2">
//               <span className="text-gray-600">Batch Size</span>
//               <span className="font-semibold text-green-600">32</span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2">
//               <div className="bg-green-500 h-2 rounded-full" style={{width: '60%'}}></div>
//             </div>
//           </div>
//           <div>
//             <div className="flex justify-between items-center mb-2">
//               <span className="text-gray-600">Max Depth</span>
//               <span className="font-semibold text-purple-600">8</span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2">
//               <div className="bg-purple-500 h-2 rounded-full" style={{width: '85%'}}></div>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, x: 20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.4 }}
//         className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
//       >
//         <h3 className="text-xl font-semibold text-gray-900 mb-6">Best Parameters Found</h3>
//         <div className="space-y-4">
//           <div className="p-4 bg-green-50 rounded-lg border border-green-200">
//             <div className="flex justify-between items-center">
//               <span className="font-medium text-gray-900">Accuracy</span>
//               <span className="text-xl font-bold text-green-600">94.2%</span>
//             </div>
//           </div>
//           <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
//             <div className="flex justify-between items-center">
//               <span className="font-medium text-gray-900">Precision</span>
//               <span className="text-xl font-bold text-blue-600">91.8%</span>
//             </div>
//           </div>
//           <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
//             <div className="flex justify-between items-center">
//               <span className="font-medium text-gray-900">Recall</span>
//               <span className="text-xl font-bold text-purple-600">93.5%</span>
//             </div>
//           </div>
//           <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
//             <div className="flex justify-between items-center">
//               <span className="font-medium text-gray-900">F1-Score</span>
//               <span className="text-xl font-bold text-orange-600">92.6%</span>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   </div>
// );

// const ErrorAnalysisStep = () => (
//   <div className="space-y-8">
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="text-center"
//     >
//       <h2 className="text-3xl font-bold text-gray-900 mb-4">Error Analysis</h2>
//       <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//         Deep dive into model errors to identify improvement opportunities
//       </p>
//     </motion.div>

//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//         className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
//       >
//         <h3 className="text-xl font-semibold text-gray-900 mb-6">Error Distribution</h3>
//         <div className="space-y-4">
//           <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
//             <div className="flex items-center gap-3">
//               <div className="w-4 h-4 bg-red-500 rounded-full"></div>
//               <span className="font-medium text-gray-900">False Positives</span>
//             </div>
//             <span className="font-bold text-red-600">18</span>
//           </div>
//           <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
//             <div className="flex items-center gap-3">
//               <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
//               <span className="font-medium text-gray-900">False Negatives</span>
//             </div>
//             <span className="font-bold text-orange-600">12</span>
//           </div>
//           <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
//             <div className="flex items-center gap-3">
//               <div className="w-4 h-4 bg-green-500 rounded-full"></div>
//               <span className="font-medium text-gray-900">True Positives</span>
//             </div>
//             <span className="font-bold text-green-600">245</span>
//           </div>
//           <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
//             <div className="flex items-center gap-3">
//               <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
//               <span className="font-medium text-gray-900">True Negatives</span>
//             </div>
//             <span className="font-bold text-blue-600">198</span>
//           </div>
//         </div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4 }}
//         className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-6"
//       >
//         <div className="flex items-center gap-4 mb-6">
//           <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center">
//             <FontAwesomeIcon icon="lightbulb" className="text-white text-xl" />
//           </div>
//           <h3 className="text-xl font-semibold text-amber-900">Key Insights</h3>
//         </div>
//         <ul className="space-y-3">
//           <li className="flex items-start gap-3 text-amber-800">
//             <FontAwesomeIcon icon="arrow-right" className="text-amber-600 mt-1" />
//             <span>Model struggles with edge cases in the 20-30 age group</span>
//           </li>
//           <li className="flex items-start gap-3 text-amber-800">
//             <FontAwesomeIcon icon="arrow-right" className="text-amber-600 mt-1" />
//             <span>High confidence errors suggest need for additional features</span>
//           </li>
//           <li className="flex items-start gap-3 text-amber-800">
//             <FontAwesomeIcon icon="arrow-right" className="text-amber-600 mt-1" />
//             <span>Consider ensemble methods to reduce variance</span>
//           </li>
//           <li className="flex items-start gap-3 text-amber-800">
//             <FontAwesomeIcon icon="arrow-right" className="text-amber-600 mt-1" />
//             <span>Threshold optimization could improve precision by 5%</span>
//           </li>
//         </ul>
//       </motion.div>
//     </div>
//   </div>
// );

// const StepNavigation = ({ currentStep, totalSteps, onStepChange }) => (
//   <div className="px-6 py-8 border-t border-gray-200 bg-white">
//     <div className="max-w-4xl mx-auto flex justify-between items-center">
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={() => onStepChange(Math.max(1, currentStep - 1))}
//         disabled={currentStep === 1}
//         className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
//       >
//         <FontAwesomeIcon icon="arrow-left" />
//         Previous
//       </motion.button>
      
//       <div className="flex items-center gap-2">
//         <span className="text-gray-600">Step {currentStep} of {totalSteps}</span>
//       </div>
      
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={() => onStepChange(Math.min(totalSteps, currentStep + 1))}
//         disabled={currentStep === totalSteps}
//         className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
//       >
//         {currentStep === totalSteps ? 'Finish' : 'Next'}
//         <FontAwesomeIcon icon={currentStep === totalSteps ? 'check' : 'arrow-right'} />
//       </motion.button>
//     </div>
//   </div>
// );

// const AdvancedOptimizationSuite = () => {
//   const [currentStep, setCurrentStep] = useState(1);
  
//   const steps = [
//     { 
//       id: 1, 
//       title: 'Data Cleaning', 
//       icon: '🧹', 
//       color: 'blue',
//       description: 'Clean and preprocess your data for optimal model performance'
//     },
//     { 
//       id: 2, 
//       title: 'Feature Engineering', 
//       icon: '🛠️', 
//       color: 'purple',
//       description: 'Engineer and select the most impactful features'
//     },
//     { 
//       id: 3, 
//       title: 'Hyperparameter Tuning', 
//       icon: '⚙️', 
//       color: 'green',
//       description: 'Optimize model parameters for best performance'
//     },
//     { 
//       id: 4, 
//       title: 'Error Analysis', 
//       icon: '🔍', 
//       color: 'orange',
//       description: 'Analyze errors and identify improvement opportunities'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header title="Advanced Optimization Suite" />
//       <ProgressStepper steps={steps} currentStep={currentStep} onStepChange={setCurrentStep} />
//       <StepContent currentStep={currentStep} />
//       <StepNavigation 
//         currentStep={currentStep} 
//         totalSteps={steps.length}
//         onStepChange={setCurrentStep}
//       />
//     </div>
//   );
// };

// export default AdvancedOptimizationSuite;






import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
import { 
  performDataCleaning, 
  performFeatureEngineering, 
  performHyperparameterTuning, 
  performErrorAnalysis,
  uploadFiles 
} from '../services/api';

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

const DatasetUploader = ({ onDatasetUploaded, isLoading, setIsLoading }) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      await handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleFileInput = async (e) => {
    if (e.target.files && e.target.files[0]) {
      await handleFiles(Array.from(e.target.files));
    }
  };

  const handleFiles = async (files) => {
    setIsLoading(true);
    try {
      const result = await uploadFiles(files);
      onDatasetUploaded(result);
    } catch (error) {
      console.error('File upload failed:', error);
      alert('File upload failed: ' + error.message);
    }
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload Your Dataset</h2>
        <p className="text-gray-600">Upload your ML dataset (CSV format) to begin advanced optimization analysis</p>
      </div>

      <div
        className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
          dragActive 
            ? 'border-indigo-500 bg-indigo-50' 
            : 'border-gray-300 hover:border-indigo-400 hover:bg-gray-50'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {isLoading ? (
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
            <p className="text-lg font-semibold text-gray-900">Processing Dataset...</p>
          </div>
        ) : (
          <>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mb-6"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                <FontAwesomeIcon icon="upload" className="text-3xl text-white" />
              </div>
            </motion.div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Drop your dataset here or click to browse
            </h3>
            <p className="text-gray-600 mb-6">
              Supports CSV files with features and target columns
            </p>
            
            <input
              type="file"
              accept=".csv"
              onChange={handleFileInput}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              <FontAwesomeIcon icon="folder-open" />
              Choose File
            </label>
          </>
        )}
      </div>
    </motion.div>
  );
};

const ProgressStepper = ({ steps, currentStep, onStepChange, canProceed }) => (
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
              whileHover={{ scale: canProceed[step.id] ? 1.05 : 1 }}
              onClick={() => canProceed[step.id] && onStepChange(step.id)}
              className={`relative flex items-center justify-center w-16 h-16 rounded-full transition-all duration-300 ${
                canProceed[step.id] ? 'cursor-pointer' : 'cursor-not-allowed'
              } ${
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

const StepContent = ({ currentStep, dataset, onStepComplete, stepResults }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleStepExecution = async (stepFunction, stepName) => {
    if (!dataset) {
      alert('Please upload a dataset first');
      return;
    }

    setIsProcessing(true);
    try {
      const result = await stepFunction(dataset);
      onStepComplete(currentStep, result);
    } catch (error) {
      console.error(`${stepName} failed:`, error);
      alert(`${stepName} failed: ${error.message}`);
    }
    setIsProcessing(false);
  };

  const stepComponents = {
    1: (
      <DataCleaningStep 
        dataset={dataset}
        onExecute={() => handleStepExecution(performDataCleaning, 'Data Cleaning')}
        isProcessing={isProcessing}
        results={stepResults[1]}
      />
    ),
    2: (
      <FeatureEngineeringStep 
        dataset={dataset}
        onExecute={() => handleStepExecution(performFeatureEngineering, 'Feature Engineering')}
        isProcessing={isProcessing}
        results={stepResults[2]}
      />
    ),
    3: (
      <HyperparameterTuningStep 
        dataset={dataset}
        onExecute={() => handleStepExecution(performHyperparameterTuning, 'Hyperparameter Tuning')}
        isProcessing={isProcessing}
        results={stepResults[3]}
      />
    ),
    4: (
      <ErrorAnalysisStep 
        dataset={dataset}
        onExecute={() => handleStepExecution(performErrorAnalysis, 'Error Analysis')}
        isProcessing={isProcessing}
        results={stepResults[4]}
      />
    )
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

const DataCleaningStep = ({ dataset, onExecute, isProcessing, results }) => (
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

    {dataset && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-blue-50 border border-blue-200 rounded-2xl p-6"
      >
        <h3 className="text-lg font-semibold text-blue-900 mb-4">Dataset Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{dataset.files?.[0]?.chunks || 'N/A'}</div>
            <div className="text-sm text-blue-700">Data Points</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{dataset.files?.length || 0}</div>
            <div className="text-sm text-blue-700">Files</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">CSV</div>
            <div className="text-sm text-blue-700">Format</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">Ready</div>
            <div className="text-sm text-blue-700">Status</div>
          </div>
        </div>
      </motion.div>
    )}

    <div className="text-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onExecute}
        disabled={!dataset || isProcessing}
        className={`px-8 py-4 rounded-xl font-semibold text-white shadow-lg transition-all ${
          !dataset || isProcessing
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-xl'
        }`}
      >
        {isProcessing ? (
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Processing...
          </div>
        ) : (
          <>
            <FontAwesomeIcon icon="play" className="mr-2" />
            Start Data Cleaning
          </>
        )}
      </motion.button>
    </div>

    {results && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-green-50 border border-green-200 rounded-2xl p-6"
      >
        <h3 className="text-lg font-semibold text-green-900 mb-4">
          <FontAwesomeIcon icon="check-circle" className="mr-2" />
          Data Cleaning Complete
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-green-800 mb-2">Issues Found:</h4>
            <ul className="text-green-700 space-y-1">
              <li>• Missing values: {results.results?.missing_values || 'Analyzed'}</li>
              <li>• Outliers detected: {results.results?.outliers || 'Analyzed'}</li>
              <li>• Data types: {results.results?.data_types || 'Validated'}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-green-800 mb-2">Actions Taken:</h4>
            <ul className="text-green-700 space-y-1">
              <li>• Imputation applied</li>
              <li>• Outliers handled</li>
              <li>• Features scaled</li>
            </ul>
          </div>
        </div>
      </motion.div>
    )}
  </div>
);

const FeatureEngineeringStep = ({ dataset, onExecute, isProcessing, results }) => (
  <div className="space-y-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Feature Engineering</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Create and optimize features to improve model performance
      </p>
    </motion.div>

    <div className="text-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onExecute}
        disabled={!dataset || isProcessing}
        className={`px-8 py-4 rounded-xl font-semibold text-white shadow-lg transition-all ${
          !dataset || isProcessing
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-purple-600 to-purple-700 hover:shadow-xl'
        }`}
      >
        {isProcessing ? (
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Engineering Features...
          </div>
        ) : (
          <>
            <FontAwesomeIcon icon="cogs" className="mr-2" />
            Start Feature Engineering
          </>
        )}
      </motion.button>
    </div>

    {results && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-purple-50 border border-purple-200 rounded-2xl p-6"
      >
        <h3 className="text-lg font-semibold text-purple-900 mb-4">
          <FontAwesomeIcon icon="check-circle" className="mr-2" />
          Feature Engineering Complete
        </h3>
        <p className="text-purple-700">
          New features created and optimized for improved model performance.
        </p>
      </motion.div>
    )}
  </div>
);

const HyperparameterTuningStep = ({ dataset, onExecute, isProcessing, results }) => (
  <div className="space-y-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Hyperparameter Tuning</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Optimize model hyperparameters for best performance
      </p>
    </motion.div>

    <div className="text-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onExecute}
        disabled={!dataset || isProcessing}
        className={`px-8 py-4 rounded-xl font-semibold text-white shadow-lg transition-all ${
          !dataset || isProcessing
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-green-600 to-green-700 hover:shadow-xl'
        }`}
      >
        {isProcessing ? (
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Tuning Parameters...
          </div>
        ) : (
          <>
            <FontAwesomeIcon icon="sliders-h" className="mr-2" />
            Start Hyperparameter Tuning
          </>
        )}
      </motion.button>
    </div>

    {results && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-green-50 border border-green-200 rounded-2xl p-6"
      >
        <h3 className="text-lg font-semibold text-green-900 mb-4">
          <FontAwesomeIcon icon="check-circle" className="mr-2" />
          Hyperparameter Tuning Complete
        </h3>
        <p className="text-green-700">
          Optimal hyperparameters found and model performance improved.
        </p>
      </motion.div>
    )}
  </div>
);

const ErrorAnalysisStep = ({ dataset, onExecute, isProcessing, results }) => (
  <div className="space-y-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Error Analysis</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Analyze model errors and get insights for improvement
      </p>
    </motion.div>

    <div className="text-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onExecute}
        disabled={!dataset || isProcessing}
        className={`px-8 py-4 rounded-xl font-semibold text-white shadow-lg transition-all ${
          !dataset || isProcessing
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-orange-600 to-orange-700 hover:shadow-xl'
        }`}
      >
        {isProcessing ? (
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Analyzing Errors...
          </div>
        ) : (
          <>
            <FontAwesomeIcon icon="search" className="mr-2" />
            Start Error Analysis
          </>
        )}
      </motion.button>
    </div>

    {results && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-orange-50 border border-orange-200 rounded-2xl p-6"
      >
        <h3 className="text-lg font-semibold text-orange-900 mb-4">
          <FontAwesomeIcon icon="check-circle" className="mr-2" />
          Error Analysis Complete
        </h3>
        <p className="text-orange-700">
          Comprehensive error analysis completed with actionable insights.
        </p>
      </motion.div>
    )}
  </div>
);

const StepNavigation = ({ currentStep, totalSteps, onStepChange, canProceed }) => (
  <div className="px-6 py-8 border-t border-gray-200 bg-white">
    <div className="max-w-4xl mx-auto flex justify-between items-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onStepChange(Math.max(1, currentStep - 1))}
        disabled={currentStep === 1}
        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
          currentStep === 1
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-gray-600 text-white hover:bg-gray-700 shadow-lg'
        }`}
      >
        <FontAwesomeIcon icon="arrow-left" />
        Previous
      </motion.button>

      <div className="text-center">
        <div className="text-sm text-gray-600">
          Step {currentStep} of {totalSteps}
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onStepChange(Math.min(totalSteps, currentStep + 1))}
        disabled={currentStep === totalSteps || !canProceed[currentStep + 1]}
        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
          currentStep === totalSteps || !canProceed[currentStep + 1]
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg'
        }`}
      >
        Next
        <FontAwesomeIcon icon="arrow-right" />
      </motion.button>
    </div>
  </div>
);

const AdvancedOptimizationSuite = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [dataset, setDataset] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [stepResults, setStepResults] = useState({});
  const [canProceed, setCanProceed] = useState({
    1: true,
    2: false,
    3: false,
    4: false
  });

  const steps = [
    { 
      id: 1, 
      title: 'Data Cleaning', 
      icon: '🧹', 
      color: 'blue',
      description: 'Clean and preprocess your dataset for optimal performance'
    },
    { 
      id: 2, 
      title: 'Feature Engineering', 
      icon: '🛠️', 
      color: 'purple',
      description: 'Create and optimize features to improve model accuracy'
    },
    { 
      id: 3, 
      title: 'Hyperparameter Tuning', 
      icon: '⚙️', 
      color: 'green',
      description: 'Find the optimal hyperparameters for your model'
    },
    { 
      id: 4, 
      title: 'Error Analysis', 
      icon: '🔍', 
      color: 'orange',
      description: 'Analyze model errors and get improvement insights'
    }
  ];

  const handleDatasetUploaded = (uploadResult) => {
    setDataset(uploadResult);
    setCanProceed(prev => ({ ...prev, 1: true }));
  };

  const handleStepComplete = (stepId, result) => {
    setStepResults(prev => ({ ...prev, [stepId]: result }));
    
    // Enable next step
    if (stepId < steps.length) {
      setCanProceed(prev => ({ ...prev, [stepId + 1]: true }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Advanced Optimization Suite" />
      
      {!dataset && (
        <div className="max-w-4xl mx-auto px-6 py-8">
          <DatasetUploader 
            onDatasetUploaded={handleDatasetUploaded}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </div>
      )}
      
      {dataset && (
        <>
          <ProgressStepper 
            steps={steps} 
            currentStep={currentStep} 
            onStepChange={setCurrentStep}
            canProceed={canProceed}
          />
          
          <StepContent 
            currentStep={currentStep} 
            dataset={dataset}
            onStepComplete={handleStepComplete}
            stepResults={stepResults}
          />
          
          <StepNavigation 
            currentStep={currentStep} 
            totalSteps={steps.length}
            onStepChange={setCurrentStep}
            canProceed={canProceed}
          />
        </>
      )}
    </div>
  );
};

export default AdvancedOptimizationSuite;
