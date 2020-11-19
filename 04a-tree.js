class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  };
};

class BST {
  constructor() {
    this.root = null;
  };
  create(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    };
    let current = this.root;

    const addSide = side => {
      if (!current[side]) {
        current[side] = newNode;
        return this;
      };
      current = current[side];
    };

    while (true) {
      if (val === current.val) return this;
      if (val < current.val) addSide('left');
      else addSide('right');
    };
  };
};

const tree = new BST();
tree.create(35);
tree.create(25);
tree.create(89);
tree.create(15);
tree.create(27);
tree.create(79);
tree.create(90);
tree.create(14);
tree.create(19);
tree.create(91);

module.exports = Tree;