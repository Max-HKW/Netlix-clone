/**
 * Node modules
 */
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import clsx from 'clsx';
import { motion } from 'motion/react';

/**
 * Constants
 */
import { links } from '../../constants';

/**
 * Assets
 */
import { logo } from '../../assets';

/**
 * Components
 */
import SearchBar from '../SearchBar';

/**
 * Icons
 */
import { Search, Bell } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <header className="px-8 py-6 z-50 fixed w-full md:mx-auto md:max-w-7xl xl:max-w-[1700px] bg-linear-to-b from-black/80 to-black/0">
      <div className="flex items-center gap-12">
        <div>
          <img src={logo} alt="Netflix clone logo" width={150} height={150} />
        </div>

        <nav>
          <ul className="flex gap-5">
            {links.navLinks.map(({ label, to }) => {
              const isActive = location.pathname === to;
              return (
                <li key={to} className="relative pb-1">
                  <NavLink
                    to={to}
                    className={({ isActive: isNavActive }) =>
                      clsx(
                        'text-gray-300 hover:text-white transition-colors duration-300',
                        isNavActive && 'text-white font-semibold'
                      )
                    }
                  >
                    {label}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 -bottom-4 h-1 bg-accent rounded-full w-full"
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
        </nav>

        <div className="ml-auto flex gap-3">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <Search />
          </button>
          <Bell className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer" />
        </div>
        
        {isSearchOpen && <SearchBar onClose={() => setIsSearchOpen(false)} />}
      </div>
    </header>
  );
};

export default Header;
