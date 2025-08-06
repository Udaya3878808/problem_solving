function sort2DArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i][0] > arr[j][0]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(
  sort2DArray([
    [3, 20],
    [1, 3],
    [2, 10],
  ])
);
