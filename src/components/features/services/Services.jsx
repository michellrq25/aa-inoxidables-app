"use client";

import React, { useState } from 'react';
import { Settings, Wrench, ShieldAlert, CheckCircle, PhoneCall } from 'lucide-react';
import './Services.css';

export default function Services() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    equipment: '',
    serviceType: 'preventive',
    description: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.equipment) {
      alert('Por favor complete los campos obligatorios (*)');
      return;
    }
    setIsSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `*SOLICITUD DE SERVICIO TÉCNICO - A&A Inoxidables*\n\n` +
      `*Cliente:* ${formData.name}\n` +
      `*Teléfono:* ${formData.phone}\n` +
      `*Equipo:* ${formData.equipment}\n` +
      `*Tipo de Servicio:* ${formData.serviceType === 'preventive' ? 'Mantenimiento Preventivo' : 'Reparación / Correctivo'}\n` +
      `*Detalle:* ${formData.description || 'Sin comentarios adicionales.'}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/51927272678?text=${encoded}`, '_blank');
  };

  return (
    <section id="servicios" className="section services">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">
            Servicio Técnico y <span className="text-gradient-orange">Mantenimiento Especializado</span>
          </h2>
          <p className="services-subtitle">
            Garantizamos la operatividad continua de tus equipos gastronómicos. Contamos con técnicos expertos y repuestos originales.
          </p>
        </div>

        <div className="grid services-grid">
          <div className="services-info">
            <div className="service-card glass-panel">
              <div className="service-icon-box">
                <Settings size={24} />
              </div>
              <div className="service-text">
                <h3>Mantenimiento Preventivo</h3>
                <p>Evita paradas inesperadas en tu cocina. Realizamos limpieza interna de quemadores, calibración de termostatos, recarga de gas refrigerante y lubricación de partes móviles.</p>
              </div>
            </div>

            <div className="service-card glass-panel">
              <div className="service-icon-box">
                <Wrench size={24} />
              </div>
              <div className="service-text">
                <h3>Servicio Técnico Correctivo</h3>
                <p>Diagnóstico preciso y reparación de fallas críticas en hornos, freidoras de papas, cocinas, marmitas, mesas frías y vitrinas exhibidoras en tiempo récord.</p>
              </div>
            </div>

            <div className="service-card glass-panel">
              <div className="service-icon-box">
                <ShieldAlert size={24} />
              </div>
              <div className="service-text">
                <h3>Instalaciones y Seguridad</h3>
                <p>Instalamos campanas extractoras, ductería de extracción de grasas y líneas de gas industriales cumpliendo con las normas de seguridad de Defensa Civil.</p>
              </div>
            </div>
          </div>

          <div className="service-form-panel glass-panel">
            {!isSubmitted ? (
              <>
                <h3 className="form-title">
                  <Wrench size={20} style={{ color: 'var(--accent-orange)' }} /> Solicitar Visita Técnica
                </h3>
                <p className="form-subtitle">Completa el formulario para que un especialista se contacte contigo de inmediato.</p>

                <form className="service-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Nombre Completo / Empresa *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Ej. Restaurant El Padrino"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Número de WhatsApp / Teléfono *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Ej. +51 987654321"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Equipo que requiere servicio *</label>
                    <input
                      type="text"
                      name="equipment"
                      placeholder="Ej. Freidora de Papas 2 pozas / Exhibidora de pasteles"
                      required
                      value={formData.equipment}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Tipo de Requerimiento</label>
                    <select name="serviceType" value={formData.serviceType} onChange={handleChange}>
                      <option value="preventive">Mantenimiento Preventivo</option>
                      <option value="corrective">Reparación / Falla Técnica</option>
                      <option value="installation">Instalación y Montaje</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Describe la falla o requerimiento</label>
                    <textarea
                      name="description"
                      rows="4"
                      placeholder="Escribe brevemente el problema (Ej. No enciende piloto, no congela bien...)"
                      value={formData.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-submit-service">
                    Enviar Solicitud
                  </button>
                </form>
              </>
            ) : (
              <div className="service-success-msg">
                <div className="success-icon">
                  <CheckCircle size={40} />
                </div>
                <h3>¡Solicitud Recibida con Éxito!</h3>
                <p>Nuestros técnicos están listos. Para acelerar la atención de emergencia y programar la visita técnica ahora mismo, haz clic abajo para comunicarte por WhatsApp.</p>
                <button onClick={handleWhatsAppSend} className="btn btn-cyan">
                  <PhoneCall size={18} /> Coordinar por WhatsApp
                </button>
                <button onClick={() => { setIsSubmitted(false); setFormData({ name: '', phone: '', equipment: '', serviceType: 'preventive', description: '' }); }} className="btn btn-secondary" style={{ marginTop: '0.5rem' }}>
                  Volver al formulario
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
