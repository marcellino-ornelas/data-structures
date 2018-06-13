class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.storage.length = 0;
  }

  size(){
    return this.storage.length;
  }

  enqueue( value ) {
    this.storage[ this.storage.length++ ] = value;
  };

  dequeue() {
    if( !this.storage.length ){ return; }
    return Array.prototype.shift.call( this.storage );
  };

}
