import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Main = React.lazy(() => import("pages/send"));
const Mint = React.lazy(() => import("pages/mint"));


export function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/mint" element={<Mint />} />
    </Routes>
  );
}