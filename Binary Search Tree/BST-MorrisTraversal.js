class Node {
    constructor(value) {
        this.val = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}
/**
 * Morris inorder/preorder traversals
 * Morris (InOrder) traversal is a tree traversal algorithm that does not employ the use of recursion or a stack. 
 * In this traversal, links are created as successors and nodes are printed using these links. 
 * Finally, the changes are reverted back to restore the original tree.
 * 
 * 
 * Algorithm
 * Initialize the root as the current node curr.
 * While curr is not NULL, check if curr has a left child.
 * If curr does not have a left child, print curr and update it to point to the node on the right of curr.
 * Else, make curr the right child of the rightmost node in curr's left subtree.
 * Update curr to this left node.
 * 
 *        X
 *      /   \
 *     Y     Z
 *    / \   / \
 *   A   B C   D
 * 
 * First, X is the root, so it is initialized as current. 
 * X has a left child, so X is made the rightmost right child of X's left subtree -- the immediate predecessor to X in an inorder traversal. 
 * So X is made the right child of B, then current is set to Y. 
 * The tree now looks like this:
 * 
 *           Y
 *          / \
 *         A   B
 *              \
 *               X
 *              / \
 *            (Y)  Z
 *                / \
 *               C   D
 * 
 * (Y) above refers to Y and all of its children, which are omitted for recursion issues. 
 * The important part is listed anyway. Now that the tree has a link back to X, the traversal continues...
 * 
 * 
 *              A
 *               \
 *                Y
 *               / \
 *             (A)  B
 *                   \
 *                    X
 *                   / \
 *                 (Y)  Z
 *                     / \
 *                    C   D
 * 
 * Then A is outputted, because it has no left child, and current is returned to Y, 
 * which was made A's right child in the previous iteration. On the next iteration, 
 * Y has both children. However, the dual-condition of the loop makes it stop when it reaches itself, 
 * which is an indication that it's left subtree has already been traversed. 
 * So, it prints itself, and continues with its right subtree, which is B.
 * 
 * B prints itself, and then current becomes X, which goes through the same checking process as Y did, 
 * also realizing that its left subtree has been traversed, continuing with the Z. 
 * The rest of the tree follows the same pattern.
 * 
 * No recursion is necessary, because instead of relying on backtracking through a stack, 
 * a link back to the root of the (sub)tree is moved to the point at which 
 * it would be accessed in a recursive inorder tree traversal algorithm anyway -- after its left subtree has finished.
 * 
 * Time complexity O(n)
 * Space complexity O(1)
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
  
    morrisTraversalInorder(root) {
        var current = root;
        while(current != null) {
            //left is null then print the node and go to right
            if (current.leftChild == null) {
                console.log(current.val + " ");
                current = current.rightChild;
            }
            else {
                //find the predecessor.
                var predecessor = current.leftChild;
                //To find predecessor keep going right till right node is not null or right node is not current.
                while(predecessor.rightChild != current && predecessor.rightChild != null){
                    predecessor = predecessor.rightChild;
                }
                //if right node is null then go left after establishing link from predecessor to current.
                if(predecessor.rightChild == null){
                    predecessor.rightChild = current;
                    current = current.leftChild;
                }else{ //left is already visit. Go rigth after visiting current.
                    predecessor.rightChild = null;
                    console.log(current.val + " ");
                    current = current.rightChild;
                }
            }
        }
    }

  morrisTraversalPreorder(root) {
      var current = root;
      while (current != null) {
          if(current.leftChild == null) {
              console.log(current.val + " ");
              current = current.rightChild;
          }
          else {
              var predecessor = current.leftChild;
              while(predecessor.rightChild != current && predecessor.rightChild != null) {
                  predecessor = predecessor.rightChild;
              }
              if(predecessor.rightChild == null){
                  predecessor.rightChild = current;
                  console.log(current.val + " ");
                  current = current.leftChild;
              }else{
                  predecessor.rightChild = null;
                  current = current.rightChild;
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

console.log(BST.morrisTraversalPreorder(BST.root)); 

