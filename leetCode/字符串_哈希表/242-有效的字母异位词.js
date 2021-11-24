/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  //如果长度都不相等，直接返回false
  if (s.length !== t.length) {
    return false;
  }
  //定义一个存储26个字母出现频率的hashMap
  const hashMap = new Array(26).fill(0);
  //将a的unincode设置为base，方便计算
  const base = 'a'.charCodeAt();
  //统计s数组中每个字母出现的频数
  for (let i of s) {
    //a-z的索引下表为index0-25
    let index = i.charCodeAt() - base;
    hashMap[index]++;
  }
  for (let i of t) {
    let index = i.charCodeAt() - base;
    //如果在s中的字母，t数组中有一个没有返回false
    if (!hashMap[index]) {
      return false;
    }
    //如果找到了该字母，则频数减一
    hashMap[index]--;
  }
  return true;
};