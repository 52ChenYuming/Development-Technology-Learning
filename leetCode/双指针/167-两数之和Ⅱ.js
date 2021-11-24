/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
//双指针法。左右指针分别指向数组头和数组尾部
var twoSum = function(numbers, target) {
    let length = numbers.length;
    let right = length - 1;
    let left = 0;
    if (numbers[left] + numbers[left + 1] > target) //最小的两个相加都大于目标值
        return [];
    if (numbers[right] + numbers[right - 1] < target) //最大的两个相加都小于于目标值
        return [];
    while (left < right) {
        if (numbers[left] + numbers[right] === target)
            return [left + 1, right + 1];
        if (numbers[left] + numbers[right] < target)
            left++;
        if (numbers[left] + numbers[right] > target)
            right--;
    }
    return [];
};