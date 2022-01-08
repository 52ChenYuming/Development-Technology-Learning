function object(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

var person = {
  name: '国强',
  friends: ['Shelby', 'Court', 'Van'],
};

var anotherPerson = object(person);
anotherPerson.name = '老陈';
anotherPerson.friends.push('Rob');

var yetAnotherPerson = object(person);
yetAnotherPerson.name = '林颖';
yetAnotherPerson.friends.push('Barbie');

alert(person.friends); //"Shelby,Court,Van,Rob,Barbie"
