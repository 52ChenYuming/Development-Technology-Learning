// 冒泡排序，注意不要和选择排序混淆
function bubbleSort(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }
  console.log(a);
  return a;
}

// 这里j<a.length-i-1的原因是后面i个数已经比较了，所以减去i避免重复比较
for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a.length - i - 1; j++) {//核心代码
    if (a[j] > a[j + 1]) {
      // 交换a[j]和a[j+1]
    }
  }
}