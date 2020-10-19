
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  }
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 1 || i === 1) {
      arr.push(matrix[i].reverse());
    } else {
      arr.push(matrix[i]);
    }
  }
  return arr.flat();
}



