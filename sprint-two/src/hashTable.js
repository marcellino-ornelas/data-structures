

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // var self = this;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var newHashSpot = HashSlot(k, v);

  var HashSlotFromIndex = this._storage.get( index );

  if ( HashSlotFromIndex === undefined ) {
    let newNestedArray = [newHashSpot];
    this._storage.set( index, newNestedArray );

  } else {

    for (let slot of HashSlotFromIndex) {
      if (slot[0] === k ) {
        slot[ 1 ] = v;
        return;
      }
    }

    HashSlotFromIndex.push( newHashSpot );

  } // end if
  // console.log('after insert', this._storage.get(index));
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var hashSlot = this._storage.get( index ) || []; //<Array>
  
  for ( let i = 0; i < hashSlot.length; i++) {
    let curr = hashSlot[i];
    if ( curr[0] === k ) {
      return curr[1];
    }
  }

  return undefined;

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var hashSlot = this._storage.get( index ) || [];

  // if ( !hashSlot ) { return; }

  // if ( hashSlot.length === 1 ){
  //   // hashSlot.splice()
  // }

  for ( let i = 0, curr = hashSlot[i]; i < hashSlot.length; i++) {
    if ( curr[0] === k ) {
      hashSlot.splice( i, 1 );
    }
  }

  

  // this._storage.set( index, undefined );
};


var HashSlot = function (k, v) {
  return [k, v];
};


/*
 * Complexity: What is the time complexity of the above functions?
 */