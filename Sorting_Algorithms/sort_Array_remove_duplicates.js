function sortAndRemoveDuplicates(arr) {
  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }

  // Sort unique
  for (let i = 0; i < unique.length; i++) {
    for (let j = i + 1; j < unique.length; j++) {
      if (unique[i] > unique[j]) {
        [unique[i], unique[j]] = [unique[j], unique[i]];
      }
    }
  }

  return unique;
}
console.log(sortAndRemoveDuplicates([4, 2, 2, 3, 1, 4, 5]));
