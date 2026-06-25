import React from 'react';
import { ShieldCheck, Ruler, Users, Award } from 'lucide-react';
import aboutImg from '../../../assets/custom_fabrication.png';
import './About.css';

export default function About() {
  return (
    <section id="nosotros" className="section about">
      <div className="container about-container">
        
        <div className="about-image-wrapper animate-fade-in">
          <img 
            src={aboutImg} 
            alt="Taller de fabricación A&A Inoxidables" 
            className="about-img"
          />
          <div className="about-image-badge">
            <h4>Manufactura Certificada</h4>
            <p>Soldadura de alta costura e inocuidad</p>
          </div>
        </div>

        <div className="about-content">
          <span className="about-tag">¿Quiénes Somos?</span>
          <h2 className="about-title">
            Pasión por la Precisión en <span className="text-gradient-cyan">Acero Inoxidable</span>
          </h2>
          
          <p className="about-text">
            En <strong>A&A Inoxidables SAC</strong> fabricamos equipamiento gastronómico que combina ingeniería avanzada, ergonomía e higiene. Entendemos que una cocina comercial requiere equipos que resistan jornadas intensas de trabajo y cumplan estrictos controles de salubridad.
          </p>

          <div className="about-bullets">
            <div className="about-bullet">
              <div className="about-bullet-icon">
                <ShieldCheck size={18} />
              </div>
              <div className="about-bullet-text">
                <h4>Acero Calidad AISI 304 vs AISI 430</h4>
                <p>
                  Utilizamos <strong>Acero AISI 304</strong> (grado alimentario, máxima resistencia a la corrosión) en zonas en contacto con alimentos, y <strong>AISI 430</strong> para revestimientos externos y refrigeración. Garantizamos la máxima higiene y vida útil del equipo.
                </p>
              </div>
            </div>

            <div className="about-bullet">
              <div className="about-bullet-icon">
                <Ruler size={18} />
              </div>
              <div className="about-bullet-text">
                <h4>Diseño y Modulación a Medida</h4>
                <p>
                  Adaptamos los lavaderos, mesas, repisas y campanas a la arquitectura real de tu local comercial. Maximizamos el flujo de trabajo de tus chefs y ayudantes de cocina.
                </p>
              </div>
            </div>

            <div className="about-bullet">
              <div className="about-bullet-icon">
                <Users size={18} />
              </div>
              <div className="about-bullet-text">
                <h4>Experiencia en el Rubro HORECA</h4>
                <p>
                  Equipamos restaurantes, cafeterías, hoteles, panaderías y concesionarios de alimentos a nivel nacional, brindando asesoría integral desde el plano inicial.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
