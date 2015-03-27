

var Graph = function(){
  
};

Graph.prototype.addNode = function(node){
  this[node] = {};
};

Graph.prototype.contains = function(node){
  if(this[node]){
    return true;
  } else {
    return false;
  }
};

Graph.prototype.removeNode = function(node){
  // should also remove edges
  delete this[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  if(this[fromNode][toNode]){
    return true;
  } else {
    return false;
  }
};

Graph.prototype.addEdge = function(fromNode, toNode)  {
  this[fromNode][toNode] = toNode;
  this[toNode][fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this[fromNode][toNode];
  delete this[toNode][fromNode];
};

Graph.prototype.forEachNode = function(cb){
  _.each(this, function(obj, node) {
    cb(node);
  });
  console.log(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*

//brandon
{
 a: {connections:b},
 b: {connections:a},
 c: {}  
}
// bill
{
  {node1:node1, node2:node2}
  {edge1: {node1, node2}}

}
// theory 3
{ {n1 e1} {n2 e1} n3 n4 }

*/

