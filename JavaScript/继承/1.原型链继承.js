// 原型链继承

SuperType.prototype.getSuperValue = function () {
  return this.property;
};
function SuperType() {
  this.property = true;
}

function SubType() {
  this.subproperty = false;
}
SubType.prototype = new SuperType(); // { property: true, __proto__: SuperType.prototype }
// SubType.prototype.getSuperValue = function() {
//   return this.subproperty
// }

var instance = new SubType();
// {
//   subproperty: false,
//   __proto__: {
//     property: true,
//     __proto__: SuperType.prototype
//   }
// }
instance.getSuperValue(); // true
