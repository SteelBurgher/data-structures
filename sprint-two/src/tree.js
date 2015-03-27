var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);

  newTree.children = [];  // fix me
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  var result = false;
  if(this.value === target){
    result = true;
    return result;
  }
  // {{value: undefined, children: [{value: 5, children:[]}]}}
  if(this.children.length !== 0){
    for (var i = 0; i < this.children.length; i++) {
      result = this.children[i].contains(target);
      if(result){
        break;
      }
    }
  }
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
