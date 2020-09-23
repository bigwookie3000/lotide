const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:, ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  } 
};

const countLetters = function (numOfLetters) {
  const results = {};

  for (const numOf of numOfLetters) {
    if (numOf !== ' ') {
      if (results[numOf]) {
      results[numOf] += 1;
    } else {
      results[numOf] = 1;
    }
  }
}
  return results;
}

console.log(countLetters("lighthouse in the house"));
assertEqual(countLetters("lighthouse in the house")['s'], 2);
assertEqual(countLetters("lighthouse in the house")['h'], 3);

