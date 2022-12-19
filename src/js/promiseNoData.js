
export function promiseNoData(promise, data, error) {
  if (!promise && !error) {
    return;
  } else if (promise && !data && !error) {
    return <img src="http://www.csc.kth.se/~cristi/loading.gif"></img>;
  } else if (promise && !data && error) {
    return <span> Error </span>;
  }
}
