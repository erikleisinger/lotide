# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @eleisinger/lotide`

**Require it:**

`const _ = require('@eleisinger/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countOnly(array, key)`: counts the number of instances a `key` occurs in a given `array`
* `eqArrays(array1, array2)`: compares two arrays and determines if they are equivalent 
* `eqobject(object1, object2)`: compares two objects and determines if they are equivalent
* `findKey(object, key)` : searches an object for a given key and returns the value
* `findKeyByValue(object, key)`: searches an object for a given key and returns the entire element
* `flatten(array)`: converts all items in a nested array to a single array
* `head(array)`: returns the first value in an array
* `map(array, function)`: applies a given function  to every item in an array
* `middle(array)` returns the median of a given array. 
  * returns one value if `array.length` is odd
  * returns two values if `array.length` is even
* `tail(array)`: returns all values of an array minue index[0]
* `takeUntil(array, function)`: returns all values of an array until reaching a value whose conditions are defined by the function passed
* `without(array, item)`: returns an array minus any items matching the item passed 