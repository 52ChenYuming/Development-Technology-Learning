let obj = {
  singer: '周杰伦',
};

let value = '青花瓷';

// obj.music = value;

Object.defineProperty(obj, 'music', {
  enumerable: true,
  get() {
    return value;
  },
  set(val) {
    console.log(val);
    value = val;
  },
});

obj.music = 'mojito';

console.log(obj.music, '------------');
