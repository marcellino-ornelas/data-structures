var Queue = function() {

  // added for tracking purposes
  this.storage = {};
  this.storage.length = 0;

};

Queue.prototype.enqueue = function( value ) {
  this.storage[ this.storage.length++ ] = value;
};

Queue.prototype.dequeue = function() {
  if( !this.storage.length ){ return; }
  return Array.prototype.shift.call( this.storage );
};

Queue.prototype.size = function() {
  return this.storage.length;
};