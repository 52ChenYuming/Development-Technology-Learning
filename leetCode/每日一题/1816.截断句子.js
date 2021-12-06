/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  let arr = s.split(" ");
  console.log(arr);
  for (let i = k; i < arr.length; k++) {
    arr.pop();
    console.log(arr);
  }

  return arr.join(" ");
};

truncateSentence("What is the solution to this problem", 4);