/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const c = new Array(rowIndex + 1).fill(0);
    for (let i = 0; i <= rowIndex; ++i) {
        c[i] = new Array(i + 1).fill(0);
        c[i][0] = c[i][i] = 1;
        for (let j = 1; j < i; j++) {
            c[i][j] = c[i - 1][j - 1] + c[i - 1][j];
        }
    }
    return c[rowIndex];
};