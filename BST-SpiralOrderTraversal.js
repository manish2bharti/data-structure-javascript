class Node {
    constructor(value) {
        this.val = value;
        this.leftChild = null;
        this.rightChild = null;
    }

}
/**
 * Given a root of binary tree, print in spiral order. 
 * e.g               1 
 *             2           3 
 *        4       5     6      7
 *      8   9  10    11 
 * should print 1 3 2 4 5 6 7 8 9 10 11
 *
 * Solution: Use two stack. Put root in stack1. While stack1 is not
 * empty take items from stack1 and put its child left,right in stack2.
 * Then once stack1 is empty pop from stack2 and put its child right,
 * left into stack1.
 * 
 * Time complexity is O(n) 
 * Space complexity is O(n)
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
    
    spiralOrderTraversal(root) {
        if (root == null) {
            return;
        }
        var s1 = [];
        var s2 = [];
        s1.push(root);

        while (s1.length || s2.length) {
            while (s1.length > 0) {
                root = s1.pop();
                console.log(root.val + " ");
                if (root.leftChild != null) {
                    s2.push(root.leftChild);
                }
                if (root.rightChild != null) {
                    s2.push(root.rightChild);
                }
            }
            while (s2.length > 0) {
                root = s2.pop();
                console.log(root.val + " ");
                if (root.rightChild != null) {
                    s1.push(root.rightChild);
                }
                if (root.leftChild != null) {
                    s1.push(root.leftChild);
                }
            }
        }
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

console.log(BST.spiralOrderTraversal(BST.root));

//Space complexity of height of BST is O(n)
//Time complexity of height of BST is O(n) because we have to visit to every node



