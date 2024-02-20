// Stack -> A LIFO Data Structure
// The last element added to the stack will be the first element removed from the stack

// Think about a stack of plates, or a stack of the markers, or a stack of .. anytihng.
// As you pile it up the  last thing (or the topmost thing) is what gets removed first.

//Big O of stack
// Insertion - O(1), Removal - O(1), Searching - O(N), Access - O(N),

// Where stacks are used
//  - Managing function invocations
//  - Undo/Redo
//  - Routing(this history object) is treated like a stack

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Pushing Pseudocode
  // - The function should accept a value
  // - Create a new node with the value
  // - If there are no nodes in the stack, set the first and last property to be the newly created node
  // - If there is at least one node, create a variable that stores the current first property on the stack
  // - Rest the first property to be the newly created node
  // - Set the next property on the node to be the previously created variable
  // - increment the size of the stack by 1
  push(val) {
    let newNode = new Node(val);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    this.size++;
    return this;
  }

  // Pop Pseudocode
  // - If there are no nodes in the stack, return null
  // - Create a temporary variable to store the first property on the stack
  // - If there is only one node, Set the first and last property to be null
  // - If there is more than one node, set the first property to be the next property on the current first
  // - Decrement the size of the stack by 1
  // - Return the value of the node removed
  pop() {
    if (!this.size) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
