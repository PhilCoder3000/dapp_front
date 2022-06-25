import { useState } from 'react';
import { fetchWrapper } from 'shared/api/utils/fetchWrapper'

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
