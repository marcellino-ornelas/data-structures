var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.storage.length = 0;

  extend(someInstance, stackMethods)

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[ this.storage.length++ ] = value
};

stackMethods.pop = function() {
  if( !this.storage.length ) { return; }
  var nextStackValue = this.storage[ --this.storage.length ];
  delete this.storage[ this.storage.length ];
  return nextStackValue;
};

stackMethods.size = function() {
  return this.storage.length;
};

function extend( dest, obj ){

  for( var key in obj){
    if( obj.hasOwnProperty( key ) ){
      dest[ key ] = obj[ key ];
    }
  }

  return dest;
}
