function removeFirstOccurence(str, charToRemove) {
  let result = "";
  let removed = false;

  for (let i = 0; i < str.length; i++) {
    if (!removed && str[i] === charToRemove) {
      removed = true;
      continue;
    }
    result += str[i];
  }
  return result;
}

console.log(removeFirstOccurence("banana", "a"));
