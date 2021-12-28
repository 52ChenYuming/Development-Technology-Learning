# 1. js原始类型有哪些，引用类型有哪些？
- string undefined number Symbol bigInt NaN boolean
- Object Array Function Set Map Weakmap WeakSet RegExp Date Math

# 2. 下面代码输出什么？解释原因（2.js）

# 3. null是对象吗？为什么
- null不是对象
- 因为null的二进制机器码全是0，所以被当成了Object（Object的前3位机器码全是0）

# 4. ‘1’.toString()为什么可以调用

# 5. 0.1+0.2 != 0.3 为什么？
1+2=3 在二进制中的计算是 1 + 10 = 11
0.1和0.2转换为二进制是无限循环，由于IEEE754标准限定了浮点型计算的长度，所以0.1和0.2的二进制数会被截取，从而造成了精度丢失

# 6. 为什么要 BigInt
- Number是有最小最大安全值的，超出就会精度丢失

# 7. instanceof 可以判断基本类型吗？为什么？
可以！但是不能完美判断，当基本类型是被new出来的时候，可以判断吗，比如：
let str = new String
str instanceof 

# 8. [] == ![]  为什么？

# 9. 如何让 if(a==1 && a==2) 条件成立？（9.js）
要想让条件成立，a必不可能是number类型，必须要将其定位引用类型