var longestValidParentheses = function (s) {
  let maxLenght = 0;
  const stack = [-1];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();
      // 如果此时栈中还有（
      if (stack.length) {
        // 更新此时有效括号连续长度
        const curLenght = i - stack[stack.length - 1];
        maxLenght = Math.max(maxLenght, curLenght);
      } else {
        // 新的）索引入栈充当参照物
        stack.push(i);
      }
    }
    console.log(stack);
  }
  return maxLenght;
};

longestValidParentheses('(()');
