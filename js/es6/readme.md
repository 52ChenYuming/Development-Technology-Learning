1. symbol不能被new（TypeError: Symbol is not a constructor）
2. instanceof判断引用类型，所以判断为false，Symbol没有constructor构造
3. 如果Symbol接收的参数是一个对象，就会调用该对象的toString方法,将其转为字符串，然后再生成一个Symbol值
4. 每个Symbol的值都是独一无二的
    let s1 = Symbol('1')
    let s2 = Symbol('1')
    console.log(s1 == s2);//false
5. Symbol可以被转换为字符串，但是Symbol的值不能与其他类型的值进行计算(比如字符串相加)
6. Object.getOwnPropertyNames(obj)无法获得Symbol类型属性键，为此ES6新增了Object.getOwnPropertySymbols(obj)获取

# Symbol特点总结
1. Symbol 是ES5引入的一个新的原始数据类型，表示独一无二的值
2. Symbol可以被typeof判断，不能为instanceof判断
3. 如果Symbol接收的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后再生成一个Symbol值
4. Symbol值不能与其他类型的值进行运算
5. 当Symbol类型作为对象的属性时，必须要用Object.getOwnPropertySymbols()遍历得到
6. Symbol.KeyFor()返回一个已登记的Symbol类型的key