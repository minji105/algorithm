function solution(n, works) {
    works = works.sort((a, b) => b - a);
    
    while (n-- > 0) {
        works[0]--;
        
        for (let i = 0; i < works.length; i++) {
            if (works[i] < works[i + 1]) {
                [works[i], works[i + 1]] = [works[i + 1], works[i]];
            } else break;
        }
        
        if (works[0] <= 0) break;
    }
    
    return works.reduce((a, c) => a + c ** 2, 0);
}