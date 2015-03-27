var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.length = 0;
  obj.storage = {};
  return obj;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.length] = value;
  this.length ++;
};
stackMethods.pop  = function(){
  if (this.length > 0){
    var temp = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length --;
    return temp;
  }
};
stackMethods.size = function(){
  return this.length;
};




