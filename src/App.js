import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import About from './About';
import Menu from './Menu';
import Gallery from './Gallery';
import Contact from './Contact';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
