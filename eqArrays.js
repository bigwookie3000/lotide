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
module.export = eqArrays;
