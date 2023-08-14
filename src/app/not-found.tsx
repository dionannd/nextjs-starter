import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import React from 'react';

export default function NotFound() {
  return (
    <main>
      <section className='w-ful flex items-center bg-white'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
          <ExclamationTriangleIcon className='drop-shadow-glow animate-flicker w-14 text-red-500' />
          <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
        </div>
      </section>
    </main>
  );
}
