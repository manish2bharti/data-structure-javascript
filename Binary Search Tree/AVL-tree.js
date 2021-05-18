class Node {
   constructor(value) {
       this.val = value;
       this.left = null;
       this.right = null;
   }

}
/**
 * 
 *  AVL tree is a self-balancing Binary Search Tree (BST) where the difference between heights of left and right 
 *  subtrees cannot be more than one for all nodes.
 * 
 */

class AVLTree {
   constructor(rootValue) {
       this.root = new Node(rootValue);
   }

   leftRotate(root){
      var newRoot = root.right;
      root.right = root.right.left;
      newRoot.left = root;
      root.height = this.setHeight(root);
      root.size = this.setSize(root);
      newRoot.height = this.setHeight(newRoot);
      newRoot.size = this.setSize(newRoot);
      return newRoot;
   }

   rightRotate(root){
      var newRoot = root.left;
      root.left = root.left.right;
      newRoot.right = root;
      root.height = this.setHeight(root);
      root.size = this.setSize(root);
      newRoot.height = this.setHeight(newRoot);
      newRoot.size = this.setSize(newRoot);
      return newRoot;
   }

   setHeight(root){
      if(root == null){
          return 0;
      }
      return 1 + Math.max((root.left != null ? root.left.height : 0), (root.right != null ? root.right.height : 0));
   }

   height(root){
      if(root == null){
         return 0;
      }else {
         return root.height;
      }
   }

   setSize(root){
      if(root == null){
          return 0;
      }
      return 1 + Math.max((root.left != null ? root.left.size : 0), (root.right != null ? root.right.size : 0));
   }

   insert(root, data){
      if(root == null){
          return new Node(data) 
      }
      if(root.val <= data){
          root.right = this.insert(root.right,data);
      }
      else{
          root.left = this.insert(root.left,data);
      }
      var balance = this.balance(root.left, root.right);
      if(balance > 1){
          if(this.height(root.left.left) >= this.height(root.left.right)){
              root = this.rightRotate(root);
          }else{
              root.left = this.leftRotate(root.left);
              root = this.rightRotate(root);
          }
      }else if(balance < -1){
          if(this.height(root.right.right) >= this.height(root.right.left)){
              root = this.leftRotate(root);
          }else{
              root.right = this.rightRotate(root.right);
              root = this.leftRotate(root);
          }
      }
      else{
          root.height = this.setHeight(root);
          root.size = this.setSize(root);
      }
      return root;
   }

   balance(rootLeft, rootRight){
      return this.height(rootLeft) - this.height(rootRight);
   }

   inOrder(root){
      if(root == null){
          return;
      }
      this.inOrder(root.left);
      console.log(root.val + " ");
      this.inOrder(root.right);
   }

   preOrder(root){
      if(root == null){
          return;
      }
      console.log(root.val + " ");
      this.preOrder(root.left);
      this.preOrder(root.right);
   }

   postOrder(root){
      if(root == null){
          return;
      }
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.val + " ");
   }
}

var avlTree  = new AVLTree();
var root = null;
root = avlTree.insert(root, -10);
root = avlTree.insert(root, 2);
root = avlTree.insert(root, 13);
root = avlTree.insert(root, -13);
root = avlTree.insert(root, -15);
root = avlTree.insert(root, 15);
root = avlTree.insert(root, 17);
root = avlTree.insert(root, 20);


console.log(avlTree.inOrder(root));
