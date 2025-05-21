function mergeTwo(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    result.push(a[i]);
  }
  for (let i = 0; i < b.length; i++) {
    result.push(b[i]);
  }
  return result;
}
console.log(mergeTwo([1, 2, 3, 4], [5, 6]));
