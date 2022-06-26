import React from 'react';
import { ErrorBoundaryFallback } from 'shared/errorBoundary/ErrorBoundaryFallback';

interface ContextProps {
  catchError: (error: unknown, errorMessage: string) => void;
  resetError: () => void;
}

const ErrorBoundaryContext = React.createContext<ContextProps>(
  {} as ContextProps,
);

export const useErrorHandling = () => React.useContext(ErrorBoundaryContext);

interface ErrorBoundaryProps extends React.PropsWithChildren {}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch() {
    console.log('componentDidCatch');
  }

  catchError = (error: unknown, errorMessage: string) => {
    this.setState({ hasError: true });
  };

  resetError = () => this.setState({ hasError: false });

  render() {
    return (
      <ErrorBoundaryContext.Provider
        value={{ catchError: this.catchError, resetError: this.resetError }}
      >
        {this.state.hasError ? <ErrorBoundaryFallback /> : this.props.children}
      </ErrorBoundaryContext.Provider>
    );
  }
}

export default ErrorBoundary;
