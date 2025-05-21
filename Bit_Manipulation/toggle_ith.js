function toggleBit(n, i) {
  return n ^ (1 << i);
}
console.log(toggleBit(10, 2));
