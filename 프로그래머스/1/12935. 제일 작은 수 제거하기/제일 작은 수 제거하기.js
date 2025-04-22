function solution(arr) {
    var min = Math.min(...arr);
    arr = arr.filter(x => x != min);
    return arr.length === 0 ? [-1] : arr;
}