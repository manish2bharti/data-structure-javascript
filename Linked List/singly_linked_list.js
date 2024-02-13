class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("How");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");
// console.log(first);

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Pushing pseudocode
  // - This funtion should accept a value
  // - Create a new node using the values passed to the function
  // - If there is no head property on the list, set the head and tail
  //   to be the newly created node.
  // - Otherwise set the next property on the tail to be the new node and
  //   set the tail property on the list to be the newly created node
  // - Increment the length by one
  // - return the linked list
  push(val) {
    // Adding a new node to the end of the list
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    // console.log(this);
    return this;
  }

  // Popping pseudocode
  // - If there are no nodes in the list, return undefined
  // - Loop through the list until you reach the tail
  // - Set the next property of the 2nd to last node to be null
  // - Set the tail to be the 2nd to last node
  // - Decrement the length of the list by 1
  // - Return the value of the node removed
  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // console.log(this);
    return current;
  }

  //Shifting - Removing a new node from the beginning of the Linked list
  //Shifting pseudocode
  // - If there are no nodes, return undefined
  // - Store the current head property in a variable
  // - Set the head property to be the current head's next property
  // - Decrement the length by 1
  // - Return thr value of the node removed
  shift() {
    if (!this.head) {
      return undefined;
    }

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    console.log(this);
    return currentHead;
  }

  // Unshifting - Adding a new node from the beginning of the Linked list
  // Unshifting pseudocode
  // - This function shoulf accept a value
  // - Create a new node using the values passed to the function
  // - If there is no head property on the list, set the head and
  //   tail to be the newly created node
  // - Otherwise set the newly creared node's next property to be
  //   the current head property on the list
  // - Set the head property on the list to be the newly create node
  // - Increment the length of the list by 1
  // - Return the linked list
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    // console.log(this);
    return this;
  }

  // Get node - Retrieving a node by its position in the linked list
  // Get pseudocode
  // - This function should accept an index
  // - if the index is less than zero or greater than or equal to
  //   the lenfth of the list return null
  // - Loop through the list until you reach the index and return the
  //   ndoe at that specifix index
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    var counter = 0;
    var current = this.head;
    while (counter != index) {
      current = current.next;
      counter++;
    }
    // console.log(current);
    return current;
  }

  // Set - Changing the value of a node based on its position in the Linked list
  // Set pseudocode
  // - This function should accept a value and an index
  // - use your get funcito to find the specific node
  // - If the node is not found, return false
  // - if the node is found, set the value of the node to be the value
  //   passed to the function and return true
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      //   console.log(foundNode);
      return true;
    }
    return false;
  }

  // Insert - Adding a node to the linked list at a specifix position
  // Insert pseudocode
  // - If the index is less than zero or greater than the length , return false
  // - If the index is the same as the length, push a new node to the end of the list
  // - If the index is 0, unshist new node the the start of the list
  // - Otherwise, using the get method, access the node at the index -1
  // - Set the next property on that node to be the new ndoe
  // - Set the next property on the new node to be the previous next
  // - Increment the length
  // - Return true
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === this.length) {
      return !!this.push(val);
    }

    if (index === 0) {
      return !!this.unshift(val);
    }

    let newNode = new Node(val);
    let previous = this.get(index - 1);
    let temp = previous.next;
    previous.next = newNode;
    newNode.next = temp;
    this.length++;
    console.log(this);
    return true;
  }

  // Remove - Removing a node to the linked list at a specifix position
  // Remove pseudocode
  // - If the index is less than zero or greater than the length , return undefined
  // - If the index is the same as the length - 1, pop
  // - If the index is 0, shift
  // - Otherwsie, using th get methos, access the node at the index - 1
  // - Set the next property on that node to be the next of the next node
  // - Decrement the length
  // - Retunr the value of the node removed
  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    // console.log(removed);
    return removed;
  }

  // Reverse - Reversing the linked list in place
  // Reverse pseudocode
  // - Swap the head and tail
  // - Create a variable called next
  // - Create a variable called previous
  // - Create a variable called node and initialize it to the head property
  // - Loop through the list
  // - Set next to be next property on whatever node prev is
  // - Set prev to be the value of the node variable
  // - Set the node variable to be the value fo the next variable
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next,
      prev = null;

    for (let i = 0; i < this.length; i++) {
      next = ndoe.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
  }
}

var list = new SinglyLinkedList();
list.push("Hello");
list.push("GoodBye");
list.push("!");
list.push("<3>");
list.push(":)");
// list.pop();
// list.pop();
// list.pop();
// list.shift();
// list.shift();
// list.shift();
// list.unshift("start");
// list.get(2);
// list.set(2, "test");
list.insert(1, "asdas");
