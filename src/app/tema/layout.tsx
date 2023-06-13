import Navbar from '@/components/portal/Navbar';
import React from 'react';

export default function TemaLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
