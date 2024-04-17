// Made by Patel Prince Janakbhai – 8867414
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './index.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

// App component
function App() {
  
  return (
    // Used Browser Router for routing in the app
    <Router>
      <div className="App">
        <h1 className="project-heading">Group 10's Final Project</h1>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;