// const eqArrays = function(arrayOne, arrayTwo) {
//   if (arrayOne=== arrayTwo) {
//     console.log(`✅✅✅ Assertion Passed:, ${arrayOne} === ${arrayTwo}`);
//   } else {
//     console.log(`🔴🔴🔴 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
//   }
// }

const eqArrays = function (arrayOne, arrayTwo) {
  if (Array.isArray(arrayOne) === false || Array.isArray(arrayTwo) === false) {
    return false;
  }
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
  
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays("1", "2", "3", ["1", "2", "3"]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);