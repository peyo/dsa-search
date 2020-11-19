class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
} 

class BinarySearchTree {
  constructor() {
    this.root = null;
  };

  // Returns root of the tree 
  getRootNode() {
    return this.root;
  }

  insert(data) {
    // Creating a node and initializing
    // with data.
    let newNode = new Node(data);

    // Root is null then node will
    // be added to the tree and made root.
    if (this.root === null)
      this.root = newNode;
    else

      // Find the correct position in the
      // tree and add the node.
      this.insertNode(this.root, newNode);
  }

  // Method to insert a node in a tree
  // it moves over the tree to find the location
  // to insert a node with a given data.
  insertNode(node, newNode) {
    // If the data is less than the node
    // data move left of the tree.
    if (newNode.data < node.data) {
      // If left is null insert node here.
      if (node.left === null)
        node.left = newNode;
      else

        // If left is not null recur until
        // null is found.
        this.insertNode(node.left, newNode);
    }

    // If the data is more than the node
    // data move right of the tree.
    else {
      // If right is null insert node here.
      if (node.right === null)
        node.right = newNode;
      else

        // If right is not null recur until
        // null is found.
        this.insertNode(node.right, newNode);
    }
  }

  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }
}

// Create an object for the BinarySearchTree
let BST = new BinarySearchTree();

// Inserting nodes to the BinarySearchTree
BST.insert(35);
BST.insert(25);
BST.insert(89);
BST.insert(15);
BST.insert(27);
BST.insert(79);
BST.insert(90);
BST.insert(14);
BST.insert(19);
BST.insert(91);

let root = BST.getRootNode();

console.log("inorder traversal");
BST.inorder(root);

console.log("preorder traversal");
BST.preorder(root);

console.log("postorder traversal");
BST.postorder(root);