function capitalFirstLetter(str) {
  let words = "";
  let newWord = true;
  for (let i = 0; i < str.length; i++) {
    if (newWord && str[i] !== " ") {
      words += str[i].toUpperCase();
      newWord = false;
    } else {
      words += str[i].toLowerCase();
      if (str[i] === " ") {
        newWord = true;
      }
    }
  }
  return words;
}
console.log(capitalFirstLetter("hello world! this is javascript."));
