// const assertEqual = function(actual, expected) {
//   if (actual.head([]) === expected) {
//     console.log(`✅✅✅ Assertion Passed:, ${actual} === ${expected}`);
//   } else {
//     console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
//   } 
// };
const assertEqual = require('./assertEqual');

const head = function (array) {
  return array[0];
}

// // TEST CODE
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), undefined);
