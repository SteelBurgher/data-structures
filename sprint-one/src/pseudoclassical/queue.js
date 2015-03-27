var Queue = function() {
  this.storage = {};
  this.length = 0;
  this.enqueued = 0;
  this.nowServing = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.enqueued] = value;
  this.length ++;
  this.enqueued ++;
};
Queue.prototype.dequeue = function(){
  if(this.length > 0){
    var temp = this.storage[this.nowServing];
    delete this.storage[this.nowServing];
    this.length --;
    this.nowServing ++;
    return temp;
  }
};
Queue.prototype.size = function(){
  return this.length;
};

