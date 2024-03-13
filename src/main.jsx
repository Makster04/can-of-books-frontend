import React from 'react';
import { createRoot } from 'react-dom/client'; // Importing createRoot from react-dom/client
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      {/* Add content for the home page */}
    </div>
  );
}

const root = createRoot(document.getElementById('root')); // Using createRoot from react-dom/client
root.render(
  <React.StrictMode>
    <Home />
    <App />
  </React.StrictMode>
);
