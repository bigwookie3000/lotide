const assertArraysEqual = function (actualArray, expectedArray) {
  if (typeof (actualArray) !== 'object' || typeof (expectedArray) !== 'object') {
    return `🛑🛑🛑 Assertion Failed: ${[actualArray]} !== ${[expectedArray]}`;
  }
  if (actualArray.length !== expectedArray.length) {
    return (`🛑🛑🛑 Assertion Failed: ${[actualArray]}!== ${[expectedArray]}`);
  } for (let i = 0; i < actualArray.length; i++) {
    if (actualArray[i] !== expectedArray[i]) {
      return (`🛑🛑🛑 Assertion Failed: ${[actualArray]} !== ${[expectedArray]}`);
    }
  }
  return (`✅✅✅ Assertion Passed: ${[actualArray]} === ${[expectedArray]}`);
};
