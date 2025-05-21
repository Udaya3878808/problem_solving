function reverse(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
  }
}

reverse("udaya");

// digit reverse

function DigitReverse(n) {
  let rev = 0;
  while (n > 0) {
    let digit = n%10
    rev = (rev * 10) + digit
    n = Math.floor(n / 10);
  }
  return rev
}
console.log(DigitReverse(123));
