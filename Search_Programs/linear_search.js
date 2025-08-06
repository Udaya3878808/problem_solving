function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([3, 4, 5, 6, 6], 6));

function linearSearch1(arr, target) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      result.push(i);
    }
  }
  return result;
}
console.log(linearSearch1([6, 4, 5, 6, 6], 6));
