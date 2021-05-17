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
    
    addNode(data, head){
        var tempHead = head;
        var n = new Node(data);
        if(head == null){
            head = n;
            return head;
        }
        var prev = null;
        while(head != null){
            prev = head;
            if(head.val < data){
                head = head.rightChild;
            }else{
                head = head.leftChild;
            }
        }
        if(prev.val < data){
            prev.rightChild = n;
        }else{
            prev.leftChild = n;
        }
        return tempHead;
    }

  	height(root){
        if(root == null){
            return 0;
        }
        var leftHeight  = this.height(root.leftChild);
        var rightHeight = this.height(root.rightChild);
        return Math.max(leftHeight, rightHeight) + 1;
    }
    

     printOrder(currentNode) {
        if (currentNode!==null) {
            console.log(currentNode.val);
            this.preOrderPrint(currentNode.leftChild);
            this.preOrderPrint(currentNode.rightChild);
        }
    }
    
}

var bt = new BinarySearchTree();
var head = null;
head = bt.addNode(1, head);
head = bt.addNode(2, head);
head = bt.addNode(3, head);
head = bt.addNode(4, head);
head = bt.addNode(5, head);
head = bt.addNode(6, head);
head = bt.addNode(7, head);
head = bt.addNode(8, head);
head = bt.addNode(9, head);

console.log(bt.printOrder(head));

//Space complexity of height of BT is O(n)
//Time complexity of height of BT is O(n) because we have to visit to every node
