/**
 * Node modules
 */
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
 * Icons
 */
import { Search } from 'lucide-react';
import { Bell } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  return (
    <header className="px-8 py-6 z-50 fixed w-full md:mx-auto md:max-w-7xl bg-linear-to-b from-black/80 to-black/0">
      <div className="flex items-center gap-12">
        <div>
          <img
            src={logo}
            alt="Netflix clone logo"
            width={150}
            height={150}
          />
        </div>
        <nav>
          <ul className="flex gap-5">
            {links.map(({ label, to }) => {
              const isActive = location.pathname === to;
              return (
                <li
                  key={to}
                  className="relative pb-1"
                >
                  {' '}
                  {/* relative qui */}
                  <NavLink
                    to={to}
                    className={({ isActive: isActive }) =>
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
          <Search className="text-gray-300 hover:text-white cursor-pointer" />
          <Bell
            fill="currentColor"
            className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
