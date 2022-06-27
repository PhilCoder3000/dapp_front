import axios from 'axios';

export function fetchData(num: number) {
  return {
    todos: wrapPromise(getTodos(num)),
  };
}

function wrapPromise<T>(promise: Promise<T>) {
  let status = 'pending';
  let result: T;
  let suspender = promise.then(
    (r) => {
      status = 'success';
      result = r;
    },
    (e) => {
      status = 'error';
      result = e;
    },
  );
  return {
    read() {
      if (status === 'pending') throw suspender;
      if (status === 'error') throw result;
      if (status === 'success') return result;
    },
  };
}


const getTodos = (num: number) =>
  axios.get(`https://jsonplaceholder.typicode.com/todos/${num}`);
