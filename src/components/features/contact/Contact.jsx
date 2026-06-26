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
          <div className="map-card glass-panel">
            <div className="map-card-header">
              <span className="map-card-badge">📍 Sede Central</span>
              <h3>Nuestra Planta y Showroom</h3>
              <p>Visita nuestro taller de fabricación para ver acabados y materiales en persona.</p>
            </div>
            
            <div className="map-container">
              <iframe
                src="https://maps.google.com/maps?q=Tupac%20Amaru%20159,%20Hogar%20Policial,%20Villa%20Maria%20del%20Triunfo,%20Lima,%20Peru&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de A&A Inoxidables SAC"
              ></iframe>
            </div>

            <div className="map-card-footer">
              <div className="map-address-info">
                <strong>Dirección:</strong> Av. Túpac Amaru 159, Hogar Policial, Villa María del Triunfo
              </div>
              <a 
                href="https://maps.google.com/?q=Tupac%20Amaru%20159,%20Hogar%20Policial,%20Villa%20Maria%20del%20Triunfo,%20Lima,%20Peru" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary btn-map-directions"
              >
                🗺️ Cómo Llegar (Google Maps)
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
