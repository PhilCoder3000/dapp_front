import { checkIfWalletConnected } from 'shared/api/contract/connectWallet';

const prom = new Promise((res, rej) => {
  setTimeout(() => {
    res(10)
  }, 5000);
})

export function fetchData() {
  return {
    test: wrapPromise(prom),
    wallet: wrapPromise(checkIfWalletConnected()),
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
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
}
