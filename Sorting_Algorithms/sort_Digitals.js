function sortDigits(num) {
  let digits = num.toString().split("").map(Number);

  for (let i = 0; i < digits.length; i++) {
    for (let j = i + 1; j < digits.length; j++) {
      if (digits[i] > digits[j]) {
        let temp = digits[i];
        digits[i] = digits[j];
        digits[j] = temp;
      }
    }
  }
  return parseInt(digits.join(""));
}

console.log(sortDigits(4321));
