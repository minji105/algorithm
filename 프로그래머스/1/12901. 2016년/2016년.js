function solution(a, b) {
    const YOIL = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    const DAYS = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
    
    const today = DAYS[a - 1] + b - 1;
    return YOIL[today % 7];
}