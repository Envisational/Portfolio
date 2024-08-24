import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Contact from './components/Contact';
import BlogPost from './components/BlogPost';
import Starfield from './components/Starfield';
import SocialLinks from './components/SocialLinks';
import './index.css';

function App() {
  return (
    <div className="relative">
      <Starfield />
      <Router>
        <div className="relative z-10">
          <Header />
          <Routes>
            <Route path="/" element={<>
              <Hero />
              <About />
              <Portfolio />
              <Skills />
              <Journey />
              <Contact />
              <SocialLinks /> {/* Add SocialLinks component here */}
            </>} />
            <Route path="/post/:id" element={<BlogPost />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
