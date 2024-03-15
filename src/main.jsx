import React from 'react';
import { createRoot } from 'react-dom/client'; // Importing createRoot from react-dom/client
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';

let DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
let CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID;
let REDIRECT_URL = import.meta.env.VITE_AUTH0_REDIRECT_URL;

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      {/* Add content for the home page */}
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is the About page content.</p>
    </div>
  );
}

const root = createRoot(document.getElementById('root')); // Using createRoot from react-dom/client
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      authorizationParams={{
        redirect_uri: REDIRECT_URL // Remove curly braces
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
