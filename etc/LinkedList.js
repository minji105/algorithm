class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //리스트 끝에 새 노드 추가
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  //리스트 맨 앞에 새 노드 추가
  prepend(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  //지정된 위치에 새 노드 삽입 (기존의 노드를 지우면 안된다.)
  insert(index, data) {
    if (index < 0 || index > this.length) return;

    if (index === 0) {
      this.prepend(data);
      return;
    }
    if (index === this.length) {
      this.append(data);
      return;
    }

    const newNode = new Node(data);
    let current = this.head;
    let prev = null;
    let i = 0;

    while (i++ < index) {
      prev = current;
      current = current.next;
    }

    prev.next = newNode;
    newNode.next = current;
    this.length++;
  }

  //특정 값을 가지는 첫 번째 노드 삭제
  delete(data) {
    if (!this.head) return;

    if (this.head.data === data) {
      this.head = this.head.next;
      if (!this.head) this.tail = null;
      this.length--;
      return;
    }

    let current = this.head;
    let prev = null;

    while (current && current.data !== data) {
      prev = current;
      current = current.next;
    }

    if (!current) return;

    if (current) {
      prev.next = current.next;
      if (!current.next) this.tail = prev;
      this.length--;
    }
  }

  //특정 위치의 노드 삭제
  deleteAt(index) {
    if (index < 0 || index >= this.length) return;

    if (index === 0) {
      this.head = this.head.next;
      if (!this.head) this.tail = null;
      this.length--;
      return;
    }

    let current = this.head;
    let prev = null;
    let i = 0;

    while (i++ < index) {
      prev = current;
      current = current.next;
    }

    prev.next = current.next;
    if (current === this.tail) this.tail = prev;
    this.length--;
  }

  //특정 값을 가지는 노드 탐색 (있으면 true/없으면 false)
  search(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) return true;
      current = current.next;
    }

    return false;
  }

  //특정 값을 가지는 노드의 첫번째 인덱스 반환(없으면 -1 반환)
  indexOf(data) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === data) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  //리스트가 비어 있는지 확인
  isEmpty() {
    return !this.length;
  }

  //현재 연결 리스트에 포함된 노드 수 반환
  size() {
    return this.length;
  }

  //연결 리스트의 모든 노드를 순차적으로 출력
  display() {
    let current = this.head;
    const arr = [];

    while (current) {
      arr.push(current.data);
      current = current.next;
    }

    console.log(arr);
  }
}

export default LinkedList;
