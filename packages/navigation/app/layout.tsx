import type { Metadata } from 'next';
import './globals.css';
import Navigation from './components/Navigation';
import { AXProvider } from "./AXProvider"

export const metadata: Metadata = {
  title: 'Navigation Example',
  description: 'A multi-level navigation example built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          <Navigation />
          <main style={{ flex: 1, padding: '24px', maxWidth: '900px' }}>
            {children}
          </main>
          <AXProvider/>
        </div>
      </body>
    </html>
  );
}
