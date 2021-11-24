/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var carry = 1; //要加的数是一
    for (let i = digits.length - 1; i >= 0; i--) {
        if (carry) { //如果存在要加1的数，就继续循环
            let sum = carry + digits[i]; //当前位的总和是1+当前位的数
            digits[i] = sum % 10; //加一后得到的数时sum%10
            carry = sum > 9 ? 1 : 0; //如果是10（>9）则下一位还要加一，否则carry设置为0表示不用加一了，退出循环
        }
    }
    if (carry === 1) {
        digits.unshift(1); //当最后一位还要加一时，则表示要加一位
    }
    return digits;
};