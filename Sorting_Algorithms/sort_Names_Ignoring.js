function sortNamesIgnoreCase(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].toLowerCase() > arr[j].toLowerCase()) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}
console.log(sortNamesIgnoreCase(["Banana", "apple", "Cherry", "date"]));
