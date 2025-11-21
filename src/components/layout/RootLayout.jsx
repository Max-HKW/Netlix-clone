/**
 * Node modules
 */
import { Outlet } from 'react-router';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

/**
 * Components
 */
import Header from './Header';
import Footer from './Footer';

const RootLayout = () => {
  return (
    <SignedIn>
      <div className="min-h-screen flex flex-col md:mx-auto md:max-w-7xl xl:max-w-[1700px]">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </SignedIn>
  );
};

export default RootLayout;
