/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const row = new Array(m).fill(false);
    const columns = new Array(n).fill(false);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                row[i] = true;
                columns[j] = true;
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (row[i] || columns[j]) {
                matrix[i][j] = 0
            }
        }
    }
};