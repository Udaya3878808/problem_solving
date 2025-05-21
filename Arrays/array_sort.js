function array_sorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(array_sorted([1, 4, 2, 4, 6]));
console.log(array_sorted([1, 2, 3, 4, 5]));
