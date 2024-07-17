class LinkedList {
  constructor() {
    this.size = 0;
    this.root = null;
  }

  add(value) {
    if (this.size === 0) {
      this.root = new Node(value);
      this.size++;

      return true;
    }

    let node = this.root;

    while (node.next) {
      node = node.next;
    }

    node.next = new Node(value);
    this.size++;
  }

  getSize() {
    return this.size;
  }

  print() {
    const result = [];
    let node = this.root;

    while (node) {
      result.push(node.value);
      node = node.next;
    }

    console.log(result);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new LinkedList();

list.add(5);
list.add(4);
list.add(3);
list.add(3);

list.print();
