// const map = new Map();
// const o = { p: 'hello world' };
// map.set(o, 'content');
// map.delete(o);
// console.log(map.has(o));

// const set = new Set([
//   ['foo', 1],
//   ['bar', 2],
// ]);
// const map = new Map([['baz', 3]]);
// const m = new Map(map);
// console.log(m);
// for (let item of m) {
//   console.log(item);
// }

const map = new Map([
  ['name', '陈煜明'],
  ['age', 20],
]);
map.forEach((value, item) => {
  console.log(value, item);
});
