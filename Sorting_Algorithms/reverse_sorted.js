function reverse_Sort_Array(arr) {
  let sorted = [...arr];

  for (let i = 0; i < sorted.length; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      if (sorted[i] > sorted[j]) {
        let temp = sorted[i];
        sorted[i] = sorted[j];
        sorted[j] = temp;
      }
    }
  }

  let resverse = [];
  for (let i = sorted.length - 1; i >= 0; i--) {
    resverse.push(sorted[i]);
  }
  return resverse;
}

console.log(reverse_Sort_Array([3, 4, 5, 6, 7, 1]));
