function solution(bridge_length, weight, truck_weights) {
    let sec = 1;
    let passing_weight = truck_weights.shift();
    const queue = [passing_weight]; // 다리 건너는 트럭
    
    while(truck_weights.length > 0 && passing_weight > 0) {
        sec++;
        
        if (queue.length === bridge_length) { 
            passing_weight -= queue.shift();
        }
        
        if (passing_weight + truck_weights[0] > weight) 
            queue.push(0);
        else {
            const truck = truck_weights.shift()
            queue.push(truck);
            passing_weight += truck;
        }
    }
    
    sec += bridge_length;
    
    return  sec;
}