function anagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let freq1 = {};
  let freq2 = {};

  for (let i = 0; i < str1.length; i++) {
    if (freq1[str1[i]]) {
      freq1[str1[i]]++;
    } else {
      freq1[str1[i]] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (freq2[str2[i]]) {
      freq2[str2[i]]++;
    } else {
      freq2[str2[i]] = 1;
    }
  }

  for (let key in freq1) {
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }
  return true;
}
console.log(anagrams("listen", "silent"));
