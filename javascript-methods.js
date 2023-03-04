/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/


// MAP //
Array.prototype.myMap = function (callbackFn) {
  const resultArray = [];

  this.forEach((element, index, array) => {
    if (element !== undefined) {
      resultArray[index] = callbackFn(element, index, array);
    }
  });

  return resultArray;
};

// FILTER //
Array.prototype.myFilter = function (callbackFn) {
  const filteredArray = [];

  this.forEach((element, index, array) => {
    if (element !== undefined && callbackFn(element, index, array)) {
      filteredArray.push(element);
    }
  });

  return filteredArray;
};

// SOME //
Array.prototype.mySome = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== undefined && callbackFn(this[i], i, this)) {
      return true;
    }
  }

  return false;
};

// EVERY //
Array.prototype.myEvery = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== undefined && !callbackFn(this[i], i, this)) {
      return false;
    }
  }

  return true;
};

// REDUCE //
Array.prototype.myReduce = function (callbackFn) {
  let accumulator = this[0];

  for (let i = 1; i < this.length; i++) {
    if (this[i] === undefined) continue;
    accumulator = callbackFn(accumulator, this[i], i, this);
  }

  return accumulator;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  for(let i = 0; i < this.length; i++) {
    if(this[i] === searchElement) return true;
  }

  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  for(let i = 0; i < this.length; i++) {
    if(this[i] === searchElement) return i;
  }

  return -1;
};

// LAST INDEX OF //
Array.prototype.myLastIndexOf = function(searchElement) {
  for(let i = this.length - 1; i >= 0; i--) {
    if(this[i] === searchElement) return i;
  }

  return -1;
};