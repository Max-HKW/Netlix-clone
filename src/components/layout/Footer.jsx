/**
 * Constants
 */
import { links } from '../../constants';

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-gray-400 px-8 py-10 mt-20">
      <div className="max-w-7xl mx-auto">
        <p className="mb-6">
          Domande? Contattaci al{" "}
          <a href="tel:800-123-456" className="hover:underline">
            800-123-456
          </a>
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {links.footerLinks?.map((column, index) => (
            <div key={index} className="flex flex-col gap-2">
              {column.map(({ label, to }) => (
                <a
                  key={to}
                  href={to}
                  className="hover:underline text-sm"
                >
                  {label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <button className="border border-gray-400 px-4 py-2 text-sm hover:bg-gray-800 transition flex items-center gap-2">
          <span className="material-icons">public</span>
          Modifica lingua
        </button>

        <p className="mt-6 text-sm text-gray-500">Netflix Italia</p>
      </div>
    </footer>
  );
};

export default Footer;
