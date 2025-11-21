/**
 * Node modules
 */
import { Outlet, Navigate } from 'react-router';
import { SignedIn, SignedOut, RedirectToSignUp } from '@clerk/clerk-react';

/**
 * Components
 */
import Header from './Header';
import Footer from './Footer';

const RootLayout = () => {
  return (
    <>
      <SignedIn>
        <div className="min-h-screen flex flex-col md:mx-auto md:max-w-7xl xl:max-w-[1700px]">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </SignedIn>

      <SignedOut>
        <Navigate
          to="/signup"
          replace
        />

        {/* <div className="min-h-screen flex items-center justify-center text-white">
          Devi essere loggato per accedere a questa pagina.
        </div>  */}
      </SignedOut>
    </>
  );
};

export default RootLayout;
