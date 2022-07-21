import React from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#452dca',
      light: '#7ac1d3',
      dark: '#220b61',
    },
    secondary: {
      main: '#4e7af3',
      light: '#fff',
      dark: '#020331',
    },
    info: {
      main: '#7ac1d3',
    },
    text: {
      primary: '#4e7af3',
      secondary: '#4e7af3',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background-color: #220b61;
        }
        ::-webkit-file-upload-button {
          display: none;
        }
        ::file-selector-button {
          display: none;
        }
        ::-webkit-scrollbar {
          width: 12px;
          height: 12px;
        }
        ::-webkit-scrollbar-track {
          background: #2B3648;
        }
        ::-webkit-scrollbar-track-piece { 
          background-color: #212936;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #2B3648; 
          border-radius: 10px;
          border: 3px solid #212936;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #313C4E;
        }
        ::-webkit-scrollbar-corner {
          background: #212936;
        }
      `,
    },
  },
});

export const ThemeProvider = ({ children }: React.PropsWithChildren) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);
