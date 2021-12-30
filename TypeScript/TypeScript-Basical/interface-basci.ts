interface Person {
  readonly id: number; //readonly是只读属性的意思
  name: string;
  age?: number; //?是可选属性的意思
}

let viking: Person = {
  id: 1,
  name: 'viking',
  age: 20,
};
