function xorAll(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result ^= arr[i];
  }
  return result;
}
console.log(xorAll([4, 5, 6, 7]));
