// js是单线程语言
// 代码有先后的执行顺序
// 同一时间能干两个事情的函数叫做异步函数


function a() {
  console.log('老汪');
}

function b() {//异步函数
  setTimeout(() => {
    console.log('欧阳');
  }, 1000)
}

function c() {
  console.log('阿里胡');
}

b()
a()
c()

// a -> c -> b,碰到b时发现是异步函数，先挂起b，先去执行a、c