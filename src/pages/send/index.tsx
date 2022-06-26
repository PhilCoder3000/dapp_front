import React from 'react';
import ErrorBoundary from 'shared/errorBoundary/ErrorBoundary';
import { SuspenseContainer } from 'shared/suspense/SuspenseContainer';
import { SendCard } from 'widgets/send/SendCard';

function Main() {
  return (
    <ErrorBoundary>
      <SuspenseContainer>
        <SendCard />
      </SuspenseContainer>
    </ErrorBoundary>
  );
}

export default Main;
