let obj = {
  singer: '周杰伦',
};

let value = '青花瓷';

// obj.music = value;

//参数一是要监听的对象，参数二是要监听的对象中的哪个key（如果对象中没有这个key，就会自动添加key）
Object.defineProperty(obj, 'music', {
  value: value,
  enumerable: true, //默认是false不可枚举
  configurable: true, //默认是false不可配置(删除)
  writable: true, //默认是false不可修改
});

// delete obj.music; //未修改configurable则删除无效

obj.music = '七里香'; //未修改writable则修改无效
console.log(obj.music);
console.log(obj);
