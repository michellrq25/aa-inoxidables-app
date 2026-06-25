import './globals.css';

export const metadata = {
  title: 'A&A Inoxidables SAC | Equipos Gastronómicos de Acero Inoxidable',
  description: 'Fabricación y venta de equipos gastronómicos a medida en acero inoxidable AISI 304 y 430. Mantenimiento y servicio técnico especializado en Lima y todo el Perú.',
  keywords: 'equipos gastronomicos, acero inoxidable, cocinas industriales, exhibidoras refrigeradas, campanas extractoras, mantenimiento gastronomico, lima, peru',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
      </head>
      <body>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}
