var Stack = function(){
  var someInstance = {};
  var length = 0;
  var last;
  var prev;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[value] = value;
    length ++;
    last = storage[value];
  };

  someInstance.pop = function(){
    if(length > 0){
      length --;
      var foo = last;
      delete last;
      return foo;
    }

  };

  someInstance.size = function(){
     return length;
  };

  return someInstance;
};
