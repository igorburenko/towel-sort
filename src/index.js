module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    let newArr = [];

    for (let i = 0; i < matrix.length; i++) {
        if (i > 0 && i % 2) {
            for (let j = matrix[i].length - 1; j > -1; j--) {
                newArr.push(matrix[i][j])
            }
        } else {
            for (let j = 0; j < matrix[i].length; j++) {
                newArr.push(matrix[i][j])
            }
        }
    }

    return newArr;
};
