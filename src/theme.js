import { createTheme } from '@mui/material';

const myTheme = createTheme({
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

export default myTheme;
