import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import base from './styles/themes/base';
import GlobalStyle from './styles/themes/global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />

    <ThemeProvider theme={base}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
