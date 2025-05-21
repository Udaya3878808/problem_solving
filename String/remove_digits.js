function removeDigits(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!(char >= "0" && char <= "9")) {
      result += char;
    }
  }
  return result;
}

console.log(removeDigits("mbcsjkgch6897nsmb9"));
