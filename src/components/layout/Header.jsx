/**
 * Node modules
 */
import { NavLink } from 'react-router';

/**
 * Constants
 */
import { links } from '../../const';

const Header = () => {
  return (
    <header className="p-3">
      <nav>
        <ul className="flex gap-3">
          {links.map(({ label, to }) => (
            <li>
              <NavLink to={to}>{label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
