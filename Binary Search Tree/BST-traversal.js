class Node {
    constructor(value) {
        this.val = value;
        this.leftChild = null;
        this.rightChild = null;
    }

}
/**
 * Traversal in binary search tree.
 *
 * Pre Order: root, left, right
 * In Order: left root right
 * Post Order: left right root
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

    //Method 1 for In order traversal
    preOrderPrint(currentNode) {
        if (currentNode!==null) {
            console.log(currentNode.val);
            this.preOrderPrint(currentNode.leftChild);
            this.preOrderPrint(currentNode.rightChild);
        }
    }
    
    //Method 2 for In order traversal
    preOrderItr(root){
        var stack = [];
        stack.push(root);
        while(stack.length > 0){
            root = stack.pop();
            console.log(root.val + " ");
            if(root.rightChild != null){
                stack.push(root.rightChild);
            }
            if(root.leftChild!= null){
                stack.push(root.leftChild);
            }
        }
    }
  
    //Method 1 for In order traversal
    inOrderPrint(currentNode) {
        if (currentNode!==null) {
            this.inOrderPrint(currentNode.leftChild);
            console.log(currentNode.val);
            this.inOrderPrint(currentNode.rightChild);
        }
    }
    
    //Method 2 for In order traversal
    inorderItr(root){
        var stack = [];
        var node = root;
        while(true){
            if(node != null){
                stack.push(node);
                node = node.leftChild;
            }
            else{
                if(!stack.length){
                    break;
                }
                node = stack.pop();
                console.log(node.val);
                node = node.rightChild;
            }
        }
    }
  
    //Method 1 for Post order traversal
    postOrderPrint(currentNode) {
        if (currentNode !== null) {
            this.postOrderPrint(currentNode.leftChild);
            this.postOrderPrint(currentNode.rightChild);
            console.log(currentNode.val);
        }
    }
    
    //Method 2 for Post order traversal
    postOrderItr(root){
        var stack1 = [];
        var stack2 = [];
        stack1.push(root);
        while(stack1.length > 0){
            root = stack1.pop();
            if(root.leftChild != null){
                stack1.push(root.leftChild);
            }
            if(root.rightChild != null){
                stack1.push(root.rightChild);
            }
            stack2.push(root);
        }
        while(stack2.length > 0){
            var poppedData = stack2.pop()
            console.log(poppedData.val + " ");
        }
    }

}

var BST = new BinarySearchTree(6);
console.log("The root val for BST : "+BST.root.val)
BST.insertBST(4);
BST.insertBST(9);
BST.insertBST(5);
BST.insertBST(2);
BST.insertBST(8);
BST.insertBST(12);

//console.log('----Pre----');
// BST.preOrderPrint(BST.root);
// BST.preOrderItr(BST.root);

// console.log('---In-----');
//BST.inOrderPrint(BST.root);
//BST.inorderItr(BST.root)

// console.log('----Post----');
//BST.postOrderPrint(BST.root);
// BST.postOrderItr(BST.root);

