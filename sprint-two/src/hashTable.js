var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(!this._storage.get(i)) {
    // nothing at pos i yet
    // this._storage.set(i, {k.toString(): v});
    this._storage.set(i, {});
    this._storage.get(i)[k.toString()] = v;

    this._storage.each(function(x){
      // console.log(x);

    });
  }
  else {
    this._storage.get(i)[k.toString()] = v;
    this._storage.each(function(x){
      // console.log(x);

    });
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  console.log(this._storage.get(i));

  return this._storage.get(i)[k.toString()];

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // this._storage.set(i, {k.toString(): null});
  this._storage.get(i)[k.toString()] = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
