
// You should implement your task here.

module.exports = function towelSort (matrix) {
    var arr = [];
    if (Array.isArray(matrix)) {
  for (let i=0; i<matrix.length; i++) {
    if (i % 2 !== 0 ) {
        arr.push(matrix[i].reverse())
    } else {
        arr.push(matrix[i])
    }
  }
  }
  return arr.flat()
}

    
  
