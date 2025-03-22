import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Team from './pages/Team';
import FAQ from './pages/FAQ';
import News from './pages/News';
import Articles from './pages/Articles';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme } = useTheme();

  return (
    <Router>
      <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Home />
              </motion.div>
            } />
            <Route path="/courses" element={<Courses />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/news" element={<News />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;