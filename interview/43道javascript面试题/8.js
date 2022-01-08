// 8. 输出是什么？
// 函数中的静态方法，只有函数自己可以调用，构造函数生成的实例也不能调用静态方法，所以会报类型错误TypeError;
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: 'purple' });
freddie.colorChange('orange');
