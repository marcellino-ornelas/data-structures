var Stack = function() {
  this.storage = {};
  this.storage.length = 0;
};


Stack.prototype.push = function(value) {
  this.storage[ this.storage.length++ ] = value
};

Stack.prototype.pop = function() {
  if( !this.storage.length ) { return; }
  var nextStackValue = this.storage[ --this.storage.length ];
  delete this.storage[ this.storage.length ];
  return nextStackValue;
};

Stack.prototype.size = function() {
  return this.storage.length;
};