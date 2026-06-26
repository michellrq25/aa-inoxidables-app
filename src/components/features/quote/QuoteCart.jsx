"use client";

import React, { useState } from 'react';
import { useQuote } from '../../../context/useQuote';
import { X, Trash2, MessageSquareShare, ShoppingBag, Plus, Minus } from 'lucide-react';
import './QuoteCart.css';

export default function QuoteCart() {
  const {
    quoteItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromQuote,
    clearQuote
  } = useQuote();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    note: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendQuote = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Por favor, ingresa tu Nombre y Teléfono para enviar la cotización.');
      return;
    }

    let productListText = '';
    quoteItems.forEach((item) => {
      productListText += `🔹 *[${item.quantity}] x ${item.name}* (Cat: ${item.blueprint.toUpperCase()})\n`;
    });

    const text =
      `*SOLICITUD DE COTIZACIÓN - A&A Inoxidables*\n\n` +
      `*Cliente:* ${formData.name}\n` +
      `*Empresa / Rubro:* ${formData.company || 'Particular'}\n` +
      `*WhatsApp:* ${formData.phone}\n\n` +
      `*Equipos Seleccionados:*\n${productListText}\n` +
      `*Nota adicional:* ${formData.note || 'Sin especificaciones.'}\n\n` +
      `*Por favor, envíenme una cotización formal con precios y tiempos de fabricación.*`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/51927272678?text=${encoded}`, '_blank');

    // Clear cart and close drawer after sending
    clearQuote();
    setIsCartOpen(false);
    setFormData({ name: '', company: '', phone: '', note: '' });
  };

  return (
    <div className={`quote-cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={() => setIsCartOpen(false)}>
      <div className="quote-cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3>
            <ShoppingBag size={20} style={{ color: 'var(--accent-orange)' }} />
            Lista de Cotización
          </h3>
          <button className="cart-close-btn" onClick={() => setIsCartOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <div className="cart-items-container">
          {quoteItems.length > 0 ? (
            quoteItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-details">
                  <h4 className="cart-item-name">{item.name}</h4>
                  <span className="cart-item-cat">
                    {item.blueprint === 'coccion' && '🔥 Línea de Cocción'}
                    {item.blueprint === 'refrigeracion' && '❄️ Refrigeración'}
                    {item.blueprint === 'neutra' && '📐 Acero a Medida'}
                    {item.blueprint === 'importados' && '📦 Equipos Importados'}
                  </span>

                  <div className="cart-item-actions">
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus size={12} />
                    </button>
                    <span className="qty-val">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>

                <button
                  className="item-delete-btn"
                  onClick={() => removeFromQuote(item.id)}
                  title="Eliminar de la lista"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          ) : (
            <div className="cart-empty">
              <ShoppingBag size={48} strokeWidth={1} style={{ color: 'var(--text-muted)' }} />
              <p>Tu lista de cotización está vacía.<br />Explora el catálogo y añade los equipos que necesitas.</p>
            </div>
          )}
        </div>

        {quoteItems.length > 0 && (
          <div className="cart-form-container">
            <form className="cart-form" onSubmit={handleSendQuote}>
              <h4>Datos del Cliente</h4>

              <input
                type="text"
                name="name"
                placeholder="Nombre Completo o Empresa *"
                required
                value={formData.name}
                onChange={handleInputChange}
              />

              <input
                type="text"
                name="company"
                placeholder="Rubro (Ej. Pastelería, Chifa, Hogar)"
                value={formData.company}
                onChange={handleInputChange}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Celular / WhatsApp *"
                required
                value={formData.phone}
                onChange={handleInputChange}
              />

              <textarea
                name="note"
                rows="2"
                placeholder="Detalles de fabricación (Ej. Medidas especiales, acero AISI 304)..."
                value={formData.note}
                onChange={handleInputChange}
              ></textarea>

              <button type="submit" className="btn btn-primary btn-send-quote">
                <MessageSquareShare size={18} /> Solicitar Cotización
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
