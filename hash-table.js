// Hash Table
// Hash table is used to implement associative arrays or mapping of key value pairs.
// Haesh tables ar a common way to implement the map data structure or objects.
// The way a hash table works is that it takes a key input anf the runs it throught 
// a hash function a hash function basically just Maps strings to numbers and usually 
// the numbers just correspond to indexes in an array.


var hash = (string, max) => {
  var hash = 0;
  for(var i=0; i < string.lngth; i++){
    hash += string.charCodeAt(i);
  }
  return hash % max; // return the remander
}


let HashTable = function(){
  let storage = [];
  const storageLimit = 14;
  
  this.print = function(){
    console.log(storage)
  }
  
  this.add = function(key, value){
    var index = hash(key, storageLimit);
    if(storage[index] === undefined){
      storage[index] = [[key, value]];
    }else{
      var inserted = false;
      for(var i = 0; i < storage[index].length; i++){
        if(storage[index][i][0] === key){
          storage[index][i][0] = value;
          inserted = true;
        }
      }
      
      if(inserted === false){
          storage[index].push([key, value]);
      }
    }
  };
  
  this.remove = function(key){
    var index = hash(key, storageLimit);
    if(storage[index].length === 1 && storage[index][0][0] === key){
      delete storage[index];
    }else{
      for(var i = 0; i < storage[index].length; i++){
        if(storage[index][i][0]===key){
          delete storage[index][i];
        }
      }
    }
  };
  
  
  this.lookup = function(key){
    var index = hash(key, storageLimit);  
    if(storage[index] === undefined){
      return undefined ;
    }else{
      for(var i = 0; i < storage[index].length; i++){
        if(storage[index][i][0]===key){
          return storage[index][i][1];
        }
      }
    }
  };
  
};


console.log(hash('manish',5))
let ht = new HashTable();
ht.add('amit', 'person');
ht.add('alex', 'dog');
ht.add('polly', 'parrot');
ht.add('pratik', 'human');

console.log(ht.lookup('pratik'))
 
ht.print();
