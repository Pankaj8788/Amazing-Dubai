import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

// Define the theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      paper: '#ffffff', // Ensure 'paper' is defined
      default: '#f4f6f8',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <CssBaseline />  */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// Measure performance in your app
reportWebVitals();
