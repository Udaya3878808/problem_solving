function sqrtFloor(n) {
  let start = 0,
    end = n;
  let ans = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let square = mid * mid;
    if (square === n) return mid;
    if (square < n) {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ans;
}
console.log(sqrtFloor(17));
