import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, css } from 'styled-components';
import App from './App';
import base from './styles/themes/base';
import GlobalStyle from './styles/themes/global';
import { ToastProvider } from './components/ToastNotification/ToastProvider';

const toastPosition = css`
  position: fixed;
  right: 20px;
  top: 70px;
  z-index: 999;
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />

    <ThemeProvider theme={base}>
      <ToastProvider customStyles={toastPosition}>
        <App />
      </ToastProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
