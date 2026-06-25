import React from 'react';
import { QuoteProvider } from './context/QuoteContext';
import Navbar from './components/layout/Navbar';
import Hero from './components/features/hero/Hero';
import Catalog from './components/features/catalog/Catalog';
import Services from './components/features/services/Services';
import About from './components/features/about/About';
import Contact from './components/features/contact/Contact';
import Footer from './components/layout/Footer';
import QuoteCart from './components/features/quote/QuoteCart';

export default function App() {
  return (
    <QuoteProvider>
      <div className="app-root">
        <Navbar />
        <main>
          <Hero />
          <Catalog />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
        <QuoteCart />
      </div>
    </QuoteProvider>
  );
}
