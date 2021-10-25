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

  // oldTail = 77
  // 11 -> 33 -> 55 -> 77 -> null
  // 11 -> 33 -> 55 -> 11 -> null
  reverse() {
    let prev = null
    let next = null

    while(this.head) {
      next = this.head.next
      this.head.next = prev
      prev = this.head
      this.head = this.head.next
    }

    return prev
  }
}

let ll = new LL()
ll.append(11)
ll.append(33)
ll.append(55)
// ll.append(77)
ll.getLength()



console.log('                  ')
console.log('ll: ', ll)
console.log('ll.reverse: ', ll.reverse())
console.log('                  ')
console.log('after reverse: ', ll)
console.log('                  ')
