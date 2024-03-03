// Queue -> A FIFO(First In Firsr Out) Data Structure
// The First element added to the queue will be the first element removed from the queue

// Think about the last time you waited in line, Queues exist everywhere!
// How do we use them in programming?
// - Background taks
// - Uploading resources
// - Printing / Task processing

//Big O of Queue
// Insertion - O(1), Removal - O(1), Searching - O(N), Access - O(N),

// Where Queues are used
//  - Managing function invocations
//  - Undo/Redo
//  - Routing(this history object) is treated like a stack

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Enqueue Pseudocode
  // - The function should accept a value
  // - Create a new node with the value passed to the function
  // - If there are no nodes in the queue, set this node to be the first and last property of the queue
  // - Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
  // - increment the size of the queue by 1
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  // Dequeue Pseudocode
  // - If there are no nodes in the queue or no first property, return null
  // - Store the first property in a variable
  // - See if the first is the same as the last(check if there is only 1 node). If so, set the first and last to be null
  // - If there is more than one node, set the first property to be the next property on the current first
  // - Decrement the size of the queue by 1
  // - Return the value of the node removed
  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

var q = new Queue();
q.enqueue("First");
q.enqueue("Second");
q.enqueue("Third");
q.enqueue("Fourth");
q.dequeue();
q.dequeue();
q.dequeue();
q;
