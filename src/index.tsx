import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from 'app/report-web-vitals/reportWebVitals';
import { AppFallback } from 'app/providers/suspense/Fallback';

const container = document.getElementById('root')!;
const root = createRoot(container);

const App = React.lazy(() => import('app'));

root.render(
  <React.StrictMode>
    <React.Suspense fallback={<AppFallback />}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
);

reportWebVitals();
