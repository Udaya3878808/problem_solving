function selection_sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minindex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minindex]) {
        minindex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minindex];
    arr[minindex] = temp;
  }
  return arr;
}
console.log(selection_sort([64, 25, 12, 22, 11]));
