var frequencySort = function (s) {
  let res = '';
  let map = new Map();
  // 建立字符出现频率哈希表
  for (let c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }
  // 对字符按出现频率降序排列
  const sortArr = [...map.keys()].sort((a, b) => map.get(b) - map.get(a));
  // 拼接字符串
  for (let char of sortArr) {
    res += char.repeat(map.get(char));
  }
  return res;
};