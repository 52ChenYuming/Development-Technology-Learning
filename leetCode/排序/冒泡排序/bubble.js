// 冒泡排序，注意不要和选择排序混淆
function bubbleSort(a) {
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        swap(a, j, j + 1);
      }
    }
  }
}
bubbleSort([5, 9, 8, 7, 6, 1, 2, 4, 3])
// 这里j<a.length-i-1的原因是后面i个数已经比较了，所以减去i避免重复比较
// for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < a.length - i - 1; j++) {//核心代码
//     if (a[j] > a[j + 1]) {
//       // 交换a[j]和a[j+1]
//     }
//   }
// }


function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
