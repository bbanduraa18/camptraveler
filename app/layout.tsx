import type { Metadata } from 'next';

import Navbar from '@/components/Navbar';

import './globals.css';

export const metadata: Metadata = {
  title: 'Camp Traveler',
  description: 'Travel App for Camping',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
