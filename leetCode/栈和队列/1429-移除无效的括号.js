/**
 * @param {string} s
 * @return {string}
 */
//
var minRemoveToMakeValid = function (s) {
  // 栈用来存储左括号'('
  let stack = [];
  // 将字符串变成字符串数组
  let res = s.split('')
  for (let i = 0; i < s.length; i++) {
    // 若是左括号'('，则将其索引入队列
    if (res[i] === '(') stack.push(i);
    // 若是右括号')'，则判断
    if (res[i] === ')') {
      // 如果栈中有值，说明能够匹配，将栈中值弹出
      if (stack.length > 0) stack.pop();
      // 如果栈中无值，说明不能匹配，删除此右括号
      else res[i] = '';
    }
  }
  // 此时栈中若还有值，则它们是落单的括号
  for (let i = 0; i < stack.length; i++) {
    // 将落单左括号删除
    res[stack[i]] = '';
  }
  return res.join('');
};