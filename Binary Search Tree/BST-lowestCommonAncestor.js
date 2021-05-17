class Node {
    constructor(value) {
        this.val = value;
        this.leftChild = null;
        this.rightChild = null;
    }

}
/**
 * Lowest common ancestor in binary search tree.
 *
 * Time complexity O(height of tree)
 * Space complexity O(height of tree)
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

    lowestCommonAncestor(root, p, q) {
        if (root.val > Math.max(p, q)) {
            return this.lowestCommonAncestor(root.leftChild, p, q);
        } else if (root.val < Math.min(p, q)) {
            return this.lowestCommonAncestor(root.rightChild, p, q);
        } else {
            return root;
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

// Input: 4,9 output:// 6
// Input: 8,12 output:// 9
// Input: 2,5 output:// 4

console.log(BST.lowestCommonAncestor(BST.root, 4,9));


