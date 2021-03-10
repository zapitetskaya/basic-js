module.exports = function countCats(matrix) {
let cats = 0;
  for (let i = 0; i< matrix.length; i++ ){
    let count = matrix[i].length;
    for (let j=0; j< count; j++){
      if (matrix[i][j] === '^^') cats++;
    }
  }
  return cats;
};
