function count_character(str) {
  let count = {};
  for (let i = 0; i < str.length; i++) {
    if (count[str[i]]) {
      count[str[i]]++;
    } else {
      count[str[i]] = 1;
    }
  }
  return count;
}
console.log(count_character("hello world"));
