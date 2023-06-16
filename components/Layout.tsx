import React, { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  children: ReactNode;
  title: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <div className="min-h-screen">
     
      <main>
        {children}
      </main>
     
    </div>
  );
};

export default Layout;