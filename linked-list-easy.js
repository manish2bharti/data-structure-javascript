//A Linked list is a common data structure where elements are stored in a 
//node the node contains two key peices of information.
// The element itself and reference to the next node.

function LinkedList(){
   this.head = null;
   this.tail = null;
}

function Node(value, next, prev){
   this.value = value;
   this.next = next;
   this.prev = prev;
}

LinkedList.prototype.addToHead = function(value){
   var newNode = new Node(value, this.head, null);
   if(this.head){
      this.head.prev = newNode;
   }else{
      this.tail = newNode;
   }

   this.head = newNode;
}

// var ll = new LinkedList();
// ll.addToHead(100);
// ll.addToHead(200);
// ll.addToHead(300);
// console.log(ll)

LinkedList.prototype.addToTail = function(value){
   var newNode = new Node(value, null, this.tail);
   if(this.tail){
      this.tail.next = newNode;
   }else{
      this.head = newNode;
   }

   this.tail = newNode;
}

// var ll = new LinkedList();
// ll.addToTail(10);
// ll.addToTail(20);
// ll.addToTail(30);
// ll.addToHead(100);
// console.log(ll)

LinkedList.prototype.removeHead = function(){
   if(!this.head) return null;

   var val = this.head.value;
   this.head = this.head.next;

   if(this.head){
      this.head,prev = null;
   }else{
      this.tail = null;
   }

   return val;
}

// var ll = new LinkedList();
// ll.addToHead(1000);
// ll.addToHead(2000);
// ll.addToTail(3000);
// ll.removeHead();
// console.log(ll.removeHead())

LinkedList.prototype.removeTail = function(){
   if(!this.tail) return null;
   var val = this.tail.value;
   this.tail = this.tail.prev;
   if(this.tail){
      this.tail.next = null
   }else{
      this.head = null;
   }

   return val;
}

// var ll = new LinkedList();
// ll.addToHead(1000);
// ll.addToHead(2000);
// ll.addToHead(3000);
// ll.removeTail();
// console.log(ll.removeTail())

LinkedList.prototype.search = function(searchValue){
   var currentNode = this.head;
   while(currentNode){
      if(currentNode.value === searchValue){
         return currentNode.value;
      }
      currentNode = currentNode.next;
   }
   return null;
}

// var ll = new LinkedList();
// ll.addToHead(123);
// ll.addToHead(70);
// ll.addToHead("hello");
// ll.addToTail(19);
// ll.addToTail("world");
// ll.addToTail(3000);
// console.log(ll.search(70));

LinkedList.prototype.indedOf = function(value){
   var indexes = [];
   var currentIndex = 0;
   var currentNode = this.head;
   while(currentNode){
      if(currentNode.value == value){
         indexes.push(currentIndex);
      }
      currentNode = currentNode.next;
      currentIndex++;
   }

   return indexes;
}

// var ll = new LinkedList();
// ll.addToTail(1);
// ll.addToTail(5);
// ll.addToTail(3);
// ll.addToTail(5);
// ll.addToTail(8);
// ll.addToTail(7);
// ll.addToTail(5);
// console.log(ll.indedOf(5));
