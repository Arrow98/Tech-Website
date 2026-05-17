import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Analytics from './components/Analytics';
import Projects from './components/Projects';
import Team from './components/Team';
import Partner from './components/Partner';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Analytics />
        <Projects />
        <Team />
        <Partner />
        <Process />
        <Pricing />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
