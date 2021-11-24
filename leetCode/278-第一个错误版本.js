/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */

    return function(n) {
        let left = 1, //左边界是1
            right = n; //右边界是n
        while (left < right) { //当左右端点相等说明找到，停止循环
            let mid = Math.floor((right - left) / 2 + left);
            if (isBadVersion(mid)) { //如果是错误版本收缩右边界
                right = mid; //因为是找第一个错误版本，所以为了这里mid不减一防止错误版本变成正确版本
            } else {
                left = mid + 1;
            }
        }
        return left;
    };
};