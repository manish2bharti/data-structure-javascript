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
  
    sizeOfTree(root){
      if(root == null){
            return 0;
      }
      return this.sizeOfTree(root.leftChild) + this.sizeOfTree(root.rightChild) + 1;
    }
  
    height(root){
        if(root == null){
            return 0;
        }
        var leftHeight  = this.height(root.leftChild);
        var rightHeight = this.height(root.rightChild);
        return Math.max(leftHeight, rightHeight) + 1;
    }


}

var BST = new BinarySearchTree(6);
BST.insertBST(4);
BST.insertBST(9);
BST.insertBST(5);
BST.insertBST(2);
BST.insertBST(8);
BST.insertBST(12);
BST.insertBST(13);
BST.insertBST(14);
BST.insertBST(15);

console.log(BST.height(BST.root))
//Space complexity of height of BST is O(n)
//Time complexity of height of BST is O(n) because we have to visit to every node
