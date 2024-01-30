import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Sidebar from './components/sidebar';
import Overlay from './components/overlay';
import Navbar from './components/navbar';
import './App.css';

const App = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    const closeSidebar = () => {
        setCollapsed(true);
    };

    return (
      <div className="App">
        <Navbar onNavClick={toggleSidebar}/>
        <Router>
          <div className="main-content">
            <Overlay collapsed={collapsed} onCloseSidebar={closeSidebar}/>
            <Sidebar collapsed={collapsed} onLinkClick={toggleSidebar}/>
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
