function reverse(str) {
  let result = [];
  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }
  return result;
}

console.log(reverse([1, 2, 3, 4, 5]));
