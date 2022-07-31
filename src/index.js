import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import { DatabaseContext, SettingsContext } from './api/context/useContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const settings = {
  title: 'OpenPMS',
  description: 'An open source project management system.',

  // API
  api: {
    url: 'http://localhost:4000/api/',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SettingsContext.Provider value={settings}>

        <Header />
        <App />
        <Footer />

      </SettingsContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
