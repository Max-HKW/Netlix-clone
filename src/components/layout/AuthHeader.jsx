/**
 * Node modules
 */
import { Link, useLocation } from 'react-router';

/**
 * Assets
 */
import { header } from 'motion/react-client';
import { logo } from '../../assets';

const AuthHeader = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-150">
      <nav className="px-8 py-6 mx-auto max-w-7xl xl:max-w-[1700px] flex items-center justify-between gap-12">
        <Link to="/">
          <img
            src={logo}
            alt="Netflix clone logo"
            width={150}
            height={150}
            className="min-w-[150px]"
          />
        </Link>

        {!isLoginPage && (
          <Link
            to="/login"
            className="bg-accent hover:bg-accent/80 px-3 py-1.5 rounded font-semibold text-sm"
          >
            Accedi
          </Link>
        )}
      </nav>
    </header>
  );
};

export default AuthHeader;
