// Initializing the stack class
function Stack(){
  this.dataStore = [];
  this.top = 0;
  this.push = push; // Inserting the element in Stack
  this.pop = pop; // Removing the element in Stack
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}
//Adding an element in stack
function push(element){
  this.dataStore[this.top++] = element;
}
//Removing an element fron the given stack
function pop(){
  return this.dataStore[--this.top];
}

function peek(){
  return this.dataStore[this.top - 1];
}

function clear(){
  this.top = 0;
}

function length(){
  return this.top;
}

var s = new Stack();
s.push('David');
s.push('Raymond');
s.push('Parker');
console.log("length of the stack is: "+s.length());
console.log("peek element of the stack is: "+s.peek());

var popped = s.pop();
console.log("The popped element is: "+ popped);
console.log("Peek element is: "+ s.peek());
s.push("Arik");
s.clear();
console.log("The length is " + s.length());
s.push("Amazon");
console.log("The length of new created Stack is " + s.length());
