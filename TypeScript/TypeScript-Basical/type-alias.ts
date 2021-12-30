// type-aliase
let sum: (x: number, y: number) => number;
const result = sum(1, 2);
type PlusType = (x: number, y: number) => number;
let sum2: PlusType;
const result2 = sum2(2, 3);
type StrorNumber = string | number;
let result3: StrorNumber = '123';
result3 = 123;

const str: 'name' = 'name';
const number: 1 = 1;
type Direction = 'up' | 'down' | 'left' | 'right';
let toWhere: Direction = 'left';

// 交叉类型
interface IName {
  name: string;
}
type IPerson = IName & { age: number };
let person: IPerson = { name: '123', age: 123 };
