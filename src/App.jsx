import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';
import Pricing from './components/Pricing';
import Staff from './components/Staff';
import Horarios from './components/Horarios';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Info />
      <Pricing />
      <Staff />
      <Horarios />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
