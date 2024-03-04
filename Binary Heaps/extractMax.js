// Max Binary Heap
// - Each Parent has at most two child nodes
// - The value of each parent node is always greater than its child nodes
// - In a max Binary Heap the parent is greater than the children, but there are no guarantees between siblings nodes
// - A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.

//              100
//             /    \
//          19        36
//         /   \     /   \
//       17     3  25     1
//      /  \
//     2    7

// string heap: [100, 19, 36, 17, 3, 25, 1, 2, 7]
// for every n index, left child store in 2n+1 and right child store in 2n+2
// Want to find an index of parent from child it should be (n -1)/2

// Remove(Extract Max) Pseudocode
// - Swao the first value in the values property with the last one
// - Pop from the values property, so you can return the value at the end
// - Have the new root "sink down" to the correct spot..
//    - Your Parent index start at 0(the root)
//    - Find the index of the left child: 2 * index + 1(Make sure its not out of bounds)
//    - Find the index of the right child: 2 * index + 2(Make sure its not out of bounds)
//    - If the lft or child child is greatr than the element... swap. If both left and child children are larger, swap with the largest child.
//    - The child index you swapped to now becomes the new parent index
//    - Keep looping and swapping until neither child is larger than the element.
//    - Return the old root!

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * idx + 1;
      let rightChildIndex = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.values;
