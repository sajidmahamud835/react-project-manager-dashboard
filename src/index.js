import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import Main from './layouts/Main/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
);
