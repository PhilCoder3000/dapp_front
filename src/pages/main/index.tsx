import React from 'react';
import { useUsers } from 'shared/api/useUsers';

function Main() {
  const response = useUsers();
  return (
    <h1>{response?.name}</h1>
  )
}

export default Main;