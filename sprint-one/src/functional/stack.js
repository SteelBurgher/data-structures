var Stack = function(){
  var someInstance = {};
  var length = 0;
  
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  // { value: {value: value, prev: prev} }
  // { length: value}

  someInstance.push = function(value){
    storage[length] = value;
    length ++;
  };

  someInstance.pop = function(){
    if(length > 0){
      var foo = storage[length - 1];
      delete storage[length - 1];
      length --;
      return foo;
    }

  };

  someInstance.size = function(){
     return length;
  };

  return someInstance;
};
