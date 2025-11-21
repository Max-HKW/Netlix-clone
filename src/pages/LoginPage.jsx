/**
 * Node modules
 */
import { SignIn } from '@clerk/clerk-react';

/**
 * Assets
 */
import { bgBanner } from '../assets';

/**
 * Styles
 */
import styles from '../styles/SignIn.module.css';

const LoginPage = () => {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center p-6">
      <figure className="absolute inset-0">
        <img
          src={bgBanner}
          alt="Immagine di copertine di vari film"
          className="w-full h-full block object-cover"
        />
      </figure>
      <div className="absolute inset-0 z-1 bg-linear-to-t from-black/90 to-black/75"></div>
      <div className="z-10 mt-16 lg:mt-0">
        <SignIn
          path="/login"
          signUpUrl='/signup'
          appearance={{
            elements: {
              formButtonPrimary: styles.buttonPrimary,
              card: styles.cardStyle,
              headerTitle: styles.headerTitle,
              headerSubtitle: styles.headerSubtitle,
              footer: styles.footerStyle,
              footerActionText: styles.footerText,
              socialButtonsBlockButton: styles.socialButton,
            },
          }}
        />
      </div>
    </div>
  );
};

export default LoginPage;
