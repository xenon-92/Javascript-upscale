
function Const(val) {
    var myprivateVal = val;
    this.someMethod = function () {
        console.log(myprivateVal);
    }
}

var obj = new Const(10);
obj.someMethod();// 10 
//only the constructor function can change the value passed
// no other method/func can change the value assigned to the private val