var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};

  // added for tracking purposes
  storage.length = 0;

  extend(someInstance, queueMethods)

  someInstance.storage = storage

  // Implement the methods below
  return someInstance;
};

function extend( dest, obj ){

  for( var key in obj){
    if( obj.hasOwnProperty( key ) ){
      dest[ key ] = obj[ key ];
    }
  }

  return dest;
}

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


