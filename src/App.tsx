import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

import './App.css';

import { Navbar } from './layouts/navbar/navbar';
import { Footer } from './layouts/footer/footer';

import Home from './pages/Home';
import NotFound from './pages/404';
import Partenaires from './pages/Partenaires';
import Projets from './pages/Projets';

const App: React.FC = () => {
  return (<>
    <Navbar activeLink={0} />
    <div className="page">
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/partenaires" element={<Partenaires />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>
    </div>
    <Footer />
  </>);
};

export default App;
