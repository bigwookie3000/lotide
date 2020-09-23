// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed:, ${actual} === ${expected}`);
//   } else {
//     console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
//   } 
// };

const findKey = function (object, callback) {
  for (let place in object) {
    if (callback(object[place])) {
      return place;
    }
    console.log(object[place]);
  }
}
module.exports = findKey;
