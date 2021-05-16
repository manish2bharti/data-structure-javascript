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
  
    printPath(root, sum, path){
      if(root == null){
        return false;
      }
      
      if(root.leftChild == null && root.rightChild == null){
        if(root.val == sum){
          path.push(root);
          return true;
        }else{
          return false;
        }
      }
      if(this.printPath(root.leftChild, sum - root.val, path) || 
         this.printPath(root.rightChild, sum - root.val, path)){
            path.push(root);
            return true;
        }
        return false;
    }
}

var BST = new BinarySearchTree(6);
BST.insertBST(10);
BST.insertBST(16);
BST.insertBST(5);
BST.insertBST(-3);
BST.insertBST(11);
BST.insertBST(8);
var result = [];
var r = BST.printPath(BST.root, 24, result);
if(r){
  result.forEach(node => console.log(node.val + " "));
}else{
  console.log("No path for sum " + 24); 
}
// console.log(BST.height(BST.root))
//Space complexity of height of BST is O(n)
//Time complexity of height of BST is O(n) because we have to visit to every node





