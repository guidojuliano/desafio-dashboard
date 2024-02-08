import React, { ReactNode } from 'react';
import Header from '../common/Header';
import GoogleAnalytics from '../GoogleAnalytics';
interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      <GoogleAnalytics />
      {children}
    </div>
  );
}
