import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container mx-auto">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
