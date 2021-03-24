// Initializing the stack class
function Stack(){
  this.dataStore = [];
  this.count = 0;
  this.push = push; // Inserting the element in Stack
  this.pop = pop; // Removing the element in Stack
  this.peek = peek; // Returns the element at the end of the stack
  this.clear = clear;
  this.size = size;
}
//Adding an element in stack
function push(element){
  this.dataStore[this.count] = element;
  this.count++;
}
//Removing an element fron the given stack
function pop(){
  if(this.count === 0){
    return undefined;
  }

  this.count--;
  var result = this.dataStore[this.count];
  delete this.dataStore[this.count];
  return result;
}

function peek(value){
  return this.dataStore[this.count - 1];
}

function clear(){
  this.count = 0;
}

function size(){
  return this.count;
}

var s = new Stack();
s.push('David');
s.push('Raymond');
s.push('Parker');
console.log("length of the stack is: "+s.size());
console.log("peek element of the stack is: "+s.peek());

var popped = s.pop();
console.log("The popped element is: "+ popped);
console.log("Peek element is: "+ s.peek());
s.push("Arik");
s.clear();
console.log("The length is " + s.size());
s.push("Amazon");
console.log("The length of new created Stack is " + s.size());
