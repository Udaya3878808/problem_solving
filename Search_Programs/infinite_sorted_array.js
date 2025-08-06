function SearchInfinite(arr, target) {
  let start = 0,
    end = 1;

  while (arr[end] < target) {
    start = end;
    end = end * 2;
  }
 // Binary search in the found range
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

let bigArray = Array.from({ length: 100 }, (_, i) => i + 1);
console.log(SearchInfinite(bigArray, 67));
