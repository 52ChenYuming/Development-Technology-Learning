var lengthOfLongestSubstring = function(s) {
    const occ = new Set();
    const n = s.length;
    let rk = -1; //滑动窗口右指针
    let ans = 0; //最大长度
    for (let i = 0; i < n; i++) {
        if (i != 0) {
            occ.delete(s.charAt(i - 1)); //删除相同元素，有相同元素删除相同元素且返回true，没有相同元素返回false
        }
        while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) { //窗口还在数组范围内或者下一个元素不在哈希表内则进行循环
            occ.add(s.charAt(rk + 1));
            ++rk;
        }
        ans = Math.max(ans, rk - i + 1);
    }
    return ans;

}