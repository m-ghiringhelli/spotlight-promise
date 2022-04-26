/**
 * TODO: Exercise 1: use `fetch` & async/await to get data from an API
 */
export async function getData() {
  const response = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
  const result = await response.json();
  
  return result;
}
/**
 * TODO: Exercise 2: use `fetch` & `.then` syntax to get the same data from the first exercise.
 */
export function thenGetData() {
  return fetch('https://futuramaapi.herokuapp.com/api/quotes/1').then((response) => response.json());
}
/**
 * TODO: Exercise 3: use `fetch`, async/await, and a try/catch statement to get data from an API and handle errors
 */
export async function asyncTryGetData() {
  try {
    return getData();
  } catch (error) {
    console.error(error);
  }
}
/**
 * TODO: Exercise 4: use `fetch`, `.then`, and `.catch` to get the same data from exercise 3 while handling errors
 */
export function thenTryGetQuotes() {
  const result = fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then((response) => response.json())
    .catch((error) => console.error('Oops! error'));

  return result;
}
/**
 * TODO: Exercise 5: use `fetch`, async/await, and a try/catch/finally statement to get data from an API, handle errors, then console.log('All done!') upon completion
 */
 export async function asyncTryFinallyGetData() {
  try {
    return getData();
  } catch (error) {
    console.error(error);
  } finally {
    console.log('All done');
  }
}
/**
 * TODO: Exercise 6: use `fetch`, `.then`, `.catch`. and `.finally` to get the same data from exercise 5 while handling errors and calling console.log('All done!') upon completion
 */
 export function thenFinallyTryGetQuotes() {
  const result = fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then((response) => response.json())
    .catch((error) => console.error('Oops! error'))
    .finally(() => console.log('all done!'));

  return result;
}
/**
 * TODO: Exercise 7: Call your function from exercise 5 using .then
 */
export function thenAsyncGetQuotes() {
  return asyncTryFinallyGetData().then((result) =>
    console.log('completed', result)
  );
}
/**
 * TODO: Exercise 8: Call your function from exercise 6 using async/await
 */

