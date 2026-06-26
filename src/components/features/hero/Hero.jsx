import React from 'react';
import { Award, ShieldCheck, Settings } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div
        className="hero-bg-image"
        style={{ backgroundImage: 'url("/hero_kitchen.png")' }}
        role="presentation"
      ></div>
      <div className="hero-bg-overlay"></div>

      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <div className="hero-badge">
            <Award size={14} /> Equipamiento Gastronómico Profesional
          </div>

          <h1 className="hero-title">
            Equipos de <span className="text-gradient-orange">Acero Inoxidable</span> para Cocinas Exigentes
          </h1>

          <p className="hero-description">
            En <strong>A&A Inoxidables SAC</strong> diseñamos, fabricamos e importamos equipos de cocina industrial con los más altos estándares de higiene y durabilidad. Además, brindamos soporte y mantenimiento técnico especializado para tu negocio.
          </p>

          <div className="hero-actions">
            <a href="#catalogo" className="btn btn-primary">
              Cotizar Equipos
            </a>
            <a href="#servicios" className="btn btn-secondary">
              Solicitar Servicio Técnico
            </a>
          </div>

          <div className="hero-features">
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                <ShieldCheck size={20} />
              </div>
              <div className="hero-feature-text">
                <h4>Acero Calidad Premium</h4>
                <p>AISI 304 y AISI 316 alimentario</p>
              </div>
            </div>

            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                <Settings size={20} />
              </div>
              <div className="hero-feature-text">
                <h4>Soporte Especializado</h4>
                <p>Garantía de fábrica y repuestos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
