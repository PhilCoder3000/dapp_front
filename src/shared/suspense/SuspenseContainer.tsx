import React from 'react';
import { Fallback } from 'shared/suspense/Fallback';

type SuspenseContainerProps = {
  children: JSX.Element;
};

export function SuspenseContainer({ children }: SuspenseContainerProps) {
  return <React.Suspense fallback={<Fallback />}>{children}</React.Suspense>;
}
