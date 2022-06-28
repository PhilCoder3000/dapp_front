import React from 'react';
import { fetchData } from 'shared/api/fetchData';

const resource = fetchData()

function Mint() {
  return (
      <Test/>
  );
}

const Test = () => {
  resource.test.read()
  return (

    <h1>Mint</h1>
  )
}

export default Mint;
