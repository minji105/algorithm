function solution(sizes) {
    var w = 0;
    var h = 0;
    
    sizes.forEach(x => {
        w = Math.max(Math.max(x[0], x[1]), w)
        h = Math.max(Math.min(x[0], x[1]), h)
    })
    
    return w*h;
}