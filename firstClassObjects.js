//Higher-order Function

//literally create
function fun1() {}

//store in a variable
const fun2 = function(){}

//store in an array 
const array = [function(a,b){return a * b}, fun1,fun2]
console.log(array[0](3,8))

//store in an object attribute
const object = {}
object.speak = function(speech){return speech}
console.log(object.speak('Hello World'))

//function as parameter
function run(fun){
    fun();
}

//function returning or containing another function

function add(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
const fivePlus = add(2,3)
fivePlus(9)