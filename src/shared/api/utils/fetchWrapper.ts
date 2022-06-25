function wrapPromise<T>(promise: Promise<T>) {
  let status = 'pending';
  let result: T;
  let suspender = promise.then(
    (r: T) => {
      status = 'success';
      result = r;
    },
    (e: T) => {
      status = 'error';
      result = e;
    },
  );
  const fetch = () => {
    if (status === 'pending') {
      throw suspender;
    } else if (status === 'error') {
      throw result;
    } else if (status === 'success') {
      return result;
    }
  };
  return {
    fetch,
  };
}

export function fetchWrapper<T>(promise: Promise<T>) {
  return wrapPromise<T>(promise);
}
