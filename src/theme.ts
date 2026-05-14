import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#38BDF8',
      light: '#7DD3FC',
      dark: '#0EA5E9',
    },
    secondary: {
      main: '#4ADE80',
    },
    background: {
      default: '#0A1628',
      paper: '#0D1F35',
    },
    text: {
      primary: '#F1F5F9',
      secondary: '#94A3B8',
    },
    divider: 'rgba(255,255,255,0.08)',
  },
  typography: {
    fontFamily: "'Inter', system-ui, sans-serif",
    h1: {
      fontFamily: "'Space Grotesk', system-ui, sans-serif",
      fontWeight: 700,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontFamily: "'Space Grotesk', system-ui, sans-serif",
      fontWeight: 700,
      letterSpacing: '-0.03em',
    },
    h3: {
      fontFamily: "'Space Grotesk', system-ui, sans-serif",
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontFamily: "'Space Grotesk', system-ui, sans-serif",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "'Space Grotesk', system-ui, sans-serif",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "'Space Grotesk', system-ui, sans-serif",
      fontWeight: 600,
    },
    body1: {
      fontFamily: "'Inter', system-ui, sans-serif",
      lineHeight: 1.75,
    },
    body2: {
      fontFamily: "'Inter', system-ui, sans-serif",
      lineHeight: 1.65,
    },
    button: {
      fontFamily: "'Space Grotesk', system-ui, sans-serif",
      fontWeight: 600,
      letterSpacing: '0.01em',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '12px 28px',
          fontSize: '0.95rem',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "'Inter', system-ui, sans-serif",
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: 'none',
        },
      },
    },
  },
})

export default theme
