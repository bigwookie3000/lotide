# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bigwookie3000/lotide`

**Require it:**

`const _ = require('@bigwookie3000/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: takes in two arrays, compares two objects and console.log an appropriate message to the console.
* `function1(assertEqual)`: compares the two values it takes in and prints out a message telling us if they match or not.
* `function1(assertObjectsEqual)`: takes in two objects, compares two objects and console.log an appropriate message to the console.
* `function1(countLetters)`: takes in a sentence (as a string) and then return a count of each of the letters in that sentence. 
* `function1(countOnly)`: returns an object containing counts of everything that the input object listed. 
* `function1(eqArrays)`: takes in two arrays and returns true or false, based on a perfect match.
* `function1(eqObjects)`: takes in two objects and returns true or false, based on a perfect match.
* `function1(findKey)`: takes in an object and a callback and returns the first key for which the callback returns a truthy value. If no key is found, then it should return undefined. 
* `function1(findKeyByValue)`: takes in an object and a value and return the first key which contains the given value. 
* `function1(head)`: returns the first item in the array.
* `function1(letterPositions)`: return all the indices (zero-based positions) in the string where each character is found.
* `function1(map)`: map will iterate into given array and a callback and return the value based on callback condition. 
* `function1(middle)`: returns the middle-most element(s) of the given array.
* `function1(tail)`: returns everything except for the first item (head) of the provided array.
* `function1(takeUntil)`: takeUntil will keep collecting items from a provided array until the callback provided returns a truthy value. 
* `function1(without)`: returns a subset of a given array, removing unwanted elements.