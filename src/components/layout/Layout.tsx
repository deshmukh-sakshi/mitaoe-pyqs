import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen select-none flex-col bg-primary text-content">
      <Header />
      <main className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto px-4 py-8">
          <div className="container mx-auto">
            {children}
          </div>
        </div>
      </main>
      <Footer />
      <Toaster 
        position="bottom-right"
        theme="dark"
        closeButton
        richColors
      />
    </div>
  );
} 