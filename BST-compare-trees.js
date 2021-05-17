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
  
    sameTree(root1, root2){
      if(root1 == null && root2 == null){
        return true;
      }
      if(root1 == null || root2 == null){
        return false;
      }

      return root1.val == root2.val && 
        this.sameTree(root1.leftChild, root2.leftChild) &&
        this.sameTree(root1.rightChild, root2.rightChild);
    }


}

var BST = new BinarySearchTree(6);
BST.insertBST(4);
BST.insertBST(9);
BST.insertBST(5);
BST.insertBST(2);
BST.insertBST(8);
BST.insertBST(12);

var BST2 = new BinarySearchTree(6);
BST2.insertBST(4);
BST2.insertBST(9);
BST2.insertBST(5);
BST2.insertBST(2);
BST2.insertBST(8);
BST2.insertBST(12);

console.log(BST.sameTree(BST.root, BST2.root));
