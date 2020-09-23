// FUNCTION IMPLEMENTATION
const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne === arrayTwo) {
    console.log(`✅✅✅ Assertion Passed:, ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
}

const eqObjects = function (object1, object2) {
  const key1 = (Object.keys(object1));
  const key2 = (Object.keys(object2));
  console.log(key1);
  console.log(key2);
  if (key1.length !== key2.length) { 
  //First, use the Object.keys function on both objects and compare their lengths. If not equal, there's no point in going further: return false
    return false;
  } //loop through the keys returned by Object.keys for one of the objects (not both). Use for..of since the keys are an array.
  for (let key of key1) { //looping
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      };
    } else if (object1[key] !== object2[key]) { 
      //test to see if objects are not the same
      return false;
    }
  }
  return true;
};
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  console.log(`Example label: ${inspect(actual)}`);
};


Tests
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); 

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false