import { ThemeProvider } from '@emotion/react';
import { theme } from 'app/styles/theme';
import { Routing } from 'pages';
import { store } from 'processes/store/store';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'widgets/app/MainContainer';

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Container>
            <Routing />
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}