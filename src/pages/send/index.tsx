import { AnimateRoutingProvider } from 'app/providers/animateRouting/AnimateRoutingProvider';
import React from 'react';

import { SendCard } from 'widgets/send/SendCard';

function Main() {
  return (
    <AnimateRoutingProvider>
      <SendCard />
    </AnimateRoutingProvider>
  );
}

export default Main;
