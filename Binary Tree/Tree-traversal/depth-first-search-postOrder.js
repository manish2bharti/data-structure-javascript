// Depth First Search - Post Order
// Steps - Recursively
// - Create a variable to store the values of nodes visited
// - Store the root of the BST in a variable called current
// - Write a helper function which accepts a node
//      - Push the value of the node to the variable that stores the values
//      - If the node has a left property, call the helper function with the left property on the node
//      - If the node has a right property, call the helper function with the right property on the node
// - InVoke the helper function with the current variable
// - Return the array of values

//                  10
//          6                15
//      3       8                 20
// in Breadth forst search -?  [3,8,6, 20, 15, 10]

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

  DFSPostOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(this.root);

    return data;
  }
}
