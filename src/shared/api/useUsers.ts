import { useState } from 'react';
import { fetchWrapper } from 'app/api-setup/fetchSuspenseData';

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

const resource = fetchWrapper<Result>(prom);

export const useUsers = () => {
  const [users] = useState(resource.fetch)
  return users;
};
