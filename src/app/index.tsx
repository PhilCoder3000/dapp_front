import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'app/styles/theme';
import { Routing } from 'pages';
import { store } from 'features/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'widgets/app/MainContainer';
import { SuspenseContainer } from 'shared/suspense/SuspenseContainer';

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Container>
            <SuspenseContainer>
              <Routing />
            </SuspenseContainer>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}
