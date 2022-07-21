import { ProtectedPage } from 'app/providers/protectedPage';
import { SuspenseContainer } from 'app/providers/suspense/SuspenseContainer';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

const Main = React.lazy(() => import('pages/send'));
const Mint = React.lazy(() => import('pages/mint'));
const MyTube = React.lazy(() => import('pages/myTube'));
const Profile = React.lazy(() => import('pages/profile'));

export function Routing() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        {pages.map(({ page, path, protectedPage }: Page) => (
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

type Page = {
  page: JSX.Element;
  path: string;
  label?: string;
  protectedPage?: boolean;
}

export const web3ListItems = [
  { page: <Main />, label: 'Send', path: '/' },
  { page: <Mint />, label: 'Mint', path: '/mint' },
];

export const web2ListItems = [
  { page: <MyTube />, label: 'MyTube', path: '/my-tube' },
];

const pages = [
  {
    page: <Profile />,
    path: '/profile',
    protectedPage: true,
  },
  ...web2ListItems,
  ...web3ListItems,
];
