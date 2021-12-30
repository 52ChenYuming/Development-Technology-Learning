// global objects
const a: Array<number> = [1, 2, 3];
const date = new Date();
date.getTime();
const reg = /abc/;
reg.test('abc');

// build-in object
Math.pow(2, 2);

// DOM and BOM
let body = document.body;
let allLis = document.querySelectorAll('li');
allLis.keys();
document.addEventListener('click', e => {
  e.preventDefault;
});
// Untility Types
interface IPerson {
  name: string;
  age: number;
}

let viking: IPerson = { name: 'viking', age: 20 };
type IPartial = Partial<IPerson>; //Partial 将所有属性设置为可选
let viking2: IPartial = { name: 'viking' };
type IOmit = Omit<IPerson, 'name'>; //从另一个对象类型中剔除某些属性，并创建一个新的对象类型
let viking3: IOmit = { age: 20 };
