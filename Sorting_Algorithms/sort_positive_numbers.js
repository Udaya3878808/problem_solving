function sortonlyPositive(arr) {
  let positive = arr.filter((n) => n > 0);
  positive.sort((a, b) => a - b);
  return positive;
}

console.log(sortonlyPositive([-3, 1, 3, -5, -7, 2, 4, -6]));
