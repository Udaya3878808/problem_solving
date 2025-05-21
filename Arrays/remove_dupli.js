function remove_duplicates(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let exists = false;
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(remove_duplicates([1, 2, 3, 3, 2, 5, 6]));



