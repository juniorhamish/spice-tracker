import { Auth0Provider } from '@auth0/auth0-react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rooElement = document.getElementById('root');
if (!rooElement) throw new Error('No root element found');
createRoot(rooElement).render(
  <StrictMode>
    <Auth0Provider
      domain={'dajohnston.eu.auth0.com'}
      clientId={'IgckwgORISVWwBUI7BQSD2AtIlL2onsX'}
      authorizationParams={{
        redirect_uri: globalThis.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>,
);
