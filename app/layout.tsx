import './globals.css';

export const metadata = {
  title: '08003D',
  description: 'Servicio 3D',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}