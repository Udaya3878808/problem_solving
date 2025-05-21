function palindrome(str, left = 0, right = str.length - 1) {
  if (left >= right) return true;
  if (str[left] !== str[right]) return false;
  return palindrome(str, left + 1, right - 1);
}
console.log(palindrome("madam"));
