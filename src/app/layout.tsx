import Header from '@/components/Header';
import Navbar from '@/components/portal/Navbar';
import '@/styles/globals.css';
import '@/styles/fonts.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ToWedd - Platform Undangan Online',
  description:
    'Platform pembuatan undangan digital berbasis website. Memberikan solusi untuk pernikahan anda lebih hemat, mudah dan praktis. Daftar sekarang!',
  applicationName: 'ToWedd',
  authors: [{ url: 'https://towedd.com', name: 'ToWedd Team' }],
  keywords: [
    'invitation',
    'wedding invitation',
    'invitation online',
    'undangan online',
    'undangan nikah',
    'undangan pernikahan',
    'undangan digital'
  ],
  viewport: { width: 'device-width', initialScale: 1 },
  creator: 'ToWedd',
  robots: 'index, follow',
  manifest: '/icons/manifest.json',
  openGraph: {
    type: 'website',
    url: 'https://towedd.com',
    title: 'ToWedd - Platform Undangan Online',
    description:
      'Platform pembuatan undangan digital berbasis website. Memberikan solusi untuk pernikahan anda lebih hemat, mudah dan praktis. Daftar sekarang!',
    siteName: 'ToWedd',
    images: [{ url: '/icons/og-bg-white.png' }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@towedd.com',
    creator: '@towedd.com',
    images: '/icons/og-bg-white.png'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Header />
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
