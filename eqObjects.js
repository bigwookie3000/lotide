const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:, ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  } 
};
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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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
    } 
    //Inside our loop, compare both objects' values for that key. Use === to ensure that the types are the same! 
    //As soon as there is not a match, we can return false
    else if (object1[key] !== object2[key]) { //test to see if objects are not the same
      return false;
    }
  }
  //Our control flow will therefore only get to the end of the loop if all the keys matched. We can and should thus return true at the end (after the loop)
  return true;
};

//Tests
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); 

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false