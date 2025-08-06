function findlast(arr, target) {
  let start = 0,
    end = arr.length - 1;
  let result = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      result = mid;
      start = mid + 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
}
console.log(findlast([1, 5, 3, 4, 2], 2));
