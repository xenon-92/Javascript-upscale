//using closure to create a private variable
var x = 90;
function Constructor() {
    var private = 10 + x;
    this.myFunction = function () {
        console.log(private);
    }
}

var obj = new Constructor();
obj.myFunction();//100 ---> prints because of the closure
console.log(3);