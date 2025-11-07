/**
 * Node modules
 */
import { Outlet } from 'react-router';

/**
 * Components
 */
import Header from './Header';
import Footer from './Footer';

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col mx-auto px-4 sm:px-6 lg:px-8 md:max-w-7xl">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
