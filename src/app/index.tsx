import React, { Suspense } from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'app/providers/styles/theme';
import { Routing } from 'pages';
import { store } from 'app/providers/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'shared/ui/app/MainContainer';
import { AppFallback } from 'app/providers/suspense/Fallback';

export function App() {
  return (
    <Suspense fallback={<AppFallback />}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Container>
              <Routing />
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </Suspense>
  );
}
