import { teal } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          height: '100%'
        },
        html: {
          height: '100%'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
          root: {
            textTransform: 'none',
        },
        sizeLarge: {
          height: '60px'
        },
        sizeMedium: {
          height: '50px'
        },
        sizeSmall: {
          height: '40px'
        }
      }
    }
  },
  typography: {
      h5: {
          fontSize: '1.625rem',
          fontWeight: 500
      },
      body1: {
          fontSize: '1.125rem',
          fontWeight: 400,
          lineHeight: '1.27777778em',
          letterSpacing: '-0.01333333em',
      },
      body2: {
        lineHeight: '1.28571429em',
        letterSpacing: '0.02331793em',
        fontSize: '0.8125rem'
      },
      button: {
        fontSize: '1rem'
      }
  },
  palette: {
    primary: {
      main: teal[400],
    },
  },
});


