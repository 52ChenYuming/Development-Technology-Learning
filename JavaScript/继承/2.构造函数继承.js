function SuperType() {
  this.color = ['red', 'green', 'blue'];
}
function SubType() {
  //继承自SuperType
  SuperType.call(this);
}
var instance1 = new SubType();
instance1.color.push('black');
alert(instance1.color); //"red,green,blue,black"

var instance2 = new SubType();
alert(instance2.color); //"red,green,blue"
