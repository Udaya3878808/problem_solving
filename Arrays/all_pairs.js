function findpairs(arr, target) {
  let pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let targetSum = 7;

console.log(findpairs(numbers, targetSum));
