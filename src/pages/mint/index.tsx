import { AnimateRoutingProvider } from 'app/providers/animateRouting/AnimateRoutingProvider';
import React from 'react';
import { fetchData } from 'shared/api/fetchData';

const resource = fetchData();

function Mint() {
  return (
    <AnimateRoutingProvider>
      <Test />
    </AnimateRoutingProvider>
  );
}

const Test = () => {
  resource.test.read();
  return <h1>Mint</h1>;
};

export default Mint;
