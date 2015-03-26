var Stack = function() {
  var obj = {};
  obj.length = 0;
  obj.storage = {};
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  size : function(){
    return this.length;
  },
  push: function(value){
    this.storage[this.length] = value;
    this.length ++;

  },
  pop: function(){
    if(this.length > 0) {
      var temp = this.storage[this.length - 1];
      delete this.storage[this.length - 1];
      this.length --;
      return temp;
    }

  }
};


