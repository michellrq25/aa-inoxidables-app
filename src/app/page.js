import React from 'react';
import fs from 'fs';
import path from 'path';
import { QuoteProvider } from '../context/QuoteProvider';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/features/hero/Hero';
import Catalog from '../components/features/catalog/Catalog';
import Services from '../components/features/services/Services';
import About from '../components/features/about/About';
import Contact from '../components/features/contact/Contact';
import Footer from '../components/layout/Footer';
import QuoteCart from '../components/features/quote/QuoteCart';

export default function Home() {
  // Read products dynamically from src/content/products/
  const productsDir = path.join(process.cwd(), 'src', 'content', 'products');
  let products = [];

  if (fs.existsSync(productsDir)) {
    const files = fs.readdirSync(productsDir);
    products = files
      .filter(file => file.endsWith('.json'))
      .map(file => {
        const filePath = path.join(productsDir, file);
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          return JSON.parse(content);
        } catch (e) {
          console.error(`Error reading or parsing ${file}:`, e);
          return null;
        }
      })
      .filter(p => p !== null);
  }

  return (
    <QuoteProvider>
      <div className="app-root">
        <Navbar />
        <main>
          <Hero />
          <Catalog initialProducts={products} />
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
