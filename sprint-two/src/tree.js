var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  
  extend(newTree, treeMethods);
  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var tree = Tree(value);
  
  this.children.push( tree );
  
};

treeMethods.contains = function(target) {
  var hasBeenFound = false;

  var searchChildren = function(tree) {
    if ( hasBeenFound ){ return; }

    if (tree.value === target) {
      hasBeenFound = true;
    } else {
      for (let childTree of tree.children) {
        searchChildren(childTree);
      }
    }
  };

  searchChildren(this);
  // return searchChildren(this);
  return hasBeenFound;
};

var extend = function(to, from) {
  for (let key in from) {
    to[key] = from[key];
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
// addChild: 0(1)
// contains: 0(n)
// extend: 0(n)
