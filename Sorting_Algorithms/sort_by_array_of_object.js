function sortByAge(arr) {
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
    name: "alice",
    age: 25,
  },
  {
    name: "udaya",
    age: 22,
  },
  {
    name: "adi",
    age: 23,
  },
];

console.log(sortByAge(people));
