function findPeak(arr) {
  let start = 0,
    end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
}

console.log(findPeak([1, 3, 20, 4, 1, 0]));
