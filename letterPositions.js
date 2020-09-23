// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed:, ${actual} === ${expected}`);
//   } else {
//     console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
//   } 
// };

const letterPositions = function(sentence) { //create a function
  const results = []; // results of loop
  for (let i = 0; i < sentence.length; i++) { //loop through array
    if (sentence[i] !== " ") { //skip spaces
      if (results[sentence[i]]) {
        results[sentence[i]].push(i); //Push result to results array
    } else {
        results[sentence[i]] = [i]; //add index position to results array
      }
    }
  } 
   return results;
};
module.exports = letterPositions;
