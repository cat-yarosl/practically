import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Home />
            </main>
            <Footer />
        </div>
    );
}

export default App;
