
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HousingPage from './pages/HousingPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './pages/ErrorPage';


function App() {
  return (
    <BrowserRouter basename="/kasa">
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/property/:id" element={< HousingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
