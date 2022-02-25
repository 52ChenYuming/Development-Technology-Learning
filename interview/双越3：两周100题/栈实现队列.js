var CQueue = function() {
  this.stack1 = []
  this.stack2 = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.stack1.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  if (this.stack2.length) {  //代表出队列的栈有数据，直接出栈表示出队列
    return this.stack2.pop()
  } else {
    while(this.stack1.length) {
      this.stack2.push(this.stack1.pop()) //当代表入队列的栈有数据，将入队列的栈移入出队列的栈
    }
    if (!this.stack2.length) {
      return -1
    } else {
      return this.stack2.pop()
    }
  }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */