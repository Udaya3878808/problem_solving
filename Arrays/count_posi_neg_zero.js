function countNumbers(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }

  console.log("Positive:", positive);
  console.log("Negative:", negative);
  console.log("Zero:", zero);
}

// Example:
countNumbers([1, -2, 0, 3, 0, -5, 6]);
