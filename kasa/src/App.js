
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Gallery from './components/Gallery';  
import HousingPage from './pages/HousingPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './pages/ErrorPage';


function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/property/:id" element={< HousingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
