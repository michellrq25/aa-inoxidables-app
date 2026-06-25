"use client";

import React, { useState } from 'react';
import { useQuote } from '../../../context/QuoteContext';
import { Search, Flame, Shield, Ruler, Sparkles, Check } from 'lucide-react';
import './Catalog.css';

// SVG Blueprints for category items to give an engineering/architectural layout look
const Blueprints = {
  coccion: (
    <svg viewBox="0 0 100 80" className="product-blueprint-svg" fill="none" stroke="currentColor" strokeWidth="1">
      <rect x="15" y="15" width="70" height="50" rx="2" strokeDasharray="2 1" />
      <line x1="15" y1="35" x2="85" y2="35" />
      <line x1="50" y1="15" x2="50" y2="65" />
      {/* Burners */}
      <circle cx="32" cy="25" r="8" strokeWidth="1.5" />
      <circle cx="32" cy="25" r="4" stroke="var(--accent-orange)" />
      <circle cx="68" cy="25" r="8" strokeWidth="1.5" />
      <circle cx="68" cy="25" r="4" stroke="var(--accent-orange)" />
      <circle cx="32" cy="55" r="8" strokeWidth="1.5" />
      <circle cx="32" cy="55" r="4" stroke="var(--accent-orange)" />
      <circle cx="68" cy="55" r="8" strokeWidth="1.5" />
      <circle cx="68" cy="55" r="4" stroke="var(--accent-orange)" />
      {/* Knobs */}
      <circle cx="20" cy="72" r="2" />
      <circle cx="40" cy="72" r="2" />
      <circle cx="60" cy="72" r="2" />
      <circle cx="80" cy="72" r="2" />
      <rect x="10" y="65" width="80" height="10" rx="1" />
    </svg>
  ),
  refrigeracion: (
    <svg viewBox="0 0 100 80" className="product-blueprint-svg" fill="none" stroke="currentColor" strokeWidth="1">
      <rect x="25" y="5" width="50" height="70" rx="3" strokeWidth="1.5" />
      <line x1="25" y1="40" x2="75" y2="40" strokeDasharray="3 1" />
      {/* Doors */}
      <line x1="50" y1="5" x2="50" y2="75" strokeWidth="1.5" />
      {/* Handles */}
      <line x1="46" y1="20" x2="46" y2="35" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" />
      <line x1="54" y1="20" x2="54" y2="35" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" />
      {/* Temperature controller */}
      <rect x="35" y="8" width="30" height="6" fill="rgba(6, 182, 212, 0.1)" stroke="var(--accent-cyan)" strokeWidth="0.5" />
      <text x="50" y="13" fontSize="4" fill="var(--accent-cyan)" textAnchor="middle" fontFamily="monospace">4.0°C</text>
      {/* Cooling fans visual */}
      <circle cx="35" cy="55" r="5" strokeDasharray="1 1" />
      <circle cx="65" cy="55" r="5" strokeDasharray="1 1" />
    </svg>
  ),
  neutra: (
    <svg viewBox="0 0 100 80" className="product-blueprint-svg" fill="none" stroke="currentColor" strokeWidth="1">
      {/* Tabletop */}
      <rect x="10" y="15" width="80" height="8" rx="1" strokeWidth="1.5" />
      <line x1="10" y1="23" x2="90" y2="23" />
      {/* Backsplash */}
      <rect x="10" y="7" width="80" height="8" fill="rgba(255,255,255,0.05)" />
      {/* Legs */}
      <line x1="15" y1="23" x2="15" y2="65" strokeWidth="1.5" />
      <line x1="85" y1="23" x2="85" y2="65" strokeWidth="1.5" />
      <line x1="22" y1="23" x2="22" y2="60" strokeDasharray="2 2" />
      <line x1="78" y1="23" x2="78" y2="60" strokeDasharray="2 2" />
      {/* Lower shelf */}
      <rect x="15" y="55" width="70" height="4" strokeWidth="1" />
      {/* Adjustable feet */}
      <circle cx="15" cy="67" r="2" fill="var(--steel-medium)" />
      <circle cx="85" cy="67" r="2" fill="var(--steel-medium)" />
    </svg>
  ),
  importados: (
    <svg viewBox="0 0 100 80" className="product-blueprint-svg" fill="none" stroke="currentColor" strokeWidth="1">
      {/* Oven body */}
      <rect x="20" y="10" width="60" height="60" rx="3" strokeWidth="1.5" />
      {/* Window */}
      <rect x="28" y="18" width="34" height="34" rx="1" strokeDasharray="2 1" />
      {/* Digital Control Panel */}
      <rect x="68" y="18" width="8" height="44" rx="1" fill="rgba(249, 115, 22, 0.05)" stroke="var(--accent-orange)" strokeWidth="0.5" />
      <circle cx="72" cy="24" r="1.5" fill="var(--accent-orange)" />
      <circle cx="72" cy="30" r="1.5" />
      <circle cx="72" cy="36" r="1.5" />
      <circle cx="72" cy="42" r="1.5" />
      {/* Handle */}
      <line x1="24" y1="35" x2="24" y2="50" strokeWidth="2" strokeLinecap="round" />
      <circle cx="45" cy="35" r="5" stroke="var(--steel-medium)" strokeDasharray="1 1" />
    </svg>
  ),
};

const PRODUCTS = [
  // Cocción
  {
    id: 'coc-1',
    name: 'Cocina Industrial de 4 Hornillas',
    category: 'coccion',
    desc: 'Cocina industrial de alto rendimiento fabricada íntegramente en acero inoxidable AISI 304. Quemadores en fierro fundido y bandeja recolectora.',
    specs: [
      { label: 'Material', val: 'Acero Inoxidable AISI 304' },
      { label: 'Quemadores', val: '4 de alta potencia (30,000 BTU/h)' },
      { label: 'Parrillas', val: 'Fierro fundido de 40x40 cm' }
    ],
    blueprint: 'coccion'
  },
  {
    id: 'coc-2',
    name: 'Freidora a Gas de 2 Pozas (20L c/u)',
    category: 'coccion',
    desc: 'Freidora de papas industrial con doble poza para freír a alta velocidad. Termostato de precisión y pilotos de seguridad.',
    specs: [
      { label: 'Capacidad', val: '40 Litros totales (20L por poza)' },
      { label: 'Sistema', val: 'A gas con termopila de seguridad' },
      { label: 'Canastillas', val: '4 canastillas niqueladas incluidas' }
    ],
    blueprint: 'coccion'
  },
  {
    id: 'coc-3',
    name: 'Parrilla Heavy Duty con Sistema de Elevación',
    category: 'coccion',
    desc: 'Parrilla a carbón o gas construida en planchas pesadas de acero inoxidable. Sistema de poleas y manivela para regular la altura.',
    specs: [
      { label: 'Material', val: 'Acero AISI 304 espesor 2mm' },
      { label: 'Elevación', val: 'Mecanismo con cadena y piñones' },
      { label: 'Canaleta', val: 'Colectora de grasa frontal' }
    ],
    blueprint: 'coccion'
  },
  // Refrigeración
  {
    id: 'ref-1',
    name: 'Exhibidora Refrigerada de Pastelería (Curva)',
    category: 'refrigeracion',
    desc: 'Exhibidora de pasteles y postres con vidrios templados curvos. Sistema de desempañador automático y luces LED cálidas.',
    specs: [
      { label: 'Sistema de Frío', val: 'Frío Forzado (No Frost)' },
      { label: 'Controlador', val: 'Digital programable (Carel/Dixell)' },
      { label: 'Temperatura', val: '+2°C a +8°C' }
    ],
    blueprint: 'refrigeracion'
  },
  {
    id: 'ref-2',
    name: 'Mesa de Conservación Refrigerada (2 Puertas)',
    category: 'refrigeracion',
    desc: 'Mesa de trabajo superior con refrigerador inferior. Optimiza el espacio de preparación en cocinas profesionales.',
    specs: [
      { label: 'Dimensiones', val: '1.50 x 0.70 x 0.85 m' },
      { label: 'Compresor', val: 'Embraco de 1/3 HP ecológico' },
      { label: 'Estructura', val: 'Acero inoxidable interior y exterior' }
    ],
    blueprint: 'refrigeracion'
  },
  {
    id: 'ref-3',
    name: 'Cámara Frigorífica Modular para Conservación',
    category: 'refrigeracion',
    desc: 'Paneles de poliuretano de alta densidad con revestimiento en acero inoxidable. Ideal para carnes, verduras y lácteos.',
    specs: [
      { label: 'Paneles', val: 'Espesor de 4 pulgadas con encajes' },
      { label: 'Temperatura', val: 'Rango de -5°C a +5°C' },
      { label: 'Seguridad', val: 'Cerradura antipánico interna' }
    ],
    blueprint: 'refrigeracion'
  },
  // Línea Neutra
  {
    id: 'neu-1',
    name: 'Mesa de Trabajo Lisa de Acero AISI 304',
    category: 'neutra',
    desc: 'Mesa de trabajo esencial para preparación de alimentos. Reforzada con omegas de acero inferiores para evitar pandeo.',
    specs: [
      { label: 'Estructura', val: 'Plancha AISI 304 satinado 1.2mm' },
      { label: 'Patas', val: 'Tubo redondo de 1 1/2" regulables' },
      { label: 'Refuerzo', val: 'Omegas soldadas de alta resistencia' }
    ],
    blueprint: 'neutra'
  },
  {
    id: 'neu-2',
    name: 'Lavadero Industrial de 2 Pozas con Escurridor',
    category: 'neutra',
    desc: 'Mesa lavadero para ollas y vajilla pesada con pozas profundas y pestaña posterior antivuelco de agua.',
    specs: [
      { label: 'Pozas', val: '2 pozas de 50x50x30 cm' },
      { label: 'Espaldar', val: 'Zócalo sanitario de 10 cm' },
      { label: 'Accesorios', val: 'Reboses y canastillas de desagüe' }
    ],
    blueprint: 'neutra'
  },
  {
    id: 'neu-3',
    name: 'Campana Extractora Mural con Filtros',
    category: 'neutra',
    desc: 'Campana extractora de grasa y vapores para cocinas de restaurantes. Filtros de laberinto lavables y canaleta de grasa.',
    specs: [
      { label: 'Filtros', val: 'Laberinto de acero inoxidable' },
      { label: 'Canaleta', val: 'Colectora perimetral con tapón' },
      { label: 'Montaje', val: 'Pernos de anclaje de alta seguridad' }
    ],
    blueprint: 'neutra'
  },
  // Importados / Auxiliares
  {
    id: 'imp-1',
    name: 'Licuadora Industrial de Volteo 15L',
    category: 'importados',
    desc: 'Licuadora para alta producción de jugos, cremas y salsas. Vaso volcable sobre base reforzada para fácil vaciado.',
    specs: [
      { label: 'Vaso', val: 'Capacidad 15 Litros en acero 304' },
      { label: 'Motor', val: '1.5 HP monofásico industrial' },
      { label: 'Cuchilla', val: 'Acero endurecido de alto impacto' }
    ],
    blueprint: 'importados'
  },
  {
    id: 'imp-2',
    name: 'Horno Convector Digital de 4 Bandejas',
    category: 'importados',
    desc: 'Horno para pastelería y panadería con turbina de aire bidireccional y entrada de vaporizador automático.',
    specs: [
      { label: 'Bandejas', val: '4 bandejas de 60x40 cm' },
      { label: 'Control', val: 'Digital de temperatura y tiempo' },
      { label: 'Alimentación', val: '220V trifásico / monofásico' }
    ],
    blueprint: 'importados'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'Todos los Equipos' },
  { id: 'coccion', label: 'Línea de Cocción' },
  { id: 'refrigeracion', label: 'Refrigeración' },
  { id: 'neutra', label: 'Carpintería Metálica (A Medida)' },
  { id: 'importados', label: 'Equipos Importados' }
];

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToQuote } = useQuote();
  const [addedItems, setAddedItems] = useState({});

  const handleAdd = (product) => {
    addToQuote(product);
    // Visual feedback for adding
    setAddedItems(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalogo" className="section catalog">
      <div className="container">
        <div className="catalog-header">
          <h2 className="catalog-title">
            Nuestro Catálogo de <span className="text-gradient-cyan">Equipos Gastronómicos</span>
          </h2>
          <p className="catalog-subtitle">
            Explora nuestra línea de fabricación propia y equipos de importación. Agrega productos a tu lista de cotización para recibir asistencia personalizada.
          </p>
        </div>

        <div className="catalog-controls">
          <div className="catalog-search-wrapper">
            <Search className="catalog-search-icon" size={18} />
            <input
              type="text"
              placeholder="Buscar por nombre de equipo, material..."
              className="catalog-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <ul className="catalog-filter-list">
            {CATEGORIES.map((cat) => (
              <li key={cat.id}>
                <button
                  className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid catalog-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card glass-panel">
                <div className="product-image-container">
                  <div className="blueprint-graphics">
                    {Blueprints[product.blueprint]}
                  </div>
                  <span className="product-badge">
                    {CATEGORIES.find(c => c.id === product.category)?.label.split(' ')[0]}
                  </span>
                </div>

                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-desc">{product.desc}</p>
                  
                  <div className="product-specs">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="spec-item">
                        <span className="spec-icon">⚡</span>
                        <strong>{spec.label}:</strong> {spec.val}
                      </div>
                    ))}
                  </div>

                  <button
                    className={`btn ${addedItems[product.id] ? 'btn-cyan' : 'btn-primary'} btn-add-quote`}
                    onClick={() => handleAdd(product)}
                  >
                    {addedItems[product.id] ? (
                      <>
                        <Check size={16} /> ¡Agregado!
                      </>
                    ) : (
                      'Añadir a Cotización'
                    )}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-products glass-panel">
              <Sparkles size={32} style={{ marginBottom: '1rem', color: 'var(--accent-orange)' }} />
              <h3>No se encontraron equipos</h3>
              <p>Intenta buscar con otros términos o cambia la categoría de filtro.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
