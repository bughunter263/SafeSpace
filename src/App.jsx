import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './routes/Home';
import Founder from './routes/Founder';
import About from './routes/About';
import GetHelp from './routes/GetHelp';
import Activities from './routes/Activities';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>His Safe Space — Breaking The Silence</title>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/founder" element={<Founder />} />
              <Route path="/about" element={<About />} />
              <Route path="/get-help" element={<GetHelp />} />
              <Route path="/activities" element={<Activities />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
}
