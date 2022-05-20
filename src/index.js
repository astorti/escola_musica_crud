import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/header.css';
import App from './router/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
