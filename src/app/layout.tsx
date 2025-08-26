import type { Metadata } from 'next';
import '../styles/globals.css';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Benji Switzman | Computer Engineering Student',
  description: 'Personal website showcasing projects and experience in software development and engineering.',
  keywords: 'Benji Switzman, Computer Engineering, McMaster University, Software Development, Projects',
  authors: [{ name: 'Benji Switzman' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <footer style={{
          textAlign: 'center',
          padding: '20px',
          borderTop: '1px solid #eee',
          marginTop: '40px',
          fontSize: '0.9rem',
          color: '#666'
        }}>
          <p>&copy; Benji's Website 2023-2025</p>
          <address style={{ fontStyle: 'normal', marginTop: '5px' }}>
            Made by: Benji Switzman
          </address>
        </footer>
      </body>
    </html>
  );
}