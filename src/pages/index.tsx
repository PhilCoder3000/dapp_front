import ErrorBoundary from 'app/providers/errorBoundary/ErrorBoundary';
import { SuspenseContainer } from 'app/providers/suspense/SuspenseContainer';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Main = React.lazy(() => import('pages/send'));
const Mint = React.lazy(() => import('pages/mint'));

export function Routing() {
  return (
    <Routes>
      {pages.map(({ page, path }) => (
        <Route
          key={path}
          path={path}
          element={
            <ErrorBoundary>
              <SuspenseContainer>{page}</SuspenseContainer>
            </ErrorBoundary>
          }
        />
      ))}
    </Routes>
  );
}

const pages = [
  {
    page: <Main />,
    path: '/',
  },
  {
    page: <Mint />,
    path: '/mint',
  },
];
