import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router } from "react-router-dom";

type AppProviderProps = {
  children: React.ReactNode;
};

const ErrorFallback = () => {
  return (
    <div role="alert">
      <h2>{`Ooops, something went wrong :(`}</h2>
      <button onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </button>
    </div>
  );
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>{children}</Router>
    </ErrorBoundary>
  );
};
