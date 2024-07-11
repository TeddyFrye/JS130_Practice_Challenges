class Element {
  constructor(data, nextElement = null) {
    this.data = data;
    this.nextElement = nextElement;
  }

  datum() {
    return this.data;
  }

  isTail() {
    return this.nextElement === null;
  }

  next() {
    return this.nextElement;
  }
}

class SimpleLinkedList {
  constructor() {
    this.headElement = null;
  }

  static fromArray(array) {
    const list = new SimpleLinkedList();
    if (array !== null) {
      array
        .slice()
        .reverse()
        .forEach((element) => list.push(element));
    }
    return list;
  }

  size() {
    let size = 0;
    let currentElem = this.head();
    while (currentElem) {
      size++;
      currentElem = currentElem.next();
    }
    return size;
  }

  isEmpty() {
    return this.head() === null;
  }

  push(data) {
    this.headElement = new Element(data, this.headElement);
  }

  pop() {
    if (this.isEmpty()) return null;
    const data = this.head().datum();
    this.headElement = this.head().next();
    return data;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.head().datum();
    }
    return null;
  }

  head() {
    return this.headElement;
  }

  toArray() {
    let array = [];
    let currentElem = this.head();
    while (currentElem) {
      array.push(currentElem.datum());
      currentElem = currentElem.next();
    }
    return array;
  }

  reverse() {
    let currentElem = this.head();
    const reversedList = new SimpleLinkedList();
    while (currentElem) {
      reversedList.push(currentElem.datum());
      currentElem = currentElem.next();
    }
    this.headElement = reversedList.headElement;
    return this;
  }
}

module.exports = { SimpleLinkedList, Element };
