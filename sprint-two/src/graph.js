

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.connections = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean valu`e indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.indexOf( node ) !== -1;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var indexOfNode = this.nodes.indexOf(node);
  this.nodes.splice( indexOfNode, 1);

  for (let i = 0; i < this.connections.length; i++) {
    var connection = this.connections[i]; // <Array>
    if ( connection.indexOf( node ) !== -1 ) {
      this.connections.splice( i, 1);
      i--;
    }
  }

  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  let edgeCase1 = [fromNode, toNode];
  // let edgeCase   2 = [toNode, fromNode];
  for (let connection of this.connections) {
    //find matching edge case
    if ( hasAll(connection, edgeCase1) ) {
      return true;
    }
  }
  return false;
};

var hasAll = function (arr1, arr2) {
  if ( arr1.length !== arr2.length) {
    return false;
  }

  for (var i = 0; i < arr1.length; i++) {
    if ( arr2.indexOf( arr1[i] ) === -1 ) { return false; }
  }

  return true;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //create new edge case
  var newEdge = [fromNode, toNode];
  //push to connections array new edge case
  this.connections.push(newEdge);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.connections = this.connections.filter(function(item) {
    return !hasAll( item, [fromNode, toNode] );
  });
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let node of this.nodes) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


