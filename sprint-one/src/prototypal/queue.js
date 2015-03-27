var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.length     = 0;
  obj.nowServing = 0;
  obj.enqueued   = 0;
  obj.storage    = {};
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.enqueued] = value;
  this.length ++;
  this.enqueued ++;
};
queueMethods.dequeue = function(){
  if(this.length > 0){
    var temp = this.storage[this.nowServing];
    delete this.storage[this.nowServing];
    this.length --;
    this.nowServing ++;
    return temp;
  }
};
queueMethods.size  = function(){
  return this.length;
};



