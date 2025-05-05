function solution(bridge_length, weight, truck_weights) {
    let sec = 0;
    let passing_weight = 0; // 현재 다리 위 트럭 총 무게
    let queue = []; // 다리 건너는 트럭. { weigth, entry(진입시점) }
    let head = 0;
    
    while (truck_weights.length > 0 || passing_weight > 0) {
        sec++;
        
        // 맨 앞 트럭 진입한 지 bridge_length초 지나면 pop
        if (head < queue.length && sec - queue[head].entry === bridge_length) { 
            passing_weight -= queue[head].weight;
            head++;
        }
        
        // 다음 트럭 올라갈 수 있으면 push. 진입시점 = 현재시간
        if (truck_weights.length > 0 && truck_weights[0] + passing_weight <= weight) {
            const truck = truck_weights.shift()
            queue.push({ weight: truck, entry: sec });
            passing_weight += truck;
        }
    }
    
    return  sec;
}