import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Home from './pages/home';
import './App.css';
import Sidebar from './components/sidebar';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="main-content">
              <Sidebar />
              <div className="other">
                <Header />
                <main>
                  <Home />
                </main>
                <Footer />
              </div>
            </div>
        </div>
    );
}

export default App;
