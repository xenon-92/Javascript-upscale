function Constructor(func) {
    var private = 23;
    var someMethod = function () {
        return private;
    }
    this.someM = function () {
        return private;
    }
    func(someMethod);
}

var obj = new Constructor(function (r) {
    console.log(r());
});