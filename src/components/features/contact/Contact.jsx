import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contacto" className="section contact-section">
      <div className="container grid contact-grid">

        <div className="contact-info-panel animate-fade-in">
          <h2 className="contact-title">
            Ponte en Contacto con <span className="text-gradient-orange">Nosotros</span>
          </h2>
          <p className="contact-subtitle">
            ¿Tienes dudas sobre las dimensiones de un equipo o requieres cotizar un proyecto especial? Escríbenos o visítanos.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="contact-icon-box">
                <Phone size={20} />
              </div>
              <div className="contact-text">
                <h4>Teléfono de Ventas</h4>
                <p>+51 927 272 678 (Atención Directa)</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon-box">
                <Mail size={20} />
              </div>
              <div className="contact-text">
                <h4>Correo Electrónico</h4>
                <p>ventas@aainoxidables.com</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon-box">
                <MapPin size={20} />
              </div>
              <div className="contact-text">
                <h4>Dirección del Taller</h4>
                <p>Túpac Amaru 159, Hogar Policial, Villa María del Triunfo, Lima, Perú</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon-box">
                <Clock size={20} />
              </div>
              <div className="contact-text">
                <h4>Horario de Atención</h4>
                <p>Lunes a Viernes: 8:00 am - 6:00 pm<br />Sábados: 8:00 am - 1:00 pm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-map-panel animate-fade-in">
          <h3>Nuestra Ubicación</h3>
          <div className="simulated-map">
            <div className="map-lines"></div>
            <div className="map-route"></div>
            <div className="map-pin">
              <MapPin size={24} fill="var(--accent-orange)" />
            </div>
            <div className="map-label">A&A Inoxidables SAC</div>
            <div className="map-watermark">Cerca de Av. Pachacútec, VMT</div>
          </div>
        </div>

      </div>
    </section>
  );
}
