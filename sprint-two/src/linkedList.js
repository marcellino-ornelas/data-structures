var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create a node with the passed value
    var newNode = Node(value);
    //if tail is null, then assign tail to newNode
    if( list.tail === null ) {
      list.tail = newNode;
    } else {
      //assign tail reference to new node
      list.tail.next = newNode;
      //Tail points to that node
      list.tail = newNode;
    }

    
    //if head points to null, then assign head to tail
    if(list.head === null) {
      list.head = newNode;
    }
  };

  list.removeHead = function() {
    let oldHead = list.head;
    if (oldHead === null) {
      return null;
    } else {
      list.head = oldHead.next;
      if( list.head === null ){ list.tail = null;}      
      return oldHead.value;
    }
  };

  list.contains = function(target) {
    var searchNextNode = function(node) {
      //function that takes node as a parameter
      
      //if node.next = null? return false
      if ( node === null ) {
        return false;
      }

      //if matching value, return true
      //else, call function recursively with node.next
      return node.value === target ? true : searchNextNode( node.next );
    };

    return searchNextNode(list.head);

  };
  //if true, return true
  //else, search head.next node for value


  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
