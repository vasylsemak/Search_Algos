class Node {
  constructor(val) {
    this.value = val
    this.next = null
  }
}

class LL {
  constructor() {
    this.head = this.tail = null
    this.length = 0
  }

  getLength() {
    return this.length
  }

  append(val) {
    if(!this.head) this.head = this.tail = new Node(val)
    else {
      let oldTail = this.tail
      let newTail = new Node(val)
      this.tail = newTail
      oldTail.next = newTail
    }
    this.length++
  }

  // reverse() {

  // }
}

let ll = new LL()
ll.append(11)
ll.append(33)
ll.append(55)
// ll.append(77)
ll.getLength()


console.log('               ')
console.log('ll: ', ll)
