class Node {
    constructor(value) {
        this.val = value;
        this.leftChild = null;
        this.rightChild = null;
    }

}
/**
 * Given a binary tree print its level order traversal in reverse
 * e.g           6
 *          5           10
 *        -3        8      16
 *                       11
 * Output should be 11 -3 8 16 5 10 6
 * 
 * Solution
 * Maintain a stack and queue. Do regular level order traversal but
 * put right first in the queue. Instead of printing put the result
 * in stack. Finally print contents of the stack.
 * 
 * Time and space complexity is O(n)
 * 
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
  
  reverseLevelOrderTraversal(root){
        if(root == null){
            return;
        }
        var q = [];
        var s = [];
        
        q.push(root);
        while(q.length > 0){
            root = q.shift();
            if(root.rightChild != null){
                q.push(root.rightChild);
            }
            if(root.leftChild != null){
                q.push(root.leftChild);
            }
            s.push(root);
        }
        while(s.length > 0){
        	var temp = s.pop();
            console.log(temp.val);
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

BST.reverseLevelOrderTraversal(BST.root);

//Space complexity of height of BST is O(n)
//Time complexity of height of BST is O(n) because we have to visit to every node
