var Queue = function(){
  var obj = {};
  obj.length = 0;
  obj.enqueued = 0;
  obj.nowServing = 0;
  obj.storage = {};
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {
  size : function() {  
    return this.length;
  },
  enqueue: function(value){   
    this.storage[this.enqueued] = value;
    this.length ++;
    this.enqueued ++;
  },
  dequeue: function() {
    if(this.length > 0){
      var temp = this.storage[this.nowServing];
      delete this.storage[this.nowServing];
      this.length --;
      this.nowServing ++;
      return temp;
    }
  }
};



