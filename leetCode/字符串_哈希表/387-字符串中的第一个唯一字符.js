/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    //运用lastIndexOf()方法
    // 通过 lastIndexOf() 方法找到元素在当前数组中最后一次出现的索引，如果和 indexOf() 方法获取到的索引相同的话，说明该元素在数组中不存在重复元素，也就是我们所要找的元素
    for (var i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
            return i;
        }
    }
    return -1;
};