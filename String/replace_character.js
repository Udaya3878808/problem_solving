function manualTReplace(str, targetchar, newChar) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === targetchar) {
      result += newChar;
    } else {
      result += str[i];
    }
  }
  return result;
}

let orininal = "banana";
const replaced = manualTReplace(orininal, "a", "x");
console.log(replaced);
