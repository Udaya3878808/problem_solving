function sortBooleans(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === false) {
      result.push(false);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      result.push(true);
    }
  }
  return result;
}

console.log(sortBooleans([true, true, false, false, false]));
