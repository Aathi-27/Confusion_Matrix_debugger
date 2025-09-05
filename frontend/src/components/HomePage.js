import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Animated Brain Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
            <FontAwesomeIcon icon="brain" className="text-4xl text-white" />
          </div>
        </motion.div>
        
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-7xl font-black text-gray-900 mb-6"
        >
          Confusion Matrix
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {' '}Debugger Pro
          </span>
        </motion.h1>
        
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
        >
          Transform your ML debugging experience with AI-powered insights and professional analysis tools
        </motion.p>
        
        {/* Feature Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Badge icon="rocket" text="Enterprise-Ready" />
          <Badge icon="robot" text="AI-Powered" />
          <Badge icon="chart-bar" text="Professional Reports" />
        </motion.div>
      </div>
    </section>
  );
};

const Badge = ({ icon, text }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg"
  >
    <FontAwesomeIcon icon={icon} className="text-indigo-600" />
    <span className="text-sm font-medium text-gray-800">{text}</span>
  </motion.div>
);

const FeatureCardsSection = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      id: 'document-analysis',
      icon: 'comments',
      title: 'Document Analysis & Chat',
      description: 'Upload ML files and get AI-powered insights through interactive chat',
      features: ['📁 Multi-format Upload', '🤖 AI Analysis', '💬 Interactive Chat', '📊 Smart Insights'],
      gradient: 'from-indigo-500 to-purple-600',
      mode: 'document-analysis'
    },
    {
      id: 'advanced-optimization',
      icon: 'cogs',
      title: 'Advanced Optimization',
      description: 'Deep model analysis with SHAP, learning curves, and performance optimization',
      features: ['🔍 SHAP Analysis', '📈 Learning Curves', '⚡ Performance Tuning', '🎯 Error Analysis'],
      gradient: 'from-purple-500 to-pink-600',
      mode: 'advanced-optimization'
    },
    {
      id: 'mvp-dashboard',
      icon: 'tachometer-alt',
      title: 'MVP Dashboard',
      description: 'Real-time threshold optimization and confidence analysis with professional reporting',
      features: ['⚡ Real-time Analysis', '📊 Threshold Optimizer', '🌊 Flow Diagrams', '📄 PDF Reports'],
      gradient: 'from-cyan-500 to-blue-600',
      mode: 'mvp-dashboard'
    }
  ];

  const handleFeatureClick = (mode) => {
    navigate(`/${mode}`);
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Choose Your Analysis Path
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Select the analysis mode that best fits your machine learning debugging needs
          </motion.p>
        </div>
        
        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.id} 
              feature={feature} 
              index={index} 
              onClick={() => handleFeatureClick(feature.mode)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -12, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full overflow-hidden">
        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Icon */}
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? 5 : 0 }}
          className="relative z-10 mb-6"
        >
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}>
            <FontAwesomeIcon icon={feature.icon} className="text-2xl text-white" />
          </div>
        </motion.div>
        
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
          <p className="text-gray-600 mb-6">{feature.description}</p>
          
          {/* Feature List */}
          <ul className="space-y-2 mb-8">
            {feature.features.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="flex items-center gap-3 text-sm text-gray-700"
              >
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient}`}></div>
                {item}
              </motion.li>
            ))}
          </ul>
          
          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${feature.gradient} text-white font-semibold shadow-lg hover:shadow-xl transition-shadow btn-primary`}
          >
            Get Started
            <motion.span
              animate={{ x: isHovered ? 5 : 0 }}
              className="ml-2"
            >
              <FontAwesomeIcon icon="arrow-right" />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeatureCardsSection />
    </div>
  );
};

export default HomePage;