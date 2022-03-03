let array = [1,3,5,2,4]
// 插入排序
for (let j = 1;j<array.length;j++) {
  let i = j;
  let target = array[i]
  while(i > 0 && array[i-1] > target) {
    array[i] = array[i-1]
    i--
  }
  array[i] = target
}
console.log(array);
// 在元素较为有序时，插入排序时间复杂度近似为较为线性,但是数据较为无序时，时间复杂度较大
