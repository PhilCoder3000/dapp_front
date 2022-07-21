import { AnimateRoutingProvider } from 'app/providers/animateRouting/AnimateRoutingProvider';
import React from 'react';
import { MyTubeNavBar } from 'widgets/myTube/NavBar';

function MyTube() {
  return (
    <AnimateRoutingProvider>
      <MyTubeNavBar />
    </AnimateRoutingProvider>
  );
}

export default MyTube;
