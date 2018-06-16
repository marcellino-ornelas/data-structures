var BinarySearchTree = function(value) {
  var obj = Object.create(BinarySearchTree.methods);
  obj.value = value;
  // lower
  obj.left = null;
  // higher
  obj.right = null;
  return obj;
};

BinarySearchTree.methods = {};

BinarySearchTree.methods.insert = function( value ) {
  let newBST = new BinarySearchTree(value);
  
  
  var scan = function( bst ) {
    let dir = bst.getDir( value );

    let nextBST = bst[ dir ];

    if ( nextBST ) {
      scan( nextBST );
    } else {
      bst[ dir ] = newBST;
    }
  };
  
  scan( this );
};

BinarySearchTree.methods.contains = function(value) {

  var scan = function( bst ) {
    if ( bst.value === value ) {
      return true;
    } else {
      let dir = bst.getDir( value );
      var nextBST = bst[dir];
      return !nextBST ? false : scan( bst[dir] );
    }
  };

  return scan( this );

};

BinarySearchTree.methods.depthFirstLog = function(cb) {
  let checkTree = function(bst) {
    if (bst) { 
      cb(bst.value); 
      checkTree(bst.left);
      checkTree(bst.right);
    }
  };
  
  checkTree(this);
  //start out by performing callback on node value
  //only perform callback if slot is non-empty
  //check left property
  //check right property
};

BinarySearchTree.methods.getDir = function( newValue ) {
  return newValue > this.value ? 'right' : 'left';
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
