
// const eqArrays = function (arrayOne, arrayTwo) {
//   if (Array.isArray(arrayOne) === false || Array.isArray(arrayTwo) === false) {
//     return false;
//   }
//   if (arrayOne.length !== arrayTwo.length) {
//     return false;
//   }
//   for (let i = 0; i < arrayOne.length; i++) {
  
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function (actualArray, expectedArray) {
//   if (typeof (actualArray) !== 'object' || typeof (expectedArray) !== 'object') {
//     return `🛑🛑🛑 Assertion Failed: ${[actualArray]} !== ${[expectedArray]}`;
//   }
//   if (actualArray.length !== expectedArray.length) {
//     return (`🛑🛑🛑 Assertion Failed: ${[actualArray]}!== ${[expectedArray]}`);
//   } for (let i = 0; i < actualArray.length; i++) {
//     if (actualArray[i] !== expectedArray[i]) {
//       return (`🛑🛑🛑 Assertion Failed: ${[actualArray]} !== ${[expectedArray]}`);
//     }
//   }
//   return (`✅✅✅ Assertion Passed: ${[actualArray]} === ${[expectedArray]}`);
// };
const middle = function(arrOne) {
  let arrLength = array.length;
  let midNum = [];
  if (arrLength < 3) {
    return middleNum;
  } else if (arrLength % 2 === 0) {
      midNum.push(arrOne[(arrLength/2) - 1]);
      midNum.push(arrOne[arrLength / 2]);
  } else {
    midNum.push(arrOne[(arrLength - 1)]);
  }
return midNum;
};