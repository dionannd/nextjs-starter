import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h1 className="text-black">Dashboard</h1>
      {children}
    </section>
  );
}
