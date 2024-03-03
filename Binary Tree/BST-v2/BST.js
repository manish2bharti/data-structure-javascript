//Big O of BSt
// Insertion - O(log N), Find - O(Log N),

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

  // Insertring a node
  // Steps - Iteratively or Recursively
  // - Create a new node
  // - Starting at the root
  //   - Check if there is a root, if not - the root now becomes that new node!
  //   - If there is a root, check if the value of the new node is greater than or less than the value of the root
  //   - If it is greater
  //      - Check to see of there is a note to the right
  //          - if there is, move to that node and repeat these steps
  //          - If there is not, add that node as the right property
  //   - If it is less
  //      - Check to see of there is a note to the left
  //          - if there is, move to that node and repeat these steps
  //          - If there is not, add that node as the leftt property

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

  // Searching a node
  // Steps - Iteratively or Recursively
  // - Starting at the root
  //   - Check if there is a root, if not - we're done searching
  //   - If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done.
  //   - If not, check to see if the value is greater than or less than the value of the root
  //   - If it is greater
  //      - Check to see of there is a node to the right
  //          - if there is, move to that node and repeat these steps
  //          - If there is not, we're done searching
  //   - If it is less
  //      - Check to see of there is a node to the left
  //          - if there is, move to that node and repeat these steps
  //          - If there is not, we're done searching

  contains(value) {
    if (this.root === null) return false;

    let current = this.root,
      found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }
}

// let tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(5);
// tree.insert(15);
// tree.insert(3);
// tree.insert(6);
// tree.insert(21);
// tree.insert(13);

// tree.contains(9);
