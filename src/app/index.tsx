import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'app/providers/styles/theme';
import { Routing } from 'pages';
import { store } from 'app/providers/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'shared/ui/app/MainContainer';
import ErrorBoundary from 'app/providers/errorBoundary/ErrorBoundary';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ErrorBoundary>
            <Container>
              <Routing />
            </Container>
          </ErrorBoundary>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
