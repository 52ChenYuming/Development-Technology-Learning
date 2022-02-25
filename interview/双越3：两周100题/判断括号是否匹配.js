/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  if(s.length%2) return false
    let stack = []
  for(let char of s) {
    switch(char) {
      case '(':
      case '{':
      case '[':
        stack.push(char)
        break
      case ')':
        if(stack.pop()!='(') return false
        break
      case '}':
        if(stack.pop()!='{') return false
        break
      case ']':
        if(stack.pop()!='[') return false
        break
    }
  }
  return !stack.length
};