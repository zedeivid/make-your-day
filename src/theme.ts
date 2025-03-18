import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6B6B',
      light: '#FF9999',
      dark: '#CC5555'
    },
    secondary: {
      main: '#4ECDC4',
      light: '#7FDFD9',
      dark: '#3EA49D'
    },
    background: {
      default: '#F7F7F7',
      paper: '#FFFFFF'
    }
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#2C3E50'
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#2C3E50'
    },
    body1: {
      fontSize: '1rem',
      color: '#34495E'
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500
        }
      }
    }
  }
});
