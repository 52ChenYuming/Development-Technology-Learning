/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// var truncateSentence = function (s, k) {
//   let arr = s.split(" ");
//   console.log(arr);
//   for (let i = k; i < arr.length; k++) {
//     arr.pop();
//     console.log(arr);
//   }

//   return arr.join(" ");
// };

var truncateSentence = function (s, k) {
  // 终止点
  let end = 0;
  // 字符计数
  let count = 0;
  for (let i = 1; i <= s.length; i++) {
    // 如果遇到空格或者最后一个字符，count++
    if (s[i] == ' ' || i == s.length) {
      count++;
      // 如果前k个字符遍历完毕，结束
      if (count == k) {
        end = i;
        break;
      }
    }
  }
  return s.slice(0, end);
};

truncateSentence("chopper is not a tanuki", 5);