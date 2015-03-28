var BinarySearchTree = function(value){
  this.left  = null;
  this.right = null;
  this.value = value;
};

BinarySearchTree.prototype.insert = function(value) {
  if(value === this.value){
    return undefined;
  }
  if(value < this.value) {
    if(this.left === null) {
      this.left = new BinarySearchTree(value);
    }
    else{
      this.left.insert(value);
    }
  }
  if(value > this.value) {
    if(this.right === null) {
      this.right = new BinarySearchTree(value);
    }
    else{
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value){
  if(value === this.value){
    return true;
  }
  if(value < this.value) {
    if(this.left === null) {      
      return false;
    }
    else{
      return this.left.contains(value);
    }
  }
  else{
    if(this.right === null) {
      return false;
    }
    else {
      return this.right.contains(value);
    }
  } 
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if(this.left){
    this.left.depthFirstLog(cb);
  }
  if(this.right){
    this.right.depthFirstLog(cb);
  }  
  /*
  start at root
  cb root
  if left 
    cb root left
  if right 
    cb root right

  */
};

// psuedocode for insert
// start at root node
  // compare to current node's value
    // if greater
      // check if current node's right prop points to a node
        // if it does, compare node we are inserting to that node
        // if it doesn't, assign current node's right prop to node we're inserting
    // if less than
        // check if current node's left prop points to a node
        // if it does, compare node we are inserting to that node
        // if it doesn't, assign current node's left prop to node we're inserting
