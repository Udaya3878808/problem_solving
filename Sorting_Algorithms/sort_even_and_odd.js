function sortEvenOdd(arr) {
  let even = [];
  let odd = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  even.sort((a, b) => a - b); // sort even numbers
  odd.sort((a, b) => a - b); // sort odd number
  return { even, odd };
}

console.log(sortEvenOdd([3, 2, 4, 1, 5, 6]));
