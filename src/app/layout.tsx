import type { Metadata } from 'next';
import './globals.css';
import './components.css';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Student Table App',
  description: 'A beautiful student management table built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" toastOptions={{
          style: {
            background: '#1e232d',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }
        }} />
        {children}
      </body>
    </html>
  );
}
