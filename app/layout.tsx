import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Space_Grotesk as SpaceGrotesk, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = SpaceGrotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'MUSIK Studio | Compose, Collaborate, Create',
  description:
    'MUSIK Studio is an intuitive, AI-empowered music creation suite designed for producers and creators who crave a fluid workflow and immersive interface.'
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html className={`${inter.variable} ${spaceGrotesk.variable}`} lang="en">
      <body className="bg-slate-950 text-slate-100">
        <div className="min-h-screen bg-mesh-gradient">
          {children}
        </div>
      </body>
    </html>
  );
}
