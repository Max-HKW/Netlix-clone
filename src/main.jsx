/**
 * Node modules
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';


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



createRoot(document.getElementById('root')).render(
  <StrictMode>

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
    
  </StrictMode>
);
