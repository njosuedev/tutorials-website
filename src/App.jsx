// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Footer from './Components/Footer';
import Projects from './Pages/Projects';
import Infome from './Pages/Infome';

export default function App() {
  return (
    <Router>
      <Header /> {/* Add the Header component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/infome" element={<Infome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div></div>
      <Footer /> {/* Add the Footer component */}
    </Router>
  );
}
