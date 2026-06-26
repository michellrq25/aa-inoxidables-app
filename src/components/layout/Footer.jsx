"use client";

import React from 'react';
import { Flame } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const handleFloatingWA = () => {
    const text = 'Hola A&A Inoxidables, me gustaría solicitar información sobre sus servicios y catálogo de equipos.';
    window.open(`https://wa.me/51927272678?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
      <footer className="footer">
        <div className="container footer-top animate-fade-in">
          <div className="footer-brand">
            <h3>
              <Flame size={20} style={{ color: 'var(--accent-orange)', display: 'inline', marginRight: '5px' }} />
              A&A <span>Inoxidables</span>
            </h3>
            <p>
              Fabricantes especialistas de equipos gastronómicos en acero inoxidable de calidad superior. Diseñamos soluciones a medida para restaurantes, hoteles y negocios alimentarios en todo el Perú.
            </p>
          </div>

          <div className="footer-links-col">
            <h4>Navegación</h4>
            <ul className="footer-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#catalogo">Catálogo de Equipos</a></li>
              <li><a href="#servicios">Servicios Técnicos</a></li>
              <li><a href="#nosotros">Nosotros y Calidad</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Nuestra Planta</h4>
            <ul className="footer-links">
              <li><span>Túpac Amaru 159, Hogar Policial, Villa María del Triunfo</span></li>
              <li><span>Lima, Perú</span></li>
              <li><span>Telf: +51 927 272 678</span></li>
            </ul>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© {new Date().getFullYear() === 2026 ? '2026' : `2026 - ${new Date().getFullYear()}`} A&A Inoxidables SAC. Todos los derechos reservados.</p>
          <p>Desarrollado por <strong>GalactiCode Devs</strong></p>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <button
        className="floating-whatsapp"
        onClick={handleFloatingWA}
        aria-label="Contactar por WhatsApp"
        title="Hablar con un asesor"
      >
        <svg viewBox="0 0 16 16" width="30" height="30" fill="currentColor">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      </button>
    </>
  );
}
