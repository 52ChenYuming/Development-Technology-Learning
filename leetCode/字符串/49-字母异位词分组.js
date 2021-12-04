/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//方法一：排序
var groupAnagrams = function (strs) {
  const map = new Map();
  for (const str of strs) {
    let array = Array.from(str);
    array.sort();//对每个字符串排序
    let key = array.toString();//将排序后的字符串作为map中的键值
    let list = map.get(key) ? map.get(key) : new Array();//这个字符串若已出现就添加str到map对应的键中，否则创建新数组添加到新键中
    list.push(str);
    map.set(key, list);
  }
  return Array.from(map.values());
};