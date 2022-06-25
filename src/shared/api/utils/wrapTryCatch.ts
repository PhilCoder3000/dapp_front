const { ethereum } = window;

export function wrapTryCatch<T>(func: (...args: any) => T) {
  try {
    if (!ethereum) {
      alert('please install Metamask');
      return;
    };
    return func()
  } catch (error) {
    alert(error);
  }
}