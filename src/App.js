import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const Home = lazy(() => import('./Home'));
const Intro = lazy(() => import('./Intro'));
const About = lazy(() => import('./About'));
const StrategicFramework = lazy(() => import('./StrategicFramework'));
const Experience = lazy(() => import('./Experience'));
const Projects = lazy(() => import('./Projects'));
const Contact = lazy(() => import('./Contact'));

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Suspense fallback={<div className="route-loading" role="status">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/about" element={<About />} />
            <Route path="/strategic-framework" element={<StrategicFramework />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
