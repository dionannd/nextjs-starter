// app/layout.tsx
import { Metadata } from 'next';

import '../styles/globals.css';

import { Providers } from './providers';

import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Nextjs',
  description: 'Nextjs + NextUI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='flex text-left dark'>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
