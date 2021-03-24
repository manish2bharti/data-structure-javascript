function Queue () { 
    collection = [];
    this.print = function() {
        console.log(collection);
    };
    this.enqueue = function(element) {
        collection.push(element); // element added in the queue
    };
    this.dequeue = function() {
        return collection.shift(); // removing element from the queue
    };
    this.front = function() {
        return collection[0]; // top element in the queue
    };
    this.size = function() {
        return collection.length; // length of the queue
    };
    this.isEmpty = function() {
        return (collection.length === 0); 
    };
}

var q = new Queue(); 
q.enqueue('a'); 
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();
