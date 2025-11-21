/**
 * Node modules
 */
import { Outlet } from 'react-router';

/**
 * Components
 */
import AuthHeader from './AuthHeader';
import Footer from './Footer';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <AuthHeader />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
