import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import All_Routes from './Routes';
import { HelmetProvider } from "react-helmet-async";
import { Provider } from 'react-redux';
import store from './redux/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <HelmetProvider >
      <Provider store={store}>
        <All_Routes />

      </Provider>
    </HelmetProvider>  

);


