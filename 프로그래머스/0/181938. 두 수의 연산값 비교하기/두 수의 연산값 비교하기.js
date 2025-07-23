function solution(a, b) {
    const op1 = a + '' + b + '';
    const op2 = 2 * a * b;
    return op1 == op2 ? op1 : Math.max(Number(op1), op2);
}