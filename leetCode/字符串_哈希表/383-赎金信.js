/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    //定义一个装26个字母的数组
    const strArr = new Array(26).fill(0);
    //将a的统一码设置为base
    const base = 'a'.charCodeAt();
    //遍历magazine,将其中出现的字母存储在strArr数组中，index 是字母在数组位置的索引下标
    for (const s of magazine) {
        const index = s.charCodeAt() - base;
        strArr[index]++;
    }
    for (const s of ransomNote) {
        const index = s.charCodeAt() - base;
        //如果ransomNote中有的元素，magazine中为0返回false
        if (!strArr[index]) {
            return false;
        }
        //出现一次则magazine中元素出现次数减一
        strArr[index]--;
    }
    return true;
};