function MaxSum(arr, k) {
  let max = 0;
  windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    max = Math.max(max, windowSum);
  }
  return max;
}
console.log(MaxSum([1, 2, 3, 4, 5], 3));
