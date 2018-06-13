var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage.length = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[ storage.length++ ] = value

  };

  someInstance.pop = function() {
    if( !storage.length ) { return; }
    var nextStackValue = storage[ --storage.length ];
    delete storage[ storage.length ];
    return nextStackValue;
  };

  someInstance.size = function() {
    return storage.length;
  };

  return someInstance;
};
