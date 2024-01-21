import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import './App.css';
import Sidebar from './components/sidebar';
import Overlay from './components/overlay';

const App = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
      <div className="App">
        <Overlay />
        <nav className="navbar">
          <button className="logo" onClick={toggleSidebar}></button>
        </nav>
        <Router>
          <div className="main-content">
            <Sidebar collapsed={collapsed}/>
            <div className="other">
              <Header />
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </div>
          </Router>
      </div>
    );
}

export default App;
