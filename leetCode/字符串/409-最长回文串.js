/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let charSet = new Set();//建立hashSet,用来存放字符
  let count = 0;
  s.split('').forEach(ch => {
    if (charSet.has(ch)) {//存在一样的，就删除这个字符，并将可返回的个数加2
      charSet.delete(ch);
      count += 2;
    } else {//没有这个字符就将这个字符加入hashSet
      charSet.add(ch);
    }
  })
  return count + (charSet.size > 0 ? 1 : 0);//如果剩余hashSet中还有字符，可以把字符放中间count+1；
};
