function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
const member = new Person('Lydia', 'Hallie'); //new 的过程会在构造函数中创建一个对象 ，然后return出那个对象，我们要知道new出来对象的属性不是构造函数的，是构造中生成对象的

console.log(member.getFullName());

/** 
你不能像常规对象那样，给构造函数添加属性。如果你想一次性给所有实例添加特性，你应该使用原型。因此本例中，使用如下方式：

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}
这才会使 member.getFullName() 起作用。为什么这么做有益的？假设我们将这个方法添加到构造函数本身里。也许不是每个 Person 实例都需要这个方法。这将浪费大量内存空间，因为它们仍然具有该属性，这将占用每个实例的内存空间。相反，如果我们只将它添加到原型中，那么它只存在于内存中的一个位置，但是所有实例都可以访问它！

*/
