var array = [1, 1, '1', '1']
let map = new Map()
for (let el of array) {
  map.set(el, (map.get(el) || 0) + 1);
}
console.log(map);
function unique(arr) {

}
unique(array)