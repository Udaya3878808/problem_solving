function left_rotate(arr) {
  let first = arr[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = first;
  return arr;
}
console.log(left_rotate([1, 2, 3, 4, 5]));
