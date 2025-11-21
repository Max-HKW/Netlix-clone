/**
 * Node modules
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { ClerkProvider } from '@clerk/clerk-react';
import { itIT } from '@clerk/localizations';

/**
 * Store
 */
import { store } from './store/store';

/**
 * Css
 */
import './index.css';

/**
 * Router
 */
import router from './routes';

/**
 * Keys
 */
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      localization={itIT}
      signInForceRedirectUrl='/home'
      appearance={{
        cssLayerName: 'clerk',
      }}
    >
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: '#ffffff',
              color: '#141414',
              borderRadius: '6px',
              padding: '12px 16px',
              border: '1px solid #ddd',
              fontSize: '15px',
              fontWeight: 500,
            },
            success: {
              iconTheme: {
                primary: '#1DB954',
                secondary: '#ffffff',
              },
            },
            error: {
              iconTheme: {
                primary: '#e50914',
                secondary: '#ffffff',
              },
            },
          }}
        />
      </Provider>
    </ClerkProvider>
  </StrictMode>
);
