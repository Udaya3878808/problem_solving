function count_words(str) {
  let count = 0;
  inword = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && !inword) {
      inword = true;
      count++;
    } else if (str[i] === " ") {
      inword = false;
    }
  }
  return count;
}
console.log(count_words("udaya hasini"));
