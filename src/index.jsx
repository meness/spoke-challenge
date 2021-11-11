import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { createTheme, ThemeProvider } from '@mui/material';
import App from './App';
import store from './store';

const themeOptions = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1DCC81',
      contrastText: 'rgba(255,255,255,0.87)',
    },
    secondary: {
      main: '#E0CA3C',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <ThemeProvider theme={themeOptions}>
          <App />
        </ThemeProvider>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
