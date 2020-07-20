function Constructor(func) {
    var private = 10;
    this.redeem = function () {
        console.log(private);
    }
    func();
}

var obj = new Constructor(function () {
    redeem(); // this wont work
});
