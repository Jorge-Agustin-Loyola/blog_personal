import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import All_Routes from './Routes';
import { HelmetProvider } from "react-helmet-async";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <All_Routes />
    </HelmetProvider>  
  </React.StrictMode>
);


