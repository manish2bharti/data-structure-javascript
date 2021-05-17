class Node {
    constructor(value) {
        this.val = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}
/**
 * Test cases
 * Empty tree
 * Tree with only left side
 * Tree with only right side
 * Mixed size tree
 * Full tree
 * complete tree
 */
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
  
   levelOrderTraversal (root){
     if(root == null){
       console.log("Please enter a valid tree!");
       return;
     }
     var queue = [];
     queue.push(root);
     while(queue.length > 0){
       root = queue.shift();
       console.log(root.val + " ");
       if(root.leftChild != null){
         queue.push(root.leftChild);
       }
       if(root.rightChild != null){
         queue.push(root.rightChild);
       }
     }
   }

}

var BST = new BinarySearchTree(6);
BST.insertBST(10);
BST.insertBST(16);
BST.insertBST(5);
BST.insertBST(-3);
BST.insertBST(11);
BST.insertBST(8);

console.log(BST.levelOrderTraversal(BST.root)); 

//Space complexity of level order traversal of BST is O(n)
//Time complexity of  level order traversal  of BST is O(n) because we have to visit to every node



