function Sum_Digits(num) {
  let sum = 0;
  let str = num.toString();
  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
  }
  return sum;
}
console.log(Sum_Digits(123));


function Sum(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum
}
console.log(Sum(145));
