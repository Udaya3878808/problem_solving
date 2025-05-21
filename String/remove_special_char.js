function remove_special_char(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const code = char.charCodeAt(0);
    if (
      (code >= 65 && code <= 90) ||
      (code >= 97 && code <= 122) ||
      (code >= 48 && code <= 57)
    ) {
      result += char;
    }
  }
  return result;
}

console.log(remove_special_char("ufdata@#$%^&"));
