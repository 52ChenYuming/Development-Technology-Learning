var selectionSort = function (a) {
  let minIndex;
  for (let i = 0; i < a.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[minIndex] > a[j]) {
        // 将最小值和当前第一个元素交换位置
        minIndex = j;
      }
    }
    let temp = a[i];
    a[i] = a[minIndex];
    a[minIndex] = temp;
  }
  console.log(a);
}
a = [5, 9, 8, 7, 6, 1, 2, 4, 3]
selectionSort(a);