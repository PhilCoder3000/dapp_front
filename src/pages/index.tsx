import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SuspenseContainer } from 'shared/suspense/SuspenseContainer';

const Main = React.lazy(() => import("pages/main"));


export function Routing() {
  return (
    <Routes>
      <Route path="/" element={<SuspenseContainer><Main /></SuspenseContainer>} />
      <Route path="/about" element={<p>about</p>} />
      <Route path="/text" element={<p>text</p>} />
      <Route path="/hello" element={<p>hello</p>} />
    </Routes>
  );
}