import ErrorBoundary from 'app/providers/errorBoundary/ErrorBoundary';
import { SuspenseContainer } from 'app/providers/suspense/SuspenseContainer';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

const Main = React.lazy(() => import('pages/send'));
const Mint = React.lazy(() => import('pages/mint'));

export function Routing() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
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
    </AnimatePresence>
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
