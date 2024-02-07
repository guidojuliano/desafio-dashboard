import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#644BBA',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          textTransform: 'none',
          borderRadius: 30,
          font: 'inherit',
        },
        contained: {
          textTransform: 'none',
          borderRadius: 30,
          font: 'inherit',
        },
        outlined: {
          textTransform: 'none',
          borderRadius: 30,
          font: 'inherit',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: '#E6E1E6',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: 'none',
        },
      },
    },
  },
});

export default muiTheme;
