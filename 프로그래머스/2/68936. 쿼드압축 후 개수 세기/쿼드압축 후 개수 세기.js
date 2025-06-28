function solution(arr) {
    const result = [0, 0];
    
    const quad = (rowStart, rowEnd, colStart, colEnd) => {
        if (rowStart === rowEnd) {
            result[arr[rowStart][colStart]]++;
            return;
        }
        
        let isEqual = true;
        
        outer: for (let i = rowStart; i <= rowEnd; i++) {
            for (let j = colStart; j <= colEnd; j++) {
                if (arr[i][j] !== arr[rowStart][colStart]) {
                    isEqual = false;
                    break outer;
                }
            }
        }
        
        if (isEqual) {
            result[arr[rowStart][colStart]]++;
            return;
        } else {
            const rowMid = Math.floor((rowStart + rowEnd) / 2);
            const colMid = Math.floor((colStart + colEnd) / 2);
            
            quad(rowStart, rowMid, colStart, colMid);
            quad(rowStart, rowMid,  colMid + 1, colEnd);
            quad(rowMid + 1, rowEnd, colStart, colMid);
            quad(rowMid + 1, rowEnd, colMid + 1, colEnd);
        }
    }
    
    quad(0, arr.length - 1, 0, arr.length - 1);
    
    return result;
}