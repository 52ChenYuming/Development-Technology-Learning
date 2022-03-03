function shellSort(array) {
  // 先划分多个有序空间
  if (array.length <= 1 ) return array
  var gap = Math.floor(array.length/2);
  while(gap>0) {
    for(var i = gap;i<array.length;i++){
      // console.log(i);
      // 插入排序
      var j = i
      var temp = array[j]
      while(j>0 && array[j-gap]){
        j-=gap
      }
    }
    gap = Math.floor(gap/2)
  }
} 
 
const array = [5,3,9,12,6,1,7,2,4,11,8,10]
console.log(shellSort(array));