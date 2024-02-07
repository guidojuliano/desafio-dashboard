import React, { ReactNode } from "react";
import Header from "../common/Header";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
