// import React, { useState, useCallback } from "react";
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

// const ApiKeySection = () => {
//   const [apiKey, setApiKey] = useState('');
//   const [isValidated, setIsValidated] = useState(false);
//   const [isValidating, setIsValidating] = useState(false);

//   const handleValidate = async () => {
//     setIsValidating(true);
//     // Simulate API validation
//     setTimeout(() => {
//       setIsValidated(true);
//       setIsValidating(false);
//     }, 2000);
//   };

//   return (
//     <div className="px-6 py-8">
//       <div className="max-w-4xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6"
//         >
//           <div className="flex items-center gap-4 mb-4">
//             <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
//               <FontAwesomeIcon icon="key" className="text-white text-xl" />
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold text-amber-900">API Key Required</h3>
//               <p className="text-amber-700">Please provide your API key to enable AI-powered analysis</p>
//             </div>
//           </div>
          
//           <div className="flex gap-4">
//             <input
//               type="password"
//               placeholder="Enter your API key..."
//               value={apiKey}
//               onChange={(e) => setApiKey(e.target.value)}
//               className="flex-1 px-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
//             />
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleValidate}
//               disabled={isValidating || !apiKey}
//               className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg disabled:opacity-50"
//             >
//               {isValidating ? (
//                 <FontAwesomeIcon icon="spinner" className="animate-spin" />
//               ) : isValidated ? (
//                 <FontAwesomeIcon icon="check" />
//               ) : (
//                 'Validate'
//               )}
//             </motion.button>
//           </div>
          
//           <a
//             href="#"
//             className="inline-flex items-center gap-2 mt-4 text-amber-700 hover:text-amber-900 transition-colors"
//           >
//             <FontAwesomeIcon icon="external-link-alt" />
//             Get Free API Key
//           </a>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// const FileUploadArea = () => {
//   const [isDragOver, setIsDragOver] = useState(false);
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [isUploading, setIsUploading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);

//   const fileTypes = [
//     { icon: 'file-csv', extension: 'CSV' },
//     { icon: 'file-alt', extension: 'TXT' },
//     { icon: 'file-code', extension: 'JSON' },
//     { icon: 'file', extension: 'LOG' }
//   ];

//   const handleDrop = useCallback((e) => {
//     e.preventDefault();
//     setIsDragOver(false);
//     const files = Array.from(e.dataTransfer.files);
//     handleFileUpload(files);
//   }, []);

//   const handleDragOver = useCallback((e) => {
//     e.preventDefault();
//     setIsDragOver(true);
//   }, []);

//   const handleDragLeave = useCallback((e) => {
//     e.preventDefault();
//     setIsDragOver(false);
//   }, []);

//   const handleFileUpload = (files) => {
//     setIsUploading(true);
//     setUploadProgress(0);
    
//     // Simulate file upload
//     const interval = setInterval(() => {
//       setUploadProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           setIsUploading(false);
//           setUploadedFiles(files.map(file => ({
//             id: Math.random().toString(36).substr(2, 9),
//             name: file.name,
//             size: file.size,
//             type: file.type
//           })));
//           return 100;
//         }
//         return prev + 10;
//       });
//     }, 200);
//   };

//   return (
//     <section className="px-6 py-8">
//       <div className="max-w-4xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           whileHover={{ scale: 1.02 }}
//           className={`relative bg-gradient-to-br from-white to-gray-50 border-3 border-dashed rounded-3xl p-12 text-center group transition-all duration-300 ${
//             isDragOver ? 'border-indigo-400 bg-indigo-50' : 'border-indigo-300 hover:border-indigo-400'
//           }`}
//           onDrop={handleDrop}
//           onDragOver={handleDragOver}
//           onDragLeave={handleDragLeave}
//         >
//           {/* Upload Icon */}
//           <motion.div
//             animate={{ 
//               y: [0, -10, 0],
//               rotate: [0, 5, -5, 0]
//             }}
//             transition={{ 
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//             className="mb-6"
//           >
//             <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
//               <FontAwesomeIcon icon="cloud-upload-alt" className="text-3xl text-white" />
//             </div>
//           </motion.div>
          
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Drop Your ML Files Here</h2>
//           <p className="text-lg text-gray-600 mb-8">Upload confusion matrices, training logs, or model configurations</p>
          
//           {/* File Type Tags */}
//           <div className="flex flex-wrap justify-center gap-3 mb-8">
//             {fileTypes.map((type, index) => (
//               <motion.div
//                 key={type.extension}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
//               >
//                 <FontAwesomeIcon icon={type.icon} />
//                 {type.extension}
//               </motion.div>
//             ))}
//           </div>
          
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl shadow-xl"
//             onClick={() => document.getElementById('file-input').click()}
//           >
//             <FontAwesomeIcon icon="mouse-pointer" />
//             Click to Browse Files
//           </motion.button>
          
//           <input
//             id="file-input"
//             type="file"
//             multiple
//             accept=".csv,.txt,.json,.log"
//             className="hidden"
//             onChange={(e) => handleFileUpload(Array.from(e.target.files))}
//           />
          
//           {/* Upload Progress Indicator */}
//           <AnimatePresence>
//             {isUploading && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-3xl flex items-center justify-center"
//               >
//                 <div className="text-center">
//                   <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4"></div>
//                   <p className="text-lg font-semibold text-gray-900">Processing Files...</p>
//                   <div className="w-64 h-2 bg-gray-200 rounded-full mt-4 overflow-hidden">
//                     <motion.div
//                       initial={{ width: 0 }}
//                       animate={{ width: `${uploadProgress}%` }}
//                       className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
//                     />
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>
        
//         {/* Uploaded Files Display */}
//         <AnimatePresence>
//           {uploadedFiles.length > 0 && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="mt-8 space-y-4"
//             >
//               {uploadedFiles.map((file, index) => (
//                 <motion.div
//                   key={file.id}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md border border-gray-200"
//                 >
//                   <div className="flex items-center gap-4">
//                     <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
//                       <FontAwesomeIcon icon="file" className="text-white" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900">{file.name}</p>
//                       <p className="text-sm text-gray-500">{(file.size / 1024).toFixed(1)} KB</p>
//                     </div>
//                   </div>
//                   <motion.button
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
//                     onClick={() => setUploadedFiles(files => files.filter(f => f.id !== file.id))}
//                   >
//                     <FontAwesomeIcon icon="trash" />
//                   </motion.button>
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// const ChatInterface = () => {
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       type: 'ai',
//       content: 'Hello! I\'ve analyzed your uploaded files. What would you like to know about your model\'s performance?',
//       timestamp: new Date()
//     }
//   ]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [isTyping, setIsTyping] = useState(false);

//   const handleSendMessage = () => {
//     if (!inputMessage.trim()) return;
    
//     const newMessage = {
//       id: messages.length + 1,
//       type: 'user',
//       content: inputMessage,
//       timestamp: new Date()
//     };
    
//     setMessages(prev => [...prev, newMessage]);
//     setInputMessage('');
//     setIsTyping(true);
    
//     // Simulate AI response
//     setTimeout(() => {
//       const aiResponse = {
//         id: messages.length + 2,
//         type: 'ai',
//         content: 'Based on your confusion matrix, I can see your model has high precision but moderate recall. Here are some insights and recommendations...',
//         timestamp: new Date()
//       };
//       setMessages(prev => [...prev, aiResponse]);
//       setIsTyping(false);
//     }, 2000);
//   };

//   return (
//     <section className="px-6 py-8">
//       <div className="max-w-4xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
//         >
//           {/* Chat Header */}
//           <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
//                 <FontAwesomeIcon icon="robot" className="text-white" />
//               </div>
//               <div>
//                 <h3 className="text-white font-semibold">AI Analysis Assistant</h3>
//                 <p className="text-indigo-100 text-sm">Ready to help analyze your ML models</p>
//               </div>
//             </div>
//           </div>
          
//           {/* Messages */}
//           <div className="h-96 overflow-y-auto p-6 space-y-4">
//             {messages.map((message) => (
//               <motion.div
//                 key={message.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
//               >
//                 <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
//                   message.type === 'user' 
//                     ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white' 
//                     : 'bg-gray-100 text-gray-900'
//                 }`}>
//                   <p>{message.content}</p>
//                   <p className={`text-xs mt-1 ${
//                     message.type === 'user' ? 'text-indigo-100' : 'text-gray-500'
//                   }`}>
//                     {message.timestamp.toLocaleTimeString()}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
            
//             {/* Typing Indicator */}
//             <AnimatePresence>
//               {isTyping && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   className="flex justify-start"
//                 >
//                   <div className="bg-gray-100 px-4 py-2 rounded-2xl">
//                     <div className="flex space-x-1">
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-200"></div>
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-400"></div>
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
          
//           {/* Input Area */}
//           <div className="border-t border-gray-200 p-4">
//             <div className="flex gap-4">
//               <input
//                 type="text"
//                 value={inputMessage}
//                 onChange={(e) => setInputMessage(e.target.value)}
//                 onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//                 placeholder="Ask about your model's performance..."
//                 className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//               />
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleSendMessage}
//                 disabled={!inputMessage.trim()}
//                 className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg disabled:opacity-50"
//               >
//                 <FontAwesomeIcon icon="paper-plane" />
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const DocumentAnalysisMode = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header title="Document Analysis & Chat" />
//       <ApiKeySection />
//       <FileUploadArea />
//       <ChatInterface />
//     </div>
//   );
// };

// export default DocumentAnalysisMode;







import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
import { 
  getDemoData, 
  optimizeThreshold, 
  analyzeConfidence, 
  generateReport,
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

const DataSourceSelector = ({ onDataLoaded, isLoading, setIsLoading }) => {
  const [dataSource, setDataSource] = useState('demo');

  const handleDemoData = async () => {
    setIsLoading(true);
    try {
      const demoData = await getDemoData();
      onDataLoaded(demoData, 'demo');
    } catch (error) {
      console.error('Failed to load demo data:', error);
      alert('Failed to load demo data: ' + error.message);
    }
    setIsLoading(false);
  };

  const handleFileUpload = async (files) => {
    setIsLoading(true);
    try {
      const result = await uploadFiles(files);
      // Convert uploaded files to MVP format
      const mvpData = {
        y_true: result.files[0]?.processed_data?.y_true || [],
        y_pred: result.files[0]?.processed_data?.y_pred || [],
        y_proba: result.files[0]?.processed_data?.y_proba || [],
        class_names: result.files[0]?.processed_data?.class_names || ['Class 0', 'Class 1']
      };
      onDataLoaded(mvpData, 'uploaded');
    } catch (error) {
      console.error('File upload failed:', error);
      alert('File upload failed: ' + error.message);
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Data Source</h2>
        <p className="text-gray-600">Select demo data or upload your own confusion matrix results</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Demo Data Option */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 cursor-pointer"
          onClick={() => setDataSource('demo')}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon="play-circle" className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Demo Data</h3>
            <p className="text-gray-600 mb-4">Use sample confusion matrix data to explore features</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDemoData}
              disabled={isLoading}
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              {isLoading && dataSource === 'demo' ? 'Loading...' : 'Use Demo Data'}
            </motion.button>
          </div>
        </motion.div>

        {/* Upload Data Option */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon="upload" className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Data</h3>
            <p className="text-gray-600 mb-4">Upload CSV with y_true, y_pred, confidence columns</p>
            <input
              type="file"
              accept=".csv"
              onChange={(e) => e.target.files && handleFileUpload(Array.from(e.target.files))}
              className="hidden"
              id="csv-upload"
            />
            <label
              htmlFor="csv-upload"
              className="w-full inline-block py-3 px-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              {isLoading && dataSource === 'upload' ? 'Uploading...' : 'Choose CSV File'}
            </label>
          </div>
        </motion.div>
      </div>
    </div>
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

const ThresholdOptimizer = ({ data }) => {
  const [threshold, setThreshold] = useState(0.5);
  const [results, setResults] = useState(null);
  const [isOptimizing, setIsOptimizing] = useState(false);

  const handleThresholdChange = async (newThreshold) => {
    setThreshold(newThreshold);
    if (data) {
      setIsOptimizing(true);
      try {
        const result = await optimizeThreshold(
          data.y_true,
          data.y_proba,
          newThreshold,
          data.class_names
        );
        setResults(result.results);
      } catch (error) {
        console.error('Threshold optimization failed:', error);
      }
      setIsOptimizing(false);
    }
  };

  useEffect(() => {
    if (data) {
      handleThresholdChange(0.5);
    }
  }, [data]);

  if (!data) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Please select a data source to begin threshold optimization</p>
      </div>
    );
  }

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
              onChange={(e) => handleThresholdChange(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>0.1</span>
              <span>0.5</span>
              <span>0.9</span>
            </div>
          </div>
        </motion.div>

        {/* Metrics Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Performance Metrics</h3>
          {isOptimizing ? (
            <div className="flex items-center justify-center py-12">
              <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mr-4"></div>
              <span className="text-gray-600">Optimizing threshold...</span>
            </div>
          ) : results ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">{(results.precision || 0.85).toFixed(3)}</div>
                <div className="text-sm text-blue-700">Precision</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-2xl font-bold text-green-600">{(results.recall || 0.78).toFixed(3)}</div>
                <div className="text-sm text-green-700">Recall</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600">{(results.f1_score || 0.81).toFixed(3)}</div>
                <div className="text-sm text-purple-700">F1-Score</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-xl">
                <div className="text-2xl font-bold text-orange-600">{(results.accuracy || 0.87).toFixed(3)}</div>
                <div className="text-sm text-orange-700">Accuracy</div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-gray-600">
              Adjust threshold to see metrics
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

const ConfidenceAnalysis = ({ data }) => {
  const [analysis, setAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    if (data) {
      performAnalysis();
    }
  }, [data]);

  const performAnalysis = async () => {
    setIsAnalyzing(true);
    try {
      const result = await analyzeConfidence(data.y_true, data.y_proba, data.class_names);
      setAnalysis(result.results);
    } catch (error) {
      console.error('Confidence analysis failed:', error);
    }
    setIsAnalyzing(false);
  };

  if (!data) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Please select a data source to begin confidence analysis</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Confidence Analysis</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Analyze prediction confidence patterns and identify overconfident mistakes
        </p>
      </motion.div>

      {isAnalyzing ? (
        <div className="flex items-center justify-center py-12">
          <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mr-4"></div>
          <span className="text-gray-600">Analyzing confidence patterns...</span>
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Confidence Distribution</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {data.y_true.filter((val, idx) => val === data.y_pred[idx]).length}
              </div>
              <div className="text-green-700">Correct Predictions</div>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-xl">
              <div className="text-3xl font-bold text-red-600 mb-2">
                {data.y_true.filter((val, idx) => val !== data.y_pred[idx]).length}
              </div>
              <div className="text-red-700">Incorrect Predictions</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const MVPDashboard = () => {
  const [activeTab, setActiveTab] = useState('threshold');
  const [data, setData] = useState(null);
  const [dataSource, setDataSource] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const tabs = [
    { id: 'threshold', title: 'Threshold Optimizer', icon: 'sliders-h' },
    { id: 'confidence', title: 'Confidence Analysis', icon: 'chart-bar' },
    { id: 'sankey', title: 'Flow Diagram', icon: 'project-diagram' },
    { id: 'report', title: 'Report Generator', icon: 'file-pdf' }
  ];

  const handleDataLoaded = (loadedData, source) => {
    setData(loadedData);
    setDataSource(source);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="MVP Dashboard" />
      
      {!data && (
        <DataSourceSelector 
          onDataLoaded={handleDataLoaded}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      )}
      
      {data && (
        <>
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
                {activeTab === 'threshold' && <ThresholdOptimizer data={data} />}
                {activeTab === 'confidence' && <ConfidenceAnalysis data={data} />}
                {activeTab === 'sankey' && (
                  <div className="text-center py-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Flow Diagram</h2>
                    <p className="text-gray-600">Sankey diagram visualization coming soon...</p>
                  </div>
                )}
                {activeTab === 'report' && (
                  <div className="text-center py-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Report Generator</h2>
                    <p className="text-gray-600">PDF report generation coming soon...</p>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default MVPDashboard;
