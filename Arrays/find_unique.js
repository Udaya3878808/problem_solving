function findUniqueElements(arr) {
  let freq = {};
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    freq[num] = (freq[num] || 0) + 1;
  }

  for (let key in freq) {
    if (freq[key] === 1) {
      result.push(Number(key));
    }
  }
  return result;
}
console.log(findUniqueElements([1, 2, 2, 3, 4, 4, 5,6]));
