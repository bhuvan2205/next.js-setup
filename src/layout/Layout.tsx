'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { themeAtom } from '@/data/theme';
import { useAtom } from 'jotai';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  const [theme] = useAtom(themeAtom);

  return (
    <div className={`container mx-auto px-0 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-600'}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
