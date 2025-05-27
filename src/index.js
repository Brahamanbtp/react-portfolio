import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';

// Get root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render app
root.render(
  <>
    <GlobalStyles />
    <Typography />
    <App />
  </>
);
