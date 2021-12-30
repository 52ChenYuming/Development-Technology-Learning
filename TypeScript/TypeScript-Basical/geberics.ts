function enco<T>(arg: T): T {
  return arg;
}
const result = enco(true);

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const result2 = swap(['string', 123]);

function echoWidthArr<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

const arrs = echoWidthArr([1, 2, 3]);

interface IWithLength {
  length: number;
}

function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const str = echoWithLength('str');
const obj = echoWithLength({ length: 10 });
const arr2 = echoWithLength([1, 2, 3]);
