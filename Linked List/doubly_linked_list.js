// Doubly Linked List: Almost identicle to singly linked list, except every node has another pointer, to the previosu node.

//          |----------------------------------------------|
//          |                                              |
//          |                                              |
//      |-------|  next |-------|  next |-------|  next |-------|
//      |       |------>|       |------>|       |------>|       |
// <-----   12  |       |  9    |       |  5    |       |  14   |------>
// null |       |<------|       |<------|       |<------|       | null
//      |-------|  prev |-------| prev  |-------|  prev |-------|

// Comparing with the single linked lists -> more memonry ==== more flexibility
// Its almost always a tradeoff !

// 2 base classes
// Node -> Val, Next, Prev
// Doubly Lined List -> Head, Tail, Length

//Big O of Doubly Linked List
// Insertion - O(1), Removal - O(1), Searching - O(n), Removal - O(n)
// Technically searching is O(n/2), but thats still O(n)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Pushing -> Adding a node in the end of the doubly linked list
  // Pushing pseudocode
  // 1. Create a new node with the value passed to the function
  // 2. If the head property is null set the head and tail to be the newly created node
  // 3. If not, set the next property on the tail to be that node
  // 4. Set the previous property on the newly created node to be the tail
  // 5. Set the tail to be the newly created node
  // 6. Increment the length
  // 7. Return the doubly linked list
  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // Popping -> Removing a node from the end of the doubly linked list
  // Popping pseudocode
  // 1. If there is no head, return undefined.
  // 2. Store the current tail in a variable to return later.
  // 3. if the length is 1, set the head and tail to be null
  // 4. Update the tail to be the previous Node
  // 5. Set the newTails next to null
  // 6. Decrement the length
  // 7. Return the value removed

  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  // Shifting -> Removing a node from the beginning of the doubly linked list
  // Shifting pseudocode
  // 1. If there is no head or length is 0, return undefined.
  // 2. Store the current head property in a variable(we'll call in old head).
  // 3. if the length is 1, set the head and tail to be null
  // 4. Update the head to be the next of the old head
  // 5. Set the head's prev property to null
  // 6. Set thee old head's next to null
  // 7. Decrement the length
  // 8. Return old head

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  // Unshifting - Adding a new node from the beginning of the Doubly Linked list
  // Unshifting pseudocode
  // - Create a new node using the values passed to the function
  // - If there is no head property on the list, set the head and
  //   tail to be the newly created node
  // - Otherwise
  //    - set the prev property on the head of the list to be the new node
  //    - set the next property on the new node to be the head property
  //    - Update the head to be the new node
  // - Increment the length of the list by 1
  // - Return the linked list

  unshift(val) {
    let newNOde = new Node(val);
    if (this.length === 0) {
      this.head = newNOde;
      this.tail = newNOde;
    } else {
      this.head.prev = newNOde;
      newNode.next = this.head;
      this.head = newNOde;
    }

    this.length++;
    return this;
  }

  // Get - Accessing a node in the Doubly linked list by its position
  // Get pseudocode
  // - This function should accept an index
  // - if the index is less than zero or greater than or equal to the length of the list return null
  // - If the index is less than or equal to half of the length of the list
  //    - Loop through the list starting from the head and loop towards the middle
  //    - Return the node once its found
  // - If the index is greater than half of the length of the list
  //    - Loop through the list starting from the tail and loop towards the middle
  //    - Return the node once it is found
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index <= this.length / 2) {
      var counter = 0;
      var current = this.head;
      while (counter != index) {
        current = current.next;
        counter++;
      }

      return current;
    } else {
      var count = this.length - 1;
      var current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }

  // Set - Replacing the value of a node to the in the Doubly Linked list
  // Set pseudocode
  // - Create a variable which is the result of the get method at the index passed to the function
  //    - If the get method returns a valid node, set the value of that node to be the value passed to the function
  //    - Return true
  // - Otherwise, return false
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // Insert - Adding a node in the Doubly linked list at a specifix position
  // Insert pseudocode
  // - If the index is less than zero or greater than the length , return false
  // - If the index is 0, unshist new node the the start of the list
  // - If the index is the same as the length, push a new node to the end of the list
  // - Otherwise, using the get method, access the node at the index -1
  // - Set the next and prev property on the correct node to link everything together
  // - Increment the length
  // - Return true
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;

    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }

  // Remove - Removing a node to the Doubly linked list at a specifix position
  // Remove pseudocode
  // - If the index is less than zero or greater than the length , return undefined
  // - If the index is 0, shift
  // - If the index is the same as the length - 1, pop
  // - Otherwsie, using th get method to retrieve the to be removed
  // - Update the next and prev properties to remove the found node from the list
  // - Set the next and prev to null on the found node
  // - Decrement the length
  // - Returnn the removed node
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    //  removedNode.prev.next = removedNode.next;
    // removedNode.next.next =  removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}
