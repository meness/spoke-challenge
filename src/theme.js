import { createTheme } from '@mui/material';

const myTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#d94e44',
      50: '#fcecef',
      100: '#f9d0d4',
      200: '#e7a0a0',
      300: '#da7d7c',
      400: '#e4625c',
      500: '#e75646',
      600: '#d94e44',
      700: '#c7453e',
      800: '#b94037',
      900: '#a9382e',
    },
    success: {
      main: '#6fcf97',
    },
    error: {
      main: '#eb5757',
    },
    warning: {
      main: '#f2c94c',
    },
    info: {
      main: '#2f80ed',
    },
    action: {
      main: '#184faf',
    },
  },
});

export default myTheme;
