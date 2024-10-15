import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ScrollToTop } from './hooks/scrollToTop';
import React from 'react';

import './App.css';

import { Navbar } from './layouts/navbar/navbar';
import { Footer } from './layouts/footer/footer';

import Home from './pages/home/Home';
import NotFound from './pages/404/404';
import Partenaires from './pages/partenaires/Partenaires';
import Projets from './pages/projets/Projets';
import Contact from './pages/contact/Contact';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="page">
          <Routes>
            <ScrollToTop />
            <Route path="/" element={<Home />} />
            <Route path="/partenaires" element={<Partenaires />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
