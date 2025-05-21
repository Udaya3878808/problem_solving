function setBit(n, i) {
  return n | (1 << i);
}

console.log(setBit(5, 1));
