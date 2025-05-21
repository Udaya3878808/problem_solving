function firstNonRepeat(str) {
  str = str.replace(/,/g, "");
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }
    if (count === 1) {
      return str[i];
    }
  }
  return null;
}

console.log(firstNonRepeat("a,a,d,d,c,b,b")); // Output: "c"
