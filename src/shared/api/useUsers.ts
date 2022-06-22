import { useState } from 'react';
import { fetchSuspenseData } from 'shared/api/fetchSuspenseData';

const prom = new Promise<Result>((resolve) => {
  setTimeout(() => {
    resolve({
      name: 'Ringo Starr',
    });
  }, 1000);
});

type Result = {
  name: string;
};

const resource = fetchSuspenseData<Result>(prom);

export const useUsers = () => {
  const [response] = useState(resource.read)
  return response;
};
