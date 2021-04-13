const { application } = require("express");
const { lookup } = require("mime-types");

function HashTable(size) {
   this.buckets = Array(size);
   this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
   this.key = key;
   this.value = value;
   this.next = next || null;
}

//find the hash value of key, in which index value inserted
HashTable.prototype.hash = function (key) {
   var total = 0;
   for(var i = 0; i < key.length; i++){
      total += key.charCodeAt(i);
   }

   var bucket = total % this.numBuckets;
   return bucket;
}

//only for insert
// HashTable.prototype.insert = function (key, value) {
//    var index = this.hash(key);
//    console.log(index)
//    if(!this.buckets[index]){
//       this.buckets[index] = new HashNode(key, value);
//    }else{
//       var currentNode = this.buckets[index];
//       while(currentNode.next){
//          currentNode = currentNode.next;
//       }
//       currentNode.next = new HashNode(key, value);
//    }
// }

// for update the existing entry
HashTable.prototype.insert = function (key, value) {
   var index = this.hash(key);
   // console.log(index)
   if(!this.buckets[index]){
      this.buckets[index] = new HashNode(key, value);
   }
   else if(this.buckets[index].key === key){
      // update info on root level
      this.buckets[index].value = value;
   }
   else{
      var currentNode = this.buckets[index];
      while(currentNode.next){
         if(currentNode.next.key === key){
            // update info on node.next level
            currentNode.next.value = value;
            return;
         }
         currentNode = currentNode.next;
      }
      currentNode.next = new HashNode(key, value);
   }
}


HashTable.prototype.get = function (key) {
   var index = this.hash(key);
   if(!this.buckets[index]){
      return null;
   }else{
      var currentNode = this.buckets[index];
      while(currentNode){
         if(currentNode.key === key){
            return currentNode.value;
         }
         currentNode = currentNode.next;
      }
      return null;
   }
}


HashTable.prototype.retrieveAll = function () {
   var allNodes = [];
   for(var i = 0; i < this.numBuckets; i++){
      var currentNode = this.buckets[i]
      while(currentNode){
         allNodes.push(currentNode);
         currentNode = currentNode.next;
      }
   }
   return allNodes;
}

var myHT = new HashTable(30);

// console.log(myHT.hash('bharti'))

myHT.insert('Manish', 'manish2bharti@gmail.com');
myHT.insert('Shikha', 'shikha2bharti@gmail.com');
myHT.insert('Khashi', 'Khashi@gmail.com');
myHT.insert('Khashi', 'KhashiBharti@gmail.com');
myHT.insert('Manish', 'Manish@gmail.com');
myHT.insert('Joe', 'Joe@facbook..com');
myHT.insert('Samantha', 'sammyfacbook..com');


// console.log(myHT.retrieveAll());
// console.log(myHT.get('Khashi'))

// console.log(myHT)
// console.log(myHT.buckets)

//------------------------------------------------------------------
// Pros:
// - Constant time insertion
// - Constant time lookup

// Practical Uses:
// - Email provider storing addresses
// - Users of an application

// Cons:
// - Data doesn't store references to other pieces of data in the data structure
