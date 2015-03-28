var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(!this._storage.get(i)) {
    this._storage.set(i, {});
    this._storage.get(i)[k.toString()] = v;

  }
  else {
    this._storage.get(i)[k.toString()] = v;
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i)[k.toString()];

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(i)[k.toString()] = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
