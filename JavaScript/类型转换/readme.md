# js类型转换


# 一元操作符
+号会调用 toNumber 处理该值
如果传入的值是对象类型，会调用ToPrimitive()方法，执行的步骤是： 

   1. 如果 obj 是基本类型，就直接返回
   2. 否则，调用valueOf方法，如果返回一个原始值，则js将其值返回
   3. 否则，调用 toString 方法，如果返回一个原始值，则js将其值返回
   4. 否则，报类型错误

# 二元运算符
<!-- val1 + val2 -->
1. v1 = Toprimitive(val1)
2. v2 = Toprimitive(val2)
3. 如果v1是字符串或者v2是字符串，那么返回ToString(v1)和ToString(v2)的拼接结果
4. 返回 ToNumber(v1)和 ToNumber(v2)的运算结果。

- new Date(2021,12,20)跳过valueOf（）

# 总结
一元二元操作符出现时调用toPrimitive方法，如果不是这种情况时，要注意对象（数组）不管是不是为空都是true

# == 和 === （ESMA5 11.9.5）
如果x，y是同一类型
1. x是 undefined，返回true
2. x是null
3. ...
4. x是对象，y不是字符串或者数字，ToPrimitive(x) == y
5. null == undefined // true

# 布尔值

1. 当一方出现布尔值时，就会对这一方面的值进行toNumber处理

<!-- 下面两个问题面试经常被问到 -->
[] == []//false

解释：两个对象判断是内存地址

[] == ![]//true

解释：由于出现了!操作符，所以引用类型会转换成基本类型，就变成了引用类型和基本类型的比较，两者都会进行类型转换

