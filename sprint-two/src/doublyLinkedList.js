var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newTail = Node(value);
    if (this.tail !== null){
      // write things here
      // point new var to oldTail
      var oldTail = this.tail;
      oldTail.next = newTail;
      this.tail = newTail;
    } else {
      this.tail = newTail;
      this.head = newTail;
    }
  };

  list.addToHead = function(value){
    var newHead = Node(value);
    if(this.head !== null){
      var oldHead = this.head;
      oldHead.prev = newHead;
      this.head = newHead;
    }else{
      this.head = newHead;
      this.tail = newHead;
    }    
  };

  list.removeHead = function(){
    // new head is what current head points to
    // var newHead = this.head.next;
    var oldHeadValue = this.head.value;
    this.head = this.head.next;
    return oldHeadValue;
  };

  list.removeTail = function(){
    var oldTailValue = this.tail.value;
    this.tail = this.tail.prev;
    return oldTailValue;    
  };

  list.contains = function(target){
    var currentVal = this.head;
    var test = false;
    // check if value is target
    while(currentVal.next !== null) {
      if(target === currentVal.value) {
        test = true;
        break;
      }
      currentVal = currentVal.next;
    } 
    if(target === currentVal.value) {
      test = true;
    }
    return test;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};
/* scratch
null > null
// add val to tail
{val: val1, next: null}
// add 2nd val
{val: val1, next: val2} > {val: val2, next: null}
// remove head
{val: val2, next: null}
*/

/*
 * Complexity: What is the time complexity of the above functions?
 */
