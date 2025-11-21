/**
 * Node modules
 */
import { Link } from 'react-router';
import { SignIn, SignedOut } from '@clerk/clerk-react';

/**
 * Assets
 */
import { bgBanner } from '../assets';

/**
 * Icons
 */
import { ChevronRight } from 'lucide-react'

const LandingPage = () => {
  return (
    <div className="relative h-screen w-full bg-black text-white flex flex-col items-center justify-center p-6 text-center">
      <figure className="absolute inset-0">
        <img
          src={bgBanner}
          alt="Immagine di copertine di vari film"
          className="w-full h-full block object-cover"
        />
      </figure>
      <div className="absolute inset-0 z-1 bg-linear-to-t from-black/90 to-black/75"></div>

      <h1 className="text-3xl lg:text-5xl font-bold mb-4 z-10">
        Film, serie TV e tanto altro, senza limiti
      </h1>
      <p className="text-sm text-gray-300 max-w-[45ch] mb-8 z-10">
        Vuoi guardare Netflix? Inserisci l'indirizzo email per abbonarti o
        riattivare il tuo abbonamento.
      </p>

      <Link
        to="/signup"
        className="bg-accent hover:bg-accent/80 px-6 py-3 rounded font-semibold text-lg z-10"
      >
        <div className='flex items-center gap-3 justify-between'>
          <span>Inizia</span>
          <span><ChevronRight /></span>
        </div>
      </Link>
    </div>
  );
};

export default LandingPage;
