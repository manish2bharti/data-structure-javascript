function List(){
  this.listSize = 0;
  this.position = 0;
  this.dataStore = [];
  
  this.toString = toString;
  this.append = append;
  this.remove = remove;
  this.length = length;
}

//Length of ths list
function length(){
  return this.listSize;
}

//Appending the element
function append(element){
  this.dataStore[this.listSize++] = element;
}

function toString(){
  return this.dataStore;
}

function remove(){
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = 0;
}

var names = new List();
names.append("Alex");
names.append("Arik");
names.append("John");

console.log(names);
console.log(names.toString())
console.log("the length of the given list " + names.length())
