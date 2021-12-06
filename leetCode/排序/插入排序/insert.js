var insertSort = function (a) {
  // 从第二个数开始，往前插入数字
  for (let i = 1; i < a.length; i++) {
    // 当前数字比前一个小，与前一个进行数字交换
    for (let j = i; j > 0 && a[j - 1] > a[j]; j--) {
      swap(a, j, j - 1);
    }
  }
}
// insertSort([5, 9, 8, 7, 6, 1, 2, 4, 3]);
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 优化后的代码：
var insertSort = function (a) {
  // 从第二个数开始，往前插入数字
  for (let i = 1; i < a.length; i++) {
    let currentNumber = a[i];
    let j;
    // 当前数字比前一个小，与前一个进行数字交换
    for (j = i - 1; j >= 0 && a[j] > currentNumber; j--) {
      a[j + 1] = a[j];
    }
    a[j + 1] = currentNumber;
  }
  console.log(a);
}
insertSort([5, 9, 8, 7, 6, 1, 2, 4, 3]);
