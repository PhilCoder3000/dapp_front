import { ProtectedPage } from 'app/providers/protectedPage';
import { SuspenseContainer } from 'app/providers/suspense/SuspenseContainer';
import { AnimatePresence } from 'framer-motion';
import { Profile } from 'pages/profile';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

const Main = React.lazy(() => import('pages/send'));
const Mint = React.lazy(() => import('pages/mint'));

export function Routing() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        {pages.map(({ page, path, protectedPage }) => (
          <Route
            key={path}
            path={path}
            element={
              <SuspenseContainer>
                {protectedPage ? (
                  <ProtectedPage key={path}>{page}</ProtectedPage>
                ) : (
                  page
                )}
              </SuspenseContainer>
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
  {
    page: <Profile />,
    path: '/profile',
    protectedPage: true,
  },
];
