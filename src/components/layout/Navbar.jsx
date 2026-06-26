"use client";

import React, { useState, useEffect } from 'react';
import { useQuote } from '../../context/useQuote';
import { ShoppingCart, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { setIsCartOpen, totalItemsCount } = useQuote();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#inicio" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="/logo.png" alt="A&A Inoxidables Logo" className="navbar-logo-img" />
          A&A <span>Inoxidables</span>
        </a>

        <ul className={`navbar-links ${isMobileOpen ? 'open' : ''}`}>
          <li className="navbar-link">
            <a href="#inicio" onClick={closeMobileMenu}>Inicio</a>
          </li>
          <li className="navbar-link">
            <a href="#catalogo" onClick={closeMobileMenu}>Productos</a>
          </li>
          <li className="navbar-link">
            <a href="#servicios" onClick={closeMobileMenu}>Servicios</a>
          </li>
          <li className="navbar-link">
            <a href="#nosotros" onClick={closeMobileMenu}>Nosotros</a>
          </li>
          <li className="navbar-link">
            <a href="#contacto" onClick={closeMobileMenu}>Contacto</a>
          </li>
        </ul>

        <div className="navbar-actions">
          <button 
            className="cart-toggle-btn" 
            onClick={() => setIsCartOpen(true)}
            aria-label="Abrir cotizaciones"
          >
            <ShoppingCart size={20} />
            {totalItemsCount > 0 && (
              <span className="cart-badge">{totalItemsCount}</span>
            )}
          </button>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Menu principal"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
