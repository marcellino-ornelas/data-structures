var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create( queueMethods );
  // Use an object with numeric keys to store values
  var storage = {};

  // added for tracking purposes
  storage.length = 0;

  someInstance.storage = storage

  // Implement the methods below
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function( value ) {
  this.storage[ this.storage.length++ ] = value;
};

queueMethods.dequeue = function() {
  if( !this.storage.length ){ return; }
  return Array.prototype.shift.call( this.storage );
};

queueMethods.size = function() {
  return this.storage.length;
};


