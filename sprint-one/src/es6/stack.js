class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.storage.length = 0;
  }

  push(value) {
    this.storage[ this.storage.length++ ] = value
  }

  pop() {
    if( !this.storage.length ) { return; }
    var nextStackValue = this.storage[ --this.storage.length ];
    delete this.storage[ this.storage.length ];
    return nextStackValue;
  }

  size() {
    return this.storage.length;
  }

}