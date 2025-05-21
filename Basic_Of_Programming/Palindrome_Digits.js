// palindrome in Digits

function palindrome(n) {
  let original = n;
  let rev = 0;

  while (n > 0) {
    let digits = n % 10;
    rev = rev * 10 + digits;
    n = Math.floor(n / 10);
  }
  if (original === rev) {
    return true;
  } else {
    return false;
  }
}
console.log(palindrome(2222));

// palindrome string

function palindrome_str(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log(palindrome_str("udaya"));
