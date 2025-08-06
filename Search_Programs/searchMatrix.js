function searchMatrix(matrix, target) {
  let row = 0;
  let col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    }
    if (matrix[row][col] > target) {
      col--;
    } else {
      row++;
    }
  }
  return false;
}
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [13, 12, 12],
];
console.log(searchMatrix(matrix, 1));
