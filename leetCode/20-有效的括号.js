var isValid = function(s) {
    // 1、先判断是奇数还是偶数
    if (s.length % 2 == 1) {
        return false;
    }
    // 2、建立哈希map储存键值对
    const pairs = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ]);
    //3、判断是否能匹配
    const stack = []; //栈
    for (let ch of s) {
        if (pairs.has(ch)) //如果是key键(右边符号)则进行判断，else入栈
        {
            if (!stack.length || stack[stack.length - 1] != pairs.get(ch)) { //如果栈为空或运算符未匹配，则返回false(map.get是通过key返回value)
                return false;
            }
            stack.pop(); //左边符号匹配成功，将左边元素出栈
        } else {
            stack.push(ch); //左边符号入栈
        }
    }
    return !stack.length; //如果判断完最后一个栈中还有元素，则说明没匹配完，返回false

};