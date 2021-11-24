/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  carry = 0;//是否有进位
  ans = [];
  while (i >= 0 || j >= 0 || carry != 0) {//短数组的遍历完，且进位=0时停止循环
    let c1 = i >= 0 ? num1.charAt(i) - '0' : 0;
    let c2 = j >= 0 ? num2.charAt(j) - '0' : 0;
    let next = c1 + c2 + carry;//下一位数字的大小
    ans.unshift(next % 10);//添加到数组前面
    carry = Math.floor(next / 10);
    i--;
    j--;
  }
  return ans.join('');
};