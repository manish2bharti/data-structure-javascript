class Node {
    constructor(value) {
        this.val = value;
        this.leftChild = null;
        this.rightChild = null;
    }

}

class BinarySearchTree {
    constructor(rootValue) {
        this.root = new Node(rootValue);
    }

    insert(currentNode, newValue) {
        if (currentNode === null) {
            currentNode = new Node(newValue);
        } else if (newValue < currentNode.val) {
            currentNode.leftChild = this.insert(currentNode.leftChild, newValue);
        } else {
            currentNode.rightChild = this.insert(currentNode.rightChild, newValue);
        }
        return currentNode;
    }
  
    insertBST(newValue) {
        if(this.root==null){
            this.root=new Node(newValue);
            return;
        }
        this.insert(this.root, newValue);
    }
  
    search(currentNode, key){
      if(currentNode !== null){
        //return null;
        if(currentNode.val === key){
          console.log(currentNode.val + ' found')
          return currentNode;
        }else if(currentNode.val < key){
            return this.search(currentNode.rightChild, key);
        }else if(currentNode.val > key){
            return this.search(currentNode.leftChild, key);
        } else{
          console.log(key + ' not found in tree')
          return null;
        }
      }
    }
}

var BST = new BinarySearchTree(6);
console.log("The root val for BST : "+BST.root.val)
BST.insertBST(4);
BST.insertBST(9);
BST.insertBST(5);
BST.insertBST(2);
BST.insertBST(8);
BST.insertBST(12);


BST.search(BST.root, 4);
// Complexity of Search in Balanced BST - O(log n)
// Complexity of Search in Regular BST - O(n)
