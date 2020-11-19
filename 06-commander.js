class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    // If the tree is empty then this key being inserted is the root node of the tree
    if (this.key == null) {
      this.key = key;
      this.value = value;
    }

    /* If the tree already exists, then start at the root, 
       and compare it to the key you want to insert.
       If the new key is less than the node's key 
       then the new node needs to live in the left-hand branch */
    else if (key < this.key) {
      /* If the existing node does not have a left child, 
         meaning that if the `left` pointer is empty, 
         then we can just instantiate and insert the new node 
         as the left child of that node, passing `this` as the parent */
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      }
      /* If the node has an existing left child, 
         then we recursively call the `insert` method 
         so the node is added further down the tree */
      else {
        this.left.insert(key, value);
      }
    }
    /* Similarly, if the new key is greater than the node's key 
    then you do the same thing, but on the right - hand side */
    else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }
}

class _Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return null;
    }
    const node = this.first;
    this.first = this.first.next;
    if (this.last === node) {
      this.last = null;
    }
    return node.data;
  }
}

function chain() {
  // Create an object for the BinarySearchTree
  let BST = new BinarySearchTree();

  // Inserting nodes to the BinarySearchTree
  BST.insert(5, 'Captain Picard');
  BST.insert(3, 'Commander Riker');
  BST.insert(6, 'Commander Data');
  BST.insert(2, 'Lieutenant Commander Worf');
  BST.insert(1, 'Lieutenant Security Officer');
  BST.insert(4, 'Lieutenant Commander LaForge');
  BST.insert(8, 'Lieutenant Commander Crusher');
  BST.insert(7, 'Lieutenant Selar');
  
  return BST;
}

function isEmpty(queue) {
  return queue.first === null;
}

function BFS(t, values = []) {
  const queue = new Queue();
  let node = t;
  queue.enqueue(node);
  while (!isEmpty(queue)) {
    node = queue.dequeue();
    values.push(node.value);
    if (node.left) queue.enqueue(node.left);
    if (node.right) queue.enqueue(node.right);
  }
  return values;
}

console.log(BFS(chain()));