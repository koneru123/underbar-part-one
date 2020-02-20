(function() {
  'use strict';
  //this code is required for the test suite to run, do not modify
  if (typeof global === 'object') {
    //_ = {};
    global._ = {};
  }
  if (typeof window === 'object') {
    //_ = {};
    window._ = {};
  }

  // Returns whatever value is passed as the argument. This function doesn't
  // seem very useful, but remember it--if a function needs to provide an
  // iterator when the user does not pass one in, this will be handy.
  _.identity = function(val) {
    /* START SOLUTION */
    return val;
    /* END SOLUTION */
  };

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   *
   *
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(array, n) {
    /* START SOLUTION */
    if(n === undefined) {
      return array[0];
    } if(array.length === 0) {
      return [];
    } if(!Array.isArray(array)) {
      return [];
    }
      return array.slice(array[0],n);
    /* END SOLUTION */
  };

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function(array, n) {
    /* START SOLUTION */

    if(n < 0 || n === 0 || array.length === 0 ) {
      return [];
    } else if(array.length < n) {
      return array;
    } else if (n === undefined) {
      return array[array.length-1];
    } else {
      return array.slice(array.length-n);
    }

    //array[array.length-1]
    //array.slice(n, array.length-1)
    //return entire array if second arguemnt is greater than the length of the array
    // if negative number return empty []
    //if n =0 return []
    //if array.length  return  []
    /* END SOLUTION */
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.
  _.each = function(collection, iterator) {
    /* START SOLUTION */
    if(Array.isArray(collection)) {
      for(let i = 0; i < collection.length; i++) {
        iterator(collection[i],i,collection);
      }
    } else {
      let keysArr = [];
      let valueArr = [];
      for(let [key, value] of Object.entries(collection)) {
        iterator(value,key, collection);
      }
    }
    };

    /* END SOLUTION */
    //does not mutate input array creates new array with input
    //should iterate over arrays and provide access to each value
    //proivde access to each index
    //if array should return nested array with index
    //iterate over arrays and provide access to the original collection -letter index collection
    //if values of letters array are not numeric do not iterate over
    //if obj provide access to each value  - for key in colletion  - might need to create new array
    //should iterate over object and provide access to each key - push to array with value and property  - should be nested array   [['dog','d]]
    //iterate over object and provide access to original object  [value, property, object]
    //should not confuse object witha  length property for an array


    //needs to check if collection is an array or object
    //should be function
    //should not return anything
    //should not mutate the input array



  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target, startingIndex){
    /* START SOLUTION */
    let index = -1;
    if(array.indexOf(target) > -1 && !startingIndex) {
      index = array.indexOf(target);
    } else if(arguments[2] !== undefined) {
      index = array.indexOf(target, startingIndex);
    }
    return index;

//array.indexOf(target, starting);
    // arr.indexOf(searchElement[, fromIndex])

    /* END SOLUTION */

    //returns first index of value if it appears multiple times
    // should be able to take a third argument that indicates starting index

 //if value is not present return -1  -- if value is undefined return -1
//if value is found return index of value
  };

  //Create a function for findIndex to test its existence
  _.findIndex = function(array, test){
    /* START SOLUTION */
    let elementIndex = -1;
    for(let i = 0; i < array.length; i++) {
      if(test(array[i])) {
        elementIndex = i;
        return elementIndex;
      }
    }
    return elementIndex;
  }

//if passes test, return index of first element in array
// if elements in array do not pass, return -1
// should not modify input array


// should exist
    /* END SOLUTION */


  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, test) {
    /* START SOLUTION */
    let newArr = [];
    for(let i = 0; i < collection.length; i++) {
      if(test(collection[i])) {
        newArr.push(collection[i]);
      }
    }
    return newArr;
  }
  // create a newArr  and pushing values if it passes test
//should return list of values that pass the test
// should work for boolean
//should retrun empty array if no elements pass test
//should not mutate the original array
//creates a new array


    /* END SOLUTION */

  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collection, test) {
    /* START SOLUTION */
    let newArr = [];
    for(let i = 0; i < collection.length; i++) {
      if(!test(collection[i])) {
        newArr.push(collection[i]);
      }
    }
    return newArr;
    /* END SOLUTION */
  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array, isSorted, iterator) {
    /* START SOLUTION */

    //let noDuplicate = array.filter(element => element === element)
    //return noDuplicate;
    let set1 = new Set(array);
    let arr = Array.from(set1);
    return arr;



    //if array.length <1 return []
    //return array with no duplicate values
    //if array is empty return []
    //not return a sorted list if isSorted is false
    //gives new array based on iteratee function
    //result should be an array
    /* END SOLUTION */
  };


  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    /* START SOLUTION */

    /* END SOLUTION */
  };

  /*
   * TIP: map is really handy when you want to transform an array of
   * values into a new array of values. _.pluck() is solved for you
   * as an example of this.
   */

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(collection, key) {
    // TIP: map is really handy when you want to transform an array of
    // values into a new array of values. _.pluck() is solved for you
    // as an example of this.
    /* START SOLUTION */

    /* END SOLUTION */
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(accumulator, item) for each item. accumulator should be
  // the return value of the previous iterator call.
  //
  // You can pass in a starting value for the accumulator as the third argument
  // to reduce. If no starting value is passed, the first element is used as
  // the accumulator, and is never passed to the iterator. In other words, in
  // the case where a starting value is not passed, the iterator is not invoked
  // until the second element, with the first element as its second argument.
  //
  _.reduce = function(collection, iterator, accumulator) {
    /* START SOLUTION */

    /* END SOLUTION */
  };

}());
