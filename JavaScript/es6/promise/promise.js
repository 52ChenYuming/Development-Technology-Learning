function xq() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('赖师傅相亲了！');
      resolve();//promise生效
    }, 2000)
  })
}

function marry() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('赖师傅结婚了！');
      resolve();
    }, 1000)
  })
}
function baby() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('小赖出生了!');
      resolve();
    }, 500)
  })
}
function baby2() {
  console.log('小小赖出生了!');
}

xq().then(marry).then(baby).then(baby2);
  