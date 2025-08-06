function sortEvenOdd(arr) {
  let even = [],
    odd = [];

  for (let num of arr) {
    if (num % 2 === 0) even.push(num);
    else odd.push(num);
  }

  // Sort even ascending
  for (let i = 0; i < even.length; i++) {
    for (let j = i + 1; j < even.length; j++) {
      if (even[i] > even[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  // Sort odd descending
  for (let i = 0; i < odd.length; i++) {
    for (let j = i + 1; j < odd.length; j++) {
      if (odd[i] < odd[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return even.concat(odd);
}
console.log(sortEvenOdd([4, 7, 2, 9, 5, 6, 1]));
