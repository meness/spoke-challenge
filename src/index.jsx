import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@mui/material';
import App from './App';
import store from './store';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
