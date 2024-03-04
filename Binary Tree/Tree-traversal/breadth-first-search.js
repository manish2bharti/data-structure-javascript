// Steps - Iteratively
// - Create a queue and a variable to store the values of nodes visited
// - Place the root node in the queue
// - Loop as long as there is anythign in the queue
//      - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
//      - If there is a left property on the node dequeued - add it to the queue
//      - If there is a right property on the node dequeued - add it to the queue
// - Return the variable that stores the values

//                  10
//          6                15
//      3       8                 20
// in Breadth forst search -? 10 -> 6 =? 15 -> 3 -> 8 -> 20

// queue [10] visited []
// queue [] visited [10]
// queue [6, 15] visited [10]
// queue [15] visited [10, 6]
// queue [15, 3, 8] visited [10, 6]
// queue [3, 8] visited [10, 6, 15]
// queue [3, 8, 20] visited [10, 6, 15]
// queue [8, 20] visited [10, 6, 15, 3]
// queue [20] visited [10, 6, 15, 3, 8]
// queue [] visited [10, 6, 15, 3, 8, 20]

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  BFS() {
    let node = this.root,
      data = [],
      queue = [];

    queue.push(this.root);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }
}
