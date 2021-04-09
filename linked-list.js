//A Linked list is a common data structure where elements are stored in a 
//node the node contains two key peices of information.
// The element itself and reference to the next node.

//Diffrence between Array vs Linked List
// Arrays:
// 1. Fixed size
// 2. Ineffcient insertions and deletions
// 3. Random access e.e, efficient indexing
// 4. May result in much memry waste
// 5. Sequention access is faster [Reason: Elements in contiguous memory locations]

//Linked List:
// 1. Dynamic size
// 2. Efficient insertions and deletion
// 3. No random access
// 4. No waste of memory



function LinkedList(){
  var length = 0;
  var head = null;
  
  var Node = function(element){
    this.element = element;
    this.next = null;
  }
  
  this.size = function(){
    return length;
  };
  
  this.head = function(){
    return head;
  };
  
  this.add = function(element){
    var node = new Node(element);
    if(head === null){
      head = node;
    } else{
      var currentNode = head;
      
      while(currentNode.next){
        currentNode = currentNode.next;
      }
      
      currentNode.next = node;
    }
    
    length++;
  };
  
  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element == element){
      head = currentNode.next;
    } else{
      while(currentNode.element  != element){
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      
      previousNode.next = previousNode.next;
    }
    length-- ;
  };
  
  this.isEmpty = function(element){
    return length === 0;
  };
  
  this.indexOf = function(){
    var currentNode = head;
    var index = -1;
    while(currentNode){
      index++;
      if(currentNode.element === element){
        return index;
      }
      
      currentNode = currentNode.next;
    }
    return -1;
  };
  
  
  this.element = function(index){
    var currentNode = head;
    var count = 0;
    while(count < index){
      count++
      currentNode = currentNode.next;
    }
    return currentNode.element;
  };
  
  this.addIt = function(index, element){
    var node = new Node(element);
    var currentNode = head
    var previousNode;
    var currentIndex = 0;
    
    if(index > length){
      return false;
    }
    
    if(index === 0){
      node.next = currentNode;
      head = node;
    } else{
      while(currentIndex < index){
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.start;
      }
      node.next = currentNode;
      previousNode.next = node
    }
    length++;
  };
  
  this.removeAt = function(index){
    var currentNode = head
    var previousNode;
    var currentIndex = 0;
    
    if(index < 0 || index >= length){
      return false;
    }
    
    if(index === 0){
      head = currentNode.next;
    } else{
      while(currentIndex < index){
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
    return currentNode.element
  };
}

var congo = new LinkedList();
congo.add('kitten');
congo.add('Puppy');
congo.add('Dog');
congo.add('Cat');
congo.add('Fish');
console.log(congo.size());
console.log(congo.removeAt(2));
console.log(congo.size());
