function solution(number) {
    let count = 0;
    
    // index: 현재 인덱스
    // selected: 선택된 숫자들 배열
    const rec = (index, selected) => {
        // 숫자 3개를 고르고 그 합이 0이면 count 1 증가
        if (selected.length === 3) {
            count += selected.reduce((a, c) => a + c, 0) === 0 ? 1 : 0;
            return;
        }
            
        // 다음 숫자 선택
        for (let i = index; i < number.length; i++) {
            rec(i + 1, [... selected, number[i]]);
        }
    }
    rec(0, []);
    
    return count;
}