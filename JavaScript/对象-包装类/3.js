//包装类
// 原始值是不能有属性和方法的，属性和方法只有对象才有，这是对象独有的！！！
// 但是原始值包装类型是可以有

//num在参与了四则运算后又变回了数字，不参与运算它还能当场对象来使用，能有属性能有方法
//但是在原始值上调用属性时，会隐式的发生一个过程，将该原始值包装成原始包装类型
// 比如
// var num = 4;
// num.len = 3;
// console.log(num.len);//undefined
//会发生var num = new Number(4)  类型包装
// num.len = 3;
// delete Number.len
//访问未定义的对象属性会定义为underfined



// 考点！！！
var arr = [1, 2, 3, 4, 5]
arr.length = 2;
// console.log(arr);//[1,2]

var str = 'abcd';
str.length = 2;
// console.log(str);//abcd

// ！！！这里之所以改变不了str的原因是str是原始类型，不能赋值属性



//阿里考题

var str = 'abc'
str += 1
var test = typeof (str)
if (test.length == 6) {
  test.sign = 'typeof的返回结果可能是String'
}
console.log(test.sign);//undefined,test是原始类型，没有属性，属性是包装后的