/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    const oldHead = this.head;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.head = newNode;
    this.head.next = oldHead;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) return undefined;

    let currentNode = this.head;
    let newTail = currentNode;

    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    return oldHead.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx > this.length) return undefined;
    let currentIdx = 0;
    let currentNode = this.head;
    while (currentIdx < idx) {
      currentNode = currentNode.next;
      currentIdx++;
    }
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx > this.length) return undefined;
    let currentIdx = 0;
    let currentNode = this.head;
    while (currentIdx < idx) {
      currentNode = currentNode.next;
      currentIdx++;
    }
    return currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) return undefined;

    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return newNode.val;
    }

    if (idx === this.length) {
      this.push(val);
      this.length++;
      return val;
    }

    let currentNode = this.head;
    let prevNode = currentNode;
    let currentIdx = 0;

    while (currentIdx < idx) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      currentIdx++;
    }
    prevNode.next = newNode;
    newNode.next = currentNode;
    this.length++;
    return newNode.val;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx > this.length) return undefined;

    let currentNode = this.head;
    let prevNode = currentNode;
    let currentIdx = 0;

    while (currentIdx < idx) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      currentIdx++;
    }
    prevNode.next = currentNode.next;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return currentNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if(!this.head) return 0;

    let currentNode = this.head;
    let num = 0;
    while(currentNode) {
      num += currentNode.val;
      currentNode = currentNode.next;
    }
    return num / this.length;
  }
}

module.exports = LinkedList;
