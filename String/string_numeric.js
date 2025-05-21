function isNumeric(str) {
  if (str.length === 0) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char < "0" || char > "9") {
      return false;
    }
  }
  return true;
}
console.log(isNumeric("123456"));
console.log(isNumeric("12efw34"));
console.log(isNumeric(""));
