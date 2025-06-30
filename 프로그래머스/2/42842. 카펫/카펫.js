function solution(b, y) {
    const rowCol = b / 2 - 2;   // b/2+1-3
    let row = 1;
    let col = rowCol - row;
    
    while (row * col !== y) {
        row++;
        col--;
    }
    
    return [col + 2, row + 2];
}