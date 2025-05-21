function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7));

let start = 2;
let end = 20;
for (current = start; current <= end; current++) {
  let isPrime = true;
  for (i = 2; i < current; i++) {
    if (current % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(current);
  }
}
