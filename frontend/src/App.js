import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import "./App.css";

// Import components
import HomePage from "./components/HomePage";
import DocumentAnalysisMode from "./components/DocumentAnalysisMode";
import AdvancedOptimizationSuite from "./components/AdvancedOptimizationSuite";
import MVPDashboard from "./components/MVPDashboard";

// Add all FontAwesome icons to the library
library.add(fas);

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
    y: 20
  },
  in: {
    opacity: 1,
    scale: 1,
    y: 0
  },
  out: {
    opacity: 0,
    scale: 1.02,
    y: -20
  }
};

const pageTransition = {
  type: "tween",
  ease: [0.4, 0, 0.2, 1],
  duration: 0.4
};

function App() {
  return (
    <div className="App min-h-screen bg-gray-50">
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route 
              path="/" 
              element={
                <motion.div
                  key="home"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <HomePage />
                </motion.div>
              } 
            />
            <Route 
              path="/document-analysis" 
              element={
                <motion.div
                  key="document-analysis"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <DocumentAnalysisMode />
                </motion.div>
              } 
            />
            <Route 
              path="/advanced-optimization" 
              element={
                <motion.div
                  key="advanced-optimization"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <AdvancedOptimizationSuite />
                </motion.div>
              } 
            />
            <Route 
              path="/mvp-dashboard" 
              element={
                <motion.div
                  key="mvp-dashboard"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <MVPDashboard />
                </motion.div>
              } 
            />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;