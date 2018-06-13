var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // added for tracking purposes
  storage.length = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[ storage.length++ ] = value;
  };

  someInstance.dequeue = function() {

    if( !storage.length ){ return; }

    // console.log('storage before dequeue: ', storage)
    // var nextQueueValue = storage[0];
    // delete storage[0];

    // if( storage.length ){
    //   for( var i = 1; i < storage.length; i++ ){
    //     var index = i - 1;
    //     storage[ index  ] = storage[ i ];
    //   }
    // }

    // storage.length--;
    // delete storage[ storage.length ]
    // console.log('storage after dequeue: ', storage)
    // return nextQueueValue;

    return Array.prototype.shift.call( storage );
  };

  someInstance.size = function() {
    return storage.length;
  };

  return someInstance;
};
