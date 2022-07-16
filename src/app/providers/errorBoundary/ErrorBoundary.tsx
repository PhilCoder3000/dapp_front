import React from 'react';
import { ErrorBoundaryFallback } from 'app/providers/errorBoundary/ErrorBoundaryFallback';
import { NavigateFunction, useNavigate } from 'react-router-dom';

interface ContextProps {
  catchError: (error: unknown, errorMessage: string) => void;
  resetError: () => void;
}

const ErrorBoundaryContext = React.createContext<ContextProps>(
  {} as ContextProps,
);

export const useErrorHandling = () => React.useContext(ErrorBoundaryContext);

interface ErrorBoundaryProps extends React.PropsWithChildren {
  navigate: NavigateFunction;
}

interface IState {
  hasError: boolean;
  navigate: (() => {}) | NavigateFunction;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  state: IState = {
    hasError: false,
    navigate: () => {},
  };

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state.navigate = props.navigate;
  }

  errorToggle() {
    this.setState((prev) => ({ ...prev, hasError: true }));
    setTimeout(() => {
      this.state.navigate('/');
      this.setState((prev) => ({ ...prev, hasError: false }));
    }, 5000);
  }

  componentDidCatch() {
    this.errorToggle()
  }

  catchError = (error: unknown, errorMessage: string) => {
    this.errorToggle()
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

const WithRouter = (props: React.PropsWithChildren) => {
  const navigate = useNavigate()

  return <ErrorBoundary navigate={navigate} {...props} />
}

export default WithRouter;
