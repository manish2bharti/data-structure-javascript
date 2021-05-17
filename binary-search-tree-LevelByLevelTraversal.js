class Node {
    constructor(value) {
        this.val = value;
        this.leftChild = null;
        this.rightChild = null;
    }

}
/**
 * 
 * Given a binary tree print each level on new line.
 * 
 * e.g           6
 *           5            10
 *         -3        8          16
 *                           11
 * Output :   6
 *            5 10
 *            -3 8 16
 *            11
 *            
 * Solution
 * Technique 1:
 * Use 2 queue. Keep polling from q1 and offer to q2 till q1 is empty. 
 * After that print a new line. Keep polling from q2 and offer to q1 
 * till q2 is empty. Keep doing this still both q1 and q2 are empty.
 * 
 * Technique 2
 * Use one queue with delimiter. Add a delimiter null after every level.
 * As soon as you encounter a null print a new line and add null at end of queue
 * 
 * Time space complexity for all above algorithm is O(n).
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
  
  /**
     * Use two queue to print level by level
     */
   levelByLevelTraversal (root){
     if (root == null) {
       return;
     }
     var q1 = [];
     var q2 = [];
     q1.push(root);
     while (q1.length || q2.length) {
       while (q1.length > 0) {
         root = q1.shift();
         console.log(root.val + " ");
         if (root.leftChild != null) {
           q2.push(root.leftChild);
         }
         if (root.rightChild != null) {
           q2.push(root.rightChild);
         }
       }
       console.log(" ");
       while (q2.length > 0) {
         root = q2.shift();
         console.log(root.val + " ");
         if (root.leftChild != null) {
           q1.push(root.leftChild);
         }
         if (root.rightChild != null) {
           q1.push(root.rightChild);
         }
       }
       console.log(" ");
     }
   }
   
   /**
     * Use one queue and delimiter to print level by level
     */
   levelByLevelOneQueueUsingDelimiter(root) {
        if (root == null) {
            return;
        }
        var q = [];
        q.push(root);
        q.push(null);
        while (q.length > 0) {
            root = q.shift();
            if (root != null) {
                console.log(root.val + " ");
                if (root.leftChild != null) {
                    q.push(root.leftChild);
                }
                if (root.rightChild != null) {
                    q.push(root.rightChild);
                }
            } else {
                if (q.length > 0) {
                    console.log(" ");
                    q.push(null);
                }
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

//BST.levelByLevelTraversal(BST.root); 
BST.levelByLevelOneQueueUsingDelimiter(BST.root);
// console.log(BST.height(BST.root))
//Space complexity of height of BST is O(n)
//Time complexity of height of BST is O(n) because we have to visit to every node




