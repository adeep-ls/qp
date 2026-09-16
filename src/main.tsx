import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { SplashProvider } from './context/SplashContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <SplashProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SplashProvider>
    </ThemeProvider>
  </React.StrictMode>
);
