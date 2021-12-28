var a = {
  value: 0,
  valueOf: function () {
    this.value++;
    return this.value;
  }
}

console.log(a == 1 && a == 2); //true