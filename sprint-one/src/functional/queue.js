var Queue = function(){
  var someInstance = {};
  var length = 0;
  var nowServing = 0;
  var queued = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[queued] = value;
    length ++;
    queued ++;
  };

  someInstance.dequeue = function(){
    if (length > 0) {
      var temp = storage[nowServing];
      delete storage[nowServing];
      length --;
      nowServing ++;
      return temp;
    }
    
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
