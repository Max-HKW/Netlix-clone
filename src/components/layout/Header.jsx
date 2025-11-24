/**
 * Node modules
 */
import { NavLink, useLocation, Link } from 'react-router';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { SignOutButton } from '@clerk/clerk-react';

/**
 * Components
 */
import SearchBar from '../SearchBar';

/**
 * Constants
 */
import { links } from '../../constants';

/**
 * Assets
 */
import { logo } from '../../assets';

/**
 * Icons
 */
import { Search, Bell, Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const location = useLocation();
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-0 transition-all duration-150">
      {/* Container */}
      <nav className="px-8 py-6 mx-auto max-w-7xl xl:max-w-[1700px] flex items-center justify-between gap-12">
        {/* Logo */}
        <Link to="/home">
          <img
            src={logo}
            alt="Netflix clone logo"
            width={150}
            height={150}
            className="min-w-[150px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex text-center flex-row gap-8 items-center ">
          {links.map(({ label, to }) => {
            const isActive =
              location.pathname === to ||
              (to === '/film' && location.pathname.startsWith('/film/')) ||
              (to === '/serie-tv' &&
                location.pathname.startsWith('/serie-tv/'));
            return (
              <li
                key={to}
                className="relative pb-1"
              >
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    clsx(
                      'text-gray-300 hover:text-white transition-colors duration-300',
                      isActive && 'text-white font-semibold'
                    )
                  }
                >
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 -bottom-2 h-1 bg-accent rounded-full w-full"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Icons + Hamburger (mobile) */}
        <div className="ml-auto flex gap-3 items-center">
          {/* Hamburger */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Apri menu"
          >
            <Menu size={26} />
          </button>
          <SearchBar />
          <SignOutButton>
            <button className="cursor-pointer bg-accent hover:bg-accent/80 text-white font-semibold py-2 px-4 rounded shadow transition-colors duration-200">
              Esci
            </button>
          </SignOutButton>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={clsx(
          'lg:hidden fixed top-0 left-0 w-full h-screen  z-40 transition-transform duration-300 flex justify-center',
          isOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto bg-black/80 backdrop-blur-xl'
            : '-translate-y-full opacity-0 pointer-events-none'
        )}
      >
        <ul className="flex flex-col items-center justify-center gap-8 relative">
          {links.map(({ label, to }) => {
            const isActive =
              location.pathname === to ||
              (to === '/film' && location.pathname.startsWith('/film/')) ||
              (to === '/serie-tv' &&
                location.pathname.startsWith('/serie-tv/'));
            return (
              <li
                key={to}
                className="relative"
              >
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    clsx(
                      'text-gray-300 hover:text-white text-2xl transition-colors duration-300',
                      isActive && 'text-white font-semibold'
                    )
                  }
                  onClick={() => setIsOpen(false)} // chiudi menu al click
                >
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="underline-mobile"
                      className="absolute left-0 -bottom-2 h-1 bg-accent rounded-full w-full"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <X
          size={26}
          className="absolute z-1000 right-20 top-20 cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;
