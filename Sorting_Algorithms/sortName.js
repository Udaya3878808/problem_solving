function sortByName(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].name > arr[j].name) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
let people = [
  {
    name: "Zara",
  },
  {
    name: "John",
  },
  {
    name: "Emma",
  },
];
console.log(sortByName(people));
