import React from 'react';
import ErrorBoundary from 'app/providers/errorBoundary/ErrorBoundary';
import { SuspenseContainer } from 'app/providers/suspense/SuspenseContainer';
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
