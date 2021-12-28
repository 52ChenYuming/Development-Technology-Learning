function test() {
    var food = 'apple'

    function a() {
        console.log(food);
        food = 'banana'
    }

    function b() {
        console.log(food);
    }
}

// a() // 'apple'
// b() // 'banana'


function fruit() {
    var food = 'apple'
    var obj = {
        eatFood: function() {
            if (food !== '') {
                console.log('I am eating' + food);
                food = ''
            } else {
                console.log('There is nothing');
            }
        },
        pushFood: function(myFood) {
            food = myFood
        }
    }
    return obj
}

var person = fruit()
person.eatFood()
person.eatFood()
person.pushFood('banana')
person.eatFood()