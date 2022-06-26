import { useState } from 'react';
import { fetchWrapper } from 'shared/api/utils/fetchWrapper';
import { useErrorHandling } from 'shared/errorBoundary/ErrorBoundary';

// const prom = new Promise<Result>((resolve, reject) => {
//   setTimeout(() => {
//     reject({
//       name: 'Ringo Starr',
//     });
//   }, 1000);
// });

type Result = {
  name: string;
};

const resource = fetchWrapper<Result | void>(
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .catch((reject) => reject()),
);

export const useUsers = () => {
  const { catchError } = useErrorHandling();
  const [users] = useState(resource.fetch);

  return users;
};
