/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/


// MAP //
Array.prototype.myMap = function(callbackFn) {
  const resultArray = [];

  this.forEach((element, index, array) => {
    if(element !== undefined) {
      resultArray[index] = callbackFn(element, index, array);
    }
  });

  return resultArray;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  const filteredArray = [];

  this.forEach((element, index, array) => {
    if(element !== undefined && callbackFn(element, index, array)) {
      filteredArray.push(element);
    }
  });

  return filteredArray;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  let hasMatch = false;

  this.forEach((element, index, array) => {
    if(element !== undefined && callbackFn(element, index, array)) {
      hasMatch = true;
    }
  });

  return hasMatch;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  let allMatch = true;

  this.forEach((element, index, array) => {
    if(element !== undefined && !callbackFn(element, index, array)) {
      allMatch = false;
    }
  });

  return allMatch;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : 0;

  this.forEach((element, index, array) => {
    if(element !== undefined) {
      accumulator = callbackFn(accumulator, element, index, array);
    }
  });

  return accumulator;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};