import React from 'react';
import { Routing } from 'pages';
import { StoreProvider } from 'app/providers/store';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from 'app/providers/errorBoundary/ErrorBoundary';
import { ThemeProvider } from 'app/providers/styles/theme';
import { AppContainer } from 'widgets/appContainer';

function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <BrowserRouter>
          <ErrorBoundary>
            <AppContainer>
              <Routing />
            </AppContainer>
          </ErrorBoundary>
        </BrowserRouter>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
