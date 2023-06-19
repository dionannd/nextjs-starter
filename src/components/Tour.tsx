'use client';

import React, { useState } from 'react';
import Tour from 'reactour';

interface Steps {
  selector: string;
  content: string;
}

const TourComponent = () => {
  const [isTourOpen, setIsTourOpen] = useState<boolean>(false);
  const [tourSteps] = useState<Steps[]>([
    {
      selector: '.step-1',
      content: 'Ini adalah langkah 1.'
    },
    {
      selector: '.step-2',
      content: 'Ini adalah langkah 2.'
    }
  ]);

  const closeTour = () => {
    setIsTourOpen(false);
  };

  return (
    <>
      <button
        className="mr-1 rounded-xl border border-purple-500 px-4 py-2"
        onClick={() => setIsTourOpen(true)}
      >
        Tutorial
      </button>
      <Tour
        steps={tourSteps}
        isOpen={isTourOpen}
        onRequestClose={closeTour}
        accentColor="#00ff00" // Ubah warna aksen sesuai kebutuhan
      />
    </>
  );
};

export default TourComponent;
