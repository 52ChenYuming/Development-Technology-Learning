function foo() {
    var myName = '昭君'
    let test1 = 1
    let test2 = 2
    var innerBar = {
        getName: function() {
            console.log(test1);
            return myName
        },
        setName: function(newName) {
            myName = newName
        }
    }
    return innerBar
}
var bar = foo()
bar.setName('欣雨')
bar.getName() // 1
let result = bar.getName(); // 1 
console.log(result); // 欣雨