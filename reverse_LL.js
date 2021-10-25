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

  reverse() {
    let prevNode = null
    let nextNode = null
    let currNode = this.head

    // start from this.head
    // iterate over LL -> until current node is not null
    while(currNode) {
      // save next node in variable
      nextNode = currNode.next

      // if prev value = null - traverse just started, so head = tail
      if(prevNode === null) this.tail = this.head
      // append previously saved node as head's next node
      currNode.next = prevNode

      // make that previous node current head
      prevNode = currNode
      // make next node as current node
      currNode = nextNode
    }

    // exit while loop -> curr node is null
    // last node(tail) saved in prevNode var
    this.head = prevNode
    return prevNode
  }
}

let ll = new LL()
ll.append(11)
ll.append(33)
ll.append(55)
ll.append(77)
ll.getLength()



console.log('                  ')
console.log('ll: ', ll)
ll.reverse()
console.log('                  ')
console.log('after reverse: ', ll)
console.log('                  ')
