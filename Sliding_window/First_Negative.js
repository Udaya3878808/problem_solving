function firstNegative(arr, k) {
  let result = [];
  let q = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      q.push(i);
    }
    if (i >= k - 1) {
      while (q.length && q[0] <= i - k) {
        q.shift();
      }
      result.push(q.length ? arr[q[0]] : 0);
    }
  }
  return result;
}

console.log(firstNegative([12, -2, -2, -1, -7, 15, 30, 16, 28], 3));
