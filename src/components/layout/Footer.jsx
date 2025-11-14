/**
 * Constants
 */
import { footerLinks } from '../../constants';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 mt-16 p-6">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-gray-800 pt-6 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Netflix Clone. All rights reserved.
          </p>
          <select className="mt-4 sm:mt-0 bg-black border border-gray-700 text-gray-400 p-2 rounded focus:outline-none focus:ring-1 focus:ring-white">
            <option value="en">English</option>
            <option value="it">Italiano</option>
            <option value="es">Español</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
