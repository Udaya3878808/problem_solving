function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;
  str = str.toLowerCase();

  while (i < j) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }
  return true;
}
console.log(isPalindrome("lemon"));
